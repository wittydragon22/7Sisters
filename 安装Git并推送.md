# 安装 Git 并推送代码到 GitHub

## 📥 第一步：安装 Git

### 方法：下载 Git for Windows

1. **访问下载页面**
   - 打开浏览器，访问：https://git-scm.com/download/win
   - 页面会自动检测你的系统并显示下载链接

2. **下载并安装**
   - 点击下载按钮（会自动下载最新版本）
   - 运行下载的安装程序（.exe 文件）
   - 安装过程中：
     - **重要**：在 "Select Components" 页面，确保勾选 "Git from the command line and also from 3rd-party software"
     - 其他选项保持默认即可
     - 点击 "Next" 直到安装完成

3. **验证安装**
   - 关闭所有命令提示符/PowerShell 窗口
   - 重新打开 PowerShell 或命令提示符
   - 输入：`git --version`
   - 如果显示版本号（如 `git version 2.xx.x`），说明安装成功

---

## 🚀 第二步：推送代码

安装 Git 后，有两种方式推送：

### 方式 A：使用脚本（推荐）

1. **确保已在 GitHub 创建仓库**
   - 访问：https://github.com/new
   - 仓库名：`昂宿`
   - 不要勾选 "Initialize with README"
   - 点击 "Create repository"

2. **运行脚本**
   - 双击 `push-to-github.bat`
   - 脚本会自动完成所有步骤

### 方式 B：手动执行命令

打开 PowerShell 或命令提示符，在项目目录下执行：

```bash
# 1. 初始化 Git
git init
git add .
git commit -m "Initial commit: 昂宿星团网站"

# 2. 添加远程仓库（使用你的 token）
git remote add origin https://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@github.com/wittydragon22/昂宿.git

# 3. 推送代码
git branch -M main
git push -u origin main
```

---

## ✅ 推送成功后

访问你的仓库：https://github.com/wittydragon22/昂宿

然后可以：
- 使用 Vercel/Netlify 部署网站
- 分享链接给"夏夏"

---

## ⚠️ 重要提示

你的 Personal Access Token 已暴露，建议：
1. 推送完成后，访问：https://github.com/settings/tokens
2. 删除当前 token
3. 创建新的 token 并妥善保管

---

## 🆘 遇到问题？

### 问题：提示 "repository not found"
- 确保已在 GitHub 创建仓库：https://github.com/new
- 仓库名必须是：`昂宿`

### 问题：提示 "remote origin already exists"
```bash
git remote remove origin
# 然后重新添加远程仓库
```

### 问题：推送被拒绝（仓库已有内容）
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

