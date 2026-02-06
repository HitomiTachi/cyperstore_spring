# 🛒 CYBER STORE - E-Commerce Platform

Hệ thống thương mại điện tử chuyên bán thiết bị công nghệ cao cấp với định hướng Desktop-first.

---

## 📚 TÀI LIỆU DỰ ÁN

Trước khi bắt đầu, **BẮT BUỘC** đọc các tài liệu sau:

1. **[PROJECT_SPEC.md](./PROJECT_SPEC.md)** - Đặc tả dự án, kiến trúc, công nghệ, quy ước
2. **[GIT_RULES.md](./GIT_RULES.md)** - Quy tắc Git, commit, branch, pull request
3. **[SETUP_GIT.md](./SETUP_GIT.md)** - Hướng dẫn setup Git và tools hỗ trợ

---

## 🏗️ KIẾN TRÚC

```
CyberStore/
├── backend/          # Java Spring Boot
├── frontend/        # React + TypeScript
└── database/        # MySQL scripts & migrations
```

---

## 🛠️ TECHNOLOGY STACK

### Backend
- Java Spring Boot 3.2+
- Spring Security + JWT
- Spring Data JPA
- MySQL 8.0+
- Spring WebSocket

### Frontend
- React 18 + TypeScript
- Vite
- Bootstrap 5
- TanStack Query
- React Router v6

---

## 🚀 QUICK START

### Prerequisites
- Java 17+
- Node.js 18+
- MySQL 8.0+
- Maven 3.6+

### Setup

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd CyberStore
   ```

2. **Setup Git** (xem [SETUP_GIT.md](./SETUP_GIT.md))
   ```bash
   git config commit.template .gitmessage
   ```

3. **Backend Setup**
   ```bash
   cd backend
   mvn clean install
   ```

4. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

---

## 📝 QUY TẮC LÀM VIỆC

### Git Workflow
- **Branching**: Git Flow (main → develop → feature/bugfix/hotfix)
- **Commit**: Format `<type>: <description>` (xem [GIT_RULES.md](./GIT_RULES.md))
- **Pull Request**: Bắt buộc cho mọi thay đổi

### Commit Types
- `feat` - Tính năng mới
- `fix` - Sửa lỗi
- `refactor` - Cải tổ code
- `docs` - Tài liệu
- `style` - Format, lint
- `test` - Test
- `chore` - Config, build

---

## ✅ CHECKLIST TRƯỚC KHI BẮT ĐẦU

- [ ] Đã đọc [PROJECT_SPEC.md](./PROJECT_SPEC.md)
- [ ] Đã đọc [GIT_RULES.md](./GIT_RULES.md)
- [ ] Đã setup Git theo [SETUP_GIT.md](./SETUP_GIT.md)
- [ ] Đã hiểu cấu trúc dự án và quy ước

---

## 📞 LIÊN HỆ

Nếu có câu hỏi, vui lòng tạo issue hoặc liên hệ team.

---

**Version**: 1.0  
**Last Updated**: 2024-12-19
"# cyperstore_spring" 
