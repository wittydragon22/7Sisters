# PowerShell 脚本：使用 Personal Access Token 推送到 GitHub
# 使用方法：在 PowerShell 中运行此脚本

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "推送到 GitHub 脚本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查 Git 是否安装
try {
    $gitVersion = git --version 2>&1
    Write-Host "[✓] Git 已安装: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "[✗] 错误: Git 未安装或不在 PATH 中" -ForegroundColor Red
    Write-Host "请先安装 Git: https://git-scm.com/download/win" -ForegroundColor Yellow
    Read-Host "按 Enter 退出"
    exit 1
}

Write-Host ""
Write-Host "[1/6] 检查 Git 仓库状态..." -ForegroundColor Yellow

# 检查是否已初始化 Git 仓库
if (-not (Test-Path .git)) {
    Write-Host "[信息] 初始化 Git 仓库..." -ForegroundColor Yellow
    git init
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[✗] Git 初始化失败" -ForegroundColor Red
        Read-Host "按 Enter 退出"
        exit 1
    }
}

Write-Host ""
Write-Host "[2/6] 添加所有文件..." -ForegroundColor Yellow
git add .
if ($LASTEXITCODE -ne 0) {
    Write-Host "[✗] 添加文件失败" -ForegroundColor Red
    Read-Host "按 Enter 退出"
    exit 1
}

Write-Host ""
Write-Host "[3/6] 检查是否有未提交的更改..." -ForegroundColor Yellow
$hasChanges = git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
    Write-Host "[信息] 创建提交..." -ForegroundColor Yellow
    git commit -m "Initial commit: 昂宿星团网站"
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[✗] 提交失败" -ForegroundColor Red
        Read-Host "按 Enter 退出"
        exit 1
    }
} else {
    Write-Host "[信息] 没有新的更改需要提交" -ForegroundColor Gray
}

Write-Host ""
Write-Host "[4/6] 配置远程仓库..." -ForegroundColor Yellow

# 获取 GitHub 信息
$githubUsername = Read-Host "请输入你的 GitHub 用户名"
$repoName = Read-Host "请输入仓库名称（例如: pleiades-website）"

if ([string]::IsNullOrWhiteSpace($githubUsername) -or [string]::IsNullOrWhiteSpace($repoName)) {
    Write-Host "[✗] 用户名和仓库名不能为空" -ForegroundColor Red
    Read-Host "按 Enter 退出"
    exit 1
}

$repoUrl = "https://github.com/$githubUsername/$repoName.git"

# 检查远程仓库是否已存在
$existingRemote = git remote get-url origin 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "[信息] 检测到已存在的远程仓库: $existingRemote" -ForegroundColor Yellow
    $replace = Read-Host "是否替换为新的仓库地址? (y/n)"
    if ($replace -eq "y" -or $replace -eq "Y") {
        git remote remove origin
        git remote add origin $repoUrl
    } else {
        $repoUrl = $existingRemote
        Write-Host "[信息] 使用现有远程仓库: $repoUrl" -ForegroundColor Gray
    }
} else {
    git remote add origin $repoUrl
    Write-Host "[✓] 已添加远程仓库: $repoUrl" -ForegroundColor Green
}

Write-Host ""
Write-Host "[5/6] 配置分支名称..." -ForegroundColor Yellow
git branch -M main

Write-Host ""
Write-Host "[6/6] 推送到 GitHub..." -ForegroundColor Yellow
Write-Host "[提示] 使用 Personal Access Token 进行认证" -ForegroundColor Gray
Write-Host ""

# 使用 token 推送
# 注意：请替换 YOUR_TOKEN 为你的实际 token
$token = "YOUR_TOKEN"
$authenticatedUrl = $repoUrl -replace "https://", "https://$token@"

# 临时设置远程 URL 包含 token
git remote set-url origin $authenticatedUrl

# 推送代码
Write-Host "正在推送..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "[✓] 成功！代码已推送到 GitHub！" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "仓库地址: https://github.com/$githubUsername/$repoName" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "⚠️  安全提示: 你的 Personal Access Token 已在此脚本中使用" -ForegroundColor Yellow
    Write-Host "   建议在 GitHub 上撤销此 token 并创建新的 token" -ForegroundColor Yellow
    Write-Host "   位置: GitHub → Settings → Developer settings → Personal access tokens" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "[✗] 推送失败" -ForegroundColor Red
    Write-Host ""
    Write-Host "可能的原因:" -ForegroundColor Yellow
    Write-Host "1. 仓库不存在 - 请先在 GitHub 创建仓库" -ForegroundColor Yellow
    Write-Host "2. Token 权限不足 - 确保 token 有 repo 权限" -ForegroundColor Yellow
    Write-Host "3. 网络问题 - 请检查网络连接" -ForegroundColor Yellow
    Write-Host "4. 仓库已存在内容 - 可能需要先拉取: git pull origin main --allow-unrelated-histories" -ForegroundColor Yellow
}

# 移除 URL 中的 token（为了安全）
git remote set-url origin $repoUrl

Write-Host ""
Read-Host "按 Enter 退出"

