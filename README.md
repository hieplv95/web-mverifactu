# Website Mverifactu

Website tĩnh ba ngôn ngữ (Tây Ban Nha mặc định, Việt, Anh) cho chủ tiệm nail tại Tây Ban Nha. Dự án có thể chạy và triển khai riêng với Node.js 22, không cần cài package.

```sh
npm run build
npm run preview
```

Mở `http://127.0.0.1:4175/`. Để xuất bản trên hosting tĩnh, phục vụ nội dung trong `dist/`. Các URL thư mục dùng `index.html` và dấu `/` cuối URL.

## Nội dung tìm kiếm

| Chủ đề | Tây Ban Nha | Việt | Anh |
| --- | --- | --- | --- |
| Trang chủ | `/` | `/vi/` | `/en/` |
| Tính tiền tại quầy | `/programa-facturacion-salon-de-unas/` | `/vi/phan-mem-tinh-tien-tiem-nail/` | `/en/nail-salon-checkout-software-spain/` |
| Tách IVA từ giá đã gồm thuế | `/calcular-iva-incluido/` | `/vi/cach-tinh-iva-tay-ban-nha/` | `/en/calculate-spanish-vat-iva/` |
| Hóa đơn VERI*FACTU | `/factura-verifactu-salon-de-unas/` | `/vi/hoa-don-verifactu-tay-ban-nha/` | `/en/verifactu-invoice-nail-salon/` |

Nội dung nằm trong `content/es.mjs`, `content/vi.mjs`, `content/en.mjs` với cùng cấu trúc. Sửa chữ ở một file thì sửa hai file còn lại. Địa chỉ tiếng Việt cũ (không có `/vi/`) tự chuyển sang địa chỉ mới.

Giá nằm trong `content/pricing.mjs` (chưa gồm IVA, tính bằng cent), giá gồm IVA tự tính. Tên gói và tính năng nằm ở `pricing` của từng file ngôn ngữ.

Trang pháp lý nằm trong `content/legal/` (bản tiếng Tây Ban Nha là bản chính). Thông tin công ty ở `content/company.mjs`. `content/declaracion.mjs` chép từ app `nails-pos`, cập nhật khi app đổi phiên bản hoặc đã ký.

`site.json` chứa URL chính thức và email liên hệ. Khi chuyển tên miền, cập nhật `url` hoặc đặt biến `SITE_URL` khi build. Trang tĩnh, canonical, Open Graph, dữ liệu có cấu trúc, `sitemap.xml` và `robots.txt` được tạo cùng lúc. URL xem riêng của Sites yêu cầu đăng nhập. Khi có URL công khai, xác minh tên miền trong Google Search Console và gửi `/sitemap.xml` để Google có thể phát hiện các trang.

Email mặc định dùng địa chỉ công khai của Nails Trendy. Bản minh họa trên trang chủ chạy trong trình duyệt và dùng dữ liệu mẫu.

Giao diện bám theo logo Mverifactu: xanh dương `#0044c0`, navy `#002454`, xanh lá `#00ab48`. Logo gốc nằm trong app (`nails-pos/assets/logo.png`). Ảnh chia sẻ là `public/assets/mverifactu-social-es.jpg`, `-vi.jpg` và `-en.jpg`. Phông Be Vietnam Pro được phân phối kèm giấy phép OFL.
