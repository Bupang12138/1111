const STORAGE_KEY = "bioManufacturingBookingSystemV2";

const seedUsers = [
  {
    id: "u-admin",
    account: "admin",
    password: "123456",
    name: "平台管理员",
    org: "生物制造公共服务平台",
    phone: "010-00000000",
    role: "admin",
    billingType: "internal",
    priceDiscount: 1
  },
  {
    id: "u-lab-001",
    account: "lab001",
    password: "123456",
    name: "张老师",
    org: "合成生物学课题组",
    phone: "13800000001",
    role: "user",
    billingType: "internal",
    priceDiscount: 1
  },
  {
    id: "u-ext-001",
    account: "ext001",
    password: "123456",
    name: "刘经理",
    org: "苏州某生物科技有限公司",
    phone: "13900000002",
    role: "user",
    billingType: "external",
    priceDiscount: 1
  }
];

const seedEquipment = [
  {
    id: "eq-fer-50",
    name: "50L 自动发酵系统",
    platform: "发酵",
    location: "A 座 2F 发酵平台",
    manager: "王工",
    price: 360,
    internalRate: 240,
    nightDiscount: 0.65,
    photoUrl: "",
    posterTitle: "50L 自动发酵系统",
    posterSubtitle: "发酵平台 | 工艺放大 | 自动控制",
    posterImageUrl: "",
    posterBody: "适合菌株放大培养、补料发酵、溶氧控制和工艺参数优化。支持在线参数监测，可用于从实验室小试到中试放大的关键工艺验证。",
    tags: ["50L", "自动控制", "补料"],
    processKeywords: ["菌体", "酶表达", "厌氧", "工艺放大"],
    description: "适合菌株放大培养、补料发酵、溶氧控制和工艺参数优化。"
  },
  {
    id: "eq-fer-5",
    name: "5L 平行发酵罐组",
    platform: "发酵",
    location: "A 座 2F 发酵平台",
    manager: "王工",
    price: 220,
    internalRate: 150,
    nightDiscount: 0.6,
    photoUrl: "",
    posterTitle: "5L 平行发酵罐组",
    posterSubtitle: "多条件并行验证平台",
    posterImageUrl: "",
    posterBody: "用于小试发酵和多条件并行验证，支持在线 pH、DO 和温度控制。适合菌株筛选、培养基优化和发酵曲线比较。",
    tags: ["平行发酵", "小试", "多参数"],
    processKeywords: ["菌株筛选", "培养基优化", "发酵曲线"],
    description: "用于小试发酵和多条件并行验证，支持在线 pH、DO 和温度控制。"
  },
  {
    id: "eq-akta",
    name: "蛋白快速纯化系统",
    platform: "分离",
    location: "B 座 3F 纯化室",
    manager: "陈工",
    price: 260,
    internalRate: 170,
    nightDiscount: 0.7,
    photoUrl: "",
    posterTitle: "蛋白快速纯化系统",
    posterSubtitle: "分离纯化平台 | 层析 | 蛋白",
    posterImageUrl: "",
    posterBody: "适用于蛋白、抗体和酶制剂的亲和、离子交换及凝胶过滤纯化流程。支持方法开发、样品制备和纯化条件优化。",
    tags: ["层析", "蛋白", "纯化"],
    processKeywords: ["亲和层析", "离子交换", "凝胶过滤", "抗体"],
    description: "适用于蛋白、抗体和酶制剂的亲和、离子交换及凝胶过滤纯化流程。"
  },
  {
    id: "eq-centrifuge",
    name: "连续流离心机",
    platform: "分离",
    location: "C 座 1F 分离间",
    manager: "赵工",
    price: 190,
    internalRate: 130,
    nightDiscount: 0.68,
    photoUrl: "",
    posterTitle: "连续流离心机",
    posterSubtitle: "固液分离 | 菌体收获",
    posterImageUrl: "",
    posterBody: "用于发酵液连续澄清、菌体收集和大体积样品固液分离。适合连续处理和批量样品预处理。",
    tags: ["连续流", "菌体收集", "分离"],
    processKeywords: ["菌体收获", "澄清", "细胞分离"],
    description: "用于发酵液连续澄清、菌体收集和大体积样品固液分离。"
  },
  {
    id: "eq-hplc",
    name: "高效液相色谱 HPLC",
    platform: "检测",
    location: "B 座 1F 分析中心",
    manager: "李工",
    price: 180,
    internalRate: 120,
    nightDiscount: 0.72,
    photoUrl: "",
    posterTitle: "高效液相色谱 HPLC",
    posterSubtitle: "检测平台 | 定量分析",
    posterImageUrl: "",
    posterBody: "支持紫外检测、梯度洗脱和常规小分子及蛋白纯度分析。适合代谢物定量、产物纯度评估和方法验证。",
    tags: ["HPLC", "紫外检测", "定量"],
    processKeywords: ["代谢物", "蛋白纯度", "小分子", "产物定量"],
    description: "支持紫外检测、梯度洗脱和常规小分子及蛋白纯度分析。"
  },
  {
    id: "eq-gcms",
    name: "气相色谱质谱联用仪",
    platform: "检测",
    location: "B 座 2F 质谱室",
    manager: "周工",
    price: 420,
    internalRate: 280,
    nightDiscount: 0.75,
    photoUrl: "",
    posterTitle: "气相色谱质谱联用仪",
    posterSubtitle: "检测平台 | GC-MS | 挥发物分析",
    posterImageUrl: "",
    posterBody: "用于挥发性产物识别、代谢物指纹分析和目标物定量。适合复杂样品的定性和半定量检测。",
    tags: ["GC-MS", "质谱", "挥发物"],
    processKeywords: ["挥发物", "代谢物指纹", "定性", "定量"],
    description: "用于挥发性产物识别、代谢物指纹分析和目标物定量。"
  }
];

const seedBookings = [
  { equipmentId: "eq-fer-50", userId: "u-lab-001", offset: 0, start: 8, end: 12, mode: "normal", purpose: "菌株补料工艺放大" },
  { equipmentId: "eq-hplc", userId: "u-lab-001", offset: 1, start: 10, end: 12, mode: "normal", purpose: "产物定量分析" },
  { equipmentId: "eq-akta", userId: "u-ext-001", offset: 2, start: 14, end: 18, mode: "normal", purpose: "蛋白样品纯化" },
  { equipmentId: "eq-gcms", userId: "u-ext-001", offset: 3, start: 22, end: 32, mode: "night", purpose: "挥发性组分包夜检测" }
];

function defaultBookingRules() {
  return {
    // External-user rules by platform group.
    platforms: {
      发酵: { audience: "external", requireContinuous: true, requireCrossDay: true, minNormalHours: 6, dailyCapEnabled: true, dailyCapThreshold: 8, dailyCapBillableHours: 8 },
      分离: { audience: "external", requireContinuous: true, requireCrossDay: true, minNormalHours: 6, dailyCapEnabled: true, dailyCapThreshold: 8, dailyCapBillableHours: 8 },
      检测: { audience: "external", requireContinuous: false, requireCrossDay: false, minNormalHours: 0, dailyCapEnabled: false, dailyCapThreshold: 8, dailyCapBillableHours: 8 }
    }
  };
}

function defaultSystemNotice() {
  return {
    enabled: true,
    title: "系统提醒",
    content: "请按设备要求选择预约时段，提交前确认设备、日期、时间和预计费用。"
  };
}

const state = {
  data: loadData(),
  currentUserId: null,
  selectedEquipmentId: null,
  scheduleStartDate: offsetDate(0),
  selections: [],
  pendingBookings: [],
  noticeShownForUser: null,
  adminView: "bookings",
  registerCaptcha: ""
};

