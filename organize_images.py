import os
import shutil
from PIL import Image, ImageFilter, ImageEnhance
import numpy as np

brain_dir = r"C:\Users\hp\.gemini\antigravity\brain\38cf4d8e-6c84-46f8-b5d6-54f721c6f688"
base_dir = r"d:\codee\Ms Belubeari Exim\New folder (2)"
products_dir = os.path.join(base_dir, "assets", "products")
white_bg_dir = os.path.join(products_dir, "white_bg")
ind_dir = os.path.join(products_dir, "industrial_env")

os.makedirs(white_bg_dir, exist_ok=True)
os.makedirs(ind_dir, exist_ok=True)

# List of brain files
brain_files = os.listdir(brain_dir)

# Mapping dictionary
mapping = {
    "conveyor_belt_pvc": "01_conveyor_belts_pvc_cleated.jpg",
    "timing_belt_pu": "02_pu_timing_belts_steel_cord.jpg",
    "v_belts_industrial": "03_v_belts_cogged_wedge.jpg",
    "ball_bearing_chrome": "04_deep_groove_ball_bearings.jpg",
    "pillow_block_bearing": "05_pillow_block_mounted_units.jpg",
    "timing_pulley_bushing": "06_timing_pulleys_taper_lock.jpg",
    "flat_transmission_belt": "07_flat_transmission_belts.jpg",
    "special_coated_linatex": "08_linatex_coated_vacuum_belts.jpg",
    "oil_seals_oring_kit": "09_oil_seals_viton_orings.jpg",
    "food_grade_conveyor_belt": "10_food_grade_pu_belts.jpg",
    "wb_conveyor_belt_roll": "01_white_conveyor_belt_roll.jpg",
    "wb_pu_timing_belt": "02_white_pu_timing_belt.jpg",
    "wb_v_belts_set": "03_white_v_belts_set.jpg"
}

for bf in brain_files:
    if not bf.endswith(".jpg"):
        continue
    for key, target_name in mapping.items():
        if bf.startswith(key):
            src_path = os.path.join(brain_dir, bf)
            if key.startswith("wb_"):
                dst = os.path.join(white_bg_dir, target_name)
            else:
                dst = os.path.join(ind_dir, target_name)
            shutil.copy2(src_path, dst)
            print(f"Copied {bf} -> {dst}")

# Let's inspect copied files
print("Industrial env files:", len(os.listdir(ind_dir)))
print("White bg files:", len(os.listdir(white_bg_dir)))
