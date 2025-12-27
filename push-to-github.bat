@echo off
chcp 65001 >nul
echo ========================================
echo Push to GitHub: wittydragon22/昂宿
echo ========================================
echo.

REM Check if Git is installed
where git >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git is not installed or not in PATH
    echo.
    echo Please install Git first:
    echo 1. Visit https://git-scm.com/download/win
    echo 2. Download and install Git for Windows
    echo 3. Restart this script after installation
    echo.
    pause
    exit /b 1
)

echo [OK] Git is installed
echo.

REM Initialize Git repository if not exists
if not exist .git (
    echo [1/5] Initializing Git repository...
    git init
    if errorlevel 1 (
        echo [ERROR] Failed to initialize Git
        pause
        exit /b 1
    )
) else (
    echo [1/5] Git repository already exists
)

echo.
echo [2/5] Adding all files...
git add .
if errorlevel 1 (
    echo [ERROR] Failed to add files
    pause
    exit /b 1
)

echo.
echo [3/5] Checking and committing changes...
git diff --cached --quiet >nul 2>&1
if errorlevel 1 (
    echo [INFO] Creating commit...
    git commit -m "Initial commit: 昂宿星团网站"
    if errorlevel 1 (
        echo [ERROR] Failed to commit
        pause
        exit /b 1
    )
) else (
    echo [INFO] No new changes to commit
)

echo.
echo [4/5] Configuring remote repository...
REM Check if remote repository exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    REM Use token in URL - Replace YOUR_TOKEN with your actual token
    set "REPO_URL=https://YOUR_TOKEN@github.com/wittydragon22/7Sisters.git"
    git remote add origin "%REPO_URL%"
    if errorlevel 1 (
        echo [ERROR] Failed to add remote repository
        pause
        exit /b 1
    )
    echo [OK] Remote repository added
) else (
    REM Update remote repository URL with token - Replace YOUR_TOKEN with your actual token
    set "REPO_URL=https://YOUR_TOKEN@github.com/wittydragon22/7Sisters.git"
    git remote set-url origin "%REPO_URL%"
    echo [OK] Remote repository URL updated
)

echo.
echo [5/5] Pushing to GitHub...
git branch -M main
git push -u origin main

if errorlevel 1 (
    echo.
    echo [ERROR] Push failed
    echo.
    echo Possible reasons:
    echo 1. Repository not created yet - Please create it at https://github.com/new
    echo 2. Token permissions insufficient - Ensure token has repo permissions
    echo 3. Network issue - Please check network connection
    echo 4. Repository has existing content - May need to pull first
    echo.
    echo If repository has existing content, try:
    echo   git pull origin main --allow-unrelated-histories
    echo   git push -u origin main
) else (
    echo.
    echo ========================================
    echo [SUCCESS] Code pushed to GitHub!
    echo ========================================
    echo.
    echo Repository: https://github.com/wittydragon22/7Sisters
    echo.
    echo [WARNING] Your Personal Access Token was used in this script
    echo    Please revoke this token and create a new one
    echo    Location: https://github.com/settings/tokens
)

echo.
pause