const els = {
  authView: document.querySelector("#authView"),
  appView: document.querySelector("#appView"),
  loginTab: document.querySelector("#loginTab"),
  registerTab: document.querySelector("#registerTab"),
  loginForm: document.querySelector("#loginForm"),
  registerForm: document.querySelector("#registerForm"),
  loginAccount: document.querySelector("#loginAccount"),
  loginPassword: document.querySelector("#loginPassword"),
  registerOrg: document.querySelector("#registerOrg"),
  registerName: document.querySelector("#registerName"),
  registerPhone: document.querySelector("#registerPhone"),
  registerCaptcha: document.querySelector("#registerCaptcha"),
  sendCaptchaBtn: document.querySelector("#sendCaptchaBtn"),
  registerPassword: document.querySelector("#registerPassword"),
  accountName: document.querySelector("#accountName"),
  accountMeta: document.querySelector("#accountMeta"),
  adminNavBtn: document.querySelector("#adminNavBtn"),
  logoutBtn: document.querySelector("#logoutBtn"),
  platformFilter: document.querySelector("#platformFilter"),
  equipmentKeyword: document.querySelector("#equipmentKeyword"),
  processKeyword: document.querySelector("#processKeyword"),
  resetDemoBtn: document.querySelector("#resetDemoBtn"),
  matchCount: document.querySelector("#matchCount"),
  equipmentCards: document.querySelector("#equipmentCards"),
  equipmentSketch: document.querySelector("#equipmentSketch"),
  selectedPlatform: document.querySelector("#selectedPlatform"),
  selectedName: document.querySelector("#selectedName"),
  selectedDetail: document.querySelector("#selectedDetail"),
  selectedFacts: document.querySelector("#selectedFacts"),
  openDetailBtn: document.querySelector("#openDetailBtn"),
  selectedPrice: document.querySelector("#selectedPrice"),
  nightPrice: document.querySelector("#nightPrice"),
  prevWeekBtn: document.querySelector("#prevWeekBtn"),
  nextWeekBtn: document.querySelector("#nextWeekBtn"),
  scheduleStartDate: document.querySelector("#scheduleStartDate"),
  scheduleGrid: document.querySelector("#scheduleGrid"),
  bookingSummary: document.querySelector("#bookingSummary"),
  purposeInput: document.querySelector("#purposeInput"),
  submitInlineMaintenanceBtn: document.querySelector("#submitInlineMaintenanceBtn"),
  submitBookingBtn: document.querySelector("#submitBookingBtn"),
  profileInfo: document.querySelector("#profileInfo"),
  historyTable: document.querySelector("#historyTable"),
  invoiceTitleInput: document.querySelector("#invoiceTitleInput"),
  invoiceTaxNoInput: document.querySelector("#invoiceTaxNoInput"),
  invoiceEmailInput: document.querySelector("#invoiceEmailInput"),
  invoiceAmount: document.querySelector("#invoiceAmount"),
  selectAllInvoiceBookings: document.querySelector("#selectAllInvoiceBookings"),
  issueInvoiceBtn: document.querySelector("#issueInvoiceBtn"),
  adminBookingsTable: document.querySelector("#adminBookingsTable"),
  exportStartDate: document.querySelector("#exportStartDate"),
  exportEndDate: document.querySelector("#exportEndDate"),
  bookingSearchInput: document.querySelector("#bookingSearchInput"),
  adminInvoicesTable: document.querySelector("#adminInvoicesTable"),
  exportInvoicesBtn: document.querySelector("#exportInvoicesBtn"),
  adminUsersTable: document.querySelector("#adminUsersTable"),
  addUserBtn: document.querySelector("#addUserBtn"),
  newUserAccount: document.querySelector("#newUserAccount"),
  newUserPassword: document.querySelector("#newUserPassword"),
  newUserName: document.querySelector("#newUserName"),
  newUserOrg: document.querySelector("#newUserOrg"),
  newUserPhone: document.querySelector("#newUserPhone"),
  newUserBillingType: document.querySelector("#newUserBillingType"),
  newUserRole: document.querySelector("#newUserRole"),
  exportBookingsBtn: document.querySelector("#exportBookingsBtn"),
  exportEquipmentBtn: document.querySelector("#exportEquipmentBtn"),
  equipmentImportText: document.querySelector("#equipmentImportText"),
  importEquipmentBtn: document.querySelector("#importEquipmentBtn"),
  saveRulesBtn: document.querySelector("#saveRulesBtn"),
  rulePlatformSelect: document.querySelector("#rulePlatformSelect"),
  ruleRequireContinuous: document.querySelector("#ruleRequireContinuous"),
  ruleAudience: document.querySelector("#ruleAudience"),
  ruleRequireCrossDay: document.querySelector("#ruleRequireCrossDay"),
  ruleMinNormalHours: document.querySelector("#ruleMinNormalHours"),
  ruleDailyCapEnabled: document.querySelector("#ruleDailyCapEnabled"),
  ruleDailyCapThreshold: document.querySelector("#ruleDailyCapThreshold"),
  ruleDailyCapBillableHours: document.querySelector("#ruleDailyCapBillableHours"),
  ruleOverview: document.querySelector("#ruleOverview"),
  saveNoticeBtn: document.querySelector("#saveNoticeBtn"),
  noticeEnabled: document.querySelector("#noticeEnabled"),
  noticeTitle: document.querySelector("#noticeTitle"),
  noticeContent: document.querySelector("#noticeContent"),
  noticeModal: document.querySelector("#noticeModal"),
  noticeModalTitle: document.querySelector("#noticeModalTitle"),
  noticeModalContent: document.querySelector("#noticeModalContent"),
  closeNoticeBtn: document.querySelector("#closeNoticeBtn"),
  confirmNoticeBtn: document.querySelector("#confirmNoticeBtn"),
  detailModal: document.querySelector("#detailModal"),
  detailModalPlatform: document.querySelector("#detailModalPlatform"),
  detailModalName: document.querySelector("#detailModalName"),
  detailModalSubtitle: document.querySelector("#detailModalSubtitle"),
  detailModalMeta: document.querySelector("#detailModalMeta"),
  detailModalPhoto: document.querySelector("#detailModalPhoto"),
  detailModalPosterImage: document.querySelector("#detailModalPosterImage"),
  detailModalDescription: document.querySelector("#detailModalDescription"),
  closeDetailBtn: document.querySelector("#closeDetailBtn"),
  editEquipmentSelect: document.querySelector("#editEquipmentSelect"),
  editName: document.querySelector("#editName"),
  editPlatform: document.querySelector("#editPlatform"),
  editLocation: document.querySelector("#editLocation"),
  editManager: document.querySelector("#editManager"),
  editPrice: document.querySelector("#editPrice"),
  editInternalRate: document.querySelector("#editInternalRate"),
  editNightDiscount: document.querySelector("#editNightDiscount"),
  editTags: document.querySelector("#editTags"),
  editPhotoUrl: document.querySelector("#editPhotoUrl"),
  editPosterTitle: document.querySelector("#editPosterTitle"),
  editPosterSubtitle: document.querySelector("#editPosterSubtitle"),
  editPosterImageUrl: document.querySelector("#editPosterImageUrl"),
  editPosterBody: document.querySelector("#editPosterBody"),
  editDescription: document.querySelector("#editDescription"),
  saveEquipmentBtn: document.querySelector("#saveEquipmentBtn"),
  paymentModal: document.querySelector("#paymentModal"),
  paymentSummary: document.querySelector("#paymentSummary"),
  closePaymentBtn: document.querySelector("#closePaymentBtn"),
  toast: document.querySelector("#toast")
};

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    parsed.users = (parsed.users || []).map((user) => ({
      ...user,
      priceDiscount: Number(user.priceDiscount) > 0 ? Number(user.priceDiscount) : 1
    }));
    parsed.equipment = (parsed.equipment || []).map((item) => ({
      ...item,
      price: Number(item.price || 0),
      internalRate: Number(item.internalRate || item.price || 0),
      posterTitle: item.posterTitle || item.name,
      posterSubtitle: item.posterSubtitle || `${item.platform}平台 · ${item.location}`,
      posterImageUrl: item.posterImageUrl || "",
      posterBody: item.posterBody || item.description
    }));
    const defaults = defaultBookingRules();
    parsed.bookingRules = parsed.bookingRules || defaults;
    parsed.bookingRules.platforms = parsed.bookingRules.platforms || {};
    Object.entries(defaults.platforms).forEach(([platform, rule]) => {
      parsed.bookingRules.platforms[platform] = { ...rule, ...(parsed.bookingRules.platforms[platform] || {}) };
    });
    parsed.systemNotice = { ...defaultSystemNotice(), ...(parsed.systemNotice || {}) };
    parsed.invoices = parsed.invoices || [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    return parsed;
  }

  const equipment = structuredClone(seedEquipment);
  const bookings = seedBookings.map((item) => {
    const eq = equipment.find((target) => target.id === item.equipmentId);
    const user = seedUsers.find((target) => target.id === item.userId);
    const amount = calculateAmount(eq, user, item.mode, item.start, item.end);
    return {
      id: makeId("BK"),
      equipmentId: item.equipmentId,
      userId: item.userId,
      date: offsetDate(item.offset),
      start: item.start,
      end: item.end,
      mode: item.mode,
      purpose: item.purpose,
      amount,
      status: "预约成功",
      paymentMethod: user.billingType === "external" ? "支付宝" : "年度记账",
      createdAt: new Date().toISOString()
    };
  });

  const data = { users: structuredClone(seedUsers), equipment, bookings, invoices: [], bookingRules: defaultBookingRules(), systemNotice: defaultSystemNotice() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data;
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
}

