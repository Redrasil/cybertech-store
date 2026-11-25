# 💻 ĐỒ ÁN CUỐI KỲ: WEBSITE THƯƠNG MẠI ĐIỆN TỬ - CYBERTECH STORE
> **Môn học:** Thiết kế Web / Lập trình Web  
> **Đề tài:** Website thương mại điện tử chuyên kinh doanh đồ công nghệ, thiết bị & linh kiện máy tính.  
> **Công nghệ sử dụng:** HTML5, CSS3 (Flexbox & CSS Grid), JavaScript ES6, LocalStorage API, Font Awesome 6.

---

## 🌟 1. DANH SÁCH CÁC TRANG & CHỨC NĂNG

Dự án tuân thủ đầy đủ cấu trúc thư mục và các trang theo yêu cầu của đồ án:

| Tên Trang | Tệp tin (HTML) | Mô Tả & Chức Năng |
|-----------|----------------|-------------------|
| **Trang chủ** | `index.html` | Hero Banner động, Cam kết dịch vụ, Danh mục nổi bật, Sản phẩm bán chạy (Hot Deals), Sản phẩm mới về, Đánh giá khách hàng, Đăng ký nhận tin. |
| **Trang sản phẩm** | `products.html` | Danh mục toàn diện linh kiện (VGA, CPU, Laptop, RAM, Màn hình, Gear, Mainboard), Lọc theo khoảng giá, Tìm kiếm từ khóa, Sắp xếp giá tăng/giảm/A-Z, Xem nhanh Modal, Thêm vào giỏ. |
| **Chi tiết sản phẩm** | `product-detail.html` | Hình ảnh phóng to, thông tin giá, tình trạng kho, mô tả chuyên sâu, bảng thông số kỹ thuật chi tiết, chọn số lượng, Thêm vào giỏ / Mua ngay, sản phẩm liên quan. |
| **Upload sản phẩm (SV)** | `upload-product.html` | **Đáp ứng yêu cầu: Mỗi SV upload tối thiểu 5 sản phẩm lưu trữ LocalStorage**. Hỗ trợ chọn file ảnh từ máy hoặc URL, form nhập thông số, quản lý xóa/reset, nút nạp nhanh 5 SP mẫu. |
| **Giỏ hàng & Thanh toán** | `cart.html` | Xem món hàng đã chọn, tăng/giảm số lượng, xóa khỏi giỏ, tính tổng tiền tự động, form điền địa chỉ giao hàng và xác nhận đặt hàng. |
| **Giới thiệu** | `about.html` | Lịch sử hình thành, tầm nhìn & sứ mệnh, đối tác phân phối, thông tin nhóm sinh viên thực hiện đồ án. |
| **Liên hệ & Góp ý** | `contact.html` | Thông tin showroom, bản đồ tương tác Google Maps, **Form gửi góp ý/phản hồi lưu vào LocalStorage** và hiển thị lịch sử góp ý. |
| **Đăng nhập** | `login.html` | Đăng nhập tài khoản kiểm tra theo dữ liệu LocalStorage (kèm tài khoản mẫu: `student@cybertech.vn` / `123`). |
| **Đăng ký** | `register.html` | Form đăng ký người dùng mới, kiểm tra trùng email, lưu tự động vào danh sách tài khoản LocalStorage. |
| **Đổi mật khẩu** | `change-password.html` | Kiểm tra trạng thái đăng nhập, xác minh mật khẩu cũ và cập nhật mật khẩu mới trong LocalStorage. |

---

## ✨ 2. TÍNH NĂNG NỔI BẬT

1. **Responsive Web Design 100%:**
   - Tối ưu hiển thị hoàn hảo trên mọi thiết bị: Desktop màn hình lớn, Laptop, Máy tính bảng (Tablet) và Điện thoại thông minh (Mobile).
   - Menu điều hướng Hamburger tự động co giãn linh hoạt trên Mobile (`responsive.css`).
2. **Hiệu ứng động (Animations):**
   - Animation lơ lửng (Floating image), Pulse badge đồ án, hiệu ứng trượt xuất hiện toast notification, hover transition nâng thẻ sản phẩm (`transform translateY`), phóng to hình ảnh mượt mà.
