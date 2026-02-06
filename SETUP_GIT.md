# 🚀 SETUP GIT CHO DỰ ÁN CYBER STORE

Hướng dẫn setup Git và các tools hỗ trợ để tuân thủ quy tắc Git chuyên nghiệp.

---

## 📋 BƯỚC 1: CẤU HÌNH GIT CƠ BẢN

### 1.1. Cấu hình Git global (nếu chưa có)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 1.2. Cấu hình commit template

```bash
# Từ thư mục gốc dự án
git config commit.template .gitmessage
```

Hoặc cấu hình global:
```bash
git config --global commit.template .gitmessage
```

### 1.3. Kiểm tra cấu hình

```bash
git config --list
```

---

## 📋 BƯỚC 2: KHỞI TẠO REPOSITORY

### 2.1. Nếu chưa có Git repository

```bash
# Từ thư mục gốc dự án
git init
git add .
git commit -m "chore: initial project setup"
```

### 2.2. Tạo các branch chính

```bash
# Tạo branch develop
git checkout -b develop
git push -u origin develop

# Quay lại main
git checkout main
```

### 2.3. Setup remote (nếu chưa có)

```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

---

## 📋 BƯỚC 3: SETUP PRE-COMMIT HOOKS (Frontend)

### 3.1. Cài đặt Husky và lint-staged

```bash
cd frontend
npm install --save-dev husky lint-staged
```

### 3.2. Khởi tạo Husky

```bash
npx husky install
```

### 3.3. Tạo pre-commit hook

```bash
npx husky add .husky/pre-commit "npm run lint-staged"
```

### 3.4. Cấu hình lint-staged trong package.json

Thêm vào `package.json`:

```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md}": [
      "prettier --write"
    ]
  }
}
```

### 3.5. Thêm script vào package.json

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

---

## 📋 BƯỚC 4: SETUP GIT HOOKS (Backend - Java)

### 4.1. Tạo pre-commit hook cho Java

Tạo file `.git/hooks/pre-commit` (hoặc `backend/.git/hooks/pre-commit`):

```bash
#!/bin/sh
# Pre-commit hook cho Java project

# Chạy Maven tests
cd backend
mvn test

# Nếu tests fail, dừng commit
if [ $? -ne 0 ]; then
  echo "❌ Tests failed. Commit aborted."
  exit 1
fi

# Format code với Spotless (nếu có)
# mvn spotless:apply

echo "✅ Pre-commit checks passed"
exit 0
```

### 4.2. Cấp quyền thực thi

```bash
chmod +x .git/hooks/pre-commit
```

---

## 📋 BƯỚC 5: SETUP GIT ALIASES (Tùy chọn)

Thêm vào `~/.gitconfig` hoặc `.git/config`:

```ini
[alias]
  # Shortcuts
  co = checkout
  br = branch
  ci = commit
  st = status
  unstage = reset HEAD --
  
  # Useful commands
  last = log -1 HEAD
  visual = !gitk
  graph = log --oneline --graph --decorate --all
  
  # Commit với format chuẩn
  feat = "!f() { git commit -m \"feat: $1\"; }; f"
  fix = "!f() { git commit -m \"fix: $1\"; }; f"
  docs = "!f() { git commit -m \"docs: $1\"; }; f"
```

Sử dụng:
```bash
git feat "add product comparison"
git fix "resolve cart calculation error"
```

---

## 📋 BƯỚC 6: VERIFY SETUP

### 6.1. Kiểm tra commit template

```bash
git commit
# Sẽ mở editor với template từ .gitmessage
```

### 6.2. Test pre-commit hook (Frontend)

```bash
cd frontend
# Tạo file test
echo "const test = 'bad code'" > test.ts
git add test.ts
git commit -m "test: verify pre-commit hook"
# Hook sẽ chạy và format code
```

### 6.3. Test pre-commit hook (Backend)

```bash
cd backend
# Tạo test fail
# Hook sẽ chặn commit nếu tests fail
```

---

## 📋 BƯỚC 7: SETUP GITHUB/GITLAB (Nếu dùng)

### 7.1. Tạo repository trên GitHub/GitLab

1. Tạo repository mới
2. Copy repository URL

### 7.2. Push code lên remote

```bash
git remote add origin <repository-url>
git branch -M main
git push -u origin main
git push -u origin develop
```

### 7.3. Setup branch protection rules

Trên GitHub/GitLab:
- Bảo vệ branch `main` và `develop`
- Yêu cầu Pull Request
- Yêu cầu review approval
- Yêu cầu CI/CD pass

---

## 📋 BƯỚC 8: SETUP CI/CD (Tùy chọn)

### 8.1. GitHub Actions

Tạo `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up JDK 17
        uses: actions/setup-java@v3
        with:
          java-version: '17'
          distribution: 'temurin'
      - name: Build with Maven
        run: |
          cd backend
          mvn clean install

  frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: |
          cd frontend
          npm ci
      - name: Lint
        run: |
          cd frontend
          npm run lint
      - name: Build
        run: |
          cd frontend
          npm run build
```

---

## ✅ CHECKLIST SETUP

Sau khi hoàn thành, đảm bảo:

- [ ] Git user name và email đã được cấu hình
- [ ] Commit template đã được setup
- [ ] Pre-commit hooks đã được cài đặt (nếu có)
- [ ] Repository đã được khởi tạo với branch `main` và `develop`
- [ ] Remote repository đã được kết nối (nếu dùng)
- [ ] Branch protection rules đã được setup (nếu dùng GitHub/GitLab)
- [ ] Đã đọc và hiểu GIT_RULES.md

---

## 🆘 TROUBLESHOOTING

### Lỗi: "husky: command not found"

```bash
# Reinstall Husky
cd frontend
npm install --save-dev husky
npx husky install
```

### Lỗi: "pre-commit hook failed"

- Kiểm tra lint errors: `npm run lint`
- Fix errors trước khi commit
- Hoặc skip hook (không khuyến nghị): `git commit --no-verify`

### Lỗi: "commit.template not found"

- Đảm bảo file `.gitmessage` tồn tại trong thư mục gốc
- Hoặc dùng đường dẫn tuyệt đối: `git config commit.template /path/to/.gitmessage`

---

## 📚 TÀI LIỆU THAM KHẢO

- [GIT_RULES.md](./GIT_RULES.md) - Quy tắc Git chi tiết
- [Husky Documentation](https://typicode.github.io/husky/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

**Last Updated**: 2024-12-19