function resetData() {
  const activeAccount = currentUser()?.account;
  localStorage.removeItem(STORAGE_KEY);
  state.data = loadData();
  state.currentUserId = state.data.users.find((user) => user.account === activeAccount)?.id
    || state.data.users.find((user) => user.account === "ext001")?.id
    || state.data.users[0]?.id
    || null;
  state.selections = [];
  state.pendingBookings = [];
  state.selectedEquipmentId = state.data.equipment[0]?.id || null;
  saveData();
  renderAll();
  showToast("演示数据已恢复。");
}

function currentUser() {
  return state.data.users.find((user) => user.id === state.currentUserId);
}

function selectedEquipment() {
  return state.data.equipment.find((item) => item.id === state.selectedEquipmentId);
}

function platformRule(platform) {
  const rules = state.data.bookingRules?.platforms || defaultBookingRules().platforms;
  return rules[platform] || { audience: "external", requireContinuous: false, requireCrossDay: false, minNormalHours: 0, dailyCapEnabled: false, dailyCapThreshold: 8, dailyCapBillableHours: 8 };
}

function ruleAppliesToUser(rule, user) {
  return rule.audience === "all" || rule.audience === user?.billingType;
}

function offsetDate(offset) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + offset);
  return date.toISOString().slice(0, 10);
}

function addDays(dateText, days) {
  const date = new Date(`${dateText}T00:00:00`);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function dayDiff(fromDate, toDate) {
  const from = new Date(`${fromDate}T00:00:00`);
  const to = new Date(`${toDate}T00:00:00`);
  return Math.round((to - from) / (24 * 3600 * 1000));
}

function clampScheduleDate(dateText) {
  const min = offsetDate(0);
  const max = offsetDate(30);
  if (!dateText || dateText < min) return min;
  if (dateText > max) return max;
  return dateText;
}

function formatDate(dateText) {
  const date = new Date(`${dateText}T00:00:00`);
  return `${date.getMonth() + 1}/${date.getDate()} 周${"日一二三四五六"[date.getDay()]}`;
}

function formatMoney(value) {
  return `¥${Math.round(value).toLocaleString("zh-CN")}`;
}

function photoStyle(item) {
  if (!item?.photoUrl) return "";
  return `style="background-image: url('${item.photoUrl.replaceAll("'", "%27")}')"`;
}

function formatTime(hour) {
  if (hour >= 24) return `次日 ${String(hour - 24).padStart(2, "0")}:00`;
  return `${String(hour).padStart(2, "0")}:00`;
}

function bookingStartDateTime(booking) {
  return new Date(`${booking.date}T${String(booking.start).padStart(2, "0")}:00:00`);
}

function canInternalCancelBooking(user, booking) {
  return user?.billingType === "internal"
    && booking.status === "预约成功"
    && bookingStartDateTime(booking) > new Date();
}

function makeId(prefix) {
  return `${prefix}${Date.now().toString(36).slice(-5)}${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

function userDiscountRate(user) {
  const value = Number(user?.priceDiscount);
  if (!Number.isFinite(value) || value <= 0) return 1;
  return Math.min(value, 1);
}

function billingRate(equipment, user) {
  return user?.billingType === "internal" ? Number(equipment.internalRate || equipment.price) : Number(equipment.price || 0);
}

function calculateAmount(equipment, user, mode, start, end) {
  const billingType = typeof user === "string" ? user : user?.billingType;
  const discount = typeof user === "string" ? 1 : userDiscountRate(user);
  const baseRate = billingType === "internal" ? Number(equipment.internalRate || equipment.price) : Number(equipment.price || 0);
  const hours = end - start;
  const nightRate = mode === "night" ? equipment.nightDiscount : 1;
  return baseRate * hours * nightRate * discount;
}

function calculateBookingAmounts(equipment, user, selections) {
  const rows = selections.map((selection) => ({
    ...selection,
    amount: calculateAmount(equipment, user, selection.mode, selection.start, selection.end)
  }));

  const rule = platformRule(equipment.platform);
  if (!ruleAppliesToUser(rule, user) || !rule.dailyCapEnabled) return rows;

  const groups = rows.reduce((map, row) => {
    if (row.mode !== "normal") return map;
    map[row.date] = map[row.date] || [];
    map[row.date].push(row);
    return map;
  }, {});

  Object.entries(groups).forEach(([date, dayRows]) => {
    const existing = sameOrgDayBookings(user, equipment.id, date).filter((booking) => booking.mode === "normal");
    const existingHours = existing.reduce((sum, booking) => sum + (booking.end - booking.start), 0);
    const newHours = totalHours(dayRows);
    if (existingHours + newHours <= rule.dailyCapThreshold) return;

    const capAmount = billingRate(equipment, user) * rule.dailyCapBillableHours * userDiscountRate(user);
    const existingAmount = existing.reduce((sum, booking) => sum + booking.amount, 0);
    const chargeableAmount = Math.max(capAmount - existingAmount, 0);
    const rawAmount = dayRows.reduce((sum, row) => sum + row.amount, 0);
    dayRows.forEach((row) => {
      row.amount = rawAmount > 0 ? chargeableAmount * (row.amount / rawAmount) : 0;
      row.discountNote = `包天封顶`;
    });
  });

  return rows;
}

function sameOrgDayBookings(user, equipmentId, date) {
  return state.data.bookings.filter((booking) => {
    const bookingUser = state.data.users.find((item) => item.id === booking.userId);
    return booking.equipmentId === equipmentId
      && booking.date === date
      && booking.status === "预约成功"
      && bookingUser?.org === user.org;
  });
}

function showAuthMode(mode) {
  const login = mode === "login";
  els.loginTab.classList.toggle("active", login);
  els.registerTab.classList.toggle("active", !login);
  els.loginForm.classList.toggle("hidden", !login);
  els.registerForm.classList.toggle("hidden", login);
}

function login(account, password) {
  const user = state.data.users.find((item) => item.account === account && item.password === password);
  if (!user) {
    showToast("账号或密码不正确。");
    return;
  }
  state.currentUserId = user.id;
  state.selectedEquipmentId = filteredEquipment()[0]?.id || state.data.equipment[0]?.id || null;
  state.selections = [];
  state.scheduleStartDate = offsetDate(0);
  state.adminView = "bookings";
  els.authView.classList.add("hidden");
  els.appView.classList.remove("hidden");
  document.querySelectorAll(".nav-btn[data-view]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === "booking");
  });
  document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
  document.querySelector("#bookingPage").classList.add("active");
  renderAll();
  showSystemNotice();
}

function registerExternalUser() {
  const org = els.registerOrg.value.trim();
  const name = els.registerName.value.trim();
  const phone = els.registerPhone.value.trim();
  const captcha = els.registerCaptcha.value.trim();
  const password = els.registerPassword.value.trim();
  if (!org || !name || !phone || !captcha || !password) {
    showToast("注册信息均为必填项。");
    return;
  }
  if (!/^1\d{10}$/.test(phone)) {
    showToast("请输入 11 位手机号。");
    return;
  }
  if (!state.registerCaptcha || captcha !== state.registerCaptcha) {
    showToast("手机验证码不正确。");
    return;
  }
  if (state.data.users.some((user) => user.phone === phone)) {
    showToast("该手机号已注册。");
    return;
  }
  const account = `ext${String(state.data.users.length + 1).padStart(3, "0")}`;
  const user = {
    id: makeId("U"),
    account,
    password,
    name,
    org,
    phone,
    role: "user",
    billingType: "external",
    priceDiscount: 1
  };
  state.data.users.push(user);
  saveData();
  showToast(`注册成功，账号为 ${account}。`);
  login(account, password);
}

function sendRegisterCaptcha() {
  const phone = els.registerPhone.value.trim();
  if (!/^1\d{10}$/.test(phone)) {
    showToast("请先填写 11 位手机号。");
    return;
  }
  state.registerCaptcha = String(Math.floor(100000 + Math.random() * 900000));
  showToast(`演示验证码：${state.registerCaptcha}`);
}

function logout() {
  state.currentUserId = null;
  state.selections = [];
  state.pendingBookings = [];
  els.appView.classList.add("hidden");
  els.authView.classList.remove("hidden");
  showAuthMode("login");
}

function switchPage(view) {
  document.querySelectorAll(".nav-btn[data-view]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });
  document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
  document.querySelector(`#${view}Page`).classList.add("active");
  renderAll();
}

function filteredEquipment() {
  const platform = els.platformFilter?.value || "all";
  const eqKeyword = (els.equipmentKeyword?.value || "").trim().toLowerCase();
  const processKeyword = (els.processKeyword?.value || "").trim().toLowerCase();
  return state.data.equipment.filter((item) => {
    const platformMatch = platform === "all" || item.platform === platform;
    const eqText = `${item.name} ${item.location} ${item.manager} ${item.tags.join(" ")}`.toLowerCase();
    const processText = `${item.processKeywords.join(" ")} ${item.description}`.toLowerCase();
    return platformMatch
      && (!eqKeyword || eqText.includes(eqKeyword))
      && (!processKeyword || processText.includes(processKeyword));
  });
}

function renderAccount() {
  const user = currentUser();
  if (!user) return;
  els.accountName.textContent = `${user.name} · ${user.account}`;
  els.accountMeta.textContent = `${user.org} · ${user.phone}`;
  els.adminNavBtn.classList.toggle("hidden", user.role !== "admin");
}

function renderEquipmentList() {
  const list = filteredEquipment();
  const user = currentUser();
  if (!list.some((item) => item.id === state.selectedEquipmentId)) {
    state.selectedEquipmentId = list[0]?.id || null;
    state.selections = [];
  }
  els.matchCount.textContent = `${list.length} 台设备`;
  els.equipmentCards.innerHTML = list.length
    ? list.map((item) => `
      <button class="equipment-card ${item.id === state.selectedEquipmentId ? "active" : ""}" data-equipment-id="${item.id}" type="button">
        <span class="thumb ${item.photoUrl ? "photo" : ""}" ${photoStyle(item)} aria-hidden="true"></span>
        <span>
          <strong>${item.name}</strong>
          <span class="card-meta">
            <span>${item.platform}</span>
            <span>${formatMoney(billingRate(item, user))}/小时</span>
            <span>${item.location}</span>
          </span>
          <p>${item.description}</p>
        </span>
      </button>
    `).join("")
    : `<div class="summary">没有匹配设备，请调整筛选条件。</div>`;

  els.equipmentCards.querySelectorAll(".equipment-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedEquipmentId = card.dataset.equipmentId;
      state.selections = [];
      renderAll();
    });
  });
}

function renderEquipmentDetail() {
  const item = selectedEquipment();
  if (!item) {
    els.selectedName.textContent = "暂无设备";
    els.selectedDetail.textContent = "当前筛选条件下没有可预约设备。";
    els.selectedFacts.innerHTML = "";
    els.selectedPrice.textContent = "--";
    els.nightPrice.textContent = "--";
    els.scheduleGrid.innerHTML = "";
    els.submitBookingBtn.disabled = true;
    return;
  }
  els.selectedPlatform.textContent = item.platform;
  els.selectedName.textContent = item.name;
  els.selectedDetail.textContent = "已选择设备。点击“查看设备详情”打开完整海报展板。";
  els.selectedFacts.innerHTML = `
    <span>${item.location}</span>
    <span>负责人 ${item.manager}</span>
    <span>${item.tags.join(" / ")}</span>
  `;
  els.selectedPrice.textContent = `${formatMoney(billingRate(item, currentUser()))}/小时`;
  els.nightPrice.textContent = `包夜 ${Math.round(item.nightDiscount * 100)} 折`;
  els.scheduleStartDate.min = offsetDate(0);
  els.scheduleStartDate.max = offsetDate(30);
  els.scheduleStartDate.value = clampScheduleDate(state.scheduleStartDate);
  els.equipmentSketch.classList.toggle("photo", Boolean(item.photoUrl));
  if (item.photoUrl) {
    els.equipmentSketch.style.backgroundImage = `url("${item.photoUrl}")`;
  } else {
    els.equipmentSketch.style.backgroundImage = "";
  }
  renderSchedule();
  renderBookingSummary();
}

function renderSchedule() {
  const item = selectedEquipment();
  if (!item) return;
  const slots = [
    { label: "08:00-10:00", start: 8, end: 10, mode: "normal" },
    { label: "10:00-12:00", start: 10, end: 12, mode: "normal" },
    { label: "12:00-14:00", start: 12, end: 14, mode: "normal" },
    { label: "14:00-16:00", start: 14, end: 16, mode: "normal" },
    { label: "16:00-18:00", start: 16, end: 18, mode: "normal" },
    { label: "18:00-20:00", start: 18, end: 20, mode: "normal" },
    { label: "20:00-22:00", start: 20, end: 22, mode: "normal" },
    { label: "22:00-次日08:00 包夜", start: 22, end: 32, mode: "night" }
  ];

  state.scheduleStartDate = clampScheduleDate(state.scheduleStartDate);
  els.scheduleGrid.innerHTML = Array.from({ length: 7 }, (_, dayIndex) => {
    const date = addDays(state.scheduleStartDate, dayIndex);
    const daySlots = slots.map((slot) => {
      const busy = findConflict(item.id, date, slot.start, slot.end);
      const selected = state.selections.some((target) => (
        target.equipmentId === item.id
        && target.date === date
        && target.start === slot.start
        && target.end === slot.end
      ));
      const className = busy ? (busy.status === "维护中" ? "maintenance" : "busy") : selected ? "selected" : "";
      const text = busy ? bookingOwnerText(busy) : slot.mode === "night" ? "包夜可选" : "基础时段";
      return `
        <button class="slot ${className}" data-date="${date}" data-start="${slot.start}" data-end="${slot.end}" data-mode="${slot.mode}" ${busy ? "disabled" : ""} type="button">
          <strong>${slot.label}</strong>
          ${text}
        </button>
      `;
    }).join("");
    return `<article class="day"><h4>${formatDate(date)}</h4>${daySlots}</article>`;
  }).join("");

  els.scheduleGrid.querySelectorAll(".slot:not(.busy)").forEach((slot) => {
    slot.addEventListener("click", () => selectSlot(slot));
  });
}

function setScheduleStart(dateText) {
  state.scheduleStartDate = clampScheduleDate(dateText);
  state.selections = state.selections.filter((selection) => {
    const diff = dayDiff(state.scheduleStartDate, selection.date);
    return diff >= 0 && diff < 7;
  });
  renderAll();
}

function openEquipmentDetail() {
  const item = selectedEquipment();
  if (!item) return;
  els.detailModalPlatform.textContent = item.platform;
  els.detailModalName.textContent = item.posterTitle || item.name;
  els.detailModalSubtitle.textContent = item.posterSubtitle || `${item.platform}平台`;
  els.detailModalMeta.textContent = `${item.location} · 负责人 ${item.manager} · ${item.tags.join(" / ")}`;
  els.detailModalDescription.textContent = item.posterBody || item.description;
  els.detailModalPosterImage.classList.toggle("hidden", !item.posterImageUrl);
  els.detailModalPosterImage.src = item.posterImageUrl || "";
  els.detailModalPhoto.classList.toggle("photo", Boolean(item.photoUrl));
  els.detailModalPhoto.style.backgroundImage = item.photoUrl ? `url("${item.photoUrl}")` : "";
  els.detailModal.classList.remove("hidden");
}

function closeEquipmentDetail() {
  els.detailModal.classList.add("hidden");
}

function selectSlot(slot) {
  const item = selectedEquipment();
  const user = currentUser();
  const date = slot.dataset.date;
  const start = Number(slot.dataset.start);
  const end = Number(slot.dataset.end);
  const mode = slot.dataset.mode;
  const existingIndex = state.selections.findIndex((target) => (
    target.equipmentId === item.id
    && target.date === date
    && target.start === start
    && target.end === end
  ));
  if (existingIndex >= 0) {
    const nextSelections = state.selections.filter((_, index) => index !== existingIndex);
    if (!isAllowedSelectionChange(nextSelections, user, item.id)) return;
    state.selections = nextSelections;
  } else {
    const nextSelections = [...state.selections, { equipmentId: item.id, date, start, end, mode }];
    if (!isAllowedSelectionChange(nextSelections, user, item.id)) return;
    state.selections = nextSelections;
  }
  renderAll();
}

function isAllowedSelectionChange(nextSelections, user, equipmentId) {
  const eq = state.data.equipment.find((item) => item.id === equipmentId);
  const rule = platformRule(eq?.platform);
  if (!ruleAppliesToUser(rule, user)) return true;
  if (!rule.requireContinuous && !rule.requireCrossDay) return true;

  const selections = nextSelections.filter((selection) => selection.equipmentId === equipmentId);
  const normalSelections = selections.filter((selection) => selection.mode === "normal");

  if (rule.requireContinuous) {
    const ok = rule.requireCrossDay
      ? isSingleContinuousBlockAcrossDays(selections)
      : isSingleContinuousBlockSameDay(normalSelections);
    if (!ok) {
      showToast("该分组设备的基础时段需要连续选择；如跨天预约需连同包夜时段保持连续。");
      return false;
    }
  }

  return true;
}

function isContinuousNormalBlock(items) {
  if (items.length <= 1) return true;
  const sorted = items.slice().sort((a, b) => a.start - b.start);
  return sorted.every((item, index) => index === 0 || item.start === sorted[index - 1].end);
}

function totalHours(items) {
  return items.reduce((sum, item) => sum + (item.end - item.start), 0);
}

function effectiveHoursForMin(rule, selections) {
  const normal = selections.filter((s) => s.mode === "normal");
  const nightCount = selections.filter((s) => s.mode === "night").length;
  const nightHours = rule.requireContinuous ? nightCount * 10 : 0;
  return totalHours(normal) + nightHours;
}

function isSingleContinuousBlockSameDay(normalSelections) {
  if (normalSelections.length <= 1) return true;
  const grouped = normalSelections.reduce((map, selection) => {
    map[selection.date] = map[selection.date] || [];
    map[selection.date].push(selection);
    return map;
  }, {});
  const dates = Object.keys(grouped);
  if (dates.length <= 1) return isContinuousNormalBlock(grouped[dates[0]] || []);
  // Multiple days selected but cross-day continuity disabled.
  return false;
}

function isSingleContinuousBlockAcrossDays(selections) {
  if (selections.length <= 1) return true;
  // Convert date+hour into an absolute hour timeline relative to the earliest selected date.
  const baseDate = selections.map((s) => s.date).sort()[0];
  const base = new Date(`${baseDate}T00:00:00`);
  const intervals = selections.map((s) => {
    const d = new Date(`${s.date}T00:00:00`);
    const dayOffset = Math.round((d - base) / (24 * 3600 * 1000));
    const start = dayOffset * 24 + s.start;
    const end = dayOffset * 24 + s.end;
    return { start, end, mode: s.mode };
  }).sort((a, b) => a.start - b.start);

  // Require no gaps between intervals (touching is continuous).
  for (let i = 1; i < intervals.length; i += 1) {
    if (intervals[i].start !== intervals[i - 1].end) return false;
  }
  return true;
}

function findConflict(equipmentId, date, start, end) {
  return state.data.bookings.find((booking) => (
    booking.equipmentId === equipmentId
    && booking.date === date
    && booking.status !== "已取消"
    && rangesOverlap(start, end, booking.start, booking.end)
  ));
}

function rangesOverlap(startA, endA, startB, endB) {
  return startA < endB && endA > startB;
}

function bookingOwnerText(booking) {
  return booking.status === "维护中" ? "维护中" : "已预约";
}

function renderBookingSummary() {
  const item = selectedEquipment();
  const user = currentUser();
  if (!item || !state.selections.length) {
    els.bookingSummary.textContent = "请选择设备和预约时段。基础时段为 2 小时一格，可跨多天多选；22:00 至次日 08:00 可选择包夜。";
    els.submitBookingBtn.disabled = true;
    els.submitInlineMaintenanceBtn.classList.toggle("hidden", user?.role !== "admin");
    els.submitInlineMaintenanceBtn.disabled = true;
    return;
  }
  const selectedForItem = state.selections.filter((selection) => selection.equipmentId === item.id);
  const pricedSelections = calculateBookingAmounts(item, user, selectedForItem);
  const amount = pricedSelections.reduce((sum, selection) => sum + selection.amount, 0);
  const hasDailyCap = pricedSelections.some((selection) => selection.discountNote);
  const userDiscount = userDiscountRate(user);
  const discountText = userDiscount < 1 ? ` · 账号折扣 ${Math.round(userDiscount * 100)}%` : "";
  const billingText = user.billingType === "external" ? "提交后进入支付宝/微信支付" : "提交后计入年度结算台账";
  const slotLines = selectedForItem
    .sort((a, b) => `${a.date}${a.start}`.localeCompare(`${b.date}${b.start}`))
    .map((selection) => `${formatDate(selection.date)} ${formatTime(selection.start)}-${formatTime(selection.end)} ${selection.mode === "night" ? "包夜" : "基础"}`)
    .join("<br>");
  els.bookingSummary.innerHTML = `
    <strong>${item.name}</strong><br>
    ${slotLines}<br>
    共 ${selectedForItem.length} 个时段 · 预计费用 ${formatMoney(amount)}${hasDailyCap ? " · 已应用包天封顶" : ""}${discountText}<br>
    ${billingText}
  `;
  els.submitBookingBtn.disabled = false;
  els.submitInlineMaintenanceBtn.classList.toggle("hidden", user.role !== "admin");
  els.submitInlineMaintenanceBtn.disabled = user.role !== "admin";
}

function submitBooking() {
  const user = currentUser();
  const item = selectedEquipment();
  const selectedForItem = state.selections.filter((selection) => selection.equipmentId === item?.id);
  if (!user || !item || !selectedForItem.length) {
    showToast("请先选择预约时段。");
    return;
  }
  if (!isAllowedSelectionChange(state.selections, user, item.id)) {
    return;
  }
  const rule = platformRule(item.platform);
  if (ruleAppliesToUser(rule, user)) {
    if (rule.minNormalHours) {
      const hours = effectiveHoursForMin(rule, selectedForItem);
      if (hours < rule.minNormalHours) {
        const nightHint = rule.requireContinuous ? "（包含包夜则按 10 小时计入）" : "";
        showToast(`该分组设备要求最小时长不少于 ${rule.minNormalHours} 小时${nightHint}。`);
        return;
      }
    }
  }
  const conflict = selectedForItem.some((selection) => findConflict(item.id, selection.date, selection.start, selection.end));
  if (conflict) {
    showToast("该时段刚刚被占用，请重新选择。");
    state.selections = [];
    renderAll();
    return;
  }
  if (!els.purposeInput.value.trim()) {
    showToast("请填写使用简介。");
    return;
  }

  const purpose = els.purposeInput.value.trim();
  const pricedSelections = calculateBookingAmounts(item, user, selectedForItem);
  state.pendingBookings = pricedSelections.map((selection) => ({
    id: makeId("BK"),
    equipmentId: item.id,
    userId: user.id,
    date: selection.date,
    start: selection.start,
    end: selection.end,
    mode: selection.mode,
    purpose,
    amount: selection.amount,
    discountNote: selection.discountNote || "",
    status: "预约成功",
    paymentMethod: user.billingType === "internal" ? "年度记账" : "",
    createdAt: new Date().toISOString()
  }));
  const amount = state.pendingBookings.reduce((sum, booking) => sum + booking.amount, 0);
  const userDiscount = userDiscountRate(user);
  const discountText = userDiscount < 1 ? `<br>已应用账号总体折扣 ${Math.round(userDiscount * 100)}%` : "";

  if (user.billingType === "external") {
    const lines = state.pendingBookings
      .map((booking) => `${formatDate(booking.date)} ${formatTime(booking.start)}-${formatTime(booking.end)} ${booking.mode === "night" ? "包夜" : "基础时段"}`)
      .join("<br>");
    els.paymentSummary.innerHTML = `
      <strong>${item.name}</strong><br>
      ${lines}<br>
      共 ${state.pendingBookings.length} 个时段，应付金额 ${formatMoney(amount)}${discountText}
    `;
    els.paymentModal.classList.remove("hidden");
  } else {
    commitBookings(state.pendingBookings);
    showToast("预约成功，费用已计入后台年度结算台账。");
  }
}

function commitBookings(bookings, paymentMethod) {
  const committed = bookings.map((booking) => ({
    ...booking,
    paymentMethod: paymentMethod || booking.paymentMethod,
    invoiceStatus: booking.invoiceStatus || "未开票",
    invoiceId: booking.invoiceId || ""
  }));
  state.data.bookings.push(...committed);
  saveData();
  state.pendingBookings = [];
  state.selections = [];
  els.purposeInput.value = "";
  els.paymentModal.classList.add("hidden");
  renderAll();
}

function renderProfile() {
  const user = currentUser();
  if (!user) return;
  const canUseInvoice = user.billingType === "external" || user.role === "admin";
  els.profileInfo.innerHTML = `
    <div class="info-line"><span>账号</span><strong>${user.account}</strong></div>
    <div class="info-line"><span>名称</span><strong>${user.name}</strong></div>
    <div class="info-line"><span>单位/课题组</span><strong>${user.org}</strong></div>
    <div class="info-line"><span>联系方式</span><strong>${user.phone}</strong></div>
  `;

  const rows = state.data.bookings
    .filter((booking) => booking.userId === user.id)
    .sort((a, b) => `${b.date}${b.start}`.localeCompare(`${a.date}${a.start}`));
  document.querySelector(".invoice-panel")?.classList.toggle("hidden", !canUseInvoice);
  els.historyTable.innerHTML = rows.length
    ? rows.map((booking) => {
      const item = state.data.equipment.find((eq) => eq.id === booking.equipmentId);
      const invoice = invoiceForBooking(booking.id);
      const canInvoice = canUseInvoice && booking.status === "预约成功" && Number(booking.amount) > 0 && (!invoice || invoice.status === "已驳回");
      const invoiceText = canUseInvoice ? (invoice ? `${invoice.status}<br><small>${invoice.id}</small>` : "未开票") : "-";
      const canCancel = canInternalCancelBooking(user, booking);
      return `
        <tr>
          <td><input class="invoice-check" type="checkbox" data-booking-id="${booking.id}" ${canInvoice ? "" : "disabled"} aria-label="选择订单 ${booking.id}" /></td>
          <td>${booking.id}</td>
          <td>${item?.name || "-"}</td>
          <td>${booking.date}</td>
          <td>${formatTime(booking.start)}-${formatTime(booking.end)}</td>
          <td>${formatMoney(booking.amount)}</td>
          <td>${booking.status}</td>
          <td>${invoiceText}</td>
          <td>${canCancel ? `<button class="secondary-btn cancel-booking-btn" data-booking-id="${booking.id}" type="button">取消预约</button>` : "-"}</td>
        </tr>
      `;
    }).join("")
    : `<tr><td colspan="9">暂无历史预约。</td></tr>`;
  updateInvoiceSelection();
}

function selectedInvoiceBookingIds() {
  return Array.from(document.querySelectorAll(".invoice-check:checked"))
    .map((checkbox) => checkbox.dataset.bookingId);
}

function selectedInvoiceBookings() {
  const ids = selectedInvoiceBookingIds();
  return state.data.bookings.filter((booking) => ids.includes(booking.id));
}

function invoiceForBooking(bookingId) {
  return (state.data.invoices || []).find((invoice) => invoice.bookingIds?.includes(bookingId));
}

function updateInvoiceSelection() {
  const selected = selectedInvoiceBookings();
  const amount = selected.reduce((sum, booking) => sum + Number(booking.amount || 0), 0);
  els.invoiceAmount.textContent = formatMoney(amount);
  els.issueInvoiceBtn.disabled = selected.length === 0;
  const checks = Array.from(document.querySelectorAll(".invoice-check:not(:disabled)"));
  els.selectAllInvoiceBookings.checked = checks.length > 0 && checks.every((checkbox) => checkbox.checked);
  els.selectAllInvoiceBookings.disabled = checks.length === 0;
}

function issueInvoice() {
  const user = currentUser();
  if (user?.billingType === "internal" && user.role !== "admin") {
    showToast("内部普通用户不支持自行申请开票。");
    return;
  }
  const selected = selectedInvoiceBookings();
  if (!user || !selected.length) {
    showToast("请先选择需要开票的历史订单。");
    return;
  }
  const title = els.invoiceTitleInput.value.trim();
  const taxNo = els.invoiceTaxNoInput.value.trim();
  const email = els.invoiceEmailInput.value.trim();
  if (!title || !taxNo || !email) {
    showToast("请填写发票抬头、税号和接收邮箱。");
    return;
  }
  const invoiceId = makeId("INV");
  state.data.invoices = state.data.invoices || [];
  state.data.invoices.push({
    id: invoiceId,
    userId: user.id,
    bookingIds: selected.map((booking) => booking.id),
    title,
    taxNo,
    email,
    amount: selected.reduce((sum, booking) => sum + Number(booking.amount || 0), 0),
    status: "待审核",
    createdAt: new Date().toISOString(),
    reviewedAt: "",
    reviewNote: ""
  });
  saveData();
  renderProfile();
  showToast(`发票申请已提交，${selected.length} 笔订单合并开票，等待管理员审核。`);
}

function cancelMyBooking(bookingId) {
  const user = currentUser();
  const booking = state.data.bookings.find((item) => item.id === bookingId && item.userId === user?.id);
  if (!booking) return;
  if (user.billingType !== "internal") {
    showToast("外部用户预约成功后不可取消。");
    return;
  }
  if (booking.status !== "预约成功") {
    showToast("仅可取消已成功的预约。");
    return;
  }
  if (bookingStartDateTime(booking) <= new Date()) {
    showToast("预约开始后默认已使用设备，不可取消。");
    return;
  }
  booking.status = "已取消";
  booking.cancelledAt = new Date().toISOString();
  saveData();
  renderAll();
  showToast("预约已取消。");
}

function renderAdmin() {
  const rows = filteredAdminBookings()
    .sort((a, b) => `${b.date}${b.start}`.localeCompare(`${a.date}${a.start}`));
  els.adminBookingsTable.innerHTML = rows.map((booking) => {
    const item = state.data.equipment.find((eq) => eq.id === booking.equipmentId);
    const user = state.data.users.find((target) => target.id === booking.userId);
    return `
      <tr>
        <td>${booking.id}</td>
        <td>${user?.account || "-"}</td>
        <td>${item?.name || "-"}</td>
        <td>${booking.date}</td>
        <td>${formatTime(booking.start)}-${formatTime(booking.end)}</td>
        <td>${formatMoney(booking.amount)}</td>
        <td>${booking.paymentMethod}</td>
      </tr>
    `;
  }).join("");

  els.adminUsersTable.innerHTML = state.data.users.map((user) => `
    <tr>
      <td>${user.account}</td>
      <td>${user.name}</td>
      <td>${user.org}</td>
      <td>${user.phone}</td>
      <td>${user.role === "admin" ? "管理员" : "普通账号"}</td>
      <td><input class="user-discount-input" data-user-id="${user.id}" type="number" min="0.1" max="1" step="0.01" value="${userDiscountRate(user)}" /></td>
      <td><button class="secondary-btn save-user-discount" data-user-id="${user.id}" type="button">保存折扣</button></td>
    </tr>
  `).join("");

  els.adminInvoicesTable.innerHTML = (state.data.invoices || []).length
    ? state.data.invoices.map((invoice) => {
      const user = state.data.users.find((item) => item.id === invoice.userId);
      const bookingText = invoice.bookingIds.map((id) => id).join("<br>");
      const actions = invoice.status === "待审核"
        ? `<button class="secondary-btn approve-invoice-btn" data-invoice-id="${invoice.id}" type="button">通过</button>
           <button class="secondary-btn reject-invoice-btn" data-invoice-id="${invoice.id}" type="button">驳回</button>`
        : "-";
      return `
        <tr>
          <td>${invoice.id}</td>
          <td>${user?.account || "-"}</td>
          <td>${user?.org || "-"}</td>
          <td>${invoice.title}</td>
          <td>${invoice.taxNo}</td>
          <td>${invoice.email}</td>
          <td>${formatMoney(invoice.amount)}</td>
          <td>${invoice.status}</td>
          <td>${bookingText}</td>
          <td>${actions}</td>
        </tr>
      `;
    }).join("")
    : `<tr><td colspan="10">暂无发票申请。</td></tr>`;

  renderRulesForm();
  renderNoticeForm();
  renderAdminTabs();
  els.editEquipmentSelect.innerHTML = state.data.equipment.map((item) => (
    `<option value="${item.id}">${item.name}</option>`
  )).join("");
  if (!state.data.equipment.some((item) => item.id === els.editEquipmentSelect.value)) {
    els.editEquipmentSelect.value = state.data.equipment[0]?.id || "";
  }
  renderEditForm();
}

function filteredAdminBookings() {
  const start = els.exportStartDate.value;
  const end = els.exportEndDate.value;
  const keyword = els.bookingSearchInput.value.trim().toLowerCase();
  return state.data.bookings.filter((booking) => {
    const user = state.data.users.find((target) => target.id === booking.userId);
    const item = state.data.equipment.find((eq) => eq.id === booking.equipmentId);
    const text = `${user?.account || ""} ${user?.name || ""} ${user?.org || ""} ${item?.name || ""}`.toLowerCase();
    return (!start || booking.date >= start)
      && (!end || booking.date <= end)
      && (!keyword || text.includes(keyword));
  });
}

