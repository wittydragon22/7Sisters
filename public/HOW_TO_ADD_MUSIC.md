# 如何添加背景音乐

## 方法1：使用本地音乐文件（推荐）

1. 准备一个MP3音乐文件（建议选择轻柔的圣诞音乐或宇宙/星空主题音乐）
2. 将音乐文件重命名为 `background-music.mp3`
3. 将文件放入 `/public` 文件夹
4. 在 `/src/app/components/MusicPlayer.tsx` 文件中，找到这一行：
   ```tsx
   <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
   ```
5. 替换为：
   ```tsx
   <source src="/background-music.mp3" type="audio/mpeg" />
   ```

## 方法2：使用在线音乐URL

如果你有音乐托管在网上，直接将URL替换到 `src` 属性中即可。

## 推荐的音乐类型

- 圣诞主题：轻柔的圣诞颂歌
- 宇宙主题：ambient、space music
- 情感主题：钢琴曲、轻音乐

## 音乐版权提醒

请确保使用的音乐是：
- 你自己创作的
- 免版权的（如 YouTube Audio Library, FreePD.com）
- 已获得授权的

## 免费音乐资源网站

- YouTube Audio Library: https://studio.youtube.com/
- FreePD: https://freepd.com/
- Incompetech: https://incompetech.com/
- Free Music Archive: https://freemusicarchive.org/
