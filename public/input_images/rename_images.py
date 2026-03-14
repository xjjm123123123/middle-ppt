import os
import glob
from pathlib import Path

def rename_images_by_time(directory="."):
    png_files = glob.glob(os.path.join(directory, "*.png"))
    
    if not png_files:
        print("No PNG files found in the directory.")
        return
    
    png_files_with_time = []
    for file in png_files:
        stat = os.stat(file)
        png_files_with_time.append((file, stat.st_mtime))
    
    png_files_with_time.sort(key=lambda x: x[1])
    
    for idx, (old_path, _) in enumerate(png_files_with_time, 1):
        old_name = os.path.basename(old_path)
        new_name = f"image_{idx:03d}.png"
        new_path = os.path.join(directory, new_name)
        
        if old_path != new_path:
            os.rename(old_path, new_path)
            print(f"Renamed: {old_name} -> {new_name}")
        else:
            print(f"Skipped: {old_name} (already named correctly)")

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    rename_images_by_time(script_dir)