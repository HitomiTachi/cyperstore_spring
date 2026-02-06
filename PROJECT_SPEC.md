# CYBER STORE - PROJECT SPECIFICATION & DECISIONS

> **Lưu ý quan trọng**: File này chứa tất cả các quyết định kiến trúc, công nghệ và quy ước của dự án. Luôn tham khảo file này trước khi implement bất kỳ feature nào.

---

## 📋 TỔNG QUAN DỰ ÁN

**Tên dự án**: Cyber Store  
**Mô tả**: Hệ thống thương mại điện tử chuyên bán thiết bị công nghệ cao cấp  
**Định hướng**: Desktop-first, tập trung vào trải nghiệm người dùng  
**Yêu cầu**: Đồng bộ dữ liệu, phản hồi real-time, bảo mật nghiêm ngặt

---

## 🏗️ KIẾN TRÚC TỔNG THỂ

### Cấu trúc dự án
```
CyberStore/
├── backend/          # Java Spring Boot (DUY NHẤT - không dùng Node.js)
├── frontend/         # React + TypeScript
└── database/         # MySQL scripts & migrations
```

### Quyết định quan trọng
- ✅ **CHỈ dùng Java Spring Boot** làm backend (KHÔNG dùng Node.js Express)
- ✅ **Spring WebSocket** thay vì Socket.io (native Spring solution)
- ✅ **Layered Architecture**: Controller → Service → Repository → Entity
- ✅ **RESTful API** không trạng thái (Stateless)
- ✅ **Chia tách rõ ràng** giữa Frontend và Backend

---

## 🛠️ TECHNOLOGY STACK

### Backend (Java Spring Boot)
- **Framework**: Spring Boot 3.2+ (Java 17+)
- **Build Tool**: Maven
- **Security**: Spring Security + JWT
- **Data Access**: Spring Data JPA
- **Database**: MySQL 8.0+
- **Connection Pool**: HikariCP (mặc định)
- **Migration**: Flyway
- **Real-time**: Spring WebSocket
- **PDF**: iText hoặc Apache PDFBox
- **API Docs**: SpringDoc OpenAPI (Swagger)
- **Logging**: Logback (mặc định)

### Frontend (React)
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Data Fetching**: TanStack Query (React Query)
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form + Zod
- **UI Framework**: Bootstrap 5
- **Lazy Loading**: React Lazy + Suspense
- **State Management**: Context API (đơn giản, đủ dùng)
- **Performance**: Lazy loading, code splitting, <2s load time

### Database
- **Type**: MySQL 8.0+
- **Migration Tool**: Flyway
- **Backup**: Dump định kỳ hàng ngày

---

## 📁 CẤU TRÚC DỰ ÁN CHI TIẾT

### Backend Structure
```
backend/
├── src/main/java/com/cyberstore/
│   ├── CyberStoreApplication.java
│   ├── config/          # Security, WebSocket, CORS, etc.
│   ├── controller/      # REST Controllers
│   ├── service/         # Business logic layer
│   ├── repository/      # JPA Repositories
│   ├── entity/          # JPA Entities
│   ├── dto/             # Request/Response DTOs
│   ├── security/        # JWT, UserDetails, etc.
│   ├── exception/       # Global exception handler
│   └── util/            # Utilities
├── src/main/resources/
│   ├── application.yml
│   ├── db/migration/    # Flyway SQL scripts
│   └── static/uploads/  # Product images (local storage)
└── pom.xml
```

### Frontend Structure
```
frontend/
├── src/
│   ├── components/      # Reusable components
│   │   ├── common/     # Button, Input, Modal, etc.
│   │   ├── layout/     # Header, Footer, Sidebar
│   │   └── ui/         # UI components (Bootstrap)
│   ├── pages/          # Page components
│   │   ├── client/     # Client-side pages
│   │   │   ├── Home/
│   │   │   ├── ProductList/
│   │   │   ├── ProductDetail/
│   │   │   ├── ProductCompare/
│   │   │   ├── Cart/
│   │   │   ├── Checkout/
│   │   │   └── Profile/
│   │   └── admin/       # Admin-side pages
│   │       ├── Dashboard/
│   │       ├── Products/
│   │       ├── Orders/
│   │       ├── Inbox/
│   │       ├── Calendar/
│   │       └── TodoList/
│   ├── services/        # API services
│   │   ├── api/
│   │   │   ├── client.ts    # Axios instance
│   │   │   ├── auth.ts
│   │   │   ├── products.ts
│   │   │   ├── orders.ts
│   │   │   └── admin.ts
│   │   └── websocket.ts # WebSocket client
│   ├── hooks/          # Custom hooks
│   ├── contexts/       # React Context (Auth, Cart)
│   ├── types/          # TypeScript types
│   ├── utils/          # Utilities
│   └── styles/         # Global styles
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🗄️ DATABASE SCHEMA

### Core Tables
- `users` - Thông tin người dùng (id, email, password, role, ...)
- `products` - Sản phẩm (id, name, price, description, brand, type, ...)
- `product_specs` - Specs động (product_id, spec_key, spec_value)
- `product_images` - Hình ảnh sản phẩm (product_id, image_url, is_primary)
- `reviews` - Đánh giá (id, product_id, user_id, rating, comment, created_at)
- `orders` - Đơn hàng (id, user_id, status, shipping_method, total, ...)
- `order_items` - Chi tiết đơn hàng (order_id, product_id, quantity, price)
- `coupons` - Mã giảm giá (id, code, discount_type, discount_value, expiry, ...)
- `seo_settings` - Cấu hình SEO (page, title, description)

### Notes
- Password: BCrypt encryption
- Specs: Dynamic Key-Value pairs (flexible cho mọi loại sản phẩm)
- Images: Multiple images per product, có primary image

---

## 🔌 API DESIGN

### Base URL
- Development: `http://localhost:8080/api/v1`
- Production: `https://api.cyberstore.com/api/v1`

