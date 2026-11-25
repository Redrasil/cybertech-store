# ĐỒ ÁN CUỐI KỲ: WEBSITE THƯƠNG MẠI ĐIỆN TỬ (CYBERTECH STORE)

- **Môn học:** Thiết kế Web / Lập trình Web
- **Đề tài:** Website thương mại điện tử kinh doanh đồ công nghệ, linh kiện máy tính
- **Sinh viên:** Redrasil
- **Mã nguồn:** [https://github.com/Redrasil/cybertech-store](https://github.com/Redrasil/cybertech-store)

---

## 1. Giới thiệu & Công nghệ sử dụng
Website bán hàng công nghệ trực tuyến được xây dựng bằng các công nghệ web cơ bản phía client:
- **HTML5:** Cấu trúc ngữ nghĩa các trang.
- **CSS3:** Bố cục Flexbox, CSS Grid, Media Queries (Responsive) và Animation.
- **JavaScript (ES6):** Xử lý logic giỏ hàng, bộ lọc, tìm kiếm và xác thực người dùng.
- **LocalStorage API:** Lưu trữ dữ liệu sản phẩm, giỏ hàng, tài khoản và ý kiến góp ý ngay trên trình duyệt mà không cần backend.

---

## 2. Danh sách các trang chính
- `index.html`: Trang chủ (banner, danh mục, sản phẩm nổi bật, sản phẩm mới).
- `products.html`: Danh sách sản phẩm, lọc theo danh mục/giá, tìm kiếm và xem nhanh (modal).
- `product-detail.html`: Chi tiết thông số kỹ thuật sản phẩm, chọn số lượng và đặt mua.
- `upload-product.html`: **Upload sản phẩm mới lưu vào LocalStorage** (hỗ trợ tải ảnh từ máy tính hoặc link URL, quản lý danh sách sản phẩm đã upload).
- `cart.html`: Giỏ hàng, tăng/giảm số lượng, tính tiền và form đặt hàng.
- `about.html`: Trang giới thiệu cửa hàng và đồ án.
- `contact.html`: Thông tin liên hệ, bản đồ và form gửi góp ý (lưu LocalStorage).
- `login.html`, `register.html`, `change-password.html`: Quản lý tài khoản và phiên đăng nhập.

---

## 3. Tính năng nổi bật theo yêu cầu
- **Responsive design:** Tương thích hiển thị tốt trên máy tính, máy tính bảng và điện thoại (kèm menu hamburger trên mobile).
- **Hiệu ứng động (Animation):** Hiệu ứng trôi banner, hover phóng to ảnh, popup xem nhanh và thông báo toast trượt tự động.
- **Tương tác & Lưu trữ:** Dữ liệu sản phẩm (tối thiểu 5 sản phẩm upload), tài khoản, giỏ hàng và góp ý đều được lưu bền vững qua LocalStorage, không bị mất khi F5 tải lại trang.

---

## 4. Hướng dẫn chạy
Mở trực tiếp tệp `index.html` bằng trình duyệt web bất kỳ hoặc chạy qua extension **Live Server** trên VS Code.
