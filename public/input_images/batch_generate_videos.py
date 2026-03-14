import os
import sys
import json
import argparse
from pathlib import Path

sys.path.append(str(Path(__file__).parent.parent / "scripts"))

from inference_img2video import generate_video_from_image


def load_config(config_path):
    with open(config_path, 'r', encoding='utf-8') as f:
        return json.load(f)


def copy_image_to_input(image_path, input_dir):
    import shutil
    image_name = os.path.basename(image_path)
    dest_path = os.path.join(input_dir, image_name)
    if not os.path.exists(dest_path):
        shutil.copy(image_path, dest_path)
    return dest_path


def batch_generate_videos(config_path, output_dir, source_image_dir=None):
    config = load_config(config_path)
    
    os.makedirs(output_dir, exist_ok=True)
    
    images = config.get('images', [])
    default_settings = config.get('default_settings', {})
    
    for idx, img_config in enumerate(images, 1):
        print(f"\n{'='*60}")
        print(f"Processing image {idx}/{len(images)}: {img_config['image_path']}")
        print(f"{'='*60}")
        
        if source_image_dir:
            image_path = os.path.join(source_image_dir, img_config['image_path'])
        else:
            image_path = os.path.join(os.path.dirname(config_path), img_config['image_path'])
        
        if not os.path.exists(image_path):
            print(f"Warning: Image not found: {image_path}")
            continue
        
        prompt = img_config.get('prompt', '')
        negative_prompt = img_config.get('negative_prompt', '')
        strength = img_config.get('strength', default_settings.get('strength', 0.75))
        num_frames = img_config.get('num_frames', default_settings.get('num_frames', 16))
        steps = img_config.get('steps', default_settings.get('steps', 25))
        guidance_scale = img_config.get('guidance_scale', default_settings.get('guidance_scale', 7.5))
        
        print(f"Prompt: {prompt}")
        print(f"Strength: {strength}, Frames: {num_frames}, Steps: {steps}")
        
        try:
            output_path = os.path.join(output_dir, f"video_{idx:03d}_{os.path.splitext(img_config['image_path'])[0]}.mp4")
            
            generate_video_from_image(
                image_path=image_path,
                prompt=prompt,
                negative_prompt=negative_prompt,
                strength=strength,
                num_frames=num_frames,
                steps=steps,
                guidance_scale=guidance_scale,
                output_path=output_path
            )
            
            print(f"✓ Video saved to: {output_path}")
            
        except Exception as e:
            print(f"✗ Error generating video for {img_config['image_path']}: {e}")
            continue
    
    print(f"\n{'='*60}")
    print(f"Batch processing complete!")
    print(f"Total images processed: {len(images)}")
    print(f"Output directory: {output_dir}")
    print(f"{'='*60}")


def main():
    parser = argparse.ArgumentParser(description='Batch generate videos from images with prompts')
    parser.add_argument('--config', type=str, default='prompts_config.json',
                        help='Path to prompts config JSON file')
    parser.add_argument('--output-dir', type=str, default='generated_videos',
                        help='Output directory for generated videos')
    parser.add_argument('--source-image-dir', type=str, default=None,
                        help='Source directory containing input images')
    
    args = parser.parse_args()
    
    config_path = os.path.join(os.path.dirname(__file__), args.config)
    
    if not os.path.exists(config_path):
        print(f"Error: Config file not found: {config_path}")
        sys.exit(1)
    
    batch_generate_videos(config_path, args.output_dir, args.source_image_dir)


if __name__ == '__main__':
    main()