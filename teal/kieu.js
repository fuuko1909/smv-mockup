// Mockup 3 phong cach giao dien (mau Transformative Teal da chot) — chon qua ?kieu=kinh|bento|bao
const KIEU = ["kinh", "bento", "bao"].includes(new URLSearchParams(location.search).get("kieu"))
  ? new URLSearchParams(location.search).get("kieu") : "kinh";

tailwind.config = {
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", lg: "2rem" }, screens: { "2xl": "1320px" } },
    extend: {
      fontFamily: { sans: ['"Be Vietnam Pro"', "system-ui", "sans-serif"] },
      colors: {
        primary: { DEFAULT: "#0E6F73", dark: "#0A5558", soft: "#E2F1F0", deep: "#083B3D" },
        mint: "#5CC8B2", tint: "#F0F8F7", ink: "#14212B", muted: "#66717C", line: "#E8EDEE",
      },
    },
  },
};

// Token giao dien theo tung phong cach — phan bo cuc dung chung doc token nay
const T = {
  kinh: {
    body: "bg-[#F3FAF8]",
    header: "bg-white/50 backdrop-blur-xl border-b border-white/70",
    card: "bg-white/55 backdrop-blur-xl ring-1 ring-white/80 shadow-[0_10px_40px_-16px_rgba(14,111,115,.28)]",
    r: "rounded-3xl", rImg: "rounded-2xl",
    btn: "rounded-full bg-gradient-to-b from-[#138483] to-[#0E6F73] text-white shadow-[0_8px_24px_-8px_rgba(14,111,115,.7)]",
    btn2: "rounded-full bg-white/70 backdrop-blur ring-1 ring-white text-ink",
    chip: "rounded-full bg-white/60 ring-1 ring-white/90", chipOn: "rounded-full bg-primary text-white",
    anhNen: "bg-white/50", h: "font-semibold tracking-tight", sec: "",
    search: "rounded-full bg-white/60 ring-1 ring-white/90",
  },
  bento: {
    body: "bg-[#F3F6F6]",
    header: "bg-[#F3F6F6]/80 backdrop-blur-md",
    card: "bg-white", r: "rounded-[28px]", rImg: "rounded-[20px]",
    btn: "rounded-full bg-primary text-white", btn2: "rounded-full bg-white text-ink ring-1 ring-black/5",
    chip: "rounded-full bg-[#EEF2F2]", chipOn: "rounded-full bg-ink text-white",
    anhNen: "bg-[#EEF3F3]", h: "font-semibold tracking-[-0.03em]", sec: "",
    search: "rounded-full bg-white",
  },
  bao: {
    body: "bg-white",
    header: "bg-white/90 backdrop-blur border-b border-ink/10",
    card: "bg-white", r: "rounded-md", rImg: "rounded-md",
    btn: "rounded-md bg-primary text-white", btn2: "rounded-md ring-1 ring-ink/20 text-ink",
    chip: "rounded-md ring-1 ring-ink/15", chipOn: "rounded-md ring-2 ring-primary text-primary",
    anhNen: "bg-[#F4F5F5]", h: "font-medium tracking-[-0.035em]", sec: "",
    search: "rounded-md ring-1 ring-ink/10 bg-white",
  },
}[KIEU];

const ICON = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
  cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2 2h3l2.7 12.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.6a1 1 0 0 0-.2-.6l-3.5-4.4a1 1 0 0 0-.8-.4H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.7 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  pen: '<path d="M12 20h9"/><path d="M16.4 3.6a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4Z"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  box: '<path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
};
const icon = (ten, cls = "w-5 h-5") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICON[ten]}</svg>`;
const sao = (cls = "w-4 h-4") => `<span class="inline-flex text-amber-500">${icon("star", cls + " fill-current").repeat(5)}</span>`;
const A = (ten) => `../img/${ten}.webp`;

const DANH_MUC = [
  ["Danh thiếp", "dm-danh-thiep", "150.000đ/hộp"], ["Tem nhãn & sticker", "dm-sticker", "350đ/tem"],
  ["Nhãn vở", "dm-nhan-vo", "700đ/tem"], ["Thiệp mời", "dm-thiep-moi", "7.000đ/cái"],
  ["Lịch để bàn", "dm-lich-de-ban", ""], ["Lịch treo tường", "dm-lich-treo-tuong", ""],
  ["Sổ tay", "dm-bia-so-tay", ""], ["Bìa vở học sinh", "dm-bia-vo-hoc-sinh", ""],
  ["Photobook", "dm-photobook", ""], ["Ảnh photobooth", "dm-anh-photobooth", ""],
  ["Quạt cầm tay", "dm-quat-cam-tay", ""], ["Hashtag cầm tay", "dm-hashtag-cam-tay", ""],
];
const SP = [
  ["Thiệp cưới — Mẫu số 1", "sp-thiep-cuoi-1", "7.000đ", "cái", "Thiệp mời", "Bán chạy"],
  ["Bộ nhãn vở các môn học", "sp-bo-nhan-vo-cac-mon-hoc", "60.000đ", "bộ", "Nhãn vở", ""],
  ["Nhãn vở Phi hành gia", "sp-nhan-vo-phi-hanh-gia", "700đ", "tem", "Nhãn vở", "Mới"],
  ["Nhãn vở dễ thương mẫu 1", "sp-nhan-vo-de-thuong-mau-1", "700đ", "cái", "Nhãn vở", ""],
  ["Nhãn vở Robot Optimus", "sp-nhan-vo-robot-optimus", "700đ", "cái", "Nhãn vở", ""],
  ["Tem nhãn decal chống nước", "dm-sticker", "350đ", "tem", "Tem nhãn", ""],
  ["Danh thiếp giấy mỹ thuật", "dm-danh-thiep", "150.000đ", "hộp", "Danh thiếp", "Bán chạy"],
  ["Lịch để bàn 2027", "dm-lich-de-ban", "45.000đ", "cuốn", "Lịch", "Mới"],
];

// ---------- Khung chung ----------
function nenTrang() {
  // Nen luoi chuyen sac (mesh) chi dung cho phong cach kinh mo
  if (KIEU !== "kinh") return "";
  return `<div aria-hidden="true" class="fixed inset-0 -z-10 overflow-hidden">
    <div class="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full bg-[#7FD8C6]/45 blur-[120px]"></div>
    <div class="absolute top-1/3 -right-40 w-[560px] h-[560px] rounded-full bg-[#9ED6F2]/40 blur-[120px]"></div>
    <div class="absolute bottom-0 left-1/3 w-[520px] h-[420px] rounded-full bg-[#0E6F73]/15 blur-[120px]"></div>
  </div>`;
}

function header() {
  const nav = DANH_MUC.slice(0, 8).map(([t]) => `<a class="hover:text-primary" href="#">${t}</a>`).join("");
  return `
  <header class="sticky top-0 z-40 ${T.header}">
    <div class="container flex h-14 lg:h-[68px] items-center gap-4 lg:gap-8">
      <button class="lg:hidden -ml-1 p-2">${icon("menu", "w-6 h-6")}</button>
      <a href="home.html?kieu=${KIEU}"><img src="../img/logo.svg" alt="SMV" class="h-7 lg:h-8"></a>
      <div class="hidden lg:flex flex-1 max-w-xl items-center h-11 px-5 text-muted text-sm ${T.search}">
        <span class="flex-1">Tìm danh thiếp, tem nhãn, thiệp cưới…</span>${icon("search")}
      </div>
      <div class="ml-auto flex items-center gap-1 lg:gap-2 text-ink">
        <span class="hidden xl:inline text-sm text-muted mr-2">Hotline <b class="text-ink">1900 6363</b></span>
        <button class="lg:hidden p-2">${icon("search", "w-6 h-6")}</button>
        <button class="hidden lg:flex p-2.5 rounded-full hover:bg-black/5">${icon("heart", "w-[22px] h-[22px]")}</button>
        <button class="relative p-2 lg:p-2.5 rounded-full hover:bg-black/5">${icon("cart", "w-[22px] h-[22px]")}<span class="absolute top-1 right-1 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[11px] font-semibold text-white">2</span></button>
        <button class="hidden lg:flex items-center gap-2 h-11 px-4 rounded-full text-sm font-medium hover:bg-black/5">${icon("user")} Đăng nhập</button>
        <a class="hidden lg:inline-flex items-center h-11 px-5 text-sm font-semibold ${T.btn}">Đặt in ngay</a>
      </div>
    </div>
    <nav class="hidden lg:block ${KIEU === "bao" ? "border-t border-ink/10" : ""}">
      <div class="container flex h-11 items-center gap-7 text-sm font-medium text-ink/80 whitespace-nowrap overflow-hidden">
        <span class="flex items-center gap-2 text-primary font-semibold">${icon("grid", "w-4 h-4")} Tất cả sản phẩm</span>
        ${nav}
        <span class="ml-auto flex gap-6 text-muted"><a href="#">Tự thiết kế</a><a href="#">Yêu cầu thiết kế</a></span>
      </div>
    </nav>
  </header>`;
}

function footer() {
  const cot = (t, ds) => `<div><h4 class="text-base font-semibold text-ink mb-3">${t}</h4><ul class="space-y-2 text-sm text-muted">${ds.map((x) => `<li>${x}</li>`).join("")}</ul></div>`;
  const nen = KIEU === "bento" ? "bg-white rounded-t-[36px]" : KIEU === "kinh" ? "bg-white/50 backdrop-blur-xl border-t border-white/70" : "border-t border-ink/10";
  return `
  <footer class="mt-20 lg:mt-28 ${nen}">
    <div class="container py-12 grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div><img src="../img/logo.svg" class="h-8 mb-4" alt="SMV">
        <p class="text-sm text-muted max-w-xs">Công ty TNHH ĐTPT và TM Sắc Màu Việt. Nền tảng thiết kế online & đặt in.</p>
        <p class="mt-4 text-sm">Số 20 Ngõ 80, Phú Viên, Bồ Đề, Long Biên, Hà Nội<br><b>024 73060688</b> · 0987 156 633</p></div>
      ${cot("Sản phẩm", ["Danh thiếp", "Tem nhãn & sticker", "Thiệp mời", "Lịch", "Sổ tay"])}
      ${cot("Hỗ trợ", ["Hướng dẫn thiết kế", "Quy trình đặt in", "Bảng giá", "Theo dõi đơn"])}
      ${cot("Chính sách", ["Điều khoản", "Bảo mật", "Vận chuyển", "Đổi trả"])}
    </div>
    <div class="container py-4 text-xs text-muted border-t ${KIEU === "kinh" ? "border-white/70" : "border-ink/5"}">© 2026 Sắc Màu Việt</div>
  </footer>
  <nav class="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-5 h-16 bg-white/80 backdrop-blur-xl border-t border-black/5 text-[12px] font-medium text-muted">
    <a class="flex flex-col items-center justify-center gap-1 text-primary">${icon("home")}Trang chủ</a>
    <a class="flex flex-col items-center justify-center gap-1">${icon("grid")}Sản phẩm</a>
    <a class="flex flex-col items-center justify-center gap-1">${icon("pen")}Tự thiết kế</a>
    <a class="flex flex-col items-center justify-center gap-1">${icon("box")}Đơn hàng</a>
    <a class="flex flex-col items-center justify-center gap-1">${icon("user")}Tài khoản</a>
  </nav>`;
}

const tieuDe = (h2, phu, link = true) => `
  <div class="flex items-end justify-between gap-4">
    <div>${KIEU === "bao" ? `<p class="text-xs font-semibold uppercase tracking-[.2em] text-primary mb-3">${phu.split("|")[0]}</p>` : ""}
      <h2 class="text-[26px] leading-8 lg:text-[40px] lg:leading-[48px] ${T.h} text-ink">${h2}</h2>
      ${KIEU !== "bao" ? `<p class="mt-2 text-muted">${phu.split("|").pop()}</p>` : ""}</div>
    ${link ? `<a class="hidden sm:inline-flex items-center gap-1.5 h-10 px-4 text-sm font-semibold ${KIEU === "bao" ? "text-primary underline underline-offset-4" : T.btn2}">Xem tất cả ${icon("arrow", "w-4 h-4")}</a>` : ""}
  </div>`;

// ---------- HERO theo phong cach ----------
function heroKinh() {
  return `
  <section class="container pt-8 pb-6 lg:pt-16 lg:pb-12 grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
    <div>
      <span class="inline-flex items-center gap-2 h-8 px-3 text-xs font-semibold text-primary ${T.chip}">${icon("spark", "w-4 h-4")} Thiết kế & đặt in online</span>
      <h1 class="mt-5 text-[34px] leading-[42px] lg:text-[56px] lg:leading-[64px] ${T.h} text-ink">Thiết kế đẹp,<br>in nhanh, <span class="bg-gradient-to-r from-primary to-mint bg-clip-text text-transparent">giao tận nơi</span></h1>
      <p class="mt-5 text-base lg:text-lg text-muted max-w-lg">Chọn mẫu có sẵn hoặc tự thiết kế trên trình chỉnh sửa trực tuyến. Nhận hàng trong 2 giờ nội thành Hà Nội.</p>
      <div class="mt-7 flex flex-col sm:flex-row gap-3">
        <a class="inline-flex justify-center items-center h-12 px-7 font-semibold ${T.btn}">Xem mẫu thiết kế</a>
        <a class="inline-flex justify-center items-center gap-2 h-12 px-6 font-semibold ${T.btn2}">${icon("upload")} Tải file lên & đặt in</a>
      </div>
      <div class="mt-8 flex items-center gap-3 text-sm text-muted"><div class="flex -space-x-2">${["dm-nhan-vo", "dm-danh-thiep", "dm-sticker"].map((a) => `<img src="${A(a)}" class="w-8 h-8 rounded-full ring-2 ring-white object-cover">`).join("")}</div>${sao()} <b class="text-ink">4,9</b> từ 1.200+ khách</div>
    </div>
    <div class="relative h-[340px] sm:h-[420px] lg:h-[480px]">
      <div class="absolute right-0 top-0 w-[70%] h-[78%] p-2 ${T.r} ${T.card}"><img src="${A("dm-nhan-vo")}" class="w-full h-full object-cover ${T.rImg}"></div>
      <div class="absolute left-0 bottom-0 w-[50%] h-[56%] p-2 ${T.r} ${T.card} -rotate-3"><img src="${A("dm-lich-de-ban")}" class="w-full h-full object-cover ${T.rImg}"></div>
      <div class="absolute left-[6%] top-[8%] px-4 py-3 ${T.r} ${T.card}"><p class="text-xs text-muted">In & giao</p><p class="text-2xl font-bold text-primary">2 giờ</p></div>
      <div class="absolute right-[4%] bottom-[4%] px-4 py-3 flex items-center gap-3 ${T.r} ${T.card}"><span class="grid place-items-center w-10 h-10 rounded-full bg-primary text-white">${icon("check")}</span><div><p class="text-sm font-semibold">Duyệt bản in thử</p><p class="text-xs text-muted">trước khi in, miễn phí</p></div></div>
    </div>
  </section>`;
}

function heroBento() {
  const o = (cls, noi) => `<div class="${T.card} ${T.r} overflow-hidden ${cls}">${noi}</div>`;
  return `
  <section class="container pt-4 lg:pt-6">
    <div class="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-[260px_220px] gap-3 lg:gap-4">
      ${o("col-span-2 lg:row-span-2 p-6 lg:p-10 flex flex-col justify-center gap-8 !bg-tint", `
        <div><span class="inline-flex items-center h-8 px-3 text-xs font-semibold bg-white text-primary rounded-full">Thiết kế & đặt in online</span>
        <h1 class="mt-5 text-[34px] leading-[40px] lg:text-[54px] lg:leading-[58px] ${T.h} text-ink">Thiết kế đẹp, in nhanh, giao tận nơi</h1>
        <p class="mt-4 text-muted max-w-md">Chọn mẫu có sẵn hoặc tự thiết kế trực tuyến. Nhận hàng trong 2 giờ nội thành Hà Nội.</p></div>
        <div class="mt-6 flex flex-col sm:flex-row gap-3"><a class="inline-flex justify-center items-center h-12 px-7 font-semibold ${T.btn}">Xem mẫu thiết kế</a><a class="inline-flex justify-center items-center h-12 px-6 font-semibold ${T.btn2}">Tải file lên</a></div>`)}
      ${o("lg:row-span-2 aspect-[3/4] lg:aspect-auto", `<img src="${A("dm-nhan-vo")}" class="w-full h-full object-cover">`)}
      ${o("p-5 lg:p-6 !bg-primary text-white flex flex-col justify-between aspect-[3/4] lg:aspect-auto", `<span class="opacity-80 text-sm">In & giao nhanh</span><div><p class="text-[44px] lg:text-[56px] leading-none font-semibold tracking-tight">2 giờ</p><p class="mt-2 text-sm opacity-80">nội thành Hà Nội</p></div>`)}
      ${o("col-span-2 lg:col-span-1 p-5 flex flex-col justify-between", `<div class="flex items-center gap-2">${sao()}<b>4,9</b></div><p class="mt-6 text-sm text-muted">“Tự sửa tên trên web 5 phút, hôm sau có hàng.”</p><p class="text-sm font-semibold">1.200+ khách hàng</p>`)}
    </div>
  </section>`;
}

function heroBao() {
  return `
  <section class="container pt-10 lg:pt-20">
    <p class="text-xs font-semibold uppercase tracking-[.2em] text-primary">Sắc Màu Việt — Thiết kế & đặt in online</p>
    <div class="mt-5 grid lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-16 items-end">
      <h1 class="text-[40px] leading-[44px] lg:text-[84px] lg:leading-[84px] ${T.h} text-ink">Thiết kế đẹp.<br>In nhanh.<br><span class="text-primary">Giao tận nơi.</span></h1>
      <div class="lg:pb-3">
        <p class="text-lg text-muted">Chọn mẫu có sẵn hoặc tự thiết kế trực tuyến. Nhận hàng trong 2 giờ nội thành Hà Nội.</p>
        <div class="mt-6 flex flex-col sm:flex-row gap-3"><a class="inline-flex justify-center items-center h-12 px-7 font-semibold ${T.btn}">Xem mẫu thiết kế</a><a class="inline-flex justify-center items-center h-12 px-6 font-semibold ${T.btn2}">Tải file lên</a></div>
      </div>
    </div>
    <div class="mt-10 lg:mt-14 grid grid-cols-3 gap-2 lg:gap-4">
      ${["dm-nhan-vo", "dm-lich-de-ban", "dm-hashtag-cam-tay"].map((a, i) => `<img src="${A(a)}" class="w-full ${i === 1 ? "aspect-[4/5]" : "aspect-[4/5] lg:mt-12"} object-cover ${T.rImg}">`).join("")}
    </div>
    <div class="mt-8 grid grid-cols-3 border-y border-ink/10 divide-x divide-ink/10 text-center">
      ${[["25+", "mẫu thiết kế"], ["34", "tỉnh thành giao hàng"], ["2 giờ", "in & giao nhanh"]].map(([s, t]) => `<div class="py-5"><p class="text-2xl lg:text-4xl ${T.h}">${s}</p><p class="text-xs lg:text-sm text-muted mt-1">${t}</p></div>`).join("")}
    </div>
  </section>`;
}

// ---------- Cac khoi dung chung ----------
function camKet() {
  const ds = [["truck", "Giao toàn quốc", "Nội thành Hà Nội 2 giờ"], ["shield", "Thanh toán an toàn", "Chuyển khoản, ví, COD"], ["pen", "Miễn phí thiết kế", "Sửa trực tuyến, xem trước"], ["check", "Bảo hành in ấn", "Đổi miễn phí nếu lỗi xưởng"]];
  if (KIEU === "bao") return "";
  return `<section class="container mt-8 lg:mt-12"><div class="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
    ${ds.map(([i, t, m]) => `<div class="flex items-center gap-3 p-3 lg:p-4 ${T.r} ${T.card}"><span class="grid place-items-center w-9 h-9 lg:w-11 lg:h-11 shrink-0 rounded-full ${KIEU === "kinh" ? "bg-white/80" : "bg-tint"} text-primary">${icon(i)}</span><div><p class="text-sm lg:text-[15px] font-semibold leading-tight">${t}</p><p class="hidden lg:block text-sm text-muted">${m}</p></div></div>`).join("")}
  </div></section>`;
}

function danhMuc() {
  let luoi;
  if (KIEU === "bento") {
    luoi = `<div class="mt-6 grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4">${DANH_MUC.slice(0, 8).map(([t, a, g], i) => `
      <a class="group ${T.card} ${T.r} p-2 ${i < 2 ? "lg:col-span-3 lg:row-span-1" : "lg:col-span-1"} ${i === 0 ? "col-span-2" : ""}">
        <div class="${i < 2 ? "aspect-[16/10]" : "aspect-square"} ${T.rImg} overflow-hidden ${T.anhNen}"><img src="${A(a)}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500"></div>
        <div class="px-2 pt-3 pb-1 flex items-center justify-between gap-2"><div><p class="font-semibold ${i < 2 ? "lg:text-lg" : "text-[15px]"}">${t}</p>${g ? `<p class="text-sm text-muted">Từ ${g}</p>` : ""}</div>${i < 2 ? `<span class="grid place-items-center w-9 h-9 rounded-full bg-tint text-primary">${icon("arrow", "w-4 h-4")}</span>` : ""}</div>
      </a>`).join("")}</div>`;
  } else if (KIEU === "bao") {
    luoi = `<div class="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">${DANH_MUC.slice(0, 8).map(([t, a, g], i) => `
      <a class="group border-t border-ink/15 pt-3"><p class="text-xs text-muted font-mono">${String(i + 1).padStart(2, "0")}</p>
        <div class="mt-2 aspect-[4/3] ${T.rImg} overflow-hidden ${T.anhNen}"><img src="${A(a)}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500"></div>
        <div class="mt-3 flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-2"><p class="font-medium text-base lg:text-[17px] leading-snug">${t}</p>${g ? `<p class="text-sm text-muted whitespace-nowrap">từ ${g.split("/")[0]}</p>` : ""}</div></a>`).join("")}</div>`;
  } else {
    luoi = `<div class="mt-6 -mx-4 px-4 scroll-px-4 flex gap-3 overflow-x-auto snap-x [scrollbar-width:none] lg:mx-0 lg:px-0 lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible">${DANH_MUC.map(([t, a, g]) => `
      <a class="group snap-start shrink-0 w-[42%] sm:w-[30%] lg:w-auto p-2 ${T.r} ${T.card}">
        <div class="aspect-square ${T.rImg} overflow-hidden"><img src="${A(a)}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500"></div>
        <p class="mt-2.5 px-1 text-[15px] font-semibold leading-snug">${t}</p><p class="px-1 pb-1 text-sm text-muted">${g ? "Từ " + g : "&nbsp;"}</p></a>`).join("")}</div>`;
  }
  return `<section class="container mt-14 lg:mt-24">${tieuDe("Bạn muốn in gì?", "Danh mục|12 nhóm sản phẩm in giấy, có mẫu sẵn để sửa.")}${luoi}</section>`;
}

function theSp([ten, anh, gia, dv, dm, nhan]) {
  const nhanHtml = nhan ? `<span class="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold ${KIEU === "bao" ? "bg-white" : "rounded-full bg-white/90 backdrop-blur"} ${nhan === "Mới" ? "text-primary" : "text-[#B4561E]"}">${nhan}</span>` : "";
  const vo = KIEU === "bao" ? "" : `p-2 ${T.r} ${T.card}`;
  return `
  <a href="san-pham.html?kieu=${KIEU}" class="group block ${vo}">
    <div class="relative aspect-[4/3] ${T.rImg} overflow-hidden ${T.anhNen}"><img src="${A(anh)}" class="w-full h-full object-contain p-3 group-hover:scale-105 transition duration-500">${nhanHtml}</div>
    <div class="${KIEU === "bao" ? "pt-3" : "px-2 pt-3 pb-2"}">
      <p class="text-xs text-muted">${dm}</p>
      <h3 class="mt-0.5 text-[15px] lg:text-base font-semibold leading-snug line-clamp-2 group-hover:text-primary">${ten}</h3>
      <div class="mt-2 flex items-end justify-between gap-2">
        <p><span class="text-sm text-muted">Từ</span> <span class="text-lg font-bold text-ink">${gia}</span><span class="text-sm text-muted">/${dv}</span></p>
        <span class="hidden sm:flex items-center gap-1 text-xs text-muted">${icon("clock", "w-3.5 h-3.5")}3 ngày</span>
      </div>
    </div>
  </a>`;
}

function sanPham() {
  return `<section class="container mt-14 lg:mt-24">${tieuDe("Mẫu được đặt nhiều", "Bán chạy|Sửa tên, ảnh, màu ngay trên web rồi đặt in.")}
    <div class="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 ${KIEU === "bao" ? "gap-y-10" : ""}">${SP.map(theSp).join("")}</div></section>`;
}

function baBuoc() {
  const ds = [["Chọn mẫu", "Mẫu chuẩn kích thước in, cập nhật mỗi tuần.", "cms-776eab8c"], ["Sửa trực tuyến", "Đổi chữ, ảnh, màu ngay trên trình duyệt.", "cms-3c6bb8c6"], ["In & giao tận nơi", "Báo giá theo số lượng, theo dõi đơn từng bước.", "cms-6dfb7532"]];
  if (KIEU === "bao") {
    return `<section class="container mt-16 lg:mt-28">${tieuDe("Đặt in trong 3 bước", "Quy trình|", false)}
      <div class="mt-8 grid md:grid-cols-3 border-t border-ink/15">${ds.map(([t, m], i) => `<div class="py-6 md:pr-8 ${i ? "md:pl-8 md:border-l border-ink/15" : ""} border-b md:border-b-0 border-ink/15"><p class="text-[56px] leading-none ${T.h} text-primary">0${i + 1}</p><h3 class="mt-4 text-xl font-semibold">${t}</h3><p class="mt-2 text-muted">${m}</p></div>`).join("")}</div></section>`;
  }
  return `<section class="container mt-16 lg:mt-28">${tieuDe("Đặt in trong 3 bước", "Từ chọn mẫu đến nhận hàng, không cần phần mềm.", false)}
    <div class="mt-6 grid md:grid-cols-3 gap-3 lg:gap-5">${ds.map(([t, m, a], i) => `
      <div class="p-2 ${T.r} ${T.card}"><img src="${A(a)}" class="w-full aspect-[16/10] object-cover ${T.rImg}">
        <div class="p-4"><span class="inline-grid place-items-center w-8 h-8 rounded-full bg-primary text-white text-sm font-semibold">${i + 1}</span><h3 class="mt-3 text-xl font-semibold">${t}</h3><p class="mt-1 text-muted">${m}</p></div></div>`).join("")}</div></section>`;
}

function khuyenMai() {
  const kmNen = KIEU === "bao" ? "bg-tint" : KIEU === "bento" ? "!bg-primary text-white" : "";
  const kmChu = KIEU === "bento" ? "text-white" : "text-primary";
  return `<section class="container mt-16 lg:mt-28 grid lg:grid-cols-2 gap-3 lg:gap-5">
    <div class="p-7 lg:p-12 flex flex-col justify-center ${T.r} ${KIEU === "bao" ? "" : T.card} ${kmNen}">
      <p class="text-xs font-semibold uppercase tracking-[.18em] ${KIEU === "bento" ? "text-white/80" : "text-primary"}">Ưu đãi khách mới</p>
      <p class="mt-3 text-[64px] lg:text-[88px] leading-none ${T.h} ${kmChu}">−20%</p>
      <h3 class="mt-3 text-2xl font-semibold">Cho đơn in đầu tiên</h3>
      <p class="mt-2 ${KIEU === "bento" ? "text-white/80" : "text-muted"}">Nhập mã <b>CHAOBAN</b> khi thanh toán. Áp dụng mọi sản phẩm.</p>
      <a class="mt-6 self-start inline-flex items-center h-12 px-7 font-semibold ${KIEU === "bento" ? "rounded-full bg-white text-primary" : T.btn}">Nhận ưu đãi</a>
    </div>
    <div class="relative overflow-hidden min-h-[320px] ${T.r}">
      <img src="${A("cms-e07c3603")}" class="absolute inset-0 w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-[#083B3D]/90 via-[#083B3D]/30 to-transparent"></div>
      <div class="relative h-full flex flex-col justify-end p-7 lg:p-12 text-white">
        <p class="text-xs font-semibold uppercase tracking-[.18em] text-white/75">Giải pháp doanh nghiệp</p>
        <h3 class="mt-2 text-2xl lg:text-[32px] lg:leading-10 font-semibold">In ấn trọn gói cho thương hiệu</h3>
        <p class="mt-2 text-white/80 max-w-md">Catalogue, profile, danh thiếp, tem nhãn — một đầu mối, xuất hoá đơn VAT.</p>
        <a class="mt-6 self-start inline-flex items-center h-12 px-7 font-semibold ${KIEU === "bao" ? "rounded-md" : "rounded-full"} bg-white text-ink">Nhận báo giá</a>
      </div>
    </div></section>`;
}

function danhGia() {
  const ds = [["Đặt card visit cho cả team, tự sửa tên trên web 5 phút, hôm sau có hàng.", "Nguyễn Minh Anh", "Văn phòng luật"], ["Kho nhãn vở đẹp, con tự chọn. Giá rõ ràng theo số lượng.", "Trần Thu Hà", "Phụ huynh"], ["Card visit khai trương lên đúng màu thiết kế, đóng gói kỹ.", "Lê Hoàng Nam", "Chủ cửa hàng"]];
  return `<section class="container mt-16 lg:mt-28">${tieuDe("Khách hàng nói gì", "Đánh giá|4,9/5 từ hơn 1.200 đơn hàng.", false)}
    <div class="mt-6 grid md:grid-cols-3 gap-3 lg:gap-5">${ds.map(([c, n, v]) => `
      <figure class="p-6 lg:p-7 ${T.r} ${KIEU === "bao" ? "border-t border-ink/15 !rounded-none !px-0" : T.card}">${sao()}<blockquote class="mt-4 text-[17px] leading-7 text-ink">“${c}”</blockquote><figcaption class="mt-5 text-sm"><b>${n}</b> <span class="text-muted">· ${v}</span></figcaption></figure>`).join("")}</div></section>`;
}

function veTrangChu() {
  const hero = { kinh: heroKinh, bento: heroBento, bao: heroBao }[KIEU]();
  document.body.className = `font-sans text-ink antialiased ${T.body} pb-16 lg:pb-0`;
  document.body.innerHTML = nenTrang() + header() + `<main>${hero}${camKet()}${danhMuc()}${sanPham()}${baBuoc()}${khuyenMai()}${danhGia()}</main>` + footer();
}

