const aeat = 'https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/preguntas-frecuentes/sistemas-verifactu.html';
const aeatQr = 'https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/preguntas-frecuentes/posibilidad-remision-informacion-factura-parte-receptor.html';
const aeatIva = 'https://sede.agenciatributaria.gob.es/Sede/iva/regimenes-tributacion-iva/regimen-general.html';

export const articles = [
  {
    path: '/phan-mem-tinh-tien-tiem-nail/',
    category: 'Tính tiền tại quầy',
    title: 'Phần mềm tính tiền tiệm nail tiếng Việt tại Tây Ban Nha',
    heading: 'Phần mềm tính tiền cho tiệm nail tại Tây Ban Nha',
    summary: 'Từ bảng giá dịch vụ đến chốt doanh thu cuối ngày, đây là quy trình một chủ tiệm có thể thực hiện với Verifactura.',
    description: 'Xem cách dùng phần mềm tính tiền tiệm nail Verifactura tại Tây Ban Nha để chọn dịch vụ, ghi nhận thanh toán, in hóa đơn QR và xuất doanh thu.',
    body: `
      <h2>Chuẩn bị bảng giá và danh sách thợ</h2>
      <p>Đặt tên dịch vụ theo cách cả tiệm đang sử dụng, như sơn gel tay, chăm sóc chân hoặc tháo gel. Nhập giá đã gồm IVA và nhóm các dịch vụ để nhân viên dễ tìm. Tạo danh sách thợ nếu bạn muốn theo dõi doanh thu theo người thực hiện.</p>
      <h2>Tính tiền cho từng lượt khách</h2>
      <ol>
        <li><strong>Chọn dịch vụ và số lượng.</strong> Phần mềm cộng giá từng mục trong đơn và hiển thị tổng tiền khách cần trả.</li>
        <li><strong>Chọn thợ và hình thức thanh toán.</strong> Ghi nhận giao dịch là tiền mặt hoặc thẻ để đối soát cuối ngày.</li>
        <li><strong>Lập và in hóa đơn.</strong> Chọn vé đơn giản F2 hoặc nhập thông tin khách để lập hóa đơn đầy đủ F1. Bản in có mã QR. Android hỗ trợ máy in nhiệt Bluetooth LE tương thích khổ 58 mm, còn bản web in qua trình duyệt.</li>
      </ol>
      <div class="article-note"><h2>Ví dụ một lượt khách</h2><p>Sơn gel tay 24,20 € và chăm sóc chân 12,10 € có tổng là 36,30 €. Ở mức IVA 21%, hóa đơn thể hiện 30,00 € trước thuế và 6,30 € tiền IVA.</p><p><a href="/#demo">Thử thay đổi dịch vụ trong đơn hàng mẫu</a></p></div>
      <h2>Kiểm tra doanh thu khi đóng tiệm</h2>
      <p>Chọn kỳ báo cáo, xem doanh thu sau hoàn tiền và so sánh tiền mặt với giao dịch thẻ. Báo cáo theo thợ và dịch vụ giúp đối chiếu các lượt đã làm. File CSV gồm các trường như số hóa đơn, phương thức thanh toán, giá trước thuế, IVA và tổng tiền.</p>
      <p><a href="/hoa-don-verifactu-tay-ban-nha/">Xem cách Verifactura gửi bản ghi hóa đơn đến AEAT</a>.</p>`,
  },
  {
    path: '/cach-tinh-iva-tay-ban-nha/',
    category: 'Thuế IVA',
    title: 'Cách tính IVA ở Tây Ban Nha từ giá đã gồm thuế',
    heading: 'Cách tính IVA ở Tây Ban Nha từ giá đã gồm thuế',
    summary: 'Tách giá trước thuế và số IVA trên hóa đơn bằng một ví dụ từ bảng giá tiệm nail.',
    description: 'Công thức tách IVA từ giá đã gồm thuế ở Tây Ban Nha, ví dụ tính IVA 21% và cách xem giá trước thuế trong Verifactura.',
    body: `
      <h2>IVA là gì?</h2>
      <p>IVA là thuế giá trị gia tăng tại Tây Ban Nha, viết tắt của <em>Impuesto sobre el Valor Añadido</em>. Mức thông thường là 21%. Mức áp dụng phụ thuộc vào loại giao dịch và quy định liên quan. <a href="${aeatIva}">Xem hướng dẫn IVA của AEAT</a>.</p>
      <h2>Công thức tách IVA từ giá khách trả</h2>
      <div class="article-note"><p><strong>Giá trước thuế = tổng tiền đã gồm IVA ÷ (1 + thuế suất)</strong></p><p><strong>Tiền IVA = tổng tiền đã gồm IVA − giá trước thuế</strong></p></div>
      <p>Trong ví dụ thuế suất 21%, chia tổng tiền cho 1,21. Với tổng tiền 36,30 €, giá trước thuế là 30,00 € và tiền IVA là 6,30 €. Khi dùng số tiền trên hóa đơn, làm tròn giá trước thuế đến cent rồi lấy phần chênh lệch để ba con số khớp nhau.</p>
      <div class="table-wrap"><table><caption>Ví dụ với mức IVA 21%</caption><thead><tr><th scope="col">Khách trả</th><th scope="col">Trước thuế</th><th scope="col">Tiền IVA</th></tr></thead><tbody><tr><td>12,10 €</td><td>10,00 €</td><td>2,10 €</td></tr><tr><td>24,20 €</td><td>20,00 €</td><td>4,20 €</td></tr><tr><td>36,30 €</td><td>30,00 €</td><td>6,30 €</td></tr></tbody></table></div>
      <h2>Verifactura hiển thị số liệu IVA ở đâu?</h2>
      <p>Phần mềm dùng mức IVA của tiệm khi lập hóa đơn từ giá dịch vụ đã gồm thuế. Bạn có thể xem số tiền trước thuế, IVA và tổng tiền trong chi tiết hóa đơn, báo cáo doanh thu và file CSV.</p>
      <p><a href="/#demo">Thử tách IVA trên một đơn mẫu</a>.</p>`,
  },
  {
    path: '/hoa-don-verifactu-tay-ban-nha/',
    category: 'Hóa đơn & AEAT',
    title: 'Hóa đơn VERI*FACTU tại Tây Ban Nha cho tiệm nail',
    heading: 'Hóa đơn VERI*FACTU tại Tây Ban Nha',
    summary: 'Tìm hiểu hóa đơn có mã QR, bản ghi gửi đến AEAT và các bước kiểm tra trước khi dùng tại quầy.',
    description: 'Giải thích VERI*FACTU cho chủ tiệm nail tại Tây Ban Nha: mã QR, bản ghi hóa đơn gửi AEAT, vé F2 và hóa đơn F1.',
    body: `
      <h2>VERI*FACTU là gì?</h2>
      <p>VERI*FACTU là chế độ trong đó phần mềm lập hóa đơn gửi các bản ghi hóa đơn đến Agencia Tributaria (AEAT). Tại quầy, khách nhận hóa đơn có mã QR để đối chiếu thông tin qua dịch vụ của AEAT. <a href="${aeat}">Xem giải thích về VERI*FACTU</a> và <a href="${aeatQr}">hướng dẫn mã QR của AEAT</a>.</p>
      <h2>Vé F2 và hóa đơn F1 trong Verifactura</h2>
      <dl class="article-definitions"><dt>F2 · Factura simplificada</dt><dd>Vé đơn giản dùng cho giao dịch đủ điều kiện lập hóa đơn đơn giản.</dd><dt>F1 · Factura completa</dt><dd>Hóa đơn đầy đủ có thông tin người nhận. Tại quầy, nhập thông tin khách và mã số định danh phù hợp trước khi lập.</dd></dl>
      <p>Khi hoàn tiền cho một phần hoặc toàn bộ giao dịch, Verifactura liên kết hóa đơn điều chỉnh với hóa đơn gốc. Trong lịch sử hóa đơn, chủ tiệm có thể mở chi tiết để xem các bản ghi liên quan và kết quả xử lý.</p>
      <h2>Chuẩn bị trước khi gửi bản ghi thật</h2>
      <ol>
        <li>Kiểm tra NIF và thông tin xuất hóa đơn của tiệm.</li>
        <li>Thiết lập chứng thư số cho phương án gửi và kiểm tra trong môi trường <em>pruebas</em>.</li>
        <li>Lập một hóa đơn mẫu, kiểm tra bản in QR và đọc phản hồi của AEAT trước khi chuyển sang môi trường thật.</li>
      </ol>
      <div class="article-note"><h2>Gửi bản ghi và kê khai IVA</h2><p>Đây là hai nghiệp vụ riêng. Bạn có thể xuất dữ liệu bán hàng từ Verifactura để đối soát với kế toán khi chuẩn bị kê khai.</p></div>
      <p><a href="/cach-tinh-iva-tay-ban-nha/">Xem cách đọc giá trước thuế và IVA trên hóa đơn</a>.</p>`,
  },
];
