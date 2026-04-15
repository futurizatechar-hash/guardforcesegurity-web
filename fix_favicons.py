from PIL import Image

def process_img(img_path, is_dark):
    print(f"Fixing: {img_path}")
    try:
        img = Image.open(img_path).convert("RGBA")
        pixels = img.load()
        bg_color = (3, 6, 23) if is_dark else (255, 255, 255)
        for y in range(img.height):
            for x in range(img.width):
                r, g, b, a = pixels[x, y]
                
                if is_dark:
                    nr = max(0, r - bg_color[0])
                    ng = max(0, g - bg_color[1])
                    nb = max(0, b - bg_color[2])
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
                        out_r = min(255, int(nr / a_frac) if a_frac > 0 else 0)
                        out_g = min(255, int(ng / a_frac) if a_frac > 0 else 0)
                        out_b = min(255, int(nb / a_frac) if a_frac > 0 else 0)
                    else:
                        out_r = min(255, max(0, int((r - 255 * (1 - a_frac)) / a_frac) if a_frac > 0 else 0))
                        out_g = min(255, max(0, int((g - 255 * (1 - a_frac)) / a_frac) if a_frac > 0 else 0))
                        out_b = min(255, max(0, int((b - 255 * (1 - a_frac)) / a_frac) if a_frac > 0 else 0))
                        
                    pixels[x, y] = (out_r, out_g, out_b, alpha)

        img.save(img_path)
        print("Done.")
    except Exception as e:
        print(f"Failed: {e}")

f1 = r"C:\Users\angel\OneDrive\futuriza\proyectos\futuriza\futuriza-antigravity\public\favicon.webp"
f2 = r"C:\Users\angel\OneDrive\futuriza\proyectos\futuriza\futuriza-antigravity\src\assets\favicon.webp"
process_img(f1, is_dark=False)
process_img(f2, is_dark=False)

g1 = r"C:\Users\angel\OneDrive\futuriza\proyectos\guardforcesegurity-antigravity\guardforce-web\public\favicon.png"
process_img(g1, is_dark=True)

l1 = r"C:\Users\angel\OneDrive\futuriza\proyectos\futuriza\futuriza-antigravity\src\assets\texto-logo-horizontal.webp"
l2 = r"C:\Users\angel\OneDrive\futuriza\proyectos\futuriza\futuriza-antigravity\src\assets\texto-logo-vertical.webp"
process_img(l1, is_dark=False)
process_img(l2, is_dark=False)
