from PIL import Image

def process_guardforce_logo():
    img_path = r"C:\Users\angel\OneDrive\futuriza\proyectos\guardforcesegurity-antigravity\guardforce-web\src\assets\icon-logo.png"
    print(f"Fixing logo: {img_path}")
    bg_color = (3, 6, 23)
    try:
        img = Image.open(img_path).convert("RGBA")
        pixels = img.load()
        for y in range(img.height):
            for x in range(img.width):
                r, g, b, a = pixels[x, y]
                
                nr = max(0, r - bg_color[0])
                ng = max(0, g - bg_color[1])
                nb = max(0, b - bg_color[2])
                
                alpha = max(nr, ng, nb)
                
                if alpha < 5:
                    pixels[x, y] = (0, 0, 0, 0)
                else:
                    a_frac = alpha / 255.0
                    out_r = min(255, int(nr / a_frac))
                    out_g = min(255, int(ng / a_frac))
                    out_b = min(255, int(nb / a_frac))
                    pixels[x, y] = (out_r, out_g, out_b, alpha)

        img.save(img_path)
        print("GuardForce logo flawlessly processed.")
    except Exception as e:
        print(f"Failed: {e}")

process_guardforce_logo()
