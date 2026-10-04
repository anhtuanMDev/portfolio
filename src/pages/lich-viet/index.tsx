import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftRight,
  Bell,
  CalendarDays,
  ChevronLeft,
  LayoutGrid,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";

// Trang này là "Trang web" khai báo ở Cài đặt cửa hàng trên Google Play.
// App lên production (công khai) thì đặt IS_PUBLIC = true để hiện nút tải.
const IS_PUBLIC = false;
const PLAY_URL = "https://play.google.com/store/apps/details?id=com.lichviet.app";
const CONTACT_EMAIL = "anhtuan03.MDev@gmail.com";

// Màu lấy từ icon / ảnh nổi bật của app.
const BRAND_RED = "bg-[#B3261E]";

const features = [
  {
    icon: CalendarDays,
    title: "Lịch âm - dương",
    text: "Ngày âm, can chi ngày/tháng/năm, tiết khí, giờ hoàng đạo, ngày hoàng đạo/hắc đạo. Lịch tháng đánh dấu mùng 1, rằm và ngày lễ.",
  },
  {
    icon: Users,
    title: "Nhớ ngày giỗ, sinh nhật",
    text: "Lưu sự kiện theo ngày âm hoặc dương, lặp lại hằng năm. Tự xử lý tháng nhuận và tháng thiếu.",
  },
  {
    icon: Bell,
    title: "Nhắc đúng giờ",
    text: "Nhắc trước 1, 3, 7 ngày hoặc đúng ngày, vào giờ bạn chọn. Nhắc mùng 1 và rằm, kể cả khi không mở ứng dụng.",
  },
  {
    icon: ArrowLeftRight,
    title: "Đổi ngày âm ↔ dương",
    text: "Đổi nhanh một ngày âm sang dương và ngược lại, xem ngay can chi và ngày tốt xấu.",
  },
  {
    icon: LayoutGrid,
    title: "Widget màn hình chính",
    text: "Xem ngày âm hôm nay và các sự kiện sắp tới ngay trên màn hình chính, không cần mở app.",
  },
  {
    icon: ShieldCheck,
    title: "Riêng tư, không quảng cáo",
    text: "Không cần tài khoản, không quảng cáo. Sự kiện của bạn chỉ lưu trên máy và trong bản sao lưu của chính bạn.",
  },
];

const techStack = [
  "React Native 0.87",
  "TypeScript",
  "MMKV",
  "Local notifications",
  "Android & iOS widget",
  "Firebase Crashlytics",
  "Jest",
];

export default function LichViet() {
  return (
    <>
      <Head>
        <title>Lịch Việt - Âm lịch, Ngày giỗ</title>
        <meta
          name="description"
          content="Lịch âm dương chuẩn giờ Việt Nam, nhắc ngày giỗ, mùng 1, rằm - không quảng cáo."
        />
        <meta property="og:title" content="Lịch Việt - Âm lịch, Ngày giỗ" />
        <meta
          property="og:description"
          content="Lịch âm dương chuẩn giờ Việt Nam, nhắc ngày giỗ, mùng 1, rằm - không quảng cáo."
        />
        <meta property="og:image" content="/images/lich-viet/feature-graphic.png" />
      </Head>

      <main lang="vi" className="min-h-screen bg-background">
        {/* Hero */}
        <section className={`relative overflow-hidden ${BRAND_RED} text-[#FAF7F0]`}>
          <div className="absolute -right-32 -top-32 w-[480px] h-[480px] rounded-full bg-[#D4972E]/20 blur-[100px] pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-6 pt-10 pb-20 md:pb-28">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#FAF7F0]/70 hover:text-[#FAF7F0] transition-colors"
            >
              <ChevronLeft size={16} /> Projects
            </Link>

            <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-10 text-center md:text-left">
              <Image
                src="/images/lich-viet/logo.png"
                alt="Biểu tượng Lịch Việt"
                width={144}
                height={144}
                className="rounded-[2rem] shadow-2xl shrink-0"
              />
              <div>
                <Badge className="mb-5 bg-[#FAF7F0]/15 text-[#FAF7F0] border-[#FAF7F0]/20 hover:bg-[#FAF7F0]/20">
                  Android · Miễn phí
                </Badge>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">Lịch Việt</h1>
                <p className="text-xl md:text-2xl text-[#FAF7F0]/85 max-w-xl leading-relaxed mb-8">
                  Lịch âm dương gọn nhẹ, chính xác, dành cho người Việt. Nhớ ngày giỗ, nhắc mùng 1,
                  rằm - không quảng cáo.
                </p>
                {IS_PUBLIC ? (
                  <Link href={PLAY_URL} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="rounded-full px-8 py-6 text-lg bg-[#FAF7F0] text-[#B3261E] hover:bg-white shadow-xl"
                    >
                      Tải trên Google Play
                    </Button>
                  </Link>
                ) : (
                  <span className="inline-flex items-center rounded-full px-6 py-3 text-base font-semibold bg-[#FAF7F0]/15 border border-[#FAF7F0]/30">
                    Sắp có trên Google Play
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Tính năng */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-4">
              Mọi thứ về ngày tháng, trong một ứng dụng
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-14">
              Từ xem ngày âm hôm nay đến nhắc ngày giỗ ông bà - Lịch Việt lo phần ghi nhớ cho bạn.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-3xl border bg-card p-7 shadow-sm hover:border-[#B3261E]/30 transition-colors"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B3261E]/10 text-[#B3261E]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Độ chính xác */}
        <section className="py-20 md:py-28 px-6 bg-[#FAF7F0]">
          <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Chuẩn giờ Việt Nam
              </h2>
            </div>
            <div className="md:col-span-7 space-y-5 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl text-gray-900 font-medium border-l-4 border-[#D4972E] pl-5">
                Nhiều ứng dụng dùng âm lịch Trung Quốc (UTC+8), nên lệch ngày ở một số năm - ví dụ Tết
                1985 và Tết 2007.
              </p>
              <p>
                Lịch Việt tính theo thuật toán của TS. Hồ Ngọc Đức với múi giờ UTC+7, và được kiểm
                chứng tự động với từng ngày từ năm 1900 đến 2100. Ngày hoàng đạo, giờ hoàng đạo được
                đối chiếu trong 30 năm, khớp 100%.
              </p>
            </div>
          </div>
        </section>

        {/* Riêng tư & liên hệ */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border bg-card p-8">
              <h2 className="text-2xl font-bold mb-4">Quyền riêng tư</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Không tài khoản, không quảng cáo, không theo dõi. Sự kiện bạn nhập chỉ nằm trên máy;
                ứng dụng chỉ gửi báo cáo lỗi kỹ thuật (có thể tắt trong Cài đặt).
              </p>
              <Link
                href="/lich-viet/privacy-policy"
                className="font-semibold text-[#B3261E] hover:underline"
              >
                Đọc chính sách quyền riêng tư →
              </Link>
            </div>
            <div className="rounded-3xl border bg-card p-8">
              <h2 className="text-2xl font-bold mb-4">Hỗ trợ</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Gặp lỗi, cần trợ giúp hay muốn góp ý tính năng? Gửi email, chúng tôi phản hồi trong
                vòng 72 giờ làm việc.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Lịch Việt - Hỗ trợ")}`}
                className="inline-flex items-center gap-2 font-semibold text-[#B3261E] hover:underline"
              >
                <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">Xây dựng với</p>
            <div className="flex flex-wrap justify-center gap-2">
              {techStack.map(tech => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
