# 输入图片和提示词管理

## 📁 文件夹结构

```
input_images/
├── prompts_config.json          # 提示词配置文件
├── batch_generate_videos.py     # 批量生成视频脚本
└── README.md                    # 本说明文件
```

## 🎯 使用方法

### 方法 1：批量处理（推荐）

**步骤 1：准备图片**
将您想要转换的图片复制到 `input_images/` 文件夹中。

**步骤 2：配置提示词**
编辑 `prompts_config.json` 文件，为每张图片添加提示词配置。

**步骤 3：批量生成视频**
```bash
cd /Users/bytedance/Desktop/video3/input_images
python batch_generate_videos.py
```

### 方法 2：单张图片处理

如果您只想处理单张图片，可以使用之前的脚本：
```bash
cd /Users/bytedance/Desktop/video3
python scripts/inference_img2video.py \
    --image-path input_images/your_image.png \
    --prompt "您的提示词" \
    --strength 0.75 \
    --num-frames 16
```

## 📝 提示词配置格式

在 `prompts_config.json` 中，每张图片的配置如下：

```json
{
  "image_path": "图片文件名.png",
  "prompt": "正面提示词 - 描述您想要的效果",
  "negative_prompt": "负面提示词 - 描述您不想要的效果",
  "strength": 0.75,
  "num_frames": 16,
  "steps": 25,
  "guidance_scale": 7.5
}
```

## 🎨 提示词设计建议

### 正面提示词（prompt）
- **风格描述**：traditional Chinese painting, ancient style, ink wash painting
- **内容描述**：mountains, rivers, landscape, countryside, temples
- **质量描述**：detailed, masterpiece, elegant, fine brushwork
- **氛围描述**：serene, peaceful, misty, ethereal

### 负面提示词（negative_prompt）
- **避免模糊**：blurry, low quality, out of focus
- **避免现代风格**：modern style, photograph, realistic, 3D render
- **避免低质量**：ugly, deformed, noisy, artifacts
- **避免其他风格**：western style, oil painting, anime, cartoon

### 参数调整建议

| 参数 | 范围 | 效果 | 推荐值 |
|------|------|------|--------|
| `strength` | 0.0-1.0 | 原图影响强度 | 0.5-0.8 |
| `num_frames` | 8-32 | 视频帧数 | 16-24 |
| `steps` | 15-50 | 推理步数 | 25-30 |
| `guidance_scale` | 5.0-15.0 | 提示词影响 | 7.5-10.0 |

## 📋 示例提示词

### 示例 1：山水画风格
```json
{
  "prompt": "A traditional Chinese painting of BinFengTu, ancient style, detailed brushwork, serene landscape, mountains and rivers, ink wash painting, Song Dynasty style, masterpiece",
  "negative_prompt": "blurry, low quality, distorted, modern style, photograph, realistic, 3D render"
}
```

### 示例 2：田园风光
```json
{
  "prompt": "Traditional Chinese landscape painting, BinFengTu style, misty mountains, flowing water, ancient trees, elegant composition, ink and wash, artistic",
  "negative_prompt": "ugly, deformed, noisy, blurry, low contrast, modern art, western style"
}
```

### 示例 3：古建筑
```json
{
  "prompt": "BinFengTu ancient Chinese painting, peaceful countryside, traditional architecture, flowing river, detailed scenery, classic Chinese art style",
  "negative_prompt": "photorealistic, digital art, anime, cartoon, low quality, artifacts"
}
```

## 🔧 高级用法

### 使用源图片目录
如果您的图片在其他目录，可以指定源目录：
```bash
python batch_generate_videos.py \
    --source-image-dir /path/to/your/images \
    --output-dir /path/to/output
```

### 自定义配置文件
使用自定义的配置文件：
```bash
python batch_generate_videos.py \
    --config my_custom_config.json \
    --output-dir custom_output
```

## 📊 批量处理示例

假设您有 5 张图片，配置如下：

```json
{
  "images": [
    {
      "image_path": "image_001.png",
      "prompt": "提示词 1",
      "strength": 0.75,
      "num_frames": 16
    },
    {
      "image_path": "image_002.png",
      "prompt": "提示词 2",
      "strength": 0.7,
      "num_frames": 20
    },
    ...
  ]
}
```

运行后，将在 `generated_videos/` 目录生成：
- `video_001_image_001.mp4`
- `video_002_image_002.mp4`
- ...

## 💡 提示词优化技巧

1. **保持简洁**：使用清晰、简洁的描述
2. **关键词优先**：重要的关键词放在前面
3. **风格一致**：确保提示词与图片风格匹配
4. **逐步调整**：先使用默认参数，根据效果逐步调整
5. **多次尝试**：不同的提示词组合会产生不同效果

## 🚀 快速开始

1. 复制图片到 `input_images/` 文件夹
2. 编辑 `prompts_config.json` 添加提示词
3. 运行 `python batch_generate_videos.py`
4. 查看 `generated_videos/` 中的结果

## ❓ 常见问题

**Q: 如何提高视频质量？**
A: 增加 `steps` 到 30-40，使用更详细的提示词

**Q: 如何保留更多原图细节？**
A: 降低 `strength` 到 0.5-0.6

**Q: 如何生成更流畅的视频？**
A: 增加 `num_frames` 到 24-32

**Q: 如何加快生成速度？**
A: 减少 `steps` 到 15-20，减少 `num_frames` 到 8-12