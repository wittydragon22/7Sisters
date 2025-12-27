# 推送到 GitHub 完整指南

## 📋 第一步：安装 Git（如果还没安装）

### 检查是否已安装 Git

打开 PowerShell 或命令提示符，输入：
```bash
git --version
```

如果显示版本号（如 `git version 2.xx.x`），说明已安装，可以跳到下一步。

### 安装 Git

1. **下载 Git**
   - 访问：https://git-scm.com/download/win
   - 下载 Windows 版本并安装

2. **安装时注意**
   - 选择 "Git from the command line and also from 3rd-party software"
   - 其他选项保持默认即可

3. **安装完成后**
   - 关闭并重新打开 PowerShell/命令提示符
   - 再次运行 `git --version` 确认安装成功

---

## 🔐 第二步：配置 Git（首次使用）

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

例如：
```bash
git config --global user.name "张三"
git config --global user.email "zhangsan@example.com"
```

---

## 📦 第三步：初始化 Git 仓库

在项目目录下（`E:\chrome下载\昂宿星团网站设计`）执行：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 创建初始提交
git commit -m "Initial commit: 昂宿星团网站"
```

---

## 🌐 第四步：在 GitHub 创建仓库

1. **登录 GitHub**
   - 访问：https://github.com
   - 登录你的账号（如果没有，先注册）

2. **创建新仓库**
   - 点击右上角的 "+" 号
   - 选择 "New repository"
   - 填写信息：
     - **Repository name**: `pleiades-website`（或你喜欢的名字）
     - **Description**: `昂宿星团网站设计`
     - **Visibility**: 选择 Public（公开）或 Private（私有）
     - **不要**勾选 "Initialize this repository with a README"（因为我们已经有了）
   - 点击 "Create repository"

3. **复制仓库地址**
   - 创建后会显示仓库页面
   - 复制 HTTPS 地址，例如：`https://github.com/你的用户名/pleiades-website.git`

---

## 🚀 第五步：连接并推送代码

在项目目录下执行：

```bash
# 添加远程仓库（替换为你的实际仓库地址）
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 推送代码到 GitHub
git branch -M main
git push -u origin main
```

**注意**：第一次推送时，GitHub 会要求你输入用户名和密码（或 Personal Access Token）。

### 如果遇到认证问题

GitHub 现在要求使用 Personal Access Token 而不是密码：

1. **创建 Token**
   - GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - 点击 "Generate new token (classic)"
   - 勾选 `repo` 权限
   - 点击 "Generate token"
   - **复制并保存这个 token**（只显示一次！）

2. **使用 Token**
   - 当 Git 要求输入密码时，使用刚才创建的 token 代替密码

---

## ✅ 完成！

推送成功后，访问你的 GitHub 仓库页面，应该能看到所有代码了！

---

## 🔄 后续更新代码

以后如果修改了代码，只需要：

```bash
# 添加修改的文件
git add .

# 提交更改
git commit -m "描述你的更改"

# 推送到 GitHub
git push
```

---

## ❓ 常见问题

### 1. 提示 "fatal: not a git repository"
- 确保在项目目录下执行命令
- 先运行 `git init`

### 2. 提示 "remote origin already exists"
- 运行 `git remote remove origin`
- 然后重新添加远程仓库

### 3. 推送被拒绝（rejected）
- 如果远程仓库有内容，先拉取：`git pull origin main --allow-unrelated-histories`
- 然后再推送：`git push -u origin main`

### 4. 中文路径问题
- 如果遇到编码问题，可以尝试在 Git Bash 中执行命令（Git 安装时会附带）

---

## 🎯 快速命令总结

```bash
# 1. 初始化
git init
git add .
git commit -m "Initial commit"

# 2. 连接远程仓库（替换为你的地址）
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 3. 推送
git branch -M main
git push -u origin main
```

完成这些步骤后，你的代码就会在 GitHub 上了！🎉

