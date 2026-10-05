import os
import shutil
from PIL import Image, ImageFilter, ImageOps, ImageEnhance
import numpy as np

base_dir = r"d:\codee\Ms Belubeari Exim\New folder (2)"
products_dir = os.path.join(base_dir, "assets", "products")
ind_dir = os.path.join(products_dir, "industrial_env")
white_bg_dir = os.path.join(products_dir, "white_bg")

os.makedirs(ind_dir, exist_ok=True)
os.makedirs(white_bg_dir, exist_ok=True)

# Clean up redundant timestamped files in industrial_env
for f in os.listdir(ind_dir):
    if any(char.isdigit() for char in f) and "_" in f and len(f) > 35:
        try:
            os.remove(os.path.join(ind_dir, f))
            print(f"Cleaned up redundant file: {f}")
        except Exception as e:
            pass

products = [
    ("01_conveyor_belts_pvc_cleated.jpg", "01_white_conveyor_belt_roll.jpg"),
    ("02_pu_timing_belts_steel_cord.jpg", "02_white_pu_timing_belt.jpg"),
    ("03_v_belts_cogged_wedge.jpg", "03_white_v_belts_set.jpg"),
    ("04_deep_groove_ball_bearings.jpg", "04_white_ball_bearings.jpg"),
    ("05_pillow_block_mounted_units.jpg", "05_white_pillow_block.jpg"),
    ("06_timing_pulleys_taper_lock.jpg", "06_white_timing_pulleys.jpg"),
    ("07_flat_transmission_belts.jpg", "07_white_flat_transmission_belts.jpg"),
    ("08_linatex_coated_vacuum_belts.jpg", "08_white_linatex_coated_belts.jpg"),
    ("09_oil_seals_viton_orings.jpg", "09_white_oil_seals_orings.jpg"),
    ("10_food_grade_pu_belts.jpg", "10_white_food_grade_pu_belts.jpg")
]

# Function to create clean studio-lit white-background version for products 04 to 10
def create_studio_white_bg(src_path, dst_path):
    # If destination already exists and is > 300KB (like 01, 02, 03 which were directly generated), keep it
    if os.path.exists(dst_path) and os.path.getsize(dst_path) > 400000:
        print(f"Already high-res pure white BG: {dst_path}")
        return

    if not os.path.exists(src_path):
        print(f"Source not found: {src_path}")
        return

    img = Image.open(src_path).convert("RGBA")
    w, h = img.size
    
    # Crop central focal region nicely
    # Create white canvas
    canvas = Image.new("RGBA", (w, h), (255, 255, 255, 255))
    
    # Create vignette mask that fades edges to pure white (#FFFFFF)
    y, x = np.ogrid[:h, :w]
    center_y, center_x = h / 2.0, w / 2.0
    radius_x, radius_y = w * 0.44, h * 0.44
    
    dist = ((x - center_x) / radius_x) ** 2 + ((y - center_y) / radius_y) ** 2
    
    # Smooth alpha falloff towards borders
    alpha = np.clip((1.4 - dist) * 255 * 1.8, 0, 255).astype(np.uint8)
    alpha_mask = Image.fromarray(alpha, mode="L").filter(ImageFilter.GaussianBlur(radius=18))
    
    # Slightly enhance contrast and brightness for clean studio lighting
    enhancer = ImageEnhance.Brightness(img)
    bright_img = enhancer.enhance(1.08)
    contrast_enhancer = ImageEnhance.Contrast(bright_img)
    studio_img = contrast_enhancer.enhance(1.05)
    
    canvas.paste(studio_img, (0, 0), alpha_mask)
    
    # Soft natural contact shadow on white floor
    shadow_mask = np.zeros((h, w), dtype=np.uint8)
    shadow_mask[int(h*0.82):int(h*0.96), int(w*0.18):int(w*0.82)] = 35
    shadow_img = Image.fromarray(shadow_mask, mode="L").filter(ImageFilter.GaussianBlur(radius=28))
    shadow_layer = Image.new("RGBA", (w, h), (40, 50, 60, 90))
    canvas.paste(shadow_layer, (0, 0), shadow_img)
    
    # Final output
    rgb_canvas = canvas.convert("RGB")
    rgb_canvas.save(dst_path, "JPEG", quality=96)
    print(f"Created studio white background version -> {dst_path}")

for ind_file, white_file in products:
    ind_p = os.path.join(ind_dir, ind_file)
    white_p = os.path.join(white_bg_dir, white_file)
    create_studio_white_bg(ind_p, white_p)

print("\n--- Summary of Image Folders ---")
print("Industrial Environment Set:")
for f in sorted(os.listdir(ind_dir)):
    print(f" - {f} ({os.path.getsize(os.path.join(ind_dir, f)) // 1024} KB)")

print("\nPure White Studio Background Set:")
for f in sorted(os.listdir(white_bg_dir)):
    print(f" - {f} ({os.path.getsize(os.path.join(white_bg_dir, f)) // 1024} KB)")
