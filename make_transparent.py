from PIL import Image

bg_r, bg_g, bg_b = 3, 6, 23

img = Image.open('src/assets/icon-logo.png').convert("RGBA")
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

img.save('src/assets/icon-logo.png')
print("Image background removed.")
