// Cau hinh Tailwind CDN + header/footer dung chung cho cac trang mockup

// Bo mau chon qua ?mau=<ma>. Moi primary deu dat tuong phan >= 4.5:1 voi chu trang (WCAG AA)
const BO_MAU = {
  do:      { ten: "Đỏ SMV (chỉnh đạt AA)",          p: "#D32F2F", dark: "#B71C1C", soft: "#FDECEC", wash: "#FBFBFC" },
  teal:    { ten: "Transformative Teal (WGSN 2026)", p: "#0E6F73", dark: "#0A5558", soft: "#E2F1F0", wash: "#F6FAF9" },
  cloud:   { ten: "Cloud Dancer (Pantone 2026)",     p: "#1F2230", dark: "#000000", soft: "#EFECE6", wash: "#F8F6F2" },
  fuchsia: { ten: "Electric Fuchsia / Magenta in",   p: "#C2185B", dark: "#9C1248", soft: "#FCE7F0", wash: "#FCF8FA" },
  blue:    { ten: "Blue Aura — xanh tin cậy",        p: "#2F56D9", dark: "#2343B0", soft: "#E8EEFD", wash: "#F8FAFE" },
  dat:     { ten: "Đất nung (Mocha / Amber Haze)",   p: "#A44A2A", dark: "#85391F", soft: "#F7EAE3", wash: "#FCF9F6" },
};
const MA_MAU = new URLSearchParams(location.search).get("mau") in BO_MAU ? new URLSearchParams(location.search).get("mau") : "do";
{
  const m = BO_MAU[MA_MAU], r = document.documentElement.style;
  r.setProperty("--p", m.p); r.setProperty("--p-dark", m.dark); r.setProperty("--p-soft", m.soft); r.setProperty("--wash", m.wash);
  const tron = (a, b, t) => "#" + [1, 3, 5].map((i) => Math.round(parseInt(a.slice(i, i + 2), 16) * (1 - t) + parseInt(b.slice(i, i + 2), 16) * t).toString(16).padStart(2, "0")).join("");
  r.setProperty("--p-tint", tron(m.soft, "#ffffff", 0.55));
}

tailwind.config = {
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", lg: "2rem" }, screens: { "2xl": "1320px" } },
    extend: {
      boxShadow: { nhe: "0 1px 2px rgba(16,24,40,.04), 0 12px 32px -16px rgba(16,24,40,.14)" },
      fontFamily: { sans: ['"Be Vietnam Pro"', "system-ui", "sans-serif"] },
      colors: {
        primary: { DEFAULT: "var(--p)", soft: "var(--p-soft)", dark: "var(--p-dark)" },
        ink: "#1F2230", muted: "#6B7183", line: "#EEF0F3", tint: "var(--p-tint)", wash: "var(--wash)",
      },
      fontSize: {
        caption: ["12px", { lineHeight: "16px", fontWeight: "500" }],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        title: ["18px", { lineHeight: "26px", fontWeight: "600" }],
        h3: ["22px", { lineHeight: "30px", fontWeight: "600" }],
        h2: ["32px", { lineHeight: "40px", fontWeight: "700", letterSpacing: "-0.01em" }],
        display: ["44px", { lineHeight: "52px", fontWeight: "700", letterSpacing: "-0.02em" }],
        "h2-m": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "display-m": ["30px", { lineHeight: "38px", fontWeight: "700", letterSpacing: "-0.01em" }],
      },
    },
  },
};