3. **Tương tác người dùng & LocalStorage API:**
   - Dữ liệu sản phẩm, giỏ hàng, thông tin tài khoản người dùng và nội dung góp ý đều được lưu trữ bền vững trong `localStorage`. Khi F5 tải lại trang, dữ liệu không bị mất.
   - Hệ thống thông báo Pop-up Toast tự động phản hồi mỗi khi tương tác (Thêm giỏ hàng, Đăng nhập, Góp ý, Đặt hàng thành công).

---

## 📁 3. CẤU TRÚC THƯ MỤC DỰ ÁN

```
Selling website/
│
├── index.html              # Trang chủ (Home)
├── products.html           # Trang sản phẩm/dịch vụ, lọc & tìm kiếm
├── product-detail.html     # Trang chi tiết sản phẩm & thông số kỹ thuật
├── upload-product.html     # Cổng upload sản phẩm dành cho sinh viên (LocalStorage)
├── cart.html               # Trang giỏ hàng và đặt hàng
├── about.html              # Trang giới thiệu
├── contact.html            # Trang liên hệ & form đóng góp ý kiến
├── login.html              # Trang đăng nhập
├── register.html           # Trang đăng ký thành viên
├── change-password.html    # Trang đổi mật khẩu
│
├── css/
│   ├── style.css           # Toàn bộ CSS phong cách giao diện hiện đại
│   └── responsive.css      # CSS media queries cho mobile, tablet, desktop
│
├── js/
│   ├── products-data.js    # Dữ liệu sản phẩm mẫu & cấu hình LocalStorage
│   └── main.js             # Xử lý sự kiện: Auth, Giỏ hàng, Toast, Filter, Quick view
│
├── images/                 # Thư mục hình ảnh & tài nguyên
└── README.md               # Tài liệu hướng dẫn sử dụng & nộp bài
```

---

## 🚀 4. HƯỚNG DẪN PUSH DỰ ÁN LÊN GITHUB

Khi bạn sẵn sàng đưa đồ án lên GitHub, hãy làm theo các bước sau:

### Bước 1: Tạo Repository mới trên GitHub
1. Đăng nhập vào tài khoản [GitHub](https://github.com/).
2. Nhấn vào dấu **`+`** ở góc trên bên phải màn hình -> Chọn **New repository**.
3. Điền tên repository (ví dụ: `cybertech-selling-website` hoặc `do-an-thiet-ke-web`).
4. Để chế độ **Public** (để giảng viên có thể xem và chấm bài).
5. **Không tick** vào ô *"Add a README file"* (vì dự án đã có sẵn README.md).
6. Nhấn nút **Create repository**.
7. Copy đường link HTTPS của repository (dạng: `https://github.com/<tên-username>/<tên-repo>.git`).

### Bước 2: Chạy các lệnh Git để Push mã nguồn lên
Mở Terminal / PowerShell tại thư mục `Selling website` và chạy lần lượt các lệnh:

```bash
# 1. Thêm link repository GitHub bạn vừa tạo (thay đường link thật vào)
git remote add origin https://github.com/<tên-username>/<tên-repo>.git

# 2. Đổi tên nhánh chính thành main
git branch -M main

# 3. Đẩy toàn bộ mã nguồn lên GitHub
git push -u origin main
```

*(Lưu ý: Nếu GitHub yêu cầu đăng nhập, trình duyệt sẽ mở popup xác thực GitHub Personal Access Token hoặc GitHub Desktop để xác nhận).*

---

## 🌐 5. CÁCH BẬT GITHUB PAGES (XEM WEB TRỰC TIẾP ONLINE)
Sau khi push lên GitHub, bạn có thể biến trang web thành link chạy online miễn phí:
1. Vào repository trên GitHub -> Chọn tab **Settings**.
2. Chọn mục **Pages** ở thanh menu bên trái.
3. Ở phần **Branch**, chọn `main` và thư mục `/ (root)` -> Nhấn **Save**.
4. Chờ 1-2 phút, bạn sẽ nhận được đường link website online để nộp bài cho giảng viên!
