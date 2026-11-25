import legal from './legal/vi.mjs';
import { aeat } from './links.mjs';

export default {
  lang: 'vi',
  name: 'Tiếng Việt',
  ogLocale: 'vi_VN',
  home: '/vi/',
  legal,
  title: 'Phần mềm tính tiền tiệm nail tại Tây Ban Nha | Mverifactu',
  description: 'Mverifactu là phần mềm tính tiền tiệm nail bằng tiếng Việt tại Tây Ban Nha. Tính IVA, in hóa đơn QR, gửi bản ghi VERI*FACTU đến AEAT và xem báo cáo doanh thu.',
  ui: {
    homeLabel: 'Mverifactu, trang chủ',
    skip: 'Đến nội dung chính',
    menuLabel: 'Điều hướng chính',
    menuOpen: 'Mở menu',
    menuClose: 'Đóng menu',
    language: 'Ngôn ngữ',
    nav: { invoices: 'Hóa đơn', reports: 'Báo cáo', pricing: 'Bảng giá', guides: 'Hướng dẫn', faq: 'Hỏi đáp' },
    trial: 'Dùng thử 14 ngày',
    trialSubject: 'Mverifactu: dùng thử 14 ngày',
    socialAlt: 'Mverifactu: một lần bấm, in hóa đơn, gửi AEAT',
    qrLabel: 'Mã QR mẫu',
  },
  hero: {
    lines: ['Một lần bấm:', 'in hóa đơn,', 'gửi AEAT.'],
    text: 'Phần mềm tính tiền VERI*FACTU bằng tiếng Việt cho tiệm nail tại Tây Ban Nha. Dùng trên web và Android.',
    demoLink: 'Bấm thử bên dưới',
  },
  demo: {
    label: 'Bản minh họa',
    note: 'Dữ liệu mẫu',
    sell: 'Bán hàng',
    invoice: 'Hóa đơn',
    services: ['Sơn gel tay', 'Chăm sóc chân', 'Đắp bột acrylic', 'Dặm bột', 'Tháo gel', 'Vẽ móng'],
    payment: 'Thanh toán',
    card: 'Thẻ',
    cash: 'Tiền mặt',
    base: 'Trước thuế',
    tax: 'IVA 21%',
    total: 'Tổng',
    issue: 'Xuất và in',
    idle: 'Bản minh họa, không gửi AEAT.',
    empty: 'Chọn ít nhất một dịch vụ.',
    done: 'Đã xuất T26-000128. Vé mẫu, không gửi AEAT.',
  },
  deadlines: {
    heading: 'Khi nào tiệm phải dùng phần mềm đạt chuẩn?',
    text: 'Tiệm xuất hóa đơn bằng phần mềm phải chuyển sang phần mềm đạt chuẩn của AEAT. VERI*FACTU là một cách đáp ứng.',
    source: 'Xem thông báo của AEAT',
    dates: ['1/1/2027', '1/7/2027'],
    company: 'Công ty (SL)',
    selfEmployed: 'Autónomo',
    days: 'Còn {n} ngày',
    day: 'Còn 1 ngày',
    past: 'Đã áp dụng',
  },
  flow: {
    heading: 'Hóa đơn đi đâu sau khi bạn bấm?',
    steps: [
      ['Tại quầy', 'Chọn dịch vụ, thợ, thẻ hoặc tiền mặt. IVA tự tách từ giá đã gồm thuế.'],
      ['Trên tay khách', 'Vé có số thứ tự và mã QR tributario để khách kiểm tra tại AEAT.'],
      ['Tới AEAT', 'Bản ghi vào hàng đợi và tự gửi lại khi AEAT bận. Trạng thái hiện trong app.'],
    ],
    customerPays: 'Khách trả',
    invoiceTypes: 'Vé đơn giản F2, hoặc F1 khi khách cần tên và NIF.',
    waiting: 'Chờ gửi',
    received: 'AEAT đã nhận',
  },
  report: {
    chart: 'Doanh thu tuần, gồm IVA (số liệu mẫu)',
    days: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
    card: 'Thẻ 64%',
    cash: 'Tiền mặt 36%',
    heading: 'Đóng tiệm là biết hôm nay được bao nhiêu.',
    items: ['Doanh thu sau hoàn tiền, theo ngày, tuần, tháng', 'Tiền mặt và thẻ tách riêng để đối soát', 'Theo từng thợ và từng dịch vụ', 'Xuất CSV gửi kế toán'],
  },
  specs: {
    heading: 'Hợp với thiết bị tiệm đang có.',
    rows: [
      ['Thiết bị', 'Trình duyệt web, điện thoại và máy tính bảng Android'],
      ['Máy in', 'Máy in nhiệt 58 mm Bluetooth LE, hoặc in từ trình duyệt'],
      ['Hóa đơn', 'Vé F2, hóa đơn đầy đủ F1, hoàn tiền, hủy vé xuất nhầm'],
      ['Ngôn ngữ', 'Tiếng Tây Ban Nha, tiếng Việt, tiếng Anh'],
    ],
  },
  pricing: {
    heading: 'Bảng giá',
    text: 'Dùng thử 14 ngày không mất tiền, sau đó mới chọn gói.',
    featured: 'Nên chọn',
    perMonth: '/tháng + IVA',
    withVat: '{price}/tháng gồm IVA',
    choose: 'Chọn gói {plan}',
    subject: 'Mverifactu: gói {plan}',
    onlyHere: 'Chỉ có ở gói này',
    plans: [
      {
        name: 'Cơ bản',
        text: 'Cho tiệm tính tiền trên một máy và cần hóa đơn đúng quy định.',
        items: ['1 thiết bị', 'Tính tiền theo dịch vụ trên web và Android', 'Hóa đơn VERI*FACTU có QR', 'Hoàn tiền và hủy vé xuất nhầm', 'Doanh thu theo ngày, tuần, tháng', 'Tiền mặt và thẻ tách riêng'],
      },
      {
        name: 'Chuyên nghiệp',
        text: 'Cho tiệm có thợ, muốn biết ai làm được bao nhiêu.',
        items: ['Mọi thứ của gói Cơ bản', '3 thiết bị', 'Doanh thu theo từng thợ', 'Doanh thu theo dịch vụ', 'Ảnh mẫu trong danh sách dịch vụ', 'Xuất CSV gửi kế toán'],
      },
      {
        name: 'Doanh nghiệp',
        text: 'Cho tiệm có nhiều quầy tính tiền.',
        items: ['Mọi thứ của gói Chuyên nghiệp', '5 thiết bị'],
        extras: ['Hỗ trợ cài máy in và danh sách dịch vụ', 'Ưu tiên hỗ trợ'],
      },
    ],
    license: {
      heading: 'Muốn trả một lần?',
      text: 'Giấy phép trọn đời giá {price} + IVA ({priceVat} gồm IVA). Không có phí bắt buộc hằng tháng, kèm 12 tháng cập nhật.',
      buy: 'Mua giấy phép',
      subject: 'Mverifactu: giấy phép trọn đời',
      items: ['Toàn bộ tính năng của Mverifactu', 'Không giới hạn thời gian', '12 tháng cập nhật', 'Cải tiến, sửa lỗi và thay đổi theo luật trong thời gian đó', '30 ngày hỗ trợ kỹ thuật từ ngày mua', '1 thiết bị'],
      afterHeading: 'Sau năm đầu tiên',
      after: [
        'Giấy phép không hết hạn. Bạn vẫn dùng các tính năng có trong thời gian cập nhật của mình.',
        'Muốn nhận tiếp cải tiến, sửa lỗi và thay đổi theo luật, bạn gia hạn với giá <b>{renewal} + IVA mỗi năm</b> ({renewalVat} gồm IVA). <b>Gia hạn là tùy chọn.</b>',
        'Bạn có 30 ngày sau khi hết hạn để gia hạn với giá đó. Sau thời hạn này, mở lại cập nhật giá {recovery} + IVA ({recoveryVat} gồm IVA), gồm 12 tháng từ ngày trả tiền.',
      ],
      faqHeading: 'Hỏi đáp về giấy phép trọn đời',
      questions: [
        ['Hết năm đầu thì sao?', 'Giấy phép vẫn dùng được. Bạn không nhận cập nhật mới cho đến khi gia hạn.'],
        ['Có phải gia hạn mỗi năm không?', 'Không. Gia hạn là tùy chọn và không tự động trừ tiền. Nếu AEAT đổi yêu cầu, phần điều chỉnh nằm trong các bản cập nhật.'],
        ['Gia hạn gồm những gì?', 'Thêm 12 tháng cải tiến, sửa lỗi và thay đổi theo luật với giá {renewal} + IVA ({renewalVat} gồm IVA).'],
      ],
    },
  },
  guidesHeading: 'Hướng dẫn cho chủ tiệm',
  faqHeading: 'Câu hỏi thường gặp',
  questions: [
    ['Mverifactu dành cho ai?', 'Chủ tiệm nail người Việt tại Tây Ban Nha, cần tính tiền theo dịch vụ, ghi nhận tiền mặt hoặc thẻ và xuất hóa đơn VERI*FACTU. Giao diện có tiếng Việt, tiếng Tây Ban Nha và tiếng Anh.'],
    ['Dùng thử 14 ngày như thế nào?', 'Gửi email cho Nails Trendy, chúng tôi tạo tài khoản cho tiệm. Dùng thử không thu tiền, và tiệm được nhắc trước 5 ngày khi sắp hết hạn.'],
    ['IVA được tính thế nào?', 'Bạn nhập giá dịch vụ đã gồm IVA. Khi lập hóa đơn, Mverifactu tách giá trước thuế và số IVA theo mức thuế của tiệm. Ví dụ, tổng 36,30 € ở mức 21% là 30,00 € trước thuế và 6,30 € IVA.'],
    ['VERI*FACTU có thay cho việc nộp tờ khai IVA không?', 'Không. Gửi bản ghi hóa đơn đến AEAT và nộp tờ khai IVA là hai việc riêng. Báo cáo và file CSV giúp bạn đối soát doanh thu và gửi số liệu cho kế toán.'],
    ['In hóa đơn bằng máy nào?', 'Trên Android, Mverifactu hỗ trợ máy in nhiệt 58 mm Bluetooth LE. Trên web, bạn in qua hộp thoại của trình duyệt.'],
    ['Có thể thử trước khi gửi hóa đơn thật không?', 'Có. Bản minh họa trên trang này dùng dữ liệu mẫu. Khi thiết lập tiệm, có thể dùng môi trường pruebas để kiểm tra việc gửi bản ghi trước khi chuyển sang môi trường thật.'],
  ],
  footer: {
    heading: 'Thử 14 ngày với tiệm của bạn.',
    text: 'Không thu tiền trong thời gian thử. Viết tiếng Việt cho chúng tôi.',
    cta: 'Gửi email dùng thử',
    maker: 'Sản phẩm của Nails Trendy ES SL, Barcelona',
  },
  articleUi: {
    breadcrumbs: 'Đường dẫn',
    home: 'Trang chủ',
    guides: 'Hướng dẫn',
    tryHeading: 'Thử một lượt tính tiền',
    tryLink: 'Mở bản minh họa',
    related: 'Đọc thêm',
  },
  articles: [
    {
      id: 'till',
      path: '/vi/phan-mem-tinh-tien-tiem-nail/',
      category: 'Tính tiền tại quầy',
      title: 'Phần mềm tính tiền tiệm nail tiếng Việt tại Tây Ban Nha',
      heading: 'Phần mềm tính tiền cho tiệm nail tại Tây Ban Nha',
      summary: 'Từ bảng giá dịch vụ đến chốt doanh thu cuối ngày, đây là quy trình một chủ tiệm có thể thực hiện với Mverifactu.',
      description: 'Xem cách dùng phần mềm tính tiền tiệm nail Mverifactu tại Tây Ban Nha để chọn dịch vụ, ghi nhận thanh toán, in hóa đơn QR và xuất doanh thu.',
      body: `
      <h2>Chuẩn bị bảng giá và danh sách thợ</h2>
      <p>Đặt tên dịch vụ theo cách cả tiệm đang sử dụng, như sơn gel tay, chăm sóc chân hoặc tháo gel. Nhập giá đã gồm IVA và nhóm các dịch vụ để nhân viên dễ tìm. Tạo danh sách thợ nếu bạn muốn theo dõi doanh thu theo người thực hiện.</p>
      <h2>Tính tiền cho từng lượt khách</h2>
      <ol>
        <li><strong>Chọn dịch vụ và số lượng.</strong> Phần mềm cộng giá từng mục trong đơn và hiển thị tổng tiền khách cần trả.</li>
        <li><strong>Chọn thợ và hình thức thanh toán.</strong> Ghi nhận giao dịch là tiền mặt hoặc thẻ để đối soát cuối ngày.</li>
        <li><strong>Lập và in hóa đơn.</strong> Chọn vé đơn giản F2 hoặc nhập thông tin khách để lập hóa đơn đầy đủ F1. Bản in có mã QR. Android hỗ trợ máy in nhiệt Bluetooth LE tương thích khổ 58 mm, còn bản web in qua trình duyệt.</li>
      </ol>
      <div class="article-note"><h2>Ví dụ một lượt khách</h2><p>Sơn gel tay 24,20 € và chăm sóc chân 12,10 € có tổng là 36,30 €. Ở mức IVA 21%, hóa đơn thể hiện 30,00 € trước thuế và 6,30 € tiền IVA.</p><p><a href="/vi/#demo">Thử thay đổi dịch vụ trong đơn hàng mẫu</a></p></div>
      <h2>Kiểm tra doanh thu khi đóng tiệm</h2>
      <p>Chọn kỳ báo cáo, xem doanh thu sau hoàn tiền và so sánh tiền mặt với giao dịch thẻ. Báo cáo theo thợ và dịch vụ giúp đối chiếu các lượt đã làm. File CSV gồm các trường như số hóa đơn, phương thức thanh toán, giá trước thuế, IVA và tổng tiền.</p>
      <p><a href="/vi/hoa-don-verifactu-tay-ban-nha/">Xem cách Mverifactu gửi bản ghi hóa đơn đến AEAT</a>.</p>`,
    },
    {
      id: 'iva',
      path: '/vi/cach-tinh-iva-tay-ban-nha/',
      category: 'Thuế IVA',
      title: 'Cách tính IVA ở Tây Ban Nha từ giá đã gồm thuế',
      heading: 'Cách tính IVA ở Tây Ban Nha từ giá đã gồm thuế',
      summary: 'Tách giá trước thuế và số IVA trên hóa đơn bằng một ví dụ từ bảng giá tiệm nail.',
      description: 'Công thức tách IVA từ giá đã gồm thuế ở Tây Ban Nha, ví dụ tính IVA 21% và cách xem giá trước thuế trong Mverifactu.',
      body: `
      <h2>IVA là gì?</h2>
      <p>IVA là thuế giá trị gia tăng tại Tây Ban Nha, viết tắt của <em>Impuesto sobre el Valor Añadido</em>. Mức thông thường là 21%. Mức áp dụng phụ thuộc vào loại giao dịch và quy định liên quan. <a href="${aeat.iva}">Xem hướng dẫn IVA của AEAT</a>.</p>
      <h2>Công thức tách IVA từ giá khách trả</h2>
      <div class="article-note"><p><strong>Giá trước thuế = tổng tiền đã gồm IVA ÷ (1 + thuế suất)</strong></p><p><strong>Tiền IVA = tổng tiền đã gồm IVA − giá trước thuế</strong></p></div>
      <p>Trong ví dụ thuế suất 21%, chia tổng tiền cho 1,21. Với tổng tiền 36,30 €, giá trước thuế là 30,00 € và tiền IVA là 6,30 €. Khi dùng số tiền trên hóa đơn, làm tròn giá trước thuế đến cent rồi lấy phần chênh lệch để ba con số khớp nhau.</p>
      <div class="table-wrap"><table><caption>Ví dụ với mức IVA 21%</caption><thead><tr><th scope="col">Khách trả</th><th scope="col">Trước thuế</th><th scope="col">Tiền IVA</th></tr></thead><tbody><tr><td>12,10 €</td><td>10,00 €</td><td>2,10 €</td></tr><tr><td>24,20 €</td><td>20,00 €</td><td>4,20 €</td></tr><tr><td>36,30 €</td><td>30,00 €</td><td>6,30 €</td></tr></tbody></table></div>
      <h2>Mverifactu hiển thị số liệu IVA ở đâu?</h2>
      <p>Phần mềm dùng mức IVA của tiệm khi lập hóa đơn từ giá dịch vụ đã gồm thuế. Bạn có thể xem số tiền trước thuế, IVA và tổng tiền trong chi tiết hóa đơn, báo cáo doanh thu và file CSV.</p>
      <p><a href="/vi/#demo">Thử tách IVA trên một đơn mẫu</a>.</p>`,
    },
    {
      id: 'verifactu',
      path: '/vi/hoa-don-verifactu-tay-ban-nha/',
      category: 'Hóa đơn & AEAT',
      title: 'Hóa đơn VERI*FACTU tại Tây Ban Nha cho tiệm nail',
      heading: 'Hóa đơn VERI*FACTU tại Tây Ban Nha',
      summary: 'Tìm hiểu hóa đơn có mã QR, bản ghi gửi đến AEAT và các bước kiểm tra trước khi dùng tại quầy.',
      description: 'Giải thích VERI*FACTU cho chủ tiệm nail tại Tây Ban Nha: mã QR, bản ghi hóa đơn gửi AEAT, vé F2 và hóa đơn F1.',
      body: `
      <h2>VERI*FACTU là gì?</h2>
      <p>VERI*FACTU là chế độ trong đó phần mềm lập hóa đơn gửi các bản ghi hóa đơn đến Agencia Tributaria (AEAT). Tại quầy, khách nhận hóa đơn có mã QR để đối chiếu thông tin qua dịch vụ của AEAT. <a href="${aeat.verifactu}">Xem giải thích về VERI*FACTU</a> và <a href="${aeat.qr}">hướng dẫn mã QR của AEAT</a>.</p>
      <h2>Vé F2 và hóa đơn F1 trong Mverifactu</h2>
      <dl class="article-definitions"><dt>F2 · Factura simplificada</dt><dd>Vé đơn giản dùng cho giao dịch đủ điều kiện lập hóa đơn đơn giản.</dd><dt>F1 · Factura completa</dt><dd>Hóa đơn đầy đủ có thông tin người nhận. Tại quầy, nhập thông tin khách và mã số định danh phù hợp trước khi lập.</dd></dl>
      <p>Khi hoàn tiền cho một phần hoặc toàn bộ giao dịch, Mverifactu liên kết hóa đơn điều chỉnh với hóa đơn gốc. Trong lịch sử hóa đơn, chủ tiệm có thể mở chi tiết để xem các bản ghi liên quan và kết quả xử lý.</p>
      <h2>Chuẩn bị trước khi gửi bản ghi thật</h2>
      <ol>
        <li>Kiểm tra NIF và thông tin xuất hóa đơn của tiệm.</li>
        <li>Thiết lập chứng thư số cho phương án gửi và kiểm tra trong môi trường <em>pruebas</em>.</li>
        <li>Lập một hóa đơn mẫu, kiểm tra bản in QR và đọc phản hồi của AEAT trước khi chuyển sang môi trường thật.</li>
      </ol>
      <div class="article-note"><h2>Gửi bản ghi và kê khai IVA</h2><p>Đây là hai nghiệp vụ riêng. Bạn có thể xuất dữ liệu bán hàng từ Mverifactu để đối soát với kế toán khi chuẩn bị kê khai.</p></div>
      <p><a href="/vi/cach-tinh-iva-tay-ban-nha/">Xem cách đọc giá trước thuế và IVA trên hóa đơn</a>.</p>`,
    },
  ],
};
