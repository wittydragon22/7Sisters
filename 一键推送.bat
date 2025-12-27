@echo off
chcp 65001 >nul
echo ========================================
echo 推送到 GitHub: wittydragon22/昂宿
echo ========================================
echo.

REM 检查 Git 是否安装
where git >nul 2>&1
if errorlevel 1 (
    echo [错误] Git 未安装或不在 PATH 中
    echo.
    echo 请先安装 Git:
    echo 1. 访问 https://git-scm.com/download/win
    echo 2. 下载并安装 Git for Windows
    echo 3. 安装完成后重新运行此脚本
    echo.
    pause
    exit /b 1
)

echo [✓] Git 已安装
echo.

REM 初始化 Git 仓库（如果还没有）
if not exist .git (
    echo [1/5] 初始化 Git 仓库...
    git init
    if errorlevel 1 (
        echo [✗] Git 初始化失败
        pause
        exit /b 1
    )
) else (
    echo [1/5] Git 仓库已存在
)

echo.
echo [2/5] 添加所有文件...
git add .
if errorlevel 1 (
    echo [✗] 添加文件失败
    pause
    exit /b 1
)

echo.
echo [3/5] 检查并提交更改...
git diff --cached --quiet >nul 2>&1
if errorlevel 1 (
    echo [信息] 创建提交...
    git commit -m "Initial commit: 昂宿星团网站"
    if errorlevel 1 (
        echo [✗] 提交失败
        pause
        exit /b 1
    )
) else (
    echo [信息] 没有新的更改需要提交
)

echo.
echo [4/5] 配置远程仓库...
REM 检查远程仓库是否已存在
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    REM 使用 token 在 URL 中 - 请替换 YOUR_TOKEN 为你的实际 token
    set "REPO_URL=https://YOUR_TOKEN@github.com/wittydragon22/7Sisters.git"
    git remote add origin "%REPO_URL%"
    if errorlevel 1 (
        echo [✗] 添加远程仓库失败
        pause
        exit /b 1
    )
    echo [✓] 已添加远程仓库
) else (
    REM 更新远程仓库 URL 包含 token - 请替换 YOUR_TOKEN 为你的实际 token
    set "REPO_URL=https://YOUR_TOKEN@github.com/wittydragon22/7Sisters.git"
    git remote set-url origin "%REPO_URL%"
    echo [✓] 已更新远程仓库地址
)

echo.
echo [5/5] 推送到 GitHub...
git branch -M main
git push -u origin main

if errorlevel 1 (
    echo.
    echo [✗] 推送失败
    echo.
    echo 可能的原因:
    echo 1. 仓库还未创建 - 请先访问 https://github.com/new 创建仓库 "昂宿"
    echo 2. Token 权限不足 - 确保 token 有 repo 权限
    echo 3. 网络问题 - 请检查网络连接
    echo 4. 仓库已存在内容 - 可能需要先拉取
    echo.
    echo 如果仓库已存在内容，可以尝试:
    echo   git pull origin main --allow-unrelated-histories
    echo   git push -u origin main
) else (
    echo.
    echo ========================================
    echo [✓] 成功！代码已推送到 GitHub！
    echo ========================================
    echo.
    echo 仓库地址: https://github.com/wittydragon22/昂宿
    echo.
    echo ⚠️  安全提示: 你的 Personal Access Token 已在此脚本中使用
    echo    建议在 GitHub 上撤销此 token 并创建新的 token
    echo    位置: https://github.com/settings/tokens
)

echo.
pause

