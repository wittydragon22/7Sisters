# 更新 Vercel 部署

## 🔄 自动更新（如果已连接 GitHub）

如果你已经将 Vercel 项目连接到 GitHub 仓库，**Vercel 会自动检测到新的推送并自动部署**！

### 检查自动部署状态

1. **登录 Vercel**
   - 访问：https://vercel.com
   - 登录你的账号

2. **查看部署状态**
   - 进入你的项目（7Sisters）
   - 在 "Deployments" 页面查看最新的部署
   - 如果看到新的部署正在进行或已完成，说明自动更新已触发

3. **等待部署完成**
   - 通常需要 1-3 分钟
   - 部署完成后，网站会自动更新

---

## 🚀 手动触发部署

如果自动部署没有触发，可以手动触发：

### 方法一：在 Vercel 控制台触发

1. **登录 Vercel**
   - 访问：https://vercel.com
   - 进入你的项目

2. **手动重新部署**
   - 点击 "Deployments" 标签
   - 找到最新的部署
   - 点击右侧的 "..." 菜单
   - 选择 "Redeploy"
   - 确认重新部署

### 方法二：通过 Vercel CLI

如果你安装了 Vercel CLI：

```bash
# 安装 Vercel CLI（如果还没安装）
npm i -g vercel

# 登录
vercel login

# 在项目目录下部署
vercel --prod
```

---

## ✅ 验证更新

部署完成后：

1. **访问你的网站**
   - 打开 Vercel 提供的链接（例如：`https://7sisters.vercel.app`）

2. **测试音乐播放**
   - 打开浏览器开发者工具（F12）
   - 切换到 Console 标签
   - 点击页面触发音乐播放
   - 查看控制台是否有 "音频加载成功" 的消息

3. **清除浏览器缓存**
   - 按 `Ctrl + Shift + R` 硬刷新
   - 或使用隐私模式打开网站

---

## 🔍 如果还没有部署到 Vercel

如果你还没有将项目部署到 Vercel，需要先部署：

### 首次部署步骤

1. **访问 Vercel**
   - 打开：https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New Project"
   - 选择 "Import Git Repository"
   - 找到并选择 `wittydragon22/7Sisters` 仓库
   - 点击 "Import"

3. **配置项目**
   - Vercel 会自动检测到这是 Vite 项目
   - 确认配置：
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - 点击 "Deploy"

4. **等待部署完成**
   - 通常需要 1-3 分钟
   - 部署完成后会显示网站链接

---

## 📝 当前已推送的更改

你已经推送到 GitHub 的更改包括：

- ✅ 修复了音乐播放器，使用本地 `background-music.mp3`
- ✅ 添加了错误处理和调试信息
- ✅ 所有代码文件

这些更改会在 Vercel 重新部署后生效。

---

## ⚠️ 注意事项

1. **音乐文件大小**
   - 确保 `background-music.mp3` 文件大小合理（建议 < 5MB）
   - 大文件可能导致部署或加载缓慢

2. **部署时间**
   - 首次部署可能需要更长时间
   - 后续更新通常更快（1-3 分钟）

3. **缓存问题**
   - 部署后，用户可能需要清除浏览器缓存才能看到更新
   - 或者等待几分钟让 CDN 缓存更新

---

## 🎯 快速检查清单

- [ ] 代码已推送到 GitHub
- [ ] Vercel 项目已连接到 GitHub 仓库
- [ ] 检查 Vercel 控制台是否有新的部署
- [ ] 等待部署完成（1-3 分钟）
- [ ] 访问网站测试音乐播放
- [ ] 清除浏览器缓存测试

完成这些步骤后，你的网站就会更新了！🎉

