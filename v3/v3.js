// Mockup v3 — 3 bien the trong suot, bat mat (mau Transformative Teal). Chon qua ?v=liquid|dem|studio
// Dung lai ICON/icon/sao/A/DANH_MUC/SP + tailwind.config tu ../teal/kieu.js
const BIEN = ["liquid", "dem", "studio"].includes(new URLSearchParams(location.search).get("v"))
  ? new URLSearchParams(location.search).get("v") : "liquid";

const V = {
  liquid: {
    toi: false, body: "bg-[#F8FCFB] text-ink", // nen nhat bot theo yeu cau user 2026-10-17
    the: "kinh rounded-[28px]", theNho: "kinh rounded-2xl", btn: "nut-sang rounded-full", btn2: "kinh rounded-full text-ink",
    chu: "text-ink", phu: "text-muted", anhNen: "bg-white/50", h: "font-semibold tracking-[-0.035em]",
    chip: "kinh rounded-full", chipOn: "nut-sang rounded-full", gradient: "chu-gradient",
    blobs: [["#5CC8B2", .26, "-10%", "-10%", 640], ["#8FD3F4", .22, "55%", "5%", 560], ["#0E6F73", .07, "20%", "55%", 620], ["#C9F2E8", .45, "70%", "60%", 520]],
  },
  dem: {
    toi: true, body: "bg-[#031417] text-white",
    the: "kinh-toi vien-sang rounded-[28px]", theNho: "kinh-toi rounded-2xl", btn: "nut-mint rounded-full", btn2: "kinh-toi rounded-full text-white",
    chu: "text-white", phu: "text-white/65", anhNen: "bg-white/[.06]", h: "font-semibold tracking-[-0.035em]",
    chip: "kinh-toi rounded-full text-white", chipOn: "nut-mint rounded-full", gradient: "chu-gradient-toi",
    blobs: [["#0E6F73", .75, "-10%", "-15%", 700], ["#19A7A0", .4, "60%", "0%", 560], ["#2B6CB0", .3, "30%", "60%", 640], ["#5CC8B2", .25, "80%", "70%", 480]],
  },
  studio: {
    toi: false, body: "bg-white text-ink",
    the: "bg-white rounded-3xl shadow-[0_20px_50px_-28px_rgba(8,59,61,.4)] ring-1 ring-black/[.04]", theNho: "bg-white rounded-2xl ring-1 ring-black/[.05]",
    btn: "nut-sang rounded-xl", btn2: "bg-white rounded-xl ring-1 ring-black/10 text-ink",
    chu: "text-ink", phu: "text-muted", anhNen: "bg-tint", h: "font-bold tracking-[-0.03em]",
    chip: "bg-white rounded-xl ring-1 ring-black/10", chipOn: "rounded-xl ring-2 ring-primary bg-tint text-primary", gradient: "chu-gradient",
    blobs: [],
  },
}[BIEN];

// ?nen=<he so> nhan do dam cac mang cuc quang (de user chon muc nhat); ?nenmau=<hex khong #> doi nen chinh
const HE_SO_NEN = parseFloat(new URLSearchParams(location.search).get("nen")) || 1;
const NEN_MAU = new URLSearchParams(location.search).get("nenmau");
const nenCucQuang = () => V.blobs.length ? `<div class="cuc-quang" aria-hidden="true">${V.blobs.map(([c, o, x, y, s], i) =>
  `<i style="background:${c};opacity:${o * HE_SO_NEN};left:${x};top:${y};width:${s}px;height:${s}px;animation-delay:-${i * 5}s"></i>`).join("")}</div>` : "";

// ---------- Thanh dieu huong ----------
function thanhNoi() {
  // Menu dang vien thuoc noi (liquid glass) cho liquid + dem
  const g = V.toi ? "kinh-toi" : "kinh";
  return `
  <header class="fixed top-3 lg:top-5 inset-x-0 z-50 px-3">
    <div class="mx-auto max-w-[1180px] h-14 lg:h-16 pl-4 lg:pl-6 pr-2 flex items-center gap-3 lg:gap-6 rounded-full ${g}">
      <a href="home.html?v=${BIEN}" class="shrink-0"><img src="../img/logo.svg" class="h-7 lg:h-8" alt="SMV"></a>
      <nav class="hidden lg:flex items-center gap-1 text-sm font-medium ${V.chu}">
        ${["Sản phẩm in", "Mẫu thiết kế", "Tự thiết kế", "Báo giá", "Doanh nghiệp"].map((t, i) => `<a class="px-3.5 h-10 inline-flex items-center rounded-full ${i === 0 ? (V.toi ? "bg-white/10" : "bg-white/70") : "hover:bg-white/40"}">${t}</a>`).join("")}
      </nav>
      <div class="ml-auto flex items-center gap-1 ${V.chu}">
        <button class="p-2.5 rounded-full hover:bg-white/30">${icon("search", "w-[22px] h-[22px]")}</button>
        <button class="hidden sm:flex p-2.5 rounded-full hover:bg-white/30">${icon("heart", "w-[22px] h-[22px]")}</button>
        <button class="relative p-2.5 rounded-full hover:bg-white/30">${icon("cart", "w-[22px] h-[22px]")}<span class="absolute top-1.5 right-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-[#E5484D] px-1 text-[10px] font-bold text-white">2</span></button>
        <a class="hidden lg:inline-flex items-center h-11 px-5 ml-1 text-sm font-semibold ${V.btn}">Đặt in ngay</a>
        <button class="lg:hidden p-2.5">${icon("menu", "w-6 h-6")}</button>
      </div>
    </div>
  </header>`;
}

function thanhStudio() {
  return `
  <header class="sticky top-0 z-50 bg-white/75 backdrop-blur-xl border-b border-black/5">
    <div class="container h-14 lg:h-16 flex items-center gap-4 lg:gap-8">
      <button class="lg:hidden -ml-1 p-2">${icon("menu", "w-6 h-6")}</button>
      <img src="../img/logo.svg" class="h-7 lg:h-8" alt="SMV">
      <nav class="hidden lg:flex gap-7 text-sm font-medium">${["Sản phẩm in", "Mẫu thiết kế", "Tự thiết kế", "Báo giá", "Doanh nghiệp"].map((t) => `<a class="hover:text-primary">${t}</a>`).join("")}</nav>
      <div class="ml-auto flex items-center gap-1">
        <span class="hidden xl:flex items-center gap-2 mr-3 text-sm"><span class="grid place-items-center w-8 h-8 rounded-full bg-tint text-primary">${icon("clock", "w-4 h-4")}</span>Hotline <b>1900 6363</b></span>
        <button class="p-2.5 rounded-xl hover:bg-tint">${icon("search", "w-[22px] h-[22px]")}</button>
        <button class="relative p-2.5 rounded-xl hover:bg-tint">${icon("cart", "w-[22px] h-[22px]")}<span class="absolute top-1.5 right-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-[#E5484D] px-1 text-[10px] font-bold text-white">2</span></button>
        <a class="hidden lg:inline-flex items-center h-11 px-5 ml-2 text-sm font-semibold ${V.btn}">Nhận báo giá</a>
      </div>
    </div>
  </header>`;
}

// ---------- HERO ----------
function heroLiquid() {
  const quat = ["dm-sticker", "dm-danh-thiep", "dm-nhan-vo", "dm-lich-de-ban", "dm-hashtag-cam-tay"];
  return `
  <section class="relative pt-28 lg:pt-40 text-center">
    <div class="container">
      <span class="inline-flex items-center gap-2 h-9 pl-1.5 pr-4 text-sm font-medium ${V.chip}"><span class="px-2.5 h-6 inline-flex items-center rounded-full bg-primary text-white text-xs font-semibold">Mới</span>In nhanh 2 giờ nội thành Hà Nội</span>
      <h1 class="mt-6 text-[40px] leading-[46px] sm:text-[56px] sm:leading-[60px] lg:text-[76px] lg:leading-[80px] ${V.h}">In ấn đẹp như<br><span class="${V.gradient}">bạn tưởng tượng</span></h1>
      <p class="mt-5 mx-auto max-w-xl text-base lg:text-lg ${V.phu}">Hàng trăm mẫu danh thiếp, tem nhãn, thiệp mời sẵn sàng để bạn sửa trực tuyến — duyệt bản in thử, rồi nhận hàng tận nơi.</p>
      <div class="mt-8 mx-auto max-w-2xl p-2 flex items-center gap-2 rounded-full kinh-dac">
        <span class="pl-3 text-muted">${icon("search", "w-6 h-6")}</span>
        <input class="flex-1 min-w-0 h-12 bg-transparent outline-none text-base placeholder:text-muted" placeholder="Bạn muốn in gì? Thử “thiệp cưới”">
        <a class="inline-flex items-center h-12 px-5 lg:px-7 font-semibold ${V.btn}">Tìm mẫu</a>
      </div>
      <div class="mt-4 flex flex-wrap justify-center gap-2 text-sm">${["Danh thiếp", "Tem nhãn", "Thiệp cưới", "Nhãn vở", "Lịch 2027"].map((t) => `<a class="h-9 px-4 inline-flex items-center ${V.chip}">${t}</a>`).join("")}</div>
    </div>
    <div class="relative mt-12 lg:mt-16 h-[230px] sm:h-[300px] lg:h-[400px] overflow-hidden">
      <div class="absolute left-1/2 top-4 -translate-x-1/2 w-[1100px] max-w-none h-full">
        ${quat.map((a, i) => {
          const goc = (i - 2) * 9, x = (i - 2) * 200, y = Math.abs(i - 2) * 26;
          return `<div class="absolute left-1/2 top-0 w-[150px] sm:w-[200px] lg:w-[260px] aspect-[4/5] p-2 rounded-[26px] kinh" style="transform:translateX(calc(-50% + ${x * (innerWidth < 640 ? 0.55 : innerWidth < 1024 ? 0.75 : 1)}px)) translateY(${y}px) rotate(${goc}deg);z-index:${10 - Math.abs(i - 2)}"><img src="${A(a)}" class="w-full h-full object-cover rounded-[20px]"></div>`;
        }).join("")}
      </div>
      <div class="hidden sm:flex absolute left-[8%] lg:left-[14%] top-[18%] z-20 noi items-center gap-3 px-4 py-3 rounded-2xl kinh-dac text-left"><span class="grid place-items-center w-10 h-10 rounded-full bg-primary text-white">${icon("check")}</span><div><p class="text-sm font-semibold">Duyệt bản in thử</p><p class="text-xs text-muted">miễn phí trước khi in</p></div></div>
      <div class="hidden sm:block absolute right-[8%] lg:right-[14%] top-[30%] z-20 noi px-4 py-3 rounded-2xl kinh-dac text-left" style="animation-delay:-3s"><div class="flex items-center gap-2">${sao("w-3.5 h-3.5")}<b class="text-sm">4,9</b></div><p class="text-xs text-muted mt-1">từ 1.200+ khách hàng</p></div>
    </div>
  </section>`;
}

function heroDem() {
  return `
  <section class="container pt-28 lg:pt-40 grid lg:grid-cols-[1fr_1.05fr] gap-12 items-center">
    <div>
      <span class="inline-flex items-center gap-2 h-9 px-4 text-sm font-medium ${V.chip}"><span class="w-2 h-2 rounded-full bg-[#5CC8B2] shadow-[0_0_12px_#5CC8B2]"></span>Trình chỉnh sửa trực tuyến</span>
      <h1 class="mt-6 text-[40px] leading-[46px] lg:text-[68px] lg:leading-[72px] ${V.h}">Sửa mẫu trong<br><span class="${V.gradient}">5 phút.</span> In ngay<br>hôm nay.</h1>
      <p class="mt-5 max-w-lg text-base lg:text-lg ${V.phu}">Chọn mẫu, đổi tên, ảnh, màu ngay trên trình duyệt. Xem bản in thử PDF, đặt in và nhận hàng trong 2 giờ nội thành.</p>
      <div class="mt-8 flex flex-col sm:flex-row gap-3"><a class="inline-flex justify-center items-center h-12 px-7 font-semibold ${V.btn}">Bắt đầu thiết kế</a><a class="inline-flex justify-center items-center gap-2 h-12 px-6 font-semibold ${V.btn2}">${icon("upload")} Tải file của tôi</a></div>
      <div class="mt-10 grid grid-cols-3 max-w-md gap-4">${[["25+", "mẫu thiết kế"], ["2 giờ", "in & giao"], ["4,9★", "1.200+ khách"]].map(([s, t]) => `<div><p class="text-2xl lg:text-3xl font-semibold ${V.gradient}">${s}</p><p class="text-sm ${V.phu}">${t}</p></div>`).join("")}</div>
    </div>
    <div class="relative">
      <div class="absolute -inset-10 bg-[#19A7A0]/30 blur-[90px] rounded-full"></div>
      <div class="relative p-3 ${V.the}">
        <div class="flex items-center gap-2 px-2 pb-3 text-xs text-white/70"><span class="flex gap-1.5"><i class="w-2.5 h-2.5 rounded-full bg-white/25"></i><i class="w-2.5 h-2.5 rounded-full bg-white/25"></i><i class="w-2.5 h-2.5 rounded-full bg-white/25"></i></span><span class="mx-auto">Thiệp cưới — Mẫu số 1</span>${icon("upload", "w-4 h-4")}</div>
        <div class="grid grid-cols-[52px_1fr] gap-3">
          <div class="flex flex-col gap-2">${["pen", "grid", "upload", "spark"].map((i, k) => `<span class="grid place-items-center w-[52px] h-[52px] rounded-xl ${k === 0 ? "nut-mint" : "bg-white/[.06] text-white/80"}">${icon(i)}</span>`).join("")}</div>
          <div class="relative aspect-[4/3] rounded-2xl bg-[#F4FBF9] grid place-items-center overflow-hidden"><img src="${A("sp-thiep-cuoi-1")}" class="w-[90%] object-contain drop-shadow-2xl"><span class="absolute left-[34%] top-[46%] w-[34%] h-[11%] border-2 border-[#19A7A0] rounded-md"><span class="absolute -top-6 left-0 px-2 h-5 inline-flex items-center rounded bg-[#19A7A0] text-[10px] text-white font-semibold">Tên khách sạn</span></span></div>
        </div>
        <div class="mt-3 flex items-center gap-2 px-1">${["#0E6F73", "#5CC8B2", "#C9A96E", "#E5484D", "#14212B"].map((c, k) => `<span class="w-7 h-7 rounded-full ${k === 0 ? "ring-2 ring-white ring-offset-2 ring-offset-[#0b2427]" : ""}" style="background:${c}"></span>`).join("")}<span class="ml-auto text-xs text-white/60">Be Vietnam Pro · 18</span></div>
      </div>
      <div class="absolute -right-2 lg:-right-8 -bottom-6 noi px-5 py-4 ${V.theNho}"><p class="text-xs text-white/60">Tạm tính 200 thiệp</p><p class="text-2xl font-semibold ${V.gradient}">1.200.000đ</p></div>
    </div>
  </section>`;
}

function heroStudio() {
  return `
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-[#083B3D] via-[#0E6F73] to-[#19A7A0]"></div>
    <div class="absolute inset-0 opacity-25 grid grid-cols-4 gap-4 p-4 rotate-[-8deg] scale-125">${[...DANH_MUC, ...DANH_MUC].slice(0, 16).map(([, a]) => `<img src="${A(a)}" class="w-full aspect-square object-cover rounded-2xl">`).join("")}</div>
    <div class="absolute inset-0 bg-gradient-to-r from-[#083B3D] via-[#083B3D]/85 to-[#083B3D]/30"></div>
    <div class="relative container py-12 lg:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center text-white">
      <div>
        <span class="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-white/10 ring-1 ring-white/20 text-sm">${icon("spark", "w-4 h-4")} Xưởng in & nền tảng thiết kế online</span>
        <h1 class="mt-6 text-[38px] leading-[44px] lg:text-[64px] lg:leading-[68px] ${V.h}">In ấn chuyên nghiệp,<br><span class="text-[#7BE0CB]">báo giá trong 10 giây</span></h1>
        <p class="mt-5 max-w-lg text-white/75 text-lg">Danh thiếp, tem nhãn, thiệp, lịch, sổ tay — chọn mẫu hoặc tải file, xem giá ngay, nhận hàng trong 2 giờ nội thành Hà Nội.</p>
        <ul class="mt-6 grid sm:grid-cols-2 gap-2.5 text-white/90">${["Miễn phí thiết kế", "Duyệt bản in thử PDF", "Giao toàn quốc", "Xuất hoá đơn VAT"].map((x) => `<li class="flex items-center gap-2"><span class="grid place-items-center w-6 h-6 rounded-full bg-[#7BE0CB] text-[#083B3D]">${icon("check", "w-3.5 h-3.5")}</span>${x}</li>`).join("")}</ul>
      </div>
      <div class="p-5 lg:p-7 rounded-[28px] kinh text-ink">
        <div class="flex items-center justify-between"><h2 class="text-xl font-bold">Báo giá nhanh</h2><span class="text-xs font-semibold text-primary bg-white/70 px-2.5 py-1 rounded-full">Cập nhật hôm nay</span></div>
        <p class="mt-4 text-sm font-semibold">Sản phẩm</p>
        <div class="mt-2 grid grid-cols-3 gap-2">${[["Danh thiếp", "dm-danh-thiep"], ["Tem nhãn", "dm-sticker"], ["Thiệp mời", "dm-thiep-moi"]].map(([t, a], i) => `<button class="p-1.5 rounded-2xl text-xs font-semibold ${i === 0 ? "bg-white ring-2 ring-primary" : "bg-white/60 ring-1 ring-white"}"><img src="${A(a)}" class="w-full aspect-[4/3] object-cover rounded-xl"><span class="block py-1.5">${t}</span></button>`).join("")}</div>
        <div class="mt-4 grid grid-cols-2 gap-3 text-sm">
          <label><span class="font-semibold">Giấy</span><div class="mt-2 h-11 px-3 flex items-center justify-between rounded-xl bg-white/80 ring-1 ring-white">Couche 300gsm ${icon("arrow", "w-4 h-4 rotate-90 text-muted")}</div></label>
          <label><span class="font-semibold">Gia công</span><div class="mt-2 h-11 px-3 flex items-center justify-between rounded-xl bg-white/80 ring-1 ring-white">Cán màng mờ ${icon("arrow", "w-4 h-4 rotate-90 text-muted")}</div></label>
        </div>
        <p class="mt-4 text-sm font-semibold">Số lượng: <span class="text-primary">5 hộp (500 thẻ)</span></p>
        <div class="mt-3 relative h-2 rounded-full bg-white/70"><div class="absolute inset-y-0 left-0 w-[45%] rounded-full bg-gradient-to-r from-[#19A7A0] to-[#0E6F73]"></div><span class="absolute left-[45%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white ring-4 ring-primary"></span></div>
        <div class="mt-5 p-4 flex items-end justify-between rounded-2xl bg-white/80">
          <div><p class="text-xs text-muted">Tạm tính</p><p class="text-[30px] leading-9 font-bold text-primary">650.000đ</p><p class="text-xs text-muted">130.000đ/hộp · tiết kiệm 13%</p></div>
          <p class="text-right text-xs text-muted">${icon("clock", "w-4 h-4 inline")} Nhận <b class="text-ink">trong 2 giờ</b></p>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-2"><a class="inline-flex justify-center items-center h-12 font-semibold ${V.btn}">Chọn mẫu & in</a><a class="inline-flex justify-center items-center h-12 font-semibold ${V.btn2}">Tải file lên</a></div>
      </div>
    </div>
  </section>`;
}

// ---------- Khoi dung chung ----------
const tieuDe3 = (nhan, h2, phu, link = true) => `
  <div class="flex items-end justify-between gap-4">
    <div><p class="text-xs font-semibold uppercase tracking-[.2em] ${V.toi ? "text-[#7BE0CB]" : "text-primary"}">${nhan}</p>
      <h2 class="mt-2 text-[28px] leading-9 lg:text-[44px] lg:leading-[52px] ${V.h}">${h2}</h2>
      <p class="mt-2 ${V.phu}">${phu}</p></div>
    ${link ? `<a class="hidden sm:inline-flex items-center gap-1.5 h-11 px-5 text-sm font-semibold ${V.btn2}">Xem tất cả ${icon("arrow", "w-4 h-4")}</a>` : ""}
  </div>`;

function chayChu() {
  const ds = ["Danh thiếp", "Tem nhãn & sticker", "Thiệp cưới", "Nhãn vở", "Lịch để bàn", "Sổ tay", "Photobook", "Quạt cầm tay", "Hashtag cầm tay", "Catalogue", "Túi giấy"];
  const mot = ds.map((t) => `<span class="mx-2 inline-flex items-center gap-2 h-12 px-5 whitespace-nowrap text-[15px] font-medium ${V.chip}"><span class="${V.toi ? "text-[#7BE0CB]" : "text-primary"}">${icon("spark", "w-4 h-4")}</span>${t}</span>`).join("");
  return `<section class="mt-12 lg:mt-20 mo-mep overflow-hidden py-2"><div class="chay">${mot}${mot}</div></section>`;
}

function danhMuc() {
  const ds = DANH_MUC.slice(0, 8);
  const vi = ["col-span-2 row-span-2", "col-span-2", "", "", "", "", "", ""];
  return `<section class="container mt-16 lg:mt-28">${tieuDe3("Danh mục", "Bạn muốn in gì?", "12 nhóm sản phẩm in giấy, mẫu sẵn để sửa ngay.")}
    <div class="mt-8 grid grid-cols-2 lg:grid-cols-4 auto-rows-[170px] lg:auto-rows-[220px] gap-3 lg:gap-4">
      ${ds.map(([t, a, g], i) => `
      <a class="group relative overflow-hidden ${i === 0 ? "rounded-[32px]" : "rounded-[26px]"} ${vi[i]} ${i === 0 ? "" : ""}">
        <img src="${A(a)}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700">
        <div class="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
        <div class="absolute left-2.5 right-2.5 bottom-2.5 lg:left-3 lg:right-3 lg:bottom-3 px-3.5 py-2.5 flex items-center justify-between gap-2 rounded-2xl ${V.toi ? "bg-[#04161A]/65 backdrop-blur-xl ring-1 ring-white/15 text-white" : "kinh-dac text-ink"}">
          <div class="min-w-0"><p class="font-semibold ${i === 0 ? "lg:text-xl" : "text-[15px]"} truncate">${t}</p>${g ? `<p class="text-xs ${V.toi ? "text-white/70" : "text-muted"}">Từ ${g}</p>` : ""}</div>
          <span class="shrink-0 grid place-items-center w-8 h-8 rounded-full ${V.toi ? "nut-mint" : "nut-sang"}">${icon("arrow", "w-4 h-4")}</span>
        </div>
      </a>`).join("")}
    </div></section>`;
}

function theSp([ten, anh, gia, dv, dm, nhan]) {
  return `
  <a href="san-pham.html?v=${BIEN}" class="group block p-2 ${V.the}">
    <div class="relative aspect-[4/3] rounded-[20px] overflow-hidden ${V.toi ? "bg-[#F4FBF9]" : V.anhNen}">
      <img src="${A(anh)}" class="w-full h-full object-contain p-3 group-hover:scale-105 transition duration-500">
      ${nhan ? `<span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${nhan === "Mới" ? "nut-sang" : "bg-[#FFE8D6] text-[#9A3C0B]"}">${nhan}</span>` : ""}
      <span class="absolute right-3 bottom-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition inline-flex items-center gap-1.5 h-9 px-4 rounded-full text-xs font-semibold ${V.toi ? "nut-mint" : "nut-sang"}">${icon("pen", "w-3.5 h-3.5")}Tuỳ chỉnh</span>
    </div>
    <div class="px-2 pt-3 pb-2">
      <p class="text-xs ${V.phu}">${dm}</p>
      <h3 class="mt-0.5 text-[15px] lg:text-base font-semibold leading-snug line-clamp-2">${ten}</h3>
      <div class="mt-2 flex items-end justify-between gap-2">
        <p><span class="text-sm ${V.phu}">Từ</span> <span class="text-lg font-bold ${V.toi ? "text-[#7BE0CB]" : "text-ink"}">${gia}</span><span class="text-sm ${V.phu}">/${dv}</span></p>
        <span class="hidden sm:flex items-center gap-1 text-xs ${V.phu}">${icon("clock", "w-3.5 h-3.5")}3 ngày</span>
      </div>
    </div>
  </a>`;
}

const sanPham3 = () => `<section class="container mt-16 lg:mt-28">${tieuDe3("Bán chạy", "Mẫu được đặt nhiều", "Sửa tên, ảnh, màu ngay trên web rồi đặt in.")}
  <div class="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">${SP.map(theSp).join("")}</div></section>`;

function baBuoc() {
  const ds = [["Chọn mẫu hoặc tải file", "Hàng trăm mẫu chuẩn kích thước in, hoặc tải PDF/AI của bạn.", "grid"], ["Sửa & duyệt bản in thử", "Đổi chữ, ảnh, màu trên trình duyệt. Xem PDF trước khi in.", "pen"], ["In & giao tận nơi", "In trong ngày, giao 2 giờ nội thành, toàn quốc 1–3 ngày.", "truck"]];
  return `<section class="container mt-16 lg:mt-28">${tieuDe3("Quy trình", "Đặt in trong 3 bước", "Không cần phần mềm thiết kế, không cần đến xưởng.", false)}
    <div class="relative mt-8 grid md:grid-cols-3 gap-3 lg:gap-5">
      <div class="hidden md:block absolute top-[52px] left-[16%] right-[16%] border-t-2 border-dashed ${V.toi ? "border-white/20" : "border-primary/25"}"></div>
      ${ds.map(([t, m, i], k) => `<div class="relative p-6 lg:p-8 ${V.the}">
        <div class="flex items-center gap-3"><span class="grid place-items-center w-14 h-14 rounded-2xl ${V.toi ? "nut-mint" : "bg-[#E6F5F2] text-primary ring-1 ring-[#CFEBE5]"}">${icon(i, "w-6 h-6")}</span><span class="text-5xl font-bold ${V.toi ? "text-white/10" : "text-primary/10"} ml-auto">0${k + 1}</span></div>
        <h3 class="mt-5 text-xl font-semibold">${t}</h3><p class="mt-2 ${V.phu}">${m}</p></div>`).join("")}
    </div></section>`;
}

function dai() {
  if (V.toi) return daiToi();
  // Ban sang: nen mint rat nhat -> trang, chu toi; teal chi o tieu de + nut (user muon xanh nhat hon)
  return `<section class="container mt-16 lg:mt-28">
    <div class="relative overflow-hidden rounded-[36px] p-7 sm:p-10 lg:p-16 ring-1 ring-[#DCEFEA] bg-gradient-to-br from-[#E9F7F4] via-[#F4FBF9] to-white">
      <div class="absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full bg-[#5CC8B2]/20 blur-[90px]"></div>
      <div class="absolute -left-20 -bottom-28 w-[380px] h-[380px] rounded-full bg-[#8FD3F4]/15 blur-[90px]"></div>
      <div class="relative grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
        <div><p class="text-xs font-semibold uppercase tracking-[.2em] text-primary">Ưu đãi khách mới</p>
          <h2 class="mt-3 text-[34px] leading-10 lg:text-[56px] lg:leading-[60px] font-semibold tracking-[-0.03em] text-ink">Giảm <span class="chu-gradient">20%</span> cho<br>đơn in đầu tiên</h2>
          <p class="mt-4 text-muted max-w-md">Nhập email để nhận mã. Áp dụng mọi sản phẩm, không giới hạn số lượng.</p></div>
        <div class="p-2 flex flex-col sm:flex-row gap-2 rounded-[22px] sm:rounded-full kinh-dac">
          <input class="flex-1 min-w-0 h-12 px-4 bg-transparent outline-none placeholder:text-muted" placeholder="Email của bạn">
          <a class="inline-flex justify-center items-center h-12 px-7 font-semibold nut-sang rounded-full">Nhận mã −20%</a>
        </div>
      </div>
      <div class="relative mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">${[["25+", "mẫu thiết kế"], ["34", "tỉnh thành giao"], ["2 giờ", "in & giao nội thành"], ["1.200+", "khách hàng"]].map(([s, t]) => `<div class="p-4 rounded-2xl kinh-dac"><p class="text-2xl lg:text-3xl font-semibold text-primary">${s}</p><p class="text-sm text-muted">${t}</p></div>`).join("")}</div>
    </div></section>`;
}

function daiToi() {
  return `<section class="container mt-16 lg:mt-28">
    <div class="relative overflow-hidden rounded-[36px] p-7 sm:p-10 lg:p-16 text-white">
      <div class="absolute inset-0 bg-gradient-to-br from-[#083B3D] via-[#0E6F73] to-[#1FA79D]"></div>
      <div class="absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full bg-[#5CC8B2]/40 blur-[80px]"></div>
      <div class="absolute -left-20 -bottom-28 w-[380px] h-[380px] rounded-full bg-[#8FD3F4]/30 blur-[80px]"></div>
      <div class="relative grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
        <div><p class="text-xs font-semibold uppercase tracking-[.2em] text-[#B8F3E6]">Ưu đãi khách mới</p>
          <h2 class="mt-3 text-[34px] leading-10 lg:text-[56px] lg:leading-[60px] font-semibold tracking-[-0.03em]">Giảm 20% cho<br>đơn in đầu tiên</h2>
          <p class="mt-4 text-white/80 max-w-md">Nhập email để nhận mã. Áp dụng mọi sản phẩm, không giới hạn số lượng.</p></div>
        <div class="p-2 flex flex-col sm:flex-row gap-2 rounded-[22px] sm:rounded-full bg-white/15 backdrop-blur-xl ring-1 ring-white/30">
          <input class="flex-1 min-w-0 h-12 px-4 bg-transparent outline-none placeholder:text-white/70" placeholder="Email của bạn">
          <a class="inline-flex justify-center items-center h-12 px-7 rounded-full bg-white text-primary font-semibold">Nhận mã −20%</a>
        </div>
      </div>
      <div class="relative mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">${[["25+", "mẫu thiết kế"], ["34", "tỉnh thành giao"], ["2 giờ", "in & giao nội thành"], ["1.200+", "khách hàng"]].map(([s, t]) => `<div class="p-4 rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur"><p class="text-2xl lg:text-3xl font-semibold">${s}</p><p class="text-sm text-white/70">${t}</p></div>`).join("")}</div>
    </div></section>`;
}

function danhGia() {
  const ds = [["Đặt card visit cho cả team, tự sửa tên trên web 5 phút, hôm sau có hàng.", "Nguyễn Minh Anh", "Văn phòng luật", "MA"], ["Kho nhãn vở đẹp, con tự chọn. Giá rõ ràng theo số lượng, giao nhanh.", "Trần Thu Hà", "Phụ huynh", "TH"], ["Card visit khai trương lên đúng màu thiết kế. Đóng gói rất kỹ.", "Lê Hoàng Nam", "Chủ cửa hàng", "HN"]];
  return `<section class="container mt-16 lg:mt-28">${tieuDe3("Đánh giá", "Khách hàng nói gì", "4,9/5 từ hơn 1.200 đơn hàng.", false)}
    <div class="mt-8 grid md:grid-cols-3 gap-3 lg:gap-5">${ds.map(([c, n, v, t]) => `
      <figure class="p-6 lg:p-8 ${V.the}">${sao()}<blockquote class="mt-4 text-[17px] leading-7">“${c}”</blockquote>
        <figcaption class="mt-6 flex items-center gap-3"><span class="grid place-items-center w-11 h-11 rounded-full ${V.toi ? "nut-mint" : "nut-sang"} font-semibold">${t}</span><span><b class="block text-sm">${n}</b><span class="text-sm ${V.phu}">${v}</span></span></figcaption></figure>`).join("")}</div></section>`;
}

function chanTrang() {
  const cot = (t, ds) => `<div><h4 class="font-semibold mb-3">${t}</h4><ul class="space-y-2 text-sm ${V.phu}">${ds.map((x) => `<li>${x}</li>`).join("")}</ul></div>`;
  return `
  <footer class="container mt-16 lg:mt-28 mb-20 lg:mb-8">
    <div class="p-7 lg:p-12 ${V.the}">
      <div class="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div><img src="../img/logo.svg" class="h-8 mb-4" alt="SMV"><p class="text-sm ${V.phu} max-w-xs">Công ty TNHH ĐTPT và TM Sắc Màu Việt. Nền tảng thiết kế online & đặt in.</p><p class="mt-4 text-sm">Số 20 Ngõ 80, Phú Viên, Bồ Đề, Long Biên, Hà Nội<br><b>024 73060688</b> · 0987 156 633</p></div>
        ${cot("Sản phẩm", ["Danh thiếp", "Tem nhãn & sticker", "Thiệp mời", "Lịch", "Sổ tay"])}${cot("Hỗ trợ", ["Hướng dẫn thiết kế", "Quy trình đặt in", "Bảng giá", "Theo dõi đơn"])}${cot("Chính sách", ["Điều khoản", "Bảo mật", "Vận chuyển", "Đổi trả"])}
      </div>
      <p class="mt-10 pt-5 border-t ${V.toi ? "border-white/10" : "border-black/5"} text-xs ${V.phu}">© 2026 Sắc Màu Việt</p>
    </div>
  </footer>
  <nav class="lg:hidden fixed bottom-3 inset-x-3 z-50 grid grid-cols-5 h-16 rounded-[22px] ${V.toi ? "kinh-toi text-white/70" : "kinh text-muted"} text-[11px] font-medium">
    ${[["home", "Trang chủ"], ["grid", "Sản phẩm"], ["pen", "Thiết kế"], ["box", "Đơn hàng"], ["user", "Tài khoản"]].map(([i, t], k) => `<a class="flex flex-col items-center justify-center gap-1 ${k === 0 ? (V.toi ? "text-[#7BE0CB]" : "text-primary") : ""}">${icon(i)}${t}</a>`).join("")}
  </nav>`;
}

function veTrangChu() {
  document.body.className = `font-sans antialiased ${V.body}`;
  if (NEN_MAU) document.body.style.background = "#" + NEN_MAU;
  const hero = { liquid: heroLiquid, dem: heroDem, studio: heroStudio }[BIEN]();
  document.body.innerHTML = nenCucQuang() + (BIEN === "studio" ? thanhStudio() : thanhNoi()) +
    `<main>${hero}${chayChu()}${danhMuc()}${sanPham3()}${baBuoc()}${dai()}${danhGia()}</main>` + chanTrang();
}

// ---------- Trang san pham ----------
function veTrangSanPham() {
  document.body.className = `font-sans antialiased ${V.body}`;
  if (NEN_MAU) document.body.style.background = "#" + NEN_MAU;
  const chip = (ds) => ds.map((t, i) => `<button class="h-11 px-4 text-sm font-medium ${i === 0 ? V.chipOn : V.chip}">${t}</button>`).join("");
  const bac = [["100", "7.000đ"], ["200", "6.000đ"], ["500", "5.200đ"], ["1000", "4.500đ"]].map(([s, g], i) =>
    `<button class="py-2.5 text-center !rounded-2xl ${i === 1 ? V.chipOn : V.chip}"><p class="text-base font-semibold">${s}</p><p class="text-xs opacity-75">${g}/cái</p></button>`).join("");
  const thongSo = [["Kích thước", "12×18 / 13×18 cm"], ["Giấy", "Couche 300gsm"], ["Kiểu in", "2 mặt, 4 màu"], ["Gia công", "Cán màng mờ, kèm bao thư"], ["Thời gian in", "3 ngày làm việc"]];
  const lienQuan = [["Thiệp mời sinh nhật", "dm-thiep-moi", "5.000đ", "cái", "Thiệp mời", ""], ["Danh thiếp giấy mỹ thuật", "dm-danh-thiep", "150.000đ", "hộp", "Danh thiếp", "Bán chạy"], ["Tem nhãn decal", "dm-sticker", "350đ", "tem", "Tem nhãn", ""], ["Photobook cưới", "dm-photobook", "350.000đ", "cuốn", "Photobook", "Mới"]];
  const nhan = V.toi ? "text-[#7BE0CB]" : "text-primary";
  document.body.innerHTML = nenCucQuang() + (BIEN === "studio" ? thanhStudio() : thanhNoi()) + `
  <main class="container ${BIEN === "studio" ? "pt-2" : "pt-24 lg:pt-32"}">
    <nav class="py-4 text-sm ${V.phu} flex gap-2 whitespace-nowrap overflow-hidden"><a>Trang chủ</a><span>/</span><a>Thiệp mời</a><span>/</span><span class="${V.chu} truncate">Thiệp cưới — Mẫu số 1</span></nav>
    <div class="grid lg:grid-cols-[1.1fr_1fr] gap-5 lg:gap-10">
      <div class="lg:sticky lg:top-28 self-start">
        <div class="relative p-3 ${V.the}">
          <div class="relative aspect-[4/3] rounded-[20px] overflow-hidden grid place-items-center ${V.toi ? "bg-[#F4FBF9]" : "bg-gradient-to-br from-white to-tint"}">
            <img src="${A("sp-thiep-cuoi-1")}" class="w-[88%] object-contain drop-shadow-2xl">
            <span class="absolute top-3 left-3 inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-xs font-semibold kinh-dac text-ink">${icon("spark", "w-3.5 h-3.5 text-primary")}Xem 3D</span>
          </div>
          <div class="mt-3 flex gap-2">${["sp-thiep-cuoi-1", "dm-thiep-moi", "dm-photobook"].map((a, i) => `<button class="w-20 aspect-[4/3] rounded-xl overflow-hidden ${i === 0 ? "ring-2 ring-primary" : "opacity-70"} bg-white"><img src="${A(a)}" class="w-full h-full ${i ? "object-cover" : "object-contain p-1"}"></button>`).join("")}</div>
        </div>
      </div>
      <div class="p-5 lg:p-8 ${V.the}">
        <div class="flex items-center gap-2"><span class="text-xs font-semibold uppercase tracking-[.18em] ${nhan}">Thiệp mời</span><span class="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#FFE8D6] text-[#9A3C0B]">Bán chạy</span></div>
        <h1 class="mt-2 text-[30px] leading-9 lg:text-[44px] lg:leading-[50px] ${V.h}">Thiệp cưới — Mẫu số 1</h1>
        <div class="mt-2 flex items-center gap-2 text-sm ${V.phu}">${sao()}<b class="${V.chu}">4,9</b> (38 đánh giá) · Đã bán 1.200+</div>
        <p class="mt-4 ${V.phu}">Thiệp cưới cao cấp cá nhân hoá theo câu chuyện của bạn. Bao thư nắp tam giác hoặc nắp vuông.</p>
        <div class="mt-6 space-y-5">
          <div><p class="text-sm font-semibold">Kích thước</p><div class="mt-2 flex flex-wrap gap-2">${chip(["12×18 cm", "13×18 cm"])}</div></div>
          <div><p class="text-sm font-semibold">Chất liệu giấy</p><div class="mt-2 flex flex-wrap gap-2">${chip(["Couche 300gsm", "Mỹ thuật vân nhũ (+1.500đ)", "Kraft (+800đ)"])}</div></div>
          <div><p class="text-sm font-semibold">Số lượng <span class="font-normal ${V.phu}">— càng nhiều càng rẻ</span></p><div class="mt-2 grid grid-cols-4 gap-2">${bac}</div></div>
        </div>
        <div class="mt-6 p-4 lg:p-5 flex items-end justify-between gap-4 rounded-2xl ${V.toi ? "bg-white/[.06] ring-1 ring-white/10" : BIEN === "studio" ? "bg-tint" : "kinh-dac"}">
          <div><p class="text-sm ${V.phu}">Tạm tính 200 thiệp</p><p class="text-[32px] leading-10 font-bold ${V.toi ? V.gradient : "text-primary"}">1.200.000đ</p><p class="text-sm ${V.phu}">6.000đ/thiệp · chưa gồm phí ship</p></div>
          <div class="text-right text-sm"><p class="flex items-center gap-1 justify-end font-medium">${icon("clock", "w-4 h-4")}In trong 3 ngày</p><p class="${V.phu}">Dự kiến nhận 22/10</p></div>
        </div>
        <div class="hidden lg:grid mt-5 grid-cols-[1fr_auto] gap-3">
          <a class="inline-flex justify-center items-center gap-2 h-[52px] font-semibold ${V.btn}">${icon("pen")}Tuỳ chỉnh mẫu này</a>
          <a class="inline-flex justify-center items-center gap-2 h-[52px] px-6 font-semibold ${V.btn2}">${icon("upload")}Tải file</a>
        </div>
        <ul class="mt-6 grid sm:grid-cols-2 gap-2.5 text-sm">${["Xem bản in thử (PDF) trước khi in", "Đổi miễn phí nếu lỗi từ xưởng", "Giao toàn quốc, nội thành 2 giờ", "Xuất hoá đơn VAT"].map((x) => `<li class="flex gap-2"><span class="${nhan}">${icon("check")}</span>${x}</li>`).join("")}</ul>
      </div>
    </div>
    <section class="mt-12 lg:mt-20 grid lg:grid-cols-[1.1fr_1fr] gap-5 lg:gap-10">
      <div class="p-6 lg:p-8 ${V.the}"><div class="flex gap-6 border-b ${V.toi ? "border-white/10" : "border-black/5"} font-semibold"><span class="pb-3 border-b-2 ${V.toi ? "border-[#7BE0CB]" : "border-primary"}">Mô tả</span><span class="pb-3 ${V.phu}">Thông số</span><span class="pb-3 ${V.phu}">Đánh giá (38)</span></div>
        <p class="mt-5 ${V.phu} max-w-prose">Mỗi tấm thiệp được in trên giấy định lượng cao, màu chuẩn theo bản thiết kế bạn đã duyệt. Đổi tên cô dâu chú rể, ngày giờ, địa điểm, ảnh cưới ngay trên trình chỉnh sửa.</p></div>
      <div class="p-6 lg:p-8 ${V.the}"><h3 class="text-lg font-semibold">Thông số</h3>
        <dl class="mt-3 text-sm divide-y ${V.toi ? "divide-white/10" : "divide-black/5"}">${thongSo.map(([k, v]) => `<div class="flex justify-between py-3"><dt class="${V.phu}">${k}</dt><dd>${v}</dd></div>`).join("")}</dl></div>
    </section>
    <section class="mt-12 lg:mt-20">${tieuDe3("Gợi ý", "Mẫu tương tự", "Khách cũng xem các mẫu này.")}<div class="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">${lienQuan.map(theSp).join("")}</div></section>
  </main>
  <div class="lg:hidden fixed inset-x-3 bottom-[88px] z-40 px-4 py-3 flex items-center gap-3 rounded-[22px] ${V.toi ? "kinh-toi" : "kinh"}">
    <div class="shrink-0"><p class="text-xs ${V.phu}">200 thiệp</p><p class="text-lg font-bold ${V.toi ? "text-[#7BE0CB]" : "text-primary"}">1.200.000đ</p></div>
    <a class="flex-1 inline-flex justify-center items-center h-12 font-semibold ${V.btn}">Tuỳ chỉnh mẫu này</a>
  </div>` + chanTrang();
}