### API Versioning
- Format: `/api/v1/...`
- Tất cả endpoints phải có prefix `/api/v1`

### Response Format

**Success Response:**
```json
{
  "success": true,
  "data": {...},
  "message": "Success message (optional)"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error message"
  }
}
```

### Pagination
- Format: `?page=1&size=20`
- Response includes: `page`, `size`, `totalElements`, `totalPages`, `data[]`

### Authentication
- Method: JWT Bearer Token
- Header: `Authorization: Bearer <access_token>`
- Access Token: 15 minutes expiry
- Refresh Token: 7 days expiry (stored in database)
- Endpoint: `POST /api/v1/auth/refresh`

### API Endpoints

#### Authentication
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/refresh`
- `GET /api/v1/auth/me`

#### Products (Client)
- `GET /api/v1/products` - List với filters
- `GET /api/v1/products/:id` - Detail
- `GET /api/v1/products/compare?ids=1,2,3,4` - Compare specs
- `GET /api/v1/products/:id/reviews` - Reviews
- `POST /api/v1/products/:id/reviews` - Add review (auth required)

#### Cart & Orders
- `GET /api/v1/cart`
- `POST /api/v1/cart/add`
- `POST /api/v1/coupons/validate`
- `POST /api/v1/orders` - Create order
- `GET /api/v1/orders/:id`

#### Admin
- `GET /api/v1/admin/products`
- `POST /api/v1/admin/products`
- `PUT /api/v1/admin/products/:id`
- `DELETE /api/v1/admin/products/:id`
- `POST /api/v1/admin/products/:id/images` - Upload images
- `GET /api/v1/admin/orders`
- `PUT /api/v1/admin/orders/:id/status`
- `GET /api/v1/admin/orders/:id/invoice` - PDF invoice
- `PUT /api/v1/admin/seo` - SEO settings

---

## 🔐 SECURITY

### Authentication & Authorization
- **JWT**: Access token (15 min) + Refresh token (7 days)
- **Password**: BCrypt encryption
- **Roles**: `ROLE_USER`, `ROLE_ADMIN`
- **Protected Routes**: 
  - Client: `/checkout`, `/profile`
  - Admin: `/admin/*` (role-based)

### Security Best Practices
- ✅ SSL/TLS (HTTPS only in production)
- ✅ JWT token validation
- ✅ BCrypt password hashing
- ✅ CORS configuration
- ✅ Input validation & sanitization
- ✅ SQL injection prevention (JPA parameterized queries)

---

## 📤 FILE UPLOAD & STORAGE

### Storage Strategy
- **Development**: Local filesystem
- **Path**: `backend/src/main/resources/static/uploads/products/{productId}/`
- **URL**: `http://localhost:8080/uploads/products/{productId}/{filename}`
- **Production**: Có thể migrate lên Cloud (AWS S3, Cloudinary) sau

### Upload Rules
- **Max file size**: 10MB
- **Allowed formats**: JPG, PNG, WebP
- **Multiple images**: Yes (có primary image)
- **Auto resize**: Có thể thêm sau nếu cần

---

## 💳 PAYMENT INTEGRATION

### Development
- **Mock Payment Service**: Tạo endpoint `/api/v1/payments/process`
- **Response**: Success/Failure (không thực sự charge)

### Production
- **Gateway**: Tích hợp sau (Stripe, VNPay, PayPal tùy nhuồn cầu)
- **Credit Card Form**: Sử dụng gateway SDK (Stripe Elements) - KHÔNG tự build form

---

## 📄 PDF GENERATION

### Implementation
- **Location**: Server-side (Spring Boot)
- **Library**: iText hoặc Apache PDFBox
- **Endpoint**: `GET /api/v1/admin/orders/:id/invoice`
- **Content**: Logo, thông tin đơn hàng, bảng sản phẩm, tổng tiền

---

## 🔔 REAL-TIME FEATURES

### WebSocket Implementation
- **Technology**: Spring WebSocket (native, không dùng Socket.io)
- **Events**:
  - `order:created` - Admin nhận thông báo khi có đơn hàng mới
  - `order:status:updated` - Client nhận cập nhật trạng thái đơn hàng

### Configuration
- **Endpoint**: `/ws`
- **STOMP**: Sử dụng STOMP protocol
- **Authentication**: JWT token trong WebSocket handshake

---

## 🎨 UI/UX REQUIREMENTS

### Client Side
- **Layout**: Grid layout cho danh sách sản phẩm
- **Filters**: Brand, Product Type, Battery Capacity, Screen Type
- **Product Compare**: Tối đa 4 sản phẩm
- **Checkout**: 3-step wizard (Thông tin → Vận chuyển → Thanh toán)
- **Performance**: <2s load time (lazy loading required)

### Admin Side
- **UI Framework**: DashStack (thống nhất toàn bộ)
- **Features**: 
  - Product CRUD với image upload
  - Dynamic specs editor (Key-Value)
  - Order management với real-time notifications
  - PDF invoice generation
  - SEO settings
  - Utility pages: Inbox, Calendar, Todo List (UI tĩnh)

---

## 🚀 DEPLOYMENT

### Environment Variables
```
# Backend (.env hoặc application.yml)
DB_URL=jdbc:mysql://localhost:3306/cyberstore
DB_USERNAME=root
DB_PASSWORD=password
JWT_SECRET=your-secret-key
JWT_EXPIRATION=900000
FILE_UPLOAD_DIR=./uploads

# Frontend (.env)
VITE_API_BASE_URL=http://localhost:8080/api/v1
VITE_WS_URL=ws://localhost:8080/ws
```

### CORS Configuration
- **Development**: `http://localhost:3000` (hoặc Vite default port)
- **Production**: Configure theo domain thực tế

---

## 🔀 GIT WORKFLOW & COMMIT RULES

> **BẮT BUỘC**: Tất cả code changes phải tuân thủ quy tắc Git. Xem chi tiết trong [GIT_RULES.md](./GIT_RULES.md)

### Nguyên tắc cơ bản
- ✅ **Commit message format**: `<type>: <description>` (xem GIT_RULES.md)
- ✅ **Branching**: Git Flow (main → develop → feature/bugfix/hotfix)
- ✅ **Pull Request**: Bắt buộc cho mọi thay đổi, không push trực tiếp vào main/develop
- ✅ **Commit nhỏ**: Mỗi commit giải quyết một thay đổi duy nhất
- ✅ **Không commit**: Secrets, .env, node_modules, build files (xem .gitignore)

### Commit Types
- `feat` - Tính năng mới
- `fix` - Sửa lỗi
- `refactor` - Cải tổ code
- `docs` - Tài liệu
- `style` - Format, lint
- `test` - Test
- `chore` - Config, build

### Branch Naming
- `feature/<name>` - Tính năng mới
- `bugfix/<name>` - Sửa lỗi
- `hotfix/<name>` - Sửa lỗi khẩn cấp

### Setup Git Template
```bash
git config commit.template .gitmessage
```

---

## 📝 CODING STANDARDS

### Backend (Java)
- **Package naming**: `com.cyberstore.*`
- **Naming convention**: CamelCase
- **DTOs**: Separate request/response DTOs
- **Exception handling**: Global exception handler
- **Validation**: Bean Validation (JSR-303)

### Frontend (TypeScript)
- **File naming**: PascalCase cho components, camelCase cho utilities
- **Type safety**: Strict TypeScript, define types cho tất cả API responses
- **Component structure**: Functional components với hooks
- **Code splitting**: Lazy load routes và heavy components

---

## ✅ CHECKLIST TRƯỚC KHI IMPLEMENT

Trước khi code bất kỳ feature nào, đảm bảo:
- [ ] Đã đọc và hiểu PROJECT_SPEC.md này
- [ ] Đã đọc và hiểu GIT_RULES.md
- [ ] Tuân thủ cấu trúc thư mục đã định nghĩa
- [ ] API endpoints theo đúng format đã quy định
- [ ] Response format đúng chuẩn (success/error wrapper)
- [ ] Authentication/Authorization được implement đúng
- [ ] Error handling đầy đủ
- [ ] TypeScript types được define cho tất cả data structures
- [ ] Commit message theo đúng format (xem GIT_RULES.md)

---

## 📚 TÀI LIỆU THAM KHẢO

- Spring Boot Documentation: https://spring.io/projects/spring-boot
- React Documentation: https://react.dev
- Bootstrap 5: https://getbootstrap.com
- TanStack Query: https://tanstack.com/query
- Flyway: https://flywaydb.org

---

**Last Updated**: 2024-12-19  
**Version**: 1.0