function submitInlineMaintenance() {
  const admin = currentUser();
  const item = selectedEquipment();
  const selectedForItem = state.selections.filter((selection) => selection.equipmentId === item?.id);
  if (admin?.role !== "admin" || !item || !selectedForItem.length) {
    showToast("请先选择需要维护的设备时段。");
    return;
  }
  const conflict = selectedForItem.some((selection) => findConflict(item.id, selection.date, selection.start, selection.end));
  if (conflict) {
    showToast("所选时段已有预约或维护占用。");
    return;
  }
  const purpose = els.purposeInput.value.trim() || "设备维护";
  const records = selectedForItem.map((selection) => ({
    id: makeId("MT"),
    equipmentId: item.id,
    userId: admin.id,
    date: selection.date,
    start: selection.start,
    end: selection.end,
    mode: selection.mode,
    purpose,
    amount: 0,
    discountNote: "",
    status: "维护中",
    paymentMethod: "设备维护",
    createdAt: new Date().toISOString()
  }));
  state.data.bookings.push(...records);
  state.selections = [];
  els.purposeInput.value = "";
  saveData();
  renderAll();
  showToast("维护时段已提交，用户端将显示维护中。");
}

function addAdminUser() {
  const account = els.newUserAccount.value.trim();
  const password = els.newUserPassword.value.trim();
  const name = els.newUserName.value.trim();
  const org = els.newUserOrg.value.trim();
  const phone = els.newUserPhone.value.trim();
  if (!account || !password || !name || !org || !phone) {
    showToast("请完整填写账号信息。");
    return;
  }
  if (state.data.users.some((user) => user.account === account)) {
    showToast("账号已存在。");
    return;
  }
  state.data.users.push({
    id: makeId("U"),
    account,
    password,
    name,
    org,
    phone,
    role: els.newUserRole.value,
    billingType: els.newUserBillingType.value,
    priceDiscount: 1
  });
  saveData();
  [els.newUserAccount, els.newUserName, els.newUserOrg, els.newUserPhone].forEach((input) => { input.value = ""; });
  els.newUserPassword.value = "123456";
  renderAll();
  showToast("账号已添加。");
}

function saveUserDiscount(userId) {
  const user = state.data.users.find((item) => item.id === userId);
  const input = document.querySelector(`.user-discount-input[data-user-id="${userId}"]`);
  if (!user || !input) return;
  const value = Number(input.value);
  if (!Number.isFinite(value) || value <= 0 || value > 1) {
    showToast("总体折扣比例需在 0.1 到 1 之间，例如 0.85 表示 85 折。");
    input.value = userDiscountRate(user);
    return;
  }
  user.priceDiscount = value;
  saveData();
  renderAll();
  showToast(`${user.account} 的总体价格折扣已保存为 ${Math.round(value * 100)}%。`);
}

function reviewInvoice(invoiceId, status) {
  const invoice = (state.data.invoices || []).find((item) => item.id === invoiceId);
  if (!invoice || invoice.status !== "待审核") return;
  invoice.status = status;
  invoice.reviewedAt = new Date().toISOString();
  invoice.reviewNote = status === "已开票" ? "管理员审核通过" : "管理员驳回";
  saveData();
  renderAll();
  showToast(status === "已开票" ? "发票申请已审核通过。" : "发票申请已驳回。");
}

function exportInvoices() {
  const rows = [["发票编号", "账号", "单位", "抬头", "税号", "邮箱", "金额", "状态", "预约编号", "申请时间", "审核时间"]];
  (state.data.invoices || []).forEach((invoice) => {
    const user = state.data.users.find((item) => item.id === invoice.userId);
    rows.push([
      invoice.id,
      user?.account || "",
      user?.org || "",
      invoice.title,
      invoice.taxNo,
      invoice.email,
      invoice.amount,
      invoice.status,
      invoice.bookingIds.join("；"),
      invoice.createdAt,
      invoice.reviewedAt || ""
    ]);
  });
  exportCsv(`发票台账-${new Date().getFullYear()}.csv`, rows);
}

function renderRulesForm() {
  const platform = els.rulePlatformSelect.value;
  const rule = platformRule(platform);
  els.ruleRequireContinuous.value = String(Boolean(rule.requireContinuous));
  els.ruleAudience.value = rule.audience || "external";
  els.ruleRequireCrossDay.value = String(Boolean(rule.requireCrossDay));
  els.ruleMinNormalHours.value = String(rule.minNormalHours ?? 0);
  els.ruleDailyCapEnabled.value = String(Boolean(rule.dailyCapEnabled));
  els.ruleDailyCapThreshold.value = String(rule.dailyCapThreshold ?? 8);
  els.ruleDailyCapBillableHours.value = String(rule.dailyCapBillableHours ?? 8);
  renderRuleOverview();
}

function renderRuleOverview() {
  const rows = Object.entries(state.data.bookingRules?.platforms || defaultBookingRules().platforms)
    .map(([platform, rule]) => `
      <article class="rule-item">
        <strong>${platform}</strong>
        <span>适用：${audienceLabel(rule.audience)}</span>
        <span>连续：${rule.requireContinuous ? "启用" : "关闭"} / 跨天：${rule.requireCrossDay ? "启用" : "关闭"}</span>
        <span>最小时长：${rule.minNormalHours || 0} 小时</span>
        <span>包天封顶：${rule.dailyCapEnabled ? `${rule.dailyCapThreshold} 小时触发，按 ${rule.dailyCapBillableHours} 小时计费` : "关闭"}</span>
      </article>
    `).join("");
  els.ruleOverview.innerHTML = rows;
}

function audienceLabel(value) {
  if (value === "all") return "全部用户";
  if (value === "internal") return "内部用户";
  return "外部用户";
}

function saveRules() {
  const platform = els.rulePlatformSelect.value;
  state.data.bookingRules = state.data.bookingRules || defaultBookingRules();
  state.data.bookingRules.platforms = state.data.bookingRules.platforms || {};
  state.data.bookingRules.platforms[platform] = {
    audience: els.ruleAudience.value,
    requireContinuous: els.ruleRequireContinuous.value === "true",
    requireCrossDay: els.ruleRequireCrossDay.value === "true",
    minNormalHours: Math.max(0, Number(els.ruleMinNormalHours.value) || 0),
    dailyCapEnabled: els.ruleDailyCapEnabled.value === "true",
    dailyCapThreshold: Math.max(0, Number(els.ruleDailyCapThreshold.value) || 0),
    dailyCapBillableHours: Math.max(0, Number(els.ruleDailyCapBillableHours.value) || 0)
  };
  saveData();
  renderAll();
  showToast("预约限制规则已保存。");
}

function renderNoticeForm() {
  const notice = state.data.systemNotice || defaultSystemNotice();
  els.noticeEnabled.value = String(Boolean(notice.enabled));
  els.noticeTitle.value = notice.title || "";
  els.noticeContent.value = notice.content || "";
}

function saveNotice() {
  state.data.systemNotice = {
    enabled: els.noticeEnabled.value === "true",
    title: els.noticeTitle.value.trim() || "系统提醒",
    content: els.noticeContent.value.trim()
  };
  saveData();
  renderAll();
  showToast("弹窗提醒已保存。");
}

function showSystemNotice() {
  const user = currentUser();
  const notice = state.data.systemNotice || defaultSystemNotice();
  if (!user || !notice.enabled || !notice.content || state.noticeShownForUser === user.id) return;
  state.noticeShownForUser = user.id;
  els.noticeModalTitle.textContent = notice.title || "系统提醒";
  els.noticeModalContent.textContent = notice.content;
  els.noticeModal.classList.remove("hidden");
}

function closeSystemNotice() {
  els.noticeModal.classList.add("hidden");
}

function switchAdminView(view) {
  state.adminView = view;
  renderAdminTabs();
}

function renderAdminTabs() {
  document.querySelectorAll(".admin-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.adminView === state.adminView);
  });
  document.querySelectorAll(".admin-section").forEach((section) => {
    section.classList.toggle("active", section.dataset.adminSection === state.adminView);
  });
}

