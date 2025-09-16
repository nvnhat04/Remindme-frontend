# RemindMe Frontend

Frontend cho ứng dụng **RemindMe**, được xây dựng bằng **Next.js 13 (App Router)** + **Redux Toolkit** + **TailwindCSS**.

---

## 🚀 Công nghệ sử dụng
- Next.js 13 (App Router)
- React 18
- Redux Toolkit (quản lý state auth, document)
- Tailwind CSS (UI styling)
- cookies-next (lưu JWT)
- shadcn/ui (components)

---

## 📂 Cấu trúc thư mục
```
remindme-frontend/
│── app/                # Next.js App Router
│   ├── login/          # Trang login
│   ├── register/       # Trang đăng ký
│   ├── documents/      # Trang list documents
│   ├── editor/[id]/    # Trang editor 
│   └── logout/         # Trang logout
│
│── components/         # UI components 
│── store/              # Redux
```

---

## ⚙️ Cài đặt & Chạy project
### 1. Clone repo
```bash
git clone https://github.com/nvnhat04/remindme-frontend.git
cd remindme-frontend
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Cấu hình API endpoint
Tạo file `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5110/api
```

### 4. Run frontend
```bash
npm run dev
```

Frontend chạy tại: **http://localhost:3000**

---

## 🔑 Authentication
- Sau khi login, JWT được lưu trong **cookies** (`token`).
- Redux lưu trạng thái auth.
- Khi logout: xoá cookie + reset Redux.

---

## 📝 Các trang chính
- `/login` → đăng nhập
- `/register` → đăng ký
- `/documents` → danh sách tài liệu
- `/editor/[id]` → tạo/sửa tài liệu
- `/logout` → đăng xuất
