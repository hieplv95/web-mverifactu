# Website Verifactura

Website tĩnh bằng tiếng Việt cho chủ tiệm nail tại Tây Ban Nha. Dự án có thể chạy và triển khai riêng với Node.js 22, không cần cài package.

```sh
npm run build
npm run preview
```

Mở `http://127.0.0.1:4175/`. Để xuất bản trên hosting tĩnh, phục vụ nội dung trong `dist/`. Các URL thư mục dùng `index.html` và dấu `/` cuối URL.

## Nội dung tìm kiếm

| Trang | Chủ đề tìm kiếm |
| --- | --- |
| `/` | Verifactura, phần mềm tính tiền và tính IVA cho tiệm nail tại Tây Ban Nha |
| `/phan-mem-tinh-tien-tiem-nail/` | Quy trình tính tiền tại quầy, in vé và chốt doanh thu tiệm nail |
| `/cach-tinh-iva-tay-ban-nha/` | Cách tách IVA từ giá đã gồm thuế, ví dụ IVA 21% |
| `/hoa-don-verifactu-tay-ban-nha/` | Hóa đơn VERI*FACTU, mã QR và gửi bản ghi đến AEAT |

`site.json` chứa URL chính thức và email liên hệ. Khi chuyển tên miền, cập nhật `url` hoặc đặt biến `SITE_URL` khi build. Trang tĩnh, canonical, Open Graph, dữ liệu có cấu trúc, `sitemap.xml` và `robots.txt` được tạo cùng lúc. URL xem riêng của Sites yêu cầu đăng nhập. Khi có URL công khai, xác minh tên miền trong Google Search Console và gửi `/sitemap.xml` để Google có thể phát hiện các trang.

Email mặc định dùng địa chỉ công khai của Nails Trendy. Bản minh họa trên trang chủ chạy trong trình duyệt và dùng dữ liệu mẫu.

Ảnh quầy tính tiền trong `public/assets/` được tạo bằng ImageGen. Phông Inter được phân phối kèm giấy phép OFL.