function renderEditForm() {
  const item = state.data.equipment.find((eq) => eq.id === els.editEquipmentSelect.value);
  if (!item) return;
  els.editName.value = item.name;
  els.editPlatform.value = item.platform;
  els.editLocation.value = item.location;
  els.editManager.value = item.manager;
  els.editPrice.value = item.price;
  els.editInternalRate.value = item.internalRate || item.price;
  els.editNightDiscount.value = item.nightDiscount;
  els.editTags.value = item.tags.join("、");
  els.editPhotoUrl.value = item.photoUrl || "";
  els.editPosterTitle.value = item.posterTitle || item.name;
  els.editPosterSubtitle.value = item.posterSubtitle || `${item.platform}平台`;
  els.editPosterImageUrl.value = item.posterImageUrl || "";
  els.editPosterBody.value = item.posterBody || item.description;
  els.editDescription.value = item.description;
}

function saveEquipmentEdit() {
  const item = state.data.equipment.find((eq) => eq.id === els.editEquipmentSelect.value);
  if (!item) return;
  item.name = els.editName.value.trim() || item.name;
  item.platform = els.editPlatform.value;
  item.location = els.editLocation.value.trim() || item.location;
  item.manager = els.editManager.value.trim() || item.manager;
  item.price = Number(els.editPrice.value) || item.price;
  item.internalRate = Number(els.editInternalRate.value) || item.internalRate || item.price;
  item.nightDiscount = Number(els.editNightDiscount.value) || item.nightDiscount;
  item.tags = els.editTags.value.split(/[、,，]/).map((tag) => tag.trim()).filter(Boolean);
  item.photoUrl = els.editPhotoUrl.value.trim();
  item.posterTitle = els.editPosterTitle.value.trim() || item.name;
  item.posterSubtitle = els.editPosterSubtitle.value.trim() || `${item.platform}平台`;
  item.posterImageUrl = els.editPosterImageUrl.value.trim();
  item.posterBody = els.editPosterBody.value.trim() || item.description;
  item.description = els.editDescription.value.trim() || item.description;
  saveData();
  renderAll();
  showToast("设备展示内容已保存。");
}

function importEquipment() {
  const lines = els.equipmentImportText.value.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (!lines.length) {
    showToast("请粘贴 CSV 设备数据。");
    return;
  }
  lines.forEach((line) => {
    const [name, platform, location, manager, price, internalRate, nightDiscount, tags, processKeywords, description, photoUrl] = line.split(",").map((part) => part.trim());
    if (!name || !platform) return;
    state.data.equipment.push({
      id: makeId("EQ"),
      name,
      platform,
      location: location || "待补充",
      manager: manager || "待指定",
      price: Number(price) || 0,
      internalRate: Number(internalRate) || Math.round((Number(price) || 0) * 0.68),
      nightDiscount: Number(nightDiscount) || 0.7,
      photoUrl: photoUrl || "",
      tags: (tags || "").split(/[、|]/).map((tag) => tag.trim()).filter(Boolean),
      processKeywords: (processKeywords || "").split(/[、|]/).map((tag) => tag.trim()).filter(Boolean),
      description: description || "后台导入设备，详情待完善。"
    });
  });
  els.equipmentImportText.value = "";
  saveData();
  renderAll();
  showToast("设备已批量导入。");
}

function exportCsv(filename, rows) {
  const csv = rows.map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function exportBookings() {
  const rows = [["预约编号", "账号", "单位/课题组", "设备", "日期", "开始", "结束", "费用", "支付/记账方式", "使用简介"]];
  filteredAdminBookings().forEach((booking) => {
    const user = state.data.users.find((item) => item.id === booking.userId);
    const item = state.data.equipment.find((eq) => eq.id === booking.equipmentId);
    rows.push([booking.id, user?.account, user?.org, item?.name, booking.date, formatTime(booking.start), formatTime(booking.end), booking.amount, booking.paymentMethod, booking.purpose]);
  });
  exportCsv(`设备预约台账-${new Date().getFullYear()}.csv`, rows);
}

function exportEquipment() {
  const rows = [["名称", "平台", "地点", "负责人", "单价", "内部价", "包夜折扣", "关键词", "工艺关键词", "详情", "照片URL"]];
  state.data.equipment.forEach((item) => {
    rows.push([item.name, item.platform, item.location, item.manager, item.price, item.internalRate, item.nightDiscount, item.tags.join("、"), item.processKeywords.join("、"), item.description, item.photoUrl || ""]);
  });
  exportCsv("设备目录.csv", rows);
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 2400);
}

function renderAll() {
  renderAccount();
  renderEquipmentList();
  renderEquipmentDetail();
  renderProfile();
  if (currentUser()?.role === "admin") renderAdmin();
}

els.loginTab.addEventListener("click", () => showAuthMode("login"));
els.registerTab.addEventListener("click", () => showAuthMode("register"));
els.sendCaptchaBtn.addEventListener("click", sendRegisterCaptcha);
els.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  login(els.loginAccount.value.trim(), els.loginPassword.value.trim());
});
els.registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  registerExternalUser();
});
els.logoutBtn.addEventListener("click", logout);
document.querySelectorAll(".nav-btn[data-view]").forEach((btn) => {
  btn.addEventListener("click", () => switchPage(btn.dataset.view));
});
document.querySelectorAll(".admin-tab").forEach((btn) => {
  btn.addEventListener("click", () => switchAdminView(btn.dataset.adminView));
});
[els.platformFilter, els.equipmentKeyword, els.processKeyword].forEach((input) => {
  input.addEventListener("input", () => {
    state.selections = [];
    renderAll();
  });
});
els.submitBookingBtn.addEventListener("click", submitBooking);
els.submitInlineMaintenanceBtn.addEventListener("click", submitInlineMaintenance);
els.historyTable.addEventListener("change", (event) => {
  if (event.target.classList.contains("invoice-check")) updateInvoiceSelection();
});
els.historyTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("cancel-booking-btn")) {
    cancelMyBooking(event.target.dataset.bookingId);
  }
});
els.selectAllInvoiceBookings.addEventListener("change", () => {
  document.querySelectorAll(".invoice-check:not(:disabled)").forEach((checkbox) => {
    checkbox.checked = els.selectAllInvoiceBookings.checked;
  });
  updateInvoiceSelection();
});
els.issueInvoiceBtn.addEventListener("click", issueInvoice);
els.openDetailBtn.addEventListener("click", openEquipmentDetail);
els.closeDetailBtn.addEventListener("click", closeEquipmentDetail);
els.scheduleStartDate.addEventListener("change", () => setScheduleStart(els.scheduleStartDate.value));
els.prevWeekBtn.addEventListener("click", () => setScheduleStart(addDays(state.scheduleStartDate, -7)));
els.nextWeekBtn.addEventListener("click", () => setScheduleStart(addDays(state.scheduleStartDate, 7)));
els.closePaymentBtn.addEventListener("click", () => els.paymentModal.classList.add("hidden"));
document.querySelectorAll(".pay-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!state.pendingBookings.length) return;
    commitBookings(state.pendingBookings, btn.dataset.payMethod);
    showToast(`${btn.dataset.payMethod}支付成功，预约已生效。`);
  });
});
els.resetDemoBtn.addEventListener("click", resetData);
els.exportBookingsBtn.addEventListener("click", exportBookings);
els.exportStartDate.addEventListener("change", renderAll);
els.exportEndDate.addEventListener("change", renderAll);
els.bookingSearchInput.addEventListener("input", renderAll);
els.adminUsersTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("save-user-discount")) {
    saveUserDiscount(event.target.dataset.userId);
  }
});
els.adminInvoicesTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("approve-invoice-btn")) {
    reviewInvoice(event.target.dataset.invoiceId, "已开票");
  }
  if (event.target.classList.contains("reject-invoice-btn")) {
    reviewInvoice(event.target.dataset.invoiceId, "已驳回");
  }
});
els.exportInvoicesBtn.addEventListener("click", exportInvoices);
els.exportEquipmentBtn.addEventListener("click", exportEquipment);
els.importEquipmentBtn.addEventListener("click", importEquipment);
els.editEquipmentSelect.addEventListener("change", renderEditForm);
els.saveEquipmentBtn.addEventListener("click", saveEquipmentEdit);
els.rulePlatformSelect.addEventListener("change", renderRulesForm);
els.saveRulesBtn.addEventListener("click", saveRules);
els.saveNoticeBtn.addEventListener("click", saveNotice);
els.closeNoticeBtn.addEventListener("click", closeSystemNotice);
els.confirmNoticeBtn.addEventListener("click", closeSystemNotice);
els.addUserBtn.addEventListener("click", addAdminUser);

showAuthMode("login");
