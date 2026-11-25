export default {
  navLabel: 'Thông tin pháp lý',
  updated: 'Cập nhật ngày 24/11/2026',
  precedence: 'Đây là bản dịch. Nếu có khác biệt, bản tiếng Tây Ban Nha được áp dụng.',
  rights: 'Giữ mọi quyền.',
  preferences: 'Tùy chọn cookie',
  declarationDraft: 'Văn bản chưa ký. Đây chưa phải tuyên bố trách nhiệm chính thức.',
  registryLabel: 'Đăng ký doanh nghiệp',
  pages: [
    {
      id: 'legal-notice',
      path: '/vi/thong-tin-phap-ly/',
      category: 'Thông tin pháp lý',
      description: 'Chủ sở hữu website Mverifactu, thông tin liên hệ và điều kiện sử dụng.',
      body: `
      <h2>Chủ sở hữu</h2>
      <dl class="article-definitions"><dt>Công ty</dt><dd>{name}</dd><dt>NIF</dt><dd>{nif}</dd><dt>Địa chỉ</dt><dd>{address}</dd><dt>Email</dt><dd><a href="mailto:{email}">{email}</a></dd>{registry}</dl>
      <h2>Mục đích của website</h2>
      <p>Website giới thiệu Mverifactu, phần mềm tính tiền và xuất hóa đơn cho tiệm nail. Bạn có thể gửi email để dùng thử hoặc mua. Khi dùng website, bạn chấp nhận các điều kiện này.</p>
      <h2>Nội dung</h2>
      <p>Các bài hướng dẫn là thông tin chung, không thay cho tư vấn của kế toán. Bản minh họa dùng dữ liệu mẫu, không xuất hóa đơn và không gửi gì đến AEAT.</p>
      <p>Mverifactu không thuộc Agencia Tributaria và không được cơ quan này bảo chứng. VERI*FACTU là tên Agencia Tributaria đặt cho các hệ thống xuất hóa đơn có thể kiểm chứng.</p>
      <h2>Sở hữu trí tuệ</h2>
      <p>Nội dung, thiết kế, logo và phần mềm thuộc {name} hoặc được dùng có phép. Không được sao chép, phân phối với mục đích thương mại khi chưa có đồng ý bằng văn bản. Phông Be Vietnam Pro được dùng theo <a href="/assets/be-vietnam-OFL.txt">giấy phép OFL</a>.</p>
      <h2>Liên kết và trách nhiệm</h2>
      <p>Website dẫn đến các trang chính thức như AEAT, chúng tôi không kiểm soát nội dung của các trang đó. Khi biết website có lỗi, chúng tôi sẽ sửa. Bạn có thể báo lỗi qua email.</p>
      <h2>Luật áp dụng</h2>
      <p>Áp dụng luật Tây Ban Nha. Nếu là người tiêu dùng, bạn có thể kiện tại tòa án nơi mình cư trú.</p>`,
    },
    {
      id: 'privacy',
      updated: 'Cập nhật ngày 25/11/2026',
      path: '/vi/chinh-sach-bao-mat/',
      category: 'Chính sách bảo mật',
      description: 'Mverifactu dùng dữ liệu cá nhân nào, để làm gì, giữ bao lâu và quyền của bạn.',
      body: `
      <h2>Bên chịu trách nhiệm</h2>
      <p>{name}, NIF {nif}, {address}. Email: <a href="mailto:{email}">{email}</a>.</p>
      <h2>Dữ liệu và mục đích</h2>
      <dl class="article-definitions">
        <dt>Khi bạn gửi email</dt><dd>Email, tên và nội dung bạn viết, để trả lời và chuẩn bị bản dùng thử. Cơ sở: các bước trước hợp đồng theo yêu cầu của bạn.</dd>
        <dt>Khi bạn có tài khoản</dt><dd>Tên, email, mật khẩu dạng hash, thông tin thuế của tiệm, thời hạn sử dụng và thanh toán, để cung cấp và xuất hóa đơn dịch vụ. Cơ sở: hợp đồng và nghĩa vụ kế toán, thuế.</dd>
        <dt>Khi bạn ủy quyền gửi bằng chứng thư của chúng tôi</dt><dd>Tên và NIF người ký, bản đã ký, ngày và IP, để chứng minh việc đại diện trước AEAT. Cơ sở: giấy ủy quyền và nghĩa vụ pháp lý kèm theo.</dd>
        <dt>Khi bạn mở website hoặc app</dt><dd>Máy chủ có thể ghi IP, thời gian và trang được mở để bảo mật. Cơ sở: lợi ích chính đáng trong việc bảo vệ dịch vụ.</dd>
        <dt>Khi bạn xem mverifactu.com</dt><dd>Chúng tôi đếm lượt xem trang trên máy chủ của mình, không dùng cookie, để biết website được xem nhiều hay ít và được dùng thế nào. Mỗi lượt xem lưu ngày giờ, trang được xem, loại thiết bị, tên miền của trang web hoặc mã chiến dịch của liên kết đã dẫn bạn đến (nếu có), quốc gia (chỉ khi mạng phục vụ website cung cấp) và một mã khách. Cơ sở: lợi ích chính đáng trong việc biết website được dùng thế nào và cải thiện website.</dd>
      </dl>
      <p>Mã khách được tính từ IP, thông tin trình duyệt mà trình duyệt gửi (user agent) và một giá trị ngẫu nhiên thay đổi mỗi ngày. Số liệu thống kê không lưu IP và thông tin trình duyệt, và mã này không dùng để nhận ra bạn từ ngày này sang ngày khác được. Chúng tôi không đếm các robot đã biết và các trang mà trình duyệt tải trước.</p>
      <p>Chúng tôi không dùng dịch vụ phân tích của bên thứ ba hay quảng cáo, không bán dữ liệu và không ra quyết định tự động về bạn.</p>
      <h2>Dữ liệu khách và thợ của tiệm</h2>
      <p>Tiệm chịu trách nhiệm về dữ liệu mà tiệm nhập vào Mverifactu. Chúng tôi xử lý thay cho tiệm theo <a href="/vi/xu-ly-du-lieu/">thỏa thuận xử lý dữ liệu</a>. Nếu bạn là khách của một tiệm, hãy liên hệ tiệm đó trước.</p>
      <h2>Ai nhận dữ liệu</h2>
      <ul><li>Agencia Tributaria (AEAT), nơi nhận bản ghi hóa đơn.</li><li>{host}, nhà cung cấp máy chủ.</li><li>Nhà cung cấp email của chúng tôi, khi bạn gửi email.</li><li>Cơ quan nhà nước và tòa án, khi luật yêu cầu.</li></ul>
      <h2>Thời gian lưu</h2>
      <p>Email hỏi thông tin được giữ trong thời gian cần để trả lời. Dữ liệu tài khoản được giữ trong thời gian hợp đồng, sau đó được khóa lại trong thời hiệu luật định. Bản ghi hóa đơn được giữ theo thời hạn luật quy định. Số liệu thống kê lượt xem được giữ 2 năm.</p>
      <h2>Quyền của bạn</h2>
      <p>Bạn có thể yêu cầu xem, sửa, xóa, phản đối, hạn chế xử lý và chuyển dữ liệu qua <a href="mailto:{email}">{email}</a>. Chúng tôi có thể yêu cầu xác nhận danh tính. Vì số liệu thống kê lượt xem không có tên và IP của bạn, thông thường chúng tôi không biết lượt xem nào là của bạn. Nếu không đồng ý với câu trả lời, bạn có thể khiếu nại đến <a href="https://www.aepd.es">Agencia Española de Protección de Datos</a>.</p>
      <h2>Bảo mật</h2>
      <p>Kết nối với app được mã hóa HTTPS. Mật khẩu lưu dạng hash, chứng thư số được mã hóa trên máy chủ. Dữ liệu từng tiệm được tách riêng.</p>`,
    },
    {
      id: 'terms',
      path: '/vi/dieu-khoan-dich-vu/',
      category: 'Điều khoản dịch vụ',
      description: 'Điều kiện sử dụng Mverifactu: dùng thử, các gói, giấy phép trọn đời, nghĩa vụ và ngừng dịch vụ.',
      body: `
      <h2>Các bên</h2>
      <p>Điều khoản này áp dụng giữa {name}, NIF {nif}, và tiệm mở tài khoản Mverifactu. Mverifactu dành cho doanh nghiệp và autónomo.</p>
      <h2>Dịch vụ</h2>
      <p>Mverifactu dùng để tính tiền, xuất và in hóa đơn, gửi bản ghi đến AEAT và xem doanh thu. Cần có internet để xuất hóa đơn. Phần mềm không nộp tờ khai thuế và không tư vấn thuế.</p>
      <h2>Dùng thử 14 ngày</h2>
      <p>Dùng thử không mất tiền và không buộc phải mua. Chúng tôi nhắc trước 5 ngày. Khi hết hạn, tiệm không xuất được hóa đơn mới cho đến khi mua.</p>
      <h2>Gói và thanh toán</h2>
      <p>Áp dụng <a href="/vi/#pricing">gói và giá</a> đăng trên website vào lúc mua, cộng IVA. Tiệm trả trước bằng cách hai bên thống nhất. Chúng tôi không tự động trừ tiền. Mỗi gói cho dùng tài khoản trên số thiết bị ghi trong gói.</p>
      <h2>Giấy phép trọn đời</h2>
      <p>Giá {price} + IVA, dùng trên một thiết bị và không hết hạn. Gồm 12 tháng cập nhật và 30 ngày hỗ trợ kỹ thuật từ ngày mua. Gia hạn cập nhật là tùy chọn, giá {renewal} + IVA mỗi năm. Có thể gia hạn với giá này trong 30 ngày sau khi hết hạn. Muộn hơn thì giá {recovery} + IVA, gồm 12 tháng từ ngày trả tiền. Các điều chỉnh theo thay đổi của luật nằm trong phần cập nhật.</p>
      <h2>Khi hết thời hạn đã mua</h2>
      <p>Chúng tôi nhắc trước khi hết hạn. Nếu không gia hạn gói, tiệm không xuất được hóa đơn bán hàng mới, nhưng vẫn xem và in lại hóa đơn cũ, và các bản ghi đang chờ vẫn được gửi đến AEAT. Tiệm có thể ngừng dịch vụ bất cứ lúc nào. Gói vẫn dùng được đến hết thời gian đã trả.</p>
      <h2>Trách nhiệm của tiệm</h2>
      <ul><li>Cung cấp thông tin thuế đúng và dùng chứng thư còn hạn hoặc ủy quyền gửi.</li><li>Giữ mật khẩu và quyền truy cập thiết bị.</li><li>Xem các cảnh báo về bản ghi bị từ chối hoặc đang chờ.</li><li>Thực hiện nghĩa vụ thuế và bảo vệ dữ liệu.</li><li>Không dùng dịch vụ vào việc trái luật và không tìm cách sửa bản ghi.</li></ul>
      <h2>Hoạt động và hỗ trợ</h2>
      <p>Chúng tôi cố gắng để dịch vụ luôn hoạt động, nhưng có thể gián đoạn do bảo trì, do bên thứ ba hoặc do AEAT. Khi AEAT không phản hồi, bản ghi nằm trong hàng đợi và được gửi lại.</p>
      <h2>Trách nhiệm của chúng tôi</h2>
      <p>Chúng tôi chịu trách nhiệm về dịch vụ theo luật. Chúng tôi không chịu trách nhiệm khi tiệm nhập sai dữ liệu, chứng thư hết hạn, dùng trái điều khoản hoặc do nguyên nhân ngoài tầm kiểm soát. Điều này không giới hạn những trách nhiệm mà luật không cho phép loại trừ.</p>
      <h2>Sở hữu và dữ liệu</h2>
      <p>Phần mềm thuộc {name}. Dữ liệu thuộc về tiệm. Dữ liệu cá nhân được xử lý theo <a href="/vi/chinh-sach-bao-mat/">chính sách bảo mật</a> và <a href="/vi/xu-ly-du-lieu/">thỏa thuận xử lý dữ liệu</a>.</p>
      <h2>Thay đổi và luật áp dụng</h2>
      <p>Khi đổi điều khoản, chúng tôi báo qua email trước 30 ngày và tiệm có thể ngừng dịch vụ. Áp dụng luật Tây Ban Nha và, giữa các doanh nghiệp, tòa án tại Barcelona.</p>`,
    },
    {
      id: 'cookies',
      updated: 'Cập nhật ngày 25/11/2026',
      path: '/vi/cookie/',
      category: 'Cookie',
      description: 'Website này không dùng cookie. App Mverifactu lưu gì trên thiết bị và cách xóa.',
      body: `
      <h2>Website này không dùng cookie</h2>
      <p>Website Mverifactu không tạo cookie và không lưu dữ liệu trong trình duyệt. Website không tải công cụ phân tích, quảng cáo hay nội dung của bên thứ ba. Phông chữ nằm trên máy chủ của chúng tôi. Vì vậy website không có thông báo cookie.</p>
      <p>Chúng tôi đếm lượt xem trên máy chủ của mình, không dùng cookie và không lưu IP. Chi tiết có trong <a href="/vi/chinh-sach-bao-mat/">chính sách bảo mật</a>.</p>
      <h2>App lưu những gì</h2>
      <p>App không dùng cookie quảng cáo hay phân tích. App chỉ lưu trên thiết bị những thứ cần để hoạt động:</p>
      <dl class="article-definitions"><dt>Phiên đăng nhập</dt><dd>Giữ đăng nhập cho đến khi bạn đăng xuất.</dd><dt>Ngôn ngữ và giao diện</dt><dd>Nhớ lựa chọn của bạn trên thiết bị đó.</dd><dt>Máy in</dt><dd>Nhớ máy in và cài đặt của máy in.</dd></dl>
      <p>Phần lưu này cần thiết cho dịch vụ bạn yêu cầu nên không cần xin đồng ý.</p>
      <h2 id="preferences">Tùy chọn cookie</h2>
      <div class="table-wrap"><table><caption>Tình trạng trên website này</caption><thead><tr><th scope="col">Loại</th><th scope="col">Tình trạng</th></tr></thead><tbody><tr><td>Cần thiết</td><td>Không dùng</td></tr><tr><td>Phân tích</td><td>Không dùng</td></tr><tr><td>Quảng cáo</td><td>Không dùng</td></tr></tbody></table></div>
      <p>Bạn không cần chấp nhận hay từ chối gì. Nếu sau này có cookie không bắt buộc, chúng tôi sẽ xin phép trước và bạn đổi lựa chọn tại đây.</p>
      <h2>Cách xóa dữ liệu đã lưu</h2>
      <p>Trong app, khi đăng xuất thì phiên đăng nhập bị xóa. Muốn xóa phần còn lại, hãy xóa dữ liệu trang trong cài đặt trình duyệt hoặc dữ liệu ứng dụng trên Android.</p>`,
    },
    {
      id: 'declaration',
      path: '/vi/tuyen-bo-trach-nhiem/',
      category: 'Tuyên bố trách nhiệm',
      description: 'Declaración responsable của hệ thống xuất hóa đơn Mverifactu theo Orden HAC/1177/2024.',
      intro: 'Văn bản theo điều 15 của Orden HAC/1177/2024 cho Mverifactu. Văn bản chính thức chỉ có tiếng Tây Ban Nha và cũng nằm trong app.',
      appLink: 'Xem tuyên bố trong app',
    },
    {
      id: 'processing',
      path: '/vi/xu-ly-du-lieu/',
      category: 'Xử lý dữ liệu',
      description: 'Thỏa thuận xử lý dữ liệu (điều 28 RGPD) giữa tiệm và Nails Trendy ES SL.',
      body: `
      <h2>Các bên và mục đích</h2>
      <p>Tiệm chịu trách nhiệm về dữ liệu cá nhân nhập vào Mverifactu. {name}, NIF {nif}, xử lý dữ liệu thay cho tiệm theo điều 28 của Quy định (EU) 2016/679 (RGPD). Thỏa thuận này là một phần của <a href="/vi/dieu-khoan-dich-vu/">điều khoản dịch vụ</a> và có cùng thời hạn.</p>
      <h2>Dữ liệu và mục đích xử lý</h2>
      <dl class="article-definitions"><dt>Người liên quan</dt><dd>Khách cần hóa đơn đầy đủ và thợ của tiệm.</dd><dt>Dữ liệu</dt><dd>Của khách: tên, mã số thuế và địa chỉ. Của thợ: tên và doanh thu. Ngoài ra còn dữ liệu hóa đơn.</dd><dt>Mục đích</dt><dd>Xuất, lưu và in hóa đơn, gửi bản ghi đến AEAT và xem doanh thu.</dd><dt>Thao tác</dt><dd>Ghi, lưu, xem, gửi và xóa.</dd></dl>
      <h2>Nghĩa vụ của {name}</h2>
      <ul><li>Chỉ xử lý theo chỉ dẫn bằng văn bản của tiệm, tức các thỏa thuận này và việc dùng phần mềm, trừ khi luật yêu cầu khác.</li><li>Giữ bí mật và yêu cầu người truy cập dữ liệu cũng giữ bí mật.</li><li>Áp dụng các biện pháp bảo mật trong thỏa thuận này.</li><li>Giúp tiệm trả lời yêu cầu về quyền dữ liệu và tuân thủ các điều 32 đến 36 của RGPD.</li><li>Báo cho tiệm không chậm trễ khi dữ liệu của tiệm bị vi phạm an ninh.</li><li>Cung cấp thông tin chứng minh việc tuân thủ và cho phép kiểm tra hợp lý.</li><li>Báo cho tiệm nếu một chỉ dẫn có vẻ trái luật.</li></ul>
      <h2>Bên xử lý phụ</h2>
      <p>Tiệm đồng ý chung cho việc dùng bên xử lý phụ với cùng nghĩa vụ. Hiện có {host}, nhà cung cấp máy chủ. Chúng tôi báo qua email trước khi thêm hoặc đổi, và tiệm có quyền phản đối. Nếu dữ liệu được xử lý ngoài Khu vực Kinh tế châu Âu thì áp dụng các bảo đảm của chương V RGPD.</p>
      <p>AEAT nhận bản ghi theo nghĩa vụ pháp lý, không phải bên xử lý phụ.</p>
      <h2>Biện pháp bảo mật</h2>
      <ul><li>Kết nối mã hóa HTTPS.</li><li>Mật khẩu lưu dạng hash.</li><li>Chứng thư số được mã hóa (AES-256-GCM), không nằm trên máy bán hàng.</li><li>Dữ liệu tách theo từng tiệm, vào bằng tài khoản.</li><li>Sao lưu cơ sở dữ liệu trước mỗi lần cập nhật.</li></ul>
      <h2>Khi kết thúc</h2>
      <p>Tiệm có thể xuất doanh thu và yêu cầu bản sao dữ liệu. Sau đó dữ liệu được xóa hoặc trả lại theo lựa chọn của tiệm, trừ phần luật buộc phải giữ, phần này được khóa lại.</p>
      <h2>Nghĩa vụ của tiệm</h2>
      <p>Thông báo cho khách và thợ, có cơ sở pháp lý cho dữ liệu nhập vào và không nhập dữ liệu không cần thiết, như thông tin sức khỏe.</p>
      <h2>Liên hệ</h2>
      <p>Nếu cần bản thỏa thuận có chữ ký, hãy viết đến <a href="mailto:{email}">{email}</a>.</p>`,
    },
  ],
};
