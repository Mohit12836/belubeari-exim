import os
import numpy as np
from PIL import Image, ImageFilter, ImageOps

base_dir = r"d:\codee\Ms Belubeari Exim\New folder (2)"
ind_dir = os.path.join(base_dir, "assets", "products", "industrial_env")
white_bg_dir = os.path.join(base_dir, "assets", "products", "white_bg")

def isolate_to_white_studio(src_img_path, dest_img_path, bg_type="dark"):
    img = Image.open(src_img_path).convert("RGBA")
    w, h = img.size
    arr = np.array(img, dtype=float)
    
    r = arr[:, :, 0]
    g = arr[:, :, 1]
    b = arr[:, :, 2]
    
    # Estimate background from corners/borders
    corner_samples = np.concatenate([
        arr[:30, :30, :3].reshape(-1, 3),
        arr[:30, -30:, :3].reshape(-1, 3),
        arr[-30:, :30, :3].reshape(-1, 3),
        arr[-30:, -30:, :3].reshape(-1, 3)
    ])
    bg_mean = np.mean(corner_samples, axis=0)
    
    # Calculate color distance to background
    diff = np.sqrt(np.sum((arr[:, :, :3] - bg_mean) ** 2, axis=2))
    
    # Dynamic threshold
    thresh = 35.0
    mask = (diff > thresh).astype(np.uint8) * 255
    
    # Create smooth mask
    mask_img = Image.fromarray(mask, mode="L")
    mask_img = mask_img.filter(ImageFilter.GaussianBlur(radius=2))
    
    # Create pure white studio background
    white_canvas = Image.new("RGBA", (w, h), (255, 255, 255, 255))
    
    # Add subtle contact shadow at the base
    shadow_canvas = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    # Soft shadow under bottom third
    shadow_mask = np.zeros((h, w), dtype=np.uint8)
    shadow_mask[int(h*0.75):int(h*0.95), int(w*0.2):int(w*0.8)] = 40
    shadow_img = Image.fromarray(shadow_mask, mode="L").filter(ImageFilter.GaussianBlur(radius=25))
    shadow_canvas.paste((30, 35, 45, 120), (0, 0), shadow_img)
    
    white_canvas.alpha_composite(shadow_canvas)
    
    # Composite foreground onto white
    foreground = Image.new("RGBA", (w, h), (255, 255, 255, 0))
    foreground.paste(img, (0, 0), mask_img)
    white_canvas.alpha_composite(foreground)
    
    # Save as high-res RGB JPG
    rgb_out = white_canvas.convert("RGB")
    rgb_out.save(dest_img_path, quality=95)
    print(f"Generated clean white background studio version: {dest_img_path}")

print("Testing script ready")
