import Head from "next/head";
import Image from "next/image";
import type { ReactNode } from "react";

// Nguồn: lich-viet/docs/privacy-policy.md – sửa ở đây thì sửa cả bên đó.
// URL này khai báo trên Google Play và nằm trong màn Cài đặt của app.
const EFFECTIVE_DATE = "03/10/2026";
const DEVELOPER = "Alex Vin";
const CONTACT_EMAIL = "anhtuan03.MDev@gmail.com";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="space-y-3 text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6 space-y-2">{children}</ul>;
}

const permissions = [
  {
    name: "Thông báo",
    purpose:
      "Hiện lời nhắc sự kiện, mùng 1 và rằm. Bạn có thể từ chối; lịch vẫn dùng được bình thường.",
  },
  {
    name: "Báo thức và lời nhắc chính xác (Android)",
    purpose: "Nhắc đúng giờ bạn đã chọn kể cả khi máy ở chế độ tiết kiệm pin.",
  },
  {
    name: "Chạy khi khởi động máy, chạy nền (Android)",
    purpose: "Đặt lại lịch nhắc sau khi khởi động lại máy và cập nhật widget.",
  },
  {
    name: "Internet",
    purpose: "Chỉ để gửi báo cáo lỗi (mục 3) và mở liên kết bạn bấm.",
  },
];

