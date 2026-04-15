from PIL import Image
import os
import glob

def get_bg_type(img_path):
    try:
        img = Image.open(img_path).convert("RGB")
        pixels = img.load()
        r, g, b = pixels[0, 0]
        if r < 10 and g < 15 and b < 35:
             return (3, 6, 23)
        elif r > 240 and g > 240 and b > 240:
             return (255, 255, 255)
    except:
        pass
    return None

def process_image(img_path):
    bg_color = get_bg_type(img_path)
    if not bg_color:
        return
    
    print(f"[{img_path}] Detected bg {bg_color}")
    
    try:
        img = Image.open(img_path).convert("RGBA")
        pixels = img.load()
        
        bg_r, bg_g, bg_b = bg_color
        is_dark = (bg_color == (3, 6, 23))
        
        for y in range(img.height):
            for x in range(img.width):
                r, g, b, a = pixels[x, y]
                
                if is_dark:
                    nr = max(0, r - bg_r)
                    ng = max(0, g - bg_g)
                    nb = max(0, b - bg_b)
                else:
                    nr = 255 - r
                    ng = 255 - g
                    nb = 255 - b
                    
                alpha = max(nr, ng, nb)
                
                if alpha < 5:
                    pixels[x, y] = (0, 0, 0, 0) if is_dark else (255, 255, 255, 0)
                else:
                    a_frac = alpha / 255.0
                    if is_dark:
                        out_r = min(255, int(nr / a_frac))
                        out_g = min(255, int(ng / a_frac))
                        out_b = min(255, int(nb / a_frac))
                    else:
                        out_r = min(255, max(0, int((r - 255 * (1 - a_frac)) / a_frac)))
                        out_g = min(255, max(0, int((g - 255 * (1 - a_frac)) / a_frac)))
                        out_b = min(255, max(0, int((b - 255 * (1 - a_frac)) / a_frac)))
                        
                    pixels[x, y] = (out_r, out_g, out_b, alpha)

        save_path = img_path
        if img_path.lower().endswith(('.jpg', '.jpeg')):
            save_path = img_path.rsplit('.', 1)[0] + '.png'
            img.save(save_path, "PNG")
            try:
                os.remove(img_path)
            except:
                pass
            print(f"-> Converted JPG to PNG: {save_path}")
        else:
            img.save(img_path)
            print("-> Successfully modified in-place.")
            
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

base_paths = [
    r"C:\Users\angel\OneDrive\futuriza\proyectos\futuriza\futuriza-antigravity",
    r"C:\Users\angel\OneDrive\futuriza\proyectos\futuriza\futuriza-crm-ui",
    r"C:\Users\angel\OneDrive\futuriza\proyectos\guardforcesegurity-antigravity\guardforce-web"
]

files_to_check = []
for bp in base_paths:
    files_to_check.extend(glob.glob(bp + r"\public\*.png"))
    files_to_check.extend(glob.glob(bp + r"\public\*.jpg"))
    files_to_check.extend(glob.glob(bp + r"\public\*.webp"))
    files_to_check.extend(glob.glob(bp + r"\src\assets\*.png"))
    files_to_check.extend(glob.glob(bp + r"\src\assets\*.jpg"))
    files_to_check.extend(glob.glob(bp + r"\src\assets\*.webp"))

valid_keywords = ['favicon', 'logo', 'icon', 'texto']

for f in files_to_check:
    name = os.path.basename(f).lower()
    if any(k in name for k in valid_keywords):
        process_image(f)
