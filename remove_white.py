from PIL import Image
import os

def remove_white_bg(img_path):
    print(f"Processing {img_path}")
    try:
        img = Image.open(img_path).convert("RGBA")
        pixels = img.load()

        for y in range(img.height):
            for x in range(img.width):
                r, g, b, a = pixels[x, y]
                
                nr = 255 - r
                ng = 255 - g
                nb = 255 - b
                
                alpha = max(nr, ng, nb)
                
                if alpha < 5:
                    pixels[x, y] = (255, 255, 255, 0)
                else:
                    a_frac = alpha / 255.0
                    out_r = min(255, max(0, int((r - 255 * (1 - a_frac)) / a_frac)))
                    out_g = min(255, max(0, int((g - 255 * (1 - a_frac)) / a_frac)))
                    out_b = min(255, max(0, int((b - 255 * (1 - a_frac)) / a_frac)))
                    pixels[x, y] = (out_r, out_g, out_b, alpha)

        img.save(img_path)
        print(f"Successfully modified {img_path}")
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

base_dir = "C:/Users/angel/OneDrive/futuriza/proyectos/futuriza/futuriza-antigravity/src/assets/"
remove_white_bg(base_dir + 'texto-logo-horizontal.webp')
remove_white_bg(base_dir + 'texto-logo-vertical.webp')
