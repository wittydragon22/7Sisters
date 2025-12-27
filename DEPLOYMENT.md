# 网站部署指南

本指南将帮助你将这个昂宿星团网站部署到线上，让"夏夏"可以通过链接访问。

## 📋 部署前准备

### 1. 确保项目可以正常构建

首先在本地测试构建：

```bash
# 安装依赖（如果还没安装）
npm install

# 构建项目
npm run build

# 预览构建结果（可选）
npm run preview  # 如果vite支持preview命令
```

构建成功后，会在 `dist` 文件夹生成静态文件。

### 2. 检查音乐文件

确保 `public/background-music.mp3` 文件存在，或者更新 `MusicPlayer.tsx` 中的音乐源。

---

## 🚀 部署方案

### 方案一：Vercel（推荐，最简单）⭐

**优点**：免费、自动部署、支持自定义域名、CDN加速

#### 步骤：

1. **注册账号**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub/GitLab/Bitbucket 账号登录

2. **准备代码仓库**
   - 将代码推送到 GitHub（如果还没有）
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <你的GitHub仓库地址>
   git push -u origin main
   ```

3. **部署到 Vercel**
   - 登录 Vercel
   - 点击 "Add New Project"
   - 导入你的 GitHub 仓库
   - Vercel 会自动检测到这是一个 Vite 项目
   - 配置：
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - 点击 "Deploy"

4. **完成**
   - 部署完成后，Vercel 会给你一个链接，例如：`https://your-project.vercel.app`
   - 可以分享这个链接给"夏夏"了！

#### 自定义域名（可选）：
- 在项目设置中添加你的域名
- 按照提示配置 DNS

---

### 方案二：Netlify

**优点**：免费、拖拽部署、支持表单处理

#### 步骤：

1. **注册账号**
   - 访问 [netlify.com](https://www.netlify.com)
   - 使用 GitHub 账号登录

2. **部署方式A - 通过GitHub**
   - 将代码推送到 GitHub
   - 在 Netlify 点击 "Add new site" → "Import an existing project"
   - 连接 GitHub 仓库
   - 配置：
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - 点击 "Deploy site"

3. **部署方式B - 拖拽部署**
   - 在本地运行 `npm run build`
   - 将生成的 `dist` 文件夹拖拽到 Netlify 的部署区域
   - 完成！

4. **完成**
   - 获得链接：`https://your-project.netlify.app`

---

### 方案三：GitHub Pages

**优点**：免费、与 GitHub 集成

#### 步骤：

1. **安装 gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **更新 package.json**
   添加部署脚本：
   ```json
   "scripts": {
     "build": "vite build",
     "dev": "vite",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **更新 vite.config.ts**
   添加 `base` 配置（如果仓库名不是根路径）：
   ```typescript
   export default defineConfig({
     base: '/你的仓库名/',  // 例如：'/pleiades-website/'
     // ... 其他配置
   })
   ```

4. **部署**
   ```bash
   npm run deploy
   ```

5. **启用 GitHub Pages**
   - 在 GitHub 仓库设置中
   - 找到 "Pages" 设置
   - Source 选择 `gh-pages` 分支
   - 保存

6. **访问**
   - 链接：`https://你的用户名.github.io/你的仓库名/`

---

### 方案四：Cloudflare Pages

**优点**：免费、全球CDN、速度快

#### 步骤：

1. **注册账号**
   - 访问 [cloudflare.com](https://www.cloudflare.com)
   - 注册/登录

2. **部署**
   - 进入 Cloudflare Dashboard
   - 选择 "Pages" → "Create a project"
   - 连接 GitHub 仓库
   - 配置：
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
   - 部署

3. **完成**
   - 获得链接：`https://your-project.pages.dev`

---

## 🔧 常见问题

### 1. 构建失败
- 检查 Node.js 版本（建议 18+）
- 删除 `node_modules` 和 `package-lock.json`，重新安装
- 检查是否有 TypeScript 错误

### 2. 页面空白
- 检查 `vite.config.ts` 中的 `base` 配置
- 确保所有资源路径正确

### 3. 音乐无法播放
- 检查音乐文件路径
- 某些浏览器需要用户交互后才能播放音频
- 检查音乐文件大小（建议压缩）

### 4. 路由问题（如果将来添加路由）
- Vite 单页应用需要配置重定向规则
- 在部署平台配置将所有请求重定向到 `index.html`

---

## 📝 推荐流程

对于这个项目，我推荐：

1. **首选：Vercel**
   - 最简单，自动部署
   - 每次 push 代码自动更新
   - 免费且稳定

2. **备选：Netlify**
   - 如果 Vercel 不可用
   - 拖拽部署很方便

---

## 🎁 分享给"夏夏"

部署完成后，你可以：
- 直接分享链接
- 生成二维码（使用在线工具）
- 如果使用自定义域名，可以设置一个更有意义的域名

祝部署顺利！✨