// ---------- Trang san pham ----------
function veTrangSanPham() {
  const chip = (ds) => ds.map((t, i) => `<button class="h-11 px-4 text-sm font-medium ${i === 0 ? T.chipOn : T.chip}">${t}</button>`).join("");
  const bac = [["100", "7.000đ"], ["200", "6.000đ"], ["500", "5.200đ"], ["1000", "4.500đ"]].map(([s, g], i) =>
    `<button class="py-2.5 text-center ${i === 1 ? T.chipOn : T.chip} !rounded-2xl ${KIEU === "bao" ? "!rounded-md" : ""}"><p class="text-base font-semibold">${s}</p><p class="text-xs ${i === 1 ? "opacity-80" : "text-muted"}">${g}/cái</p></button>`).join("");
  const thongSo = [["Kích thước", "12×18 / 13×18 cm"], ["Giấy", "Couche 300gsm"], ["Kiểu in", "2 mặt, 4 màu"], ["Gia công", "Cán màng mờ, kèm bao thư"], ["Thời gian in", "3 ngày làm việc"]];
  const lienQuan = [["Thiệp mời sinh nhật", "dm-thiep-moi", "5.000đ", "cái", "Thiệp mời", ""], ["Danh thiếp giấy mỹ thuật", "dm-danh-thiep", "150.000đ", "hộp", "Danh thiếp", ""], ["Tem nhãn decal", "dm-sticker", "350đ", "tem", "Tem nhãn", ""], ["Photobook cưới", "dm-photobook", "350.000đ", "cuốn", "Photobook", ""]];
  document.body.className = `font-sans text-ink antialiased ${T.body} pb-36 lg:pb-0`;
  document.body.innerHTML = nenTrang() + header() + `
  <main class="container">
    <nav class="py-4 text-sm text-muted flex gap-2 whitespace-nowrap overflow-hidden"><a href="home.html?kieu=${KIEU}">Trang chủ</a><span>/</span><a>Thiệp mời</a><span>/</span><span class="text-ink truncate">Thiệp cưới — Mẫu số 1</span></nav>
    <div class="grid lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-12">
      <div class="lg:sticky lg:top-32 self-start">
        <div class="aspect-[4/3] grid place-items-center overflow-hidden p-3 ${T.r} ${KIEU === "bao" ? T.anhNen : T.card}"><div class="w-full h-full grid place-items-center ${T.rImg} ${KIEU === "kinh" ? "bg-gradient-to-br from-white/70 to-tint/70" : KIEU === "bento" ? "bg-tint" : ""}"><img src="${A("sp-thiep-cuoi-1")}" class="w-[88%] h-[88%] object-contain drop-shadow-xl"></div></div>
        <div class="mt-3 flex gap-3 items-center"><button class="w-20 aspect-[4/3] p-1 ring-2 ring-primary ${T.rImg} bg-white"><img src="${A("sp-thiep-cuoi-1")}" class="w-full h-full object-contain"></button><button class="w-20 aspect-[4/3] overflow-hidden ${T.rImg} bg-white ring-1 ring-black/5"><img src="${A("dm-thiep-moi")}" class="w-full h-full object-cover"></button><span class="text-sm text-muted">Mặt trước · Mặt sau</span></div>
      </div>
      <div class="${KIEU === "bao" ? "" : `p-5 lg:p-8 ${T.r} ${T.card}`}">
        <p class="text-xs font-semibold uppercase tracking-[.18em] text-primary">Thiệp mời</p>
        <h1 class="mt-2 text-[28px] leading-9 lg:text-[40px] lg:leading-[48px] ${T.h}">Thiệp cưới — Mẫu số 1</h1>
        <div class="mt-2 flex items-center gap-2 text-sm text-muted">${sao()}<b class="text-ink">4,9</b> (38 đánh giá) · Đã bán 1.200+</div>
        <p class="mt-4 text-muted">Thiệp cưới cao cấp cá nhân hoá theo câu chuyện của bạn. Bao thư nắp tam giác hoặc nắp vuông.</p>
        <div class="mt-6 space-y-5">
          <div><p class="text-sm font-semibold">Kích thước</p><div class="mt-2 flex flex-wrap gap-2">${chip(["12×18 cm", "13×18 cm"])}</div></div>
          <div><p class="text-sm font-semibold">Chất liệu giấy</p><div class="mt-2 flex flex-wrap gap-2">${chip(["Couche 300gsm", "Mỹ thuật vân nhũ (+1.500đ)", "Kraft (+800đ)"])}</div></div>
          <div><p class="text-sm font-semibold">Số lượng <span class="font-normal text-muted">— càng nhiều càng rẻ</span></p><div class="mt-2 grid grid-cols-4 gap-2">${bac}</div></div>
        </div>
        <div class="mt-6 p-4 lg:p-5 flex items-end justify-between gap-4 ${KIEU === "bao" ? "border-y border-ink/10 !px-0" : `${T.rImg} ${KIEU === "kinh" ? "bg-white/70" : "bg-tint"}`}">
          <div><p class="text-sm text-muted">Tạm tính 200 thiệp</p><p class="text-[30px] leading-9 ${T.h} text-primary">1.200.000đ</p><p class="text-sm text-muted">6.000đ/thiệp · chưa gồm phí ship</p></div>
          <div class="text-right text-sm"><p class="flex items-center gap-1 justify-end font-medium">${icon("clock", "w-4 h-4")}In trong 3 ngày</p><p class="text-muted">Dự kiến nhận 22/10</p></div>
        </div>
        <div class="hidden lg:grid mt-5 grid-cols-[1fr_auto] gap-3">
          <a class="inline-flex justify-center items-center gap-2 h-12 font-semibold ${T.btn}">${icon("pen")}Tuỳ chỉnh mẫu này</a>
          <a class="inline-flex justify-center items-center gap-2 h-12 px-5 font-semibold ${T.btn2}">${icon("upload")}Tải file của tôi</a>
        </div>
        <ul class="mt-6 grid sm:grid-cols-2 gap-2.5 text-sm">${["Xem bản in thử (PDF) trước khi in", "Đổi miễn phí nếu lỗi từ xưởng", "Giao toàn quốc, nội thành 2 giờ", "Xuất hoá đơn VAT"].map((x) => `<li class="flex gap-2"><span class="text-primary">${icon("check")}</span>${x}</li>`).join("")}</ul>
      </div>
    </div>
    <section class="mt-14 lg:mt-24 grid lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-12">
      <div><div class="flex gap-6 border-b border-ink/10 font-semibold"><span class="pb-3 border-b-2 border-primary">Mô tả</span><span class="pb-3 text-muted">Thông số</span><span class="pb-3 text-muted">Đánh giá (38)</span></div>
        <div class="mt-5 space-y-4 text-muted max-w-prose"><p>Mỗi tấm thiệp được in trên giấy định lượng cao, màu chuẩn theo bản thiết kế bạn đã duyệt. Đổi tên cô dâu chú rể, ngày giờ, địa điểm, ảnh cưới ngay trên trình chỉnh sửa.</p></div></div>
      <div class="${KIEU === "bao" ? "border-t border-ink/15" : `${T.r} ${T.card}`}"><h3 class="${KIEU === "bao" ? "pt-4" : "px-6 pt-5"} text-lg font-semibold">Thông số</h3>
        <dl class="mt-2 text-sm divide-y divide-ink/5">${thongSo.map(([k, v]) => `<div class="flex justify-between ${KIEU === "bao" ? "py-3" : "px-6 py-3"}"><dt class="text-muted">${k}</dt><dd>${v}</dd></div>`).join("")}</dl></div>
    </section>
    <section class="mt-14 lg:mt-24">${tieuDe("Mẫu tương tự", "Gợi ý|Khách cũng xem các mẫu này.")}<div class="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">${lienQuan.map(theSp).join("")}</div></section>
  </main>
  <div class="lg:hidden fixed inset-x-0 bottom-16 z-30 bg-white/80 backdrop-blur-xl border-t border-black/5 px-4 py-3 flex items-center gap-3">
    <div class="shrink-0"><p class="text-xs text-muted">200 thiệp</p><p class="text-lg font-bold text-primary">1.200.000đ</p></div>
    <a class="flex-1 inline-flex justify-center items-center h-12 font-semibold ${T.btn}">Tuỳ chỉnh mẫu này</a>
  </div>` + footer();
}