const ICON = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
  cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2 2h3l2.7 12.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>',
  truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.6a1 1 0 0 0-.2-.6l-3.5-4.4a1 1 0 0 0-.8-.4H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.7 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  pen: '<path d="M12 20h9"/><path d="M16.4 3.6a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4Z"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  box: '<path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
};
const icon = (ten, cls = "w-5 h-5") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICON[ten]}</svg>`;

const DANH_MUC = [
  ["Danh thiếp", "dm-danh-thiep"], ["Tem nhãn & sticker", "dm-sticker"], ["Thiệp mời", "dm-thiep-moi"],
  ["Nhãn vở", "dm-nhan-vo"], ["Lịch treo tường", "dm-lich-treo-tuong"], ["Lịch để bàn", "dm-lich-de-ban"],
  ["Sổ tay", "dm-bia-so-tay"], ["Bìa vở học sinh", "dm-bia-vo-hoc-sinh"], ["Photobook", "dm-photobook"],
  ["Ảnh photobooth", "dm-anh-photobooth"], ["Quạt cầm tay", "dm-quat-cam-tay"], ["Hashtag cầm tay", "dm-hashtag-cam-tay"],
];

function veHeader() {
  return `
  <div class="hidden lg:block bg-tint text-muted text-caption">
    <div class="container flex h-8 items-center justify-between">
      <span>Miễn phí thiết kế · In nhanh 2 giờ nội thành Hà Nội · Giao toàn quốc</span>
      <span class="flex gap-5"><span>cskh@insacmauviet.vn</span><span class="font-semibold text-ink">Hotline 1900 6363</span><span>Chat Zalo</span></span>
    </div>
  </div>
  <header class="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-line">
    <div class="container flex h-14 lg:h-16 items-center gap-4 lg:gap-8">
      <button class="lg:hidden -ml-1 p-2">${icon("menu", "w-6 h-6")}</button>
      <a href="home.html"><img src="img/logo.svg" alt="SMV" class="h-7 lg:h-9"></a>
      <div class="hidden lg:flex flex-1 items-center h-11 rounded-full border border-line bg-white px-5 text-muted text-sm">
        <span class="flex-1">Tìm danh thiếp, tem nhãn, thiệp cưới…</span>${icon("search")}
      </div>
      <div class="ml-auto lg:ml-0 flex items-center gap-1 lg:gap-2 text-ink">
        <button class="lg:hidden p-2">${icon("search", "w-6 h-6")}</button>
        <button class="hidden lg:flex p-2.5 rounded-lg hover:bg-wash">${icon("heart", "w-6 h-6")}</button>
        <button class="relative p-2 lg:p-2.5 rounded-lg hover:bg-wash">${icon("cart", "w-6 h-6")}<span class="absolute top-1 right-1 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[11px] font-semibold text-white">2</span></button>
        <button class="hidden lg:flex items-center gap-2 h-11 px-4 rounded-lg text-sm font-medium hover:bg-wash">${icon("user")} Đăng nhập</button>
        <a href="san-pham.html" class="hidden lg:inline-flex items-center h-11 px-5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark">Đặt in ngay</a>
      </div>
    </div>
    <nav class="hidden lg:block border-t border-line">
      <div class="container flex h-11 items-center gap-7 text-sm font-medium text-ink whitespace-nowrap overflow-hidden">
        <span class="flex items-center gap-2 text-primary font-semibold">${icon("grid", "w-4 h-4")} Tất cả sản phẩm</span>
        ${DANH_MUC.slice(0, 8).map(([t]) => `<a class="hover:text-primary" href="#">${t}</a>`).join("")}
        <span class="ml-auto flex gap-6 text-muted"><a href="#">Tự thiết kế</a><a href="#">Yêu cầu thiết kế</a></span>
      </div>
    </nav>
  </header>`;
}

function veFooter() {
  const cot = (tieuDe, ds) => `<div><h4 class="text-title text-ink mb-3">${tieuDe}</h4><ul class="space-y-2 text-sm text-muted">${ds.map((x) => `<li>${x}</li>`).join("")}</ul></div>`;
  return `
  <footer class="mt-16 lg:mt-28 border-t border-line bg-white">
    <div class="container py-12 grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <img src="img/logo.svg" class="h-9 mb-4" alt="SMV">
        <p class="text-sm text-muted max-w-xs">Công ty TNHH ĐTPT và TM Sắc Màu Việt. Nền tảng thiết kế online & đặt in.</p>
        <p class="mt-4 text-sm text-ink">Số 20 Ngõ 80, Phú Viên, Bồ Đề, Long Biên, Hà Nội<br><b>024 73060688</b> · 0987 156 633</p>
      </div>
      ${cot("Sản phẩm", ["Danh thiếp", "Tem nhãn & sticker", "Thiệp mời", "Lịch", "Sổ tay"])}
      ${cot("Hỗ trợ", ["Hướng dẫn thiết kế", "Quy trình đặt in", "Bảng giá", "Theo dõi đơn"])}
      ${cot("Chính sách", ["Điều khoản", "Bảo mật", "Vận chuyển", "Đổi trả"])}
    </div>
    <div class="border-t border-line"><div class="container py-4 text-caption text-muted">© 2026 Sắc Màu Việt</div></div>
  </footer>
  <nav class="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-5 h-16 bg-white/90 backdrop-blur-md border-t border-line text-[12px] font-medium text-muted">
    <a class="flex flex-col items-center justify-center gap-1 text-primary">${icon("home")}Trang chủ</a>
    <a class="flex flex-col items-center justify-center gap-1">${icon("grid")}Sản phẩm</a>
    <a class="flex flex-col items-center justify-center gap-1">${icon("pen")}Tự thiết kế</a>
    <a class="flex flex-col items-center justify-center gap-1">${icon("box")}Đơn hàng</a>
    <a class="flex flex-col items-center justify-center gap-1">${icon("user")}Tài khoản</a>
  </nav>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const h = document.getElementById("header"), f = document.getElementById("footer");
  if (h) h.outerHTML = veHeader();
  if (f) f.outerHTML = veFooter();
  // Giu bo mau khi bam qua lai giua cac trang mockup
  if (location.search) document.querySelectorAll('a[href$=".html"]').forEach((a) => (a.href += location.search));
});
