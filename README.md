# BÁO CÁO ĐỒ ÁN CUỐI KỲ MÔN THIẾT KẾ WEB

## Đề tài: Xây dựng Website Thương mại Điện tử Kinh doanh Đồ Công nghệ & Linh kiện Máy tính (CyberTech Store)

---

### THÔNG TIN CHUNG
- **Môn học:** Thiết kế Web / Lập trình Web
- **Đề tài:** Website thương mại điện tử (bán đồ công nghệ, linh kiện máy tính)
- **Sinh viên thực hiện:** Redrasil
- **Mã nguồn:** [https://github.com/Redrasil/cybertech-store](https://github.com/Redrasil/cybertech-store)

---

### 1. MỤC TIÊU ĐỀ TÀI
Xây dựng một website thương mại điện tử hoàn chỉnh phục vụ việc giới thiệu, tìm kiếm, đặt mua các sản phẩm công nghệ và linh kiện máy tính (CPU, VGA, RAM, Laptop, Gaming Gear,...). Dự án đáp ứng đầy đủ các yêu cầu môn học về giao diện tương thích đa thiết bị (Responsive), hiệu ứng động, tương tác người dùng và lưu trữ dữ liệu phía client bằng LocalStorage.

---

### 2. CÔNG NGHỆ SỬ DỤNG
- **HTML5:** Cấu trúc mã nguồn chuẩn ngữ nghĩa (semantic elements: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`).
- **CSS3:** 
  - Bố cục hiện đại sử dụng **Flexbox** và **CSS Grid**.
  - Biến CSS (CSS Variables) quản lý màu sắc, khoảng cách đồng bộ.
  - Media Queries xử lý Responsive tương thích với Desktop, Tablet và Mobile.
  - Keyframe Animations và Transitions cho các hiệu ứng chuyển động mượt mà.
- **JavaScript (ES6):**
  - Xử lý logic nghiệp vụ, điều hướng, giỏ hàng, bộ lọc sản phẩm, tìm kiếm từ khóa.
  - Xử lý xác thực người dùng (đăng ký, đăng nhập, đổi mật khẩu).
  - Sử dụng **Web Storage API (LocalStorage)** để lưu trữ danh sách sản phẩm, giỏ hàng, thông tin tài khoản và ý kiến góp ý của khách hàng mà không cần backend phức tạp.
- **Thư viện bên ngoài:**
  - Font Awesome 6 (icon hiển thị).
  - Google Fonts (Segoe UI / Roboto).

---

### 3. CẤU TRÚC THƯ MỤC DỰ ÁN

```text
cybertech-store/
│
├── index.html              # Trang chủ: banner, danh mục, sản phẩm nổi bật
├── products.html           # Trang danh sách sản phẩm: bộ lọc, tìm kiếm, phân loại
├── product-detail.html     # Trang chi tiết sản phẩm: thông số kỹ thuật, liên quan
├── upload-product.html     # Trang quản lý & đăng sản phẩm (lưu LocalStorage)
├── cart.html               # Trang giỏ hàng và form đặt hàng
├── about.html              # Trang giới thiệu về cửa hàng và thành viên
├── contact.html            # Trang liên hệ, bản đồ và form gửi góp ý
├── login.html              # Trang đăng nhập tài khoản
├── register.html           # Trang đăng ký thành viên mới
├── change-password.html    # Trang đổi mật khẩu người dùng
│
├── css/
│   ├── style.css           # Định dạng giao diện chính và các thành phần UI
│   └── responsive.css      # Tối ưu giao diện trên Mobile và Tablet
│
├── js/
│   ├── products-data.js    # Dữ liệu sản phẩm mặc định và hàm xử lý LocalStorage
│   └── main.js             # Logic giỏ hàng, xác thực, tìm kiếm, lọc, thông báo
│
├── images/                 # Thư mục lưu trữ hình ảnh tài nguyên
├── .gitignore              # Cấu hình bỏ qua các tệp không cần thiết khi commit
└── README.md               # Báo cáo tổng quan đồ án
```

---

### 4. MÔ TẢ CHI TIẾT CÁC TRANG & CHỨC NĂNG

#### 4.1. Trang chủ (`index.html`)
- Header tích hợp thanh tìm kiếm nhanh, nút đăng nhập/đăng xuất và biểu tượng giỏ hàng có đếm số lượng thời gian thực.
- Thanh menu điều hướng responsive (tự động chuyển thành menu hamburger trên điện thoại).
- Banner trình diễn sản phẩm chủ lực có animation chuyển động.
- Khối tiện ích dịch vụ: chính sách giao hàng, bảo hành chính hãng, lắp đặt miễn phí.
- Danh mục sản phẩm trực quan: VGA, CPU, Laptop, RAM, Màn hình, Gaming Gear.
- Danh sách sản phẩm bán chạy (Hot Deals) và sản phẩm mới cập bến.
- Đánh giá của khách hàng và chân trang (footer) đầy đủ thông tin pháp lý, liên hệ.

#### 4.2. Trang sản phẩm & dịch vụ (`products.html`)
- Hiển thị danh sách sản phẩm dưới dạng lưới (Grid layout).
- **Bộ lọc đa tiêu chí:**
  - Lọc theo danh mục linh kiện.
  - Lọc theo các khoảng giá (dưới 5 triệu, 5-15 triệu, 15-30 triệu, trên 30 triệu).
- **Tìm kiếm & Sắp xếp:**
  - Tìm kiếm thời gian thực theo tên hoặc mô tả sản phẩm.
  - Sắp xếp theo giá tăng dần, giá giảm dần hoặc theo tên A-Z.
- Tính năng xem nhanh (Quick View modal) hiển thị thông số tóm tắt mà không cần rời trang.
- Nút thêm nhanh vào giỏ hàng.

#### 4.3. Trang chi tiết sản phẩm (`product-detail.html`)
- Đọc tham số `id` từ URL (`?id=...`) để lấy đúng thông tin sản phẩm tương ứng từ LocalStorage.
- Hiển thị hình ảnh kích thước lớn, tình trạng kho, giá bán và giá niêm yết.
- Bảng thông số kỹ thuật chi tiết của linh kiện.
- Cho phép người dùng tùy chỉnh số lượng đặt mua, thêm vào giỏ hàng hoặc bấm "Mua ngay".
- Khối hiển thị các sản phẩm cùng danh mục liên quan.

#### 4.4. Trang upload sản phẩm (`upload-product.html`)
- **Đáp ứng yêu cầu đề bài: Mỗi sinh viên upload tối thiểu 5 sản phẩm, lưu trữ trong LocalStorage.**
- Form nhập liệu bao gồm:
  - Tên sản phẩm, danh mục, giá bán, giá khuyến mãi.
  - Tải ảnh lên trực tiếp từ máy tính (chuyển đổi sang định dạng Base64 qua FileReader API) hoặc dán đường dẫn ảnh Online.
  - Mô tả sản phẩm và thông số kỹ thuật chi tiết.
  - Tùy chọn đánh dấu sản phẩm HOT hoặc Mới.
- Bảng quản lý hiển thị toàn bộ danh sách sản phẩm đang lưu trong LocalStorage, hỗ trợ xóa từng sản phẩm hoặc khôi phục về dữ liệu mặc định.
- Tích hợp nút hỗ trợ nạp nhanh 5 sản phẩm mẫu để phục vụ việc kiểm thử nhanh trong quá trình chấm điểm.

#### 4.5. Trang giỏ hàng & thanh toán (`cart.html`)
- Liệt kê các sản phẩm đã chọn kèm hình ảnh, đơn giá, số lượng và tổng tiền từng món.
- Cho phép tăng, giảm số lượng hoặc xóa sản phẩm khỏi giỏ hàng.
- Tự động tính toán tổng tiền thanh toán theo thời gian thực.
- Form điền thông tin người nhận (Họ tên, số điện thoại, địa chỉ nhận hàng, phương thức thanh toán).
- Nút xác nhận đặt hàng có kiểm tra tính hợp lệ của dữ liệu đầu vào và làm mới giỏ hàng sau khi đặt thành công.

#### 4.6. Trang giới thiệu (`about.html`)
- Giới thiệu tổng quan về thương hiệu CyberTech, tầm nhìn, sứ mệnh và cam kết dịch vụ.
- Khối thông tin đồ án môn học và sinh viên thực hiện.

#### 4.7. Trang liên hệ & góp ý (`contact.html`)
- Thông tin địa chỉ showroom, hotline, email và giờ làm việc.
- Bản đồ tương tác vị trí cửa hàng tích hợp qua Google Maps iframe.
- **Form gửi ý kiến đóng góp:** Người dùng gửi nội dung phản hồi/thắc mắc. Dữ liệu được lưu trữ tự động vào LocalStorage và hiển thị ngay trên danh sách lịch sử góp ý phía dưới form.

#### 4.8. Quản lý tài khoản người dùng
- **Đăng ký (`register.html`):** Thu thập họ tên, email, mật khẩu. Kiểm tra trùng email và lưu thông tin vào mảng người dùng trong LocalStorage.
- **Đăng nhập (`login.html`):** Xác thực tài khoản với dữ liệu đã lưu. Sau khi đăng nhập thành công, trạng thái đăng nhập được lưu trữ và thanh điều hướng tự động hiển thị tên người dùng.
- **Đổi mật khẩu (`change-password.html`):** Kiểm tra phiên đăng nhập hiện tại, xác minh mật khẩu cũ trước khi cho phép cập nhật mật khẩu mới.

---

### 5. CÁC ĐIỂM NỔI BẬT THEO YÊU CẦU ĐỀ TÀI

1. **Thiết kế thích ứng (Responsive Design):**
   - Áp dụng các breakpoint chuẩn (Mobile < 480px, Tablet 768px - 1024px, Desktop > 1024px).
   - Tự động thay đổi số cột hiển thị của danh mục và sản phẩm, hỗ trợ cuộn bảng giỏ hàng trên màn hình nhỏ.
2. **Hiệu ứng động (Animations & Transitions):**
   - Hiệu ứng trôi nổi nhẹ nhàng ở banner, hiệu ứng phóng to ảnh khi hover qua thẻ sản phẩm.
   - Hộp thoại thông báo (Toast notifications) tự động trượt vào từ góc màn hình khi người dùng thực hiện thao tác (thêm giỏ hàng, đặt hàng, đăng nhập,...).
   - Modal xem nhanh với hiệu ứng mờ nền (backdrop blur).
3. **Tương tác người dùng & Xử lý dữ liệu:**
   - Hoàn toàn không bị mất dữ liệu khi tải lại trang nhờ cơ chế đồng bộ với LocalStorage.
   - Ràng buộc dữ liệu (validation) trên các form nhập liệu trước khi gửi.

---

### 6. HƯỚNG DẪN CHẠY DỰ ÁN
Dự án được xây dựng hoàn toàn bằng HTML, CSS và JavaScript thuần, không cần cài đặt môi trường server phức tạp:
1. Tải về hoặc clone repository:
   ```bash
   git clone https://github.com/Redrasil/cybertech-store.git
   ```
2. Mở tệp `index.html` trực tiếp bằng bất kỳ trình duyệt web hiện đại nào (Chrome, Edge, Firefox), hoặc sử dụng extension **Live Server** trên Visual Studio Code để trải nghiệm tốt nhất.
