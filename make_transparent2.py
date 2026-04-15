from PIL import Image

bg_r, bg_g, bg_b = 3, 6, 23

img_path = 'C:/Users/angel/OneDrive/futuriza/proyectos/futuriza/futuriza-antigravity/src/assets/icon-logo.png'
try:
    img = Image.open(img_path).convert("RGBA")
    pixels = img.load()

    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = pixels[x, y]
            
            nr = max(0, r - bg_r)
            ng = max(0, g - bg_g)
            nb = max(0, b - bg_b)
            
            alpha = max(nr, ng, nb)
            
            if alpha < 5:
                pixels[x, y] = (0, 0, 0, 0)
            else:
                out_r = min(255, int(nr * 255 / alpha))
                out_g = min(255, int(ng * 255 / alpha))
                out_b = min(255, int(nb * 255 / alpha))
                pixels[x, y] = (out_r, out_g, out_b, alpha)

    img.save(img_path)
    print("Futuriza logo background successfully removed.")
except Exception as e:
    print(f"Error: {e}")