export default function LichVietPrivacyPolicy() {
  const mail = (
    <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary font-medium hover:underline">
      {CONTACT_EMAIL}
    </a>
  );

  return (
    <>
      <Head>
        <title>Chính sách quyền riêng tư – Lịch Việt</title>
        <meta
          name="description"
          content="Chính sách quyền riêng tư của ứng dụng Lịch Việt – lịch âm dương, nhắc ngày giỗ."
        />
      </Head>

      <main lang="vi" className="min-h-screen bg-background">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/lich-viet/logo.png"
              alt="Lịch Việt"
              width={64}
              height={64}
              className="rounded-2xl shadow-sm"
            />
            <div>
              <p className="text-sm font-medium text-primary">Lịch Việt</p>
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
                Chính sách quyền riêng tư
              </h1>
            </div>
          </div>

          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm text-gray-600 border-y py-4">
            <dt className="font-semibold">Hiệu lực từ</dt>
            <dd>{EFFECTIVE_DATE}</dd>
            <dt className="font-semibold">Nhà phát triển</dt>
            <dd>{DEVELOPER}</dd>
            <dt className="font-semibold">Liên hệ</dt>
            <dd>{mail}</dd>
          </dl>

          <p className="mt-8 text-gray-700 leading-relaxed">
            Lịch Việt là ứng dụng xem lịch dương – âm, ghi nhớ ngày giỗ, sinh nhật và nhắc lịch. Ứng
            dụng <strong>không có tài khoản, không có quảng cáo, không theo dõi người dùng</strong> và
            không có máy chủ riêng lưu dữ liệu của bạn. Tài liệu này giải thích dữ liệu nào được xử
            lý, ở đâu và vì sao.
          </p>

          <Section title="1. Dữ liệu bạn nhập – chỉ nằm trên máy của bạn">
            <List>
              <li>
                <strong>Sự kiện</strong> bạn tạo (tên, ngày âm/dương, kiểu lặp lại, số ngày nhắc
                trước, ghi chú) và <strong>cài đặt</strong> của ứng dụng được lưu trong bộ nhớ của
                ứng dụng trên thiết bị.
              </li>
              <li>
                Nhà phát triển <strong>không nhận được</strong> và <strong>không thể xem</strong> các
                dữ liệu này.
              </li>
              <li>
                <strong>Thông báo nhắc lịch</strong> được hệ điều hành đặt lịch ngay trên máy; không
                có máy chủ gửi thông báo.
              </li>
              <li>
                <strong>Widget màn hình chính</strong> đọc dữ liệu từ chính ứng dụng trên máy (trên
                iPhone qua vùng chia sẻ App Group giữa ứng dụng và widget).
              </li>
            </List>
          </Section>

          <Section title="2. Sao lưu">
            <List>
              <li>
                <strong>Sao lưu tự động của hệ điều hành:</strong> trên Android, dữ liệu ứng dụng có
                thể được đưa vào bản sao lưu của Google (Google Drive, mã hoá, gắn với tài khoản
                Google của bạn); trên iPhone, vào bản sao lưu iCloud/máy tính của bạn. Việc này do
                Google/Apple thực hiện theo cài đặt máy của bạn và chịu chính sách quyền riêng tư của
                họ. Bạn có thể tắt sao lưu trong cài đặt của máy.
              </li>
              <li>
                <strong>Xuất dữ liệu thủ công:</strong> khi bạn chọn &ldquo;Xuất dữ liệu&rdquo;, nội
                dung sự kiện được chuyển cho ứng dụng bạn chọn (Zalo, email, ghi chú…). Ứng dụng không
                tự gửi đi đâu khác.
              </li>
            </List>
          </Section>

          <Section title="3. Báo cáo lỗi (Firebase Crashlytics)">
            <p>
              Để phát hiện và sửa lỗi, ứng dụng dùng <strong>Firebase Crashlytics</strong> của Google
              LLC. Khi ứng dụng gặp lỗi, các thông tin kỹ thuật sau có thể được gửi đi:
            </p>
            <List>
              <li>
                Dấu vết lỗi (vị trí lỗi trong mã nguồn), thời điểm xảy ra lỗi, nhãn kỹ thuật cho biết
                lỗi xảy ra ở chức năng nào (ví dụ &ldquo;đồng bộ nhắc lịch&rdquo;).
              </li>
              <li>
                Thông tin thiết bị: hãng và mẫu máy, phiên bản hệ điều hành, phiên bản ứng dụng, ngôn
                ngữ, hướng màn hình, dung lượng bộ nhớ/ổ đĩa còn trống, máy đã root/jailbreak hay
                chưa.
              </li>
              <li>
                Một <strong>mã cài đặt ngẫu nhiên</strong> do Firebase tạo (không gắn với tên, số điện
                thoại, email hay tài khoản nào của bạn), dùng để đếm số máy bị ảnh hưởng bởi cùng một
                lỗi.
              </li>
              <li>Địa chỉ IP của kết nối mạng khi gửi báo cáo (cần cho việc truyền dữ liệu).</li>
            </List>
            <p>
              <strong>Không bao giờ</strong> gửi: tên sự kiện, ghi chú, ngày bạn lưu hay bất kỳ nội
              dung nào bạn nhập.
            </p>
            <List>
              <li>
                <strong>Mục đích:</strong> duy nhất là tìm và sửa lỗi để ứng dụng ổn định hơn. Không
                dùng cho quảng cáo, không bán, không chia sẻ cho bên thứ ba nào khác.
              </li>
              <li>
                <strong>Nơi lưu và thời hạn:</strong> máy chủ của Google, có thể đặt ngoài Việt Nam
                (ví dụ Hoa Kỳ). Crashlytics giữ báo cáo lỗi và mã cài đặt tối đa{" "}
                <strong>90 ngày</strong>, sau đó tự xoá.
              </li>
              <li>
                <strong>Tắt báo cáo lỗi:</strong> vào <strong>Cài đặt → Báo cáo lỗi</strong> và tắt
                &ldquo;Gửi báo cáo lỗi&rdquo;. Sau khi tắt, ứng dụng không gửi báo cáo nào nữa.
              </li>
              <li>
                Tham khảo:{" "}
                <a
                  href="https://firebase.google.com/support/privacy"
                  className="text-primary font-medium hover:underline"
                >
                  Quyền riêng tư và bảo mật trong Firebase
                </a>
                .
              </li>
            </List>
          </Section>

          <Section title="4. Quyền ứng dụng sử dụng">
            <div className="overflow-hidden rounded-xl border">
              {permissions.map(p => (
                <div
                  key={p.name}
                  className="grid sm:grid-cols-[14rem_1fr] gap-1 sm:gap-4 px-4 py-3 border-b last:border-b-0"
                >
                  <div className="font-semibold text-gray-900">{p.name}</div>
                  <div>{p.purpose}</div>
                </div>
              ))}
            </div>
            <p>
              Ứng dụng <strong>không</strong> truy cập vị trí, danh bạ, ảnh, micro, camera hay lịch
              hệ thống của máy.
            </p>
          </Section>

          <Section title="5. Trẻ em">
            <p>
              Ứng dụng phù hợp với mọi lứa tuổi và không thu thập có chủ đích dữ liệu cá nhân của trẻ
              em. Ngoài báo cáo lỗi kỹ thuật ở mục 3 (có thể tắt), ứng dụng không gửi dữ liệu nào ra
              khỏi máy.
            </p>
          </Section>

          <Section title="6. Quyền của bạn">
            <p>
              Theo pháp luật Việt Nam về bảo vệ dữ liệu cá nhân, bạn có quyền được biết, đồng ý hoặc
              rút lại sự đồng ý, truy cập, chỉnh sửa và yêu cầu xoá dữ liệu của mình. Với Lịch Việt:
            </p>
            <List>
              <li>
                Dữ liệu sự kiện nằm trên máy bạn: bạn xem, sửa, xoá trực tiếp trong ứng dụng; gỡ ứng
                dụng sẽ xoá toàn bộ dữ liệu trên máy (bản sao lưu của Google/iCloud do bạn quản lý
                trong tài khoản của mình).
              </li>
              <li>
                Rút lại đồng ý gửi báo cáo lỗi: tắt &ldquo;Gửi báo cáo lỗi&rdquo; trong Cài đặt bất
                cứ lúc nào.
              </li>
              <li>
                Mọi câu hỏi hoặc yêu cầu khác, vui lòng liên hệ: {mail}. Chúng tôi phản hồi trong vòng
                72 giờ làm việc. Lưu ý: vì báo cáo lỗi không gắn với danh tính, chúng tôi thường không
                thể xác định báo cáo nào là của bạn; báo cáo sẽ tự xoá sau 90 ngày.
              </li>
            </List>
          </Section>

          <Section title="7. Bảo mật">
            <p>
              Dữ liệu trên máy được bảo vệ bởi cơ chế cách ly ứng dụng của Android/iOS. Báo cáo lỗi
              được truyền qua kết nối mã hoá (HTTPS).
            </p>
          </Section>

          <Section title="8. Thay đổi chính sách">
            <p>
              Khi chính sách thay đổi, chúng tôi cập nhật trang này và ngày hiệu lực ở đầu trang. Nếu
              thay đổi làm mở rộng dữ liệu được thu thập, ứng dụng sẽ thông báo cho bạn trước khi áp
              dụng.
            </p>
          </Section>
        </article>
      </main>
    </>
  );
}
