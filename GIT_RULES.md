# 🔀 GIT WORKFLOW & COMMIT RULES

> **BẮT BUỘC**: Tất cả thành viên trong team PHẢI tuân thủ các quy tắc Git này. Đây là tiêu chuẩn bắt buộc cho dự án Cyber Store.

---

## 📋 MỤC LỤC

1. [Nguyên tắc nền tảng](#nguyên-tắc-nền-tảng)
2. [Quy tắc Commit](#quy-tắc-commit)
3. [Quy tắc Branch](#quy-tắc-branch)
4. [Quy tắc Pull Request](#quy-tắc-pull-request)
5. [Quy trình làm việc](#quy-trình-làm-việc)
6. [Bảo mật](#bảo-mật)
7. [Tools & Automation](#tools--automation)

---

## 🎯 NGUYÊN TẮC NỀN TẢNG

### ✅ Bắt buộc tuân thủ

1. **Mỗi commit phải có mục đích rõ ràng**
   - ❌ KHÔNG commit "tạp", "fix", "update"
   - ✅ Commit nhỏ, tập trung vào một thay đổi duy nhất

2. **Branching strategy nhất quán**
   - Sử dụng **Git Flow** cho dự án này
   - Mọi người trong team dùng chung một mô hình

3. **Luôn review code qua Pull Request**
   - ❌ KHÔNG push thẳng vào `main` hoặc `develop`
   - ✅ Tất cả code phải qua PR và được approve

4. **Code quality trước khi commit**
   - ✅ Test phải pass
   - ✅ Lint & format đúng chuẩn
   - ✅ Không commit code chưa chạy thử

---

## 📝 QUY TẮC COMMIT

### Format chuẩn

```
<type>: <short description>

[optional body]

[optional footer]
```

### Commit Types

| Type | Mô tả | Ví dụ |
|------|-------|-------|
| `feat` | Thêm tính năng mới | `feat: add product comparison feature` |
| `fix` | Sửa lỗi | `fix: resolve cart total calculation error` |
| `refactor` | Cải tổ code không đổi hành vi | `refactor: optimize product service layer` |
| `docs` | Cập nhật tài liệu | `docs: update API documentation` |
| `style` | Format, lint, không thay đổi logic | `style: format code with Prettier` |
| `test` | Thêm/sửa test | `test: add unit tests for product service` |
| `chore` | Việc linh tinh (config, build) | `chore: update dependencies` |
| `perf` | Cải thiện performance | `perf: optimize image loading` |
| `ci` | Thay đổi CI/CD | `ci: add GitHub Actions workflow` |
| `build` | Thay đổi build system | `build: update Maven configuration` |

### Quy tắc viết commit message

1. **Subject line (dòng đầu tiên)**
   - Tối đa 50 ký tự
   - Viết bằng tiếng Anh
   - Bắt đầu bằng chữ thường (trừ tên riêng)
   - Không có dấu chấm cuối
   - Sử dụng imperative mood: "add" không phải "added" hoặc "adds"

2. **Body (tùy chọn)**
   - Cách subject line 1 dòng trống
   - Giải thích "what" và "why" (không phải "how")
   - Tối đa 72 ký tự mỗi dòng
   - Wrap text nếu cần

3. **Footer (tùy chọn)**
   - Breaking changes: `BREAKING CHANGE: <description>`
   - Issue references: `Closes #123`, `Fixes #456`

### Ví dụ commit messages tốt

```bash
# ✅ TỐT
feat: add product filter by brand and type

Implement filtering functionality for product list page.
Users can now filter products by brand and product type
simultaneously.

Closes #42

# ✅ TỐT
fix: resolve null pointer in order service

Handle null order items gracefully when calculating total.
Added null check before accessing order items collection.

# ✅ TỐT
refactor: extract payment logic to separate service

Move payment processing logic from OrderService to
PaymentService to improve separation of concerns.

# ❌ XẤU - Quá mơ hồ
fix: bug fix

# ❌ XẤU - Quá dài
feat: add a new feature that allows users to compare products side by side with up to 4 products maximum

# ❌ XẤU - Không có type
update product page

# ❌ XẤU - Commit nhiều thay đổi không liên quan
fix: various bugs and add new features
```

### Commit nhỏ, thường xuyên

- ✅ Mỗi commit giải quyết một vấn đề duy nhất
- ✅ Commit thường xuyên (không tích lũy thay đổi lớn)
- ❌ Không commit nhiều thay đổi không liên quan

### Không commit file rác

Các file sau **KHÔNG BAO GIỜ** được commit:
- `node_modules/`
- `target/` (Maven build output)
- `.env`, `.env.local`, `.env.production`
- `*.log`
- `*.class`
- `uploads/` (product images)
- Secrets, keys, credentials

→ Sử dụng `.gitignore` để tự động loại trừ

---

## 🌿 QUY TẮC BRANCH

### Branching Strategy: Git Flow

```
main (production)
  └── develop (integration)
       ├── feature/product-comparison
       ├── feature/admin-dashboard
       ├── bugfix/cart-calculation
       └── hotfix/payment-error
```

### Branch Types

| Type | Prefix | Mô tả | Merge vào |
|------|--------|-------|-----------|
| Feature | `feature/` | Tính năng mới | `develop` |
| Bugfix | `bugfix/` | Sửa lỗi | `develop` |
| Hotfix | `hotfix/` | Sửa lỗi khẩn cấp production | `main` + `develop` |
| Release | `release/` | Chuẩn bị release | `main` + `develop` |

### Quy tắc đặt tên branch

1. **Format**: `<type>/<short-description>`
2. **Viết bằng chữ thường**
3. **Dùng dấu gạch ngang** để phân cách từ
4. **Ngắn gọn, mô tả đúng mục đích**

Ví dụ tốt:
```bash
feature/product-comparison
feature/admin-order-management
bugfix/cart-total-calculation
hotfix/payment-gateway-error
```

Ví dụ xấu:
```bash
# ❌ Quá dài
feature/add-product-comparison-feature-with-4-products-maximum

# ❌ Không có prefix
product-comparison

# ❌ Dùng camelCase
feature/productComparison

# ❌ Mơ hồ
feature/fix
bugfix/stuff
```

### Quy tắc làm việc với branch

1. **KHÔNG làm việc trực tiếp trên `main`**
   - `main` chỉ được merge từ `develop` hoặc `hotfix`
   - Luôn tạo branch mới cho mọi thay đổi

2. **Tạo branch từ `develop`**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/my-feature
   ```

3. **Giữ branch đồng bộ với `develop`**
   ```bash
   git checkout feature/my-feature
   git pull --rebase origin develop
   ```

4. **Xóa branch sau khi merge**
   - Xóa local: `git branch -d feature/my-feature`
   - Xóa remote: `git push origin --delete feature/my-feature`

---

## 🔄 QUY TẮC PULL REQUEST

### Tạo Pull Request

1. **PR phải nhỏ và tập trung**
   - ✅ PR < 500 dòng code thay đổi (lý tưởng)
   - ❌ Tránh PR 5000+ dòng (khó review)

2. **PR description phải rõ ràng**
   ```markdown
   ## Mô tả
   Thêm tính năng so sánh sản phẩm cho phép người dùng chọn tối đa 4 sản phẩm.

   ## Thay đổi
   - Thêm component ProductCompare
   - Thêm API endpoint /api/v1/products/compare
   - Thêm service layer cho product comparison

   ## Screenshots (nếu có UI)
   [Ảnh chụp màn hình]

   ## Testing
   - [x] Unit tests pass
   - [x] Manual testing completed
   - [x] No console errors

   ## Related Issues
   Closes #42
   ```

3. **Rebase trước khi tạo PR**
   ```bash
   git pull --rebase origin develop
   ```

### Review Process

1. **Tất cả PR phải có ít nhất 1 reviewer**
2. **CI/CD phải pass trước khi merge**
3. **Không merge khi có conflict**
4. **Sửa theo góp ý của reviewer**

### Merge Strategy

- **Squash and Merge** (khuyến nghị)
  - Giữ lịch sử sạch
  - Mỗi PR = 1 commit trên `develop`

- **Rebase and Merge**
  - Giữ lịch sử tuyến tính
  - Giữ nguyên commit history từ PR

- **Merge Commit** (tránh dùng)
  - Chỉ dùng khi cần thiết
  - Tạo merge commit không cần thiết

### Quy tắc merge

```bash
# 1. Rebase với develop trước
git checkout feature/my-feature
git pull --rebase origin develop

# 2. Resolve conflicts nếu có
# 3. Push (force push nếu đã rebase)
git push origin feature/my-feature

# 4. Tạo PR trên GitHub/GitLab
# 5. Sau khi approved, merge (squash)
```

---

## 🚀 QUY TRÌNH LÀM VIỆC

### Quy trình chuẩn cho Feature

```bash
# 1. Cập nhật develop
git checkout develop
git pull origin develop

# 2. Tạo branch mới
git checkout -b feature/product-comparison

# 3. Code và commit
git add .
git commit -m "feat: add product comparison component"

# 4. Push branch
git push origin feature/product-comparison

# 5. Tạo Pull Request
# (Trên GitHub/GitLab web interface)

# 6. Sau khi merge, xóa branch
git checkout develop
git pull origin develop
git branch -d feature/product-comparison
```

### Quy trình cho Hotfix

```bash
# 1. Tạo branch từ main
git checkout main
git pull origin main
git checkout -b hotfix/payment-error

# 2. Fix và commit
git commit -m "fix: resolve payment gateway timeout"

# 3. Merge vào main
git checkout main
git merge hotfix/payment-error
git tag -a v1.0.1 -m "Hotfix: Payment error"

# 4. Merge vào develop
git checkout develop
git merge hotfix/payment-error

# 5. Push
git push origin main --tags
git push origin develop
```

### Pull code mới trước khi bắt đầu

```bash
# Luôn pull code mới trước khi bắt đầu làm việc
git checkout develop
git pull origin develop
```

---

## 🛡️ BẢO MẬT

### KHÔNG BAO GIỜ commit

- ❌ Secrets, API keys, passwords
- ❌ `.env` files với credentials
- ❌ Private keys, certificates
- ❌ Database credentials
- ❌ JWT secrets

### Nếu lỡ commit secret

1. **Rotate key ngay lập tức**
2. **Xóa secret khỏi Git history**:
   ```bash
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch .env" \
     --prune-empty --tag-name-filter cat -- --all
   ```
3. **Force push** (cẩn thận!)
4. **Thông báo team**

### Sử dụng environment variables

```bash
# ✅ TỐT - Sử dụng .env (đã có trong .gitignore)
JWT_SECRET=your-secret-key
DB_PASSWORD=your-password

# ❌ XẤU - Hardcode trong code
String secret = "my-secret-key";
```

### Pre-commit hooks

Sử dụng tools như:
- **GitGuardian** để scan secrets
- **Husky** + **pre-commit hooks** để tự động check

---

## 🧪 TOOLS & AUTOMATION

### Pre-commit Hooks (Husky)

```bash
# Frontend - Setup Husky
npm install --save-dev husky lint-staged

# Tự động chạy lint & format trước khi commit
npx husky install
npx husky add .husky/pre-commit "npm run lint-staged"
```

### Commit Message Template

Tạo file `.gitmessage`:
```
# <type>: <subject>
#
# <body>
#
# <footer>
```

Sử dụng:
```bash
git config commit.template .gitmessage
```

### Git Aliases (tùy chọn)

```bash
# Thêm vào ~/.gitconfig hoặc .git/config
[alias]
  co = checkout
  br = branch
  ci = commit
  st = status
  unstage = reset HEAD --
  last = log -1 HEAD
  visual = !gitk
```

---

## ✅ CHECKLIST TRƯỚC KHI COMMIT

- [ ] Code đã chạy thử và hoạt động đúng
- [ ] Test pass (nếu có)
- [ ] Lint & format đúng chuẩn
- [ ] Commit message theo đúng format
- [ ] Không có file rác trong commit
- [ ] Không có secrets/credentials
- [ ] Đã pull code mới từ develop

---

## ✅ CHECKLIST TRƯỚC KHI TẠO PR

- [ ] Branch đã rebase với develop
- [ ] Không có conflict
- [ ] CI/CD pass
- [ ] PR description rõ ràng
- [ ] Có screenshots (nếu là UI change)
- [ ] Đã test manual
- [ ] Code đã được review bởi chính mình

---

## 📚 TÀI LIỆU THAM KHẢO

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Git Best Practices](https://github.com/git/git/blob/master/Documentation/howto/maintain-git.txt)

---

**Last Updated**: 2024-12-19  
**Version**: 1.0

