// Data storage
let myReports = [];
let publicReports = [
  { id: 1, sellerName: "ຮ້ານແຟຊັ່ນປອມ", platform: "Facebook", contact: "Line: fake_fashion",
    scamType: "ສົ່ງສິນຄ້າບໍ່ຕົງຕາມທີ່ໂຄສະນາ", amount: "250000",
    details: "ສັ່ງເສື້ອແບຣນເນມ ...", reporterName: "ນາຍສົມຊາຍ ໃຈດີ", date: "15/11/2567", isMyReport: false },
  { id: 2, sellerName: "TechGadget Pro", platform: "Instagram", contact: "IG: @techgadget_pro",
    scamType: "ຮັບເງິນແລ້ວບໍ່ສົ່ງສິນຄ້າ", amount: "1500000",
    details: "ໂອນເງິນຊື້ iPhone ...", reporterName: "ນາງສາວມາລີ ຮັກດີ", date: "12/11/2567", isMyReport: false },
  { id: 3, sellerName: "ຮ້ານຂາຍຢາອອນລາຍ", platform: "Line", contact: "Line: medicine_shop",
    scamType: "ຫຼອກຂາຍສິນຄ້າທີ່ບໍ່ມີຢູ່ຈິງ", amount: "320000",
    details: "ຂາຍຢາລົດນ້ຳໜັກປອມ ...", reporterName: "ນາງສຸດາ ສຸກໃຈ", date: "10/11/2567", isMyReport: false },
  { id: 4, sellerName: "Gaming Store 999", platform: "Shopee", contact: "Shopee: gamingstore999",
    scamType: "ສິນຄ້າປອມ/ເລຽນແບບ", amount: "850000",
    details: "ຊື້ PlayStation 5 ...", reporterName: "ນາຍທະນາ ເກມເມີ", date: "8/11/2567", isMyReport: false },
  { id: 5, sellerName: "Beauty Cosmetic", platform: "ເວັບໄຊທ໌", contact: "www.beauty-cosmetic.fake",
    scamType: "ບໍ່ຍອມຄືນເງິນ", amount: "420000",
    details: "ຊື້ຄຣີມບຳລຸງຜິວ ...", reporterName: "ນາງນິດາ ສວຍງາມ", date: "5/11/2567", isMyReport: false }
];
let nextId = 6;

// DOM elements
const homeScreen   = document.getElementById('homeScreen');
const reportScreen = document.getElementById('reportScreen');
const myReportsScreen = document.getElementById('myReportsScreen');
const publicScreen = document.getElementById('publicScreen');
const reportForm   = document.getElementById('reportForm');
const editModal    = document.getElementById('editModal');
const editForm     = document.getElementById('editForm');

// Navigation
function showHome(){ hideAllScreens(); homeScreen.classList.remove('hidden'); homeScreen.classList.add('fade-in'); updateCounts(); }
function showReportForm(){ hideAllScreens(); reportScreen.classList.remove('hidden'); reportScreen.classList.add('fade-in'); }
function showMyReports(){ hideAllScreens(); myReportsScreen.classList.remove('hidden'); myReportsScreen.classList.add('fade-in'); renderMyReports(); }
function showPublicDatabase(){ hideAllScreens(); publicScreen.classList.remove('hidden'); publicScreen.classList.add('fade-in'); renderPublicReports(); }
function hideAllScreens(){ [homeScreen, reportScreen, myReportsScreen, publicScreen].forEach(s => { s.classList.add('hidden'); s.classList.remove('fade-in'); }); }

// Counters
function updateCounts(){
  document.getElementById('myReportsCount').textContent = myReports.length;
  document.getElementById('publicReportsCount').textContent = publicReports.length;
  document.getElementById('totalScams').textContent = publicReports.length;
  const totalDamage = publicReports.reduce((sum,r)=> sum + (parseInt((r.amount||'0').toString().replace(/[^0-9]/g,''))||0), 0);
  const totalDamageEl = document.getElementById('totalDamage');
  if (totalDamageEl) totalDamageEl.textContent = (totalDamage/1_000_000).toFixed(1) + 'M';
}

// Submit new report
reportForm.addEventListener('submit', e=>{
  e.preventDefault();
  const data = {
    id: nextId++,
    sellerName: document.getElementById('sellerName').value,
    platform:   document.getElementById('platform').value,
    contact:    document.getElementById('contact').value,
    scamType:   document.getElementById('scamType').value,
    amount:     document.getElementById('amount').value,
    details:    document.getElementById('details').value,
    reporterName: document.getElementById('reporterName').value,
    date: new Date().toLocaleDateString('th-TH'),
    isMyReport: true
  };
  myReports.unshift(data);
  publicReports.unshift(data);
  reportForm.reset();
  showSuccessMessage('✅ ສົ່ງລາຍງານເຮັດບຮ້ອຍແລ້ວ!');
  setTimeout(showMyReports, 1500);
});

// Toast
function showSuccessMessage(msg){
  const el = document.createElement('div');
  el.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 fade-in';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(()=> el.remove(), 3000);
}

// My reports
function renderMyReports(){
  const container = document.getElementById('myReportsContainer');
  document.getElementById('myReportsTotal').textContent = myReports.length;

  if(!myReports.length){
    container.innerHTML = `
      <div class="text-center py-12 text-gray-500">
        <div class="text-4xl mb-4">📝</div>
        <p class="text-base">ທ່ານຍັງບໍ່ໄດ້ແຈ້ງລາຍງານໃດໆ</p>
        <p class="text-sm mt-2">ເລີ່ມຕົ້ນດ້ວຍການແຈ້ງຜູ້ຂາຍທີ່ບໍ່ໜ້າເຊື່ອຖື</p>
        <button onclick="showReportForm()" class="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg">ແຈ້ງລາຍງານໃໝ່</button>
      </div>`;
    return;
  }

  container.innerHTML = myReports.map(item=>`
    <div class="border-b border-gray-200 px-6 py-6 bg-white fade-in">
      <div class="mb-4">
        <h3 class="text-xl font-bold text-red-700 mb-3">🚨 ${item.sellerName}</h3>
        <div class="space-y-3 text-base">
          <div><strong>ຊ່ອງທາງ:</strong> ${item.platform}</div>
          <div><strong>ປະເພດການໂກງ:</strong> ${item.scamType}</div>
          ${item.contact ? `<div><strong>ຕິດຕໍ່:</strong> ${item.contact}</div>` : ''}
          ${item.amount  ? `<div><strong>ເສຍຫາຍ:</strong> ${parseInt(item.amount).toLocaleString()} ກີບ</div>` : ''}
        </div>
      </div>
      <div class="bg-gray-50 rounded-xl p-4 mb-4">
        <strong class="text-gray-700 text-base">ລາຍລະອຽດ:</strong>
        <p class="text-gray-600 text-base mt-2 leading-relaxed">${item.details}</p>
      </div>
      <div class="flex justify-between items-center text-sm text-gray-500 mb-4">
        <span>ແຈ້ງໂດຍ: <strong>${item.reporterName}</strong></span>
        <span>${item.date}</span>
      </div>
      <div class="flex gap-3">
        <button onclick="editReport(${item.id})" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-4 px-4 rounded-xl text-base font-bold transition-colors touch-target shadow-lg">✏️ ແກ້ໄຂ</button>
        <button onclick="showDeleteInfo()" class="flex-1 bg-gray-400 text-white py-4 px-4 rounded-xl text-base font-bold cursor-not-allowed touch-target shadow-lg">🗑️ ລົບ (ຕິດຕໍ່ Support)</button>
      </div>
    </div>
  `).join('');
}

// Public list
function renderPublicReports(){
  const container = document.getElementById('publicReportsContainer');
  document.getElementById('publicReportsTotal').textContent = publicReports.length;

  container.innerHTML = publicReports.map(item=>`
    <div class="border-b border-gray-200 px-6 py-6 bg-white fade-in">
      <div class="mb-4">
        <div class="flex justify-between items-start mb-3">
          <h3 class="text-xl font-bold text-red-700">🚨 ${item.sellerName}</h3>
          ${item.isMyReport ? '<span class="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">ລາຍງານຂອງຂ້ອຍ</span>' : ''}
        </div>
        <div class="space-y-3 text-base">
          <div><strong>ຊ່ອງທາງ:</strong> ${item.platform}</div>
          <div><strong>ປະເພດການໂກງ:</strong> ${item.scamType}</div>
          ${item.contact ? `<div><strong>ຕິດຕໍ່:</strong> ${item.contact}</div>` : ''}
          ${item.amount  ? `<div><strong>ເສຍຫາຍ:</strong> ${parseInt(item.amount).toLocaleString()} ກີບ</div>` : ''}
        </div>
      </div>
      <div class="bg-gray-50 rounded-xl p-4 mb-4">
        <strong class="text-gray-700 text-base">ລາຍລະອຽດ:</strong>
        <p class="text-gray-600 text-base mt-2 leading-relaxed">${item.details}</p>
      </div>
      <div class="flex justify-between items-center text-sm text-gray-500">
        <span>ແຈ້ງໂດຍ: <strong>${item.reporterName}</strong></span>
        <span>${item.date}</span>
      </div>
    </div>
  `).join('');
}

// Edit
function editReport(id){
  const r = myReports.find(x=>x.id===id);
  if(!r) return;
  document.getElementById('editId').value = r.id;
  document.getElementById('editSellerName').value = r.sellerName;
  document.getElementById('editPlatform').value   = r.platform;
  document.getElementById('editContact').value    = r.contact || '';
  document.getElementById('editScamType').value   = r.scamType;
  document.getElementById('editAmount').value     = r.amount || '';
  document.getElementById('editDetails').value    = r.details;
  document.getElementById('editReporterName').value = r.reporterName;
  editModal.classList.remove('hidden'); editModal.classList.add('flex');
}

// Delete info
function showDeleteInfo(){
  alert('ຫາກຕ້ອງການລົບລາຍງານ ກະລຸນາຕິດຕໍ່ທີມ Support\n\nEmail: support@blacklist-seller.com\nLine: @blacklist-support\n\nລະບຸ ID ລາຍງານແລະເຫດຜົນໃນການລົບ');
}

// Save edit
editForm.addEventListener('submit', e=>{
  e.preventDefault();
  const id = parseInt(document.getElementById('editId').value);
  const mi = myReports.findIndex(x=>x.id===id);
  const pi = publicReports.findIndex(x=>x.id===id);
  const patch = {
    sellerName: document.getElementById('editSellerName').value,
    platform:   document.getElementById('editPlatform').value,
    contact:    document.getElementById('editContact').value,
    scamType:   document.getElementById('editScamType').value,
    amount:     document.getElementById('editAmount').value,
    details:    document.getElementById('editDetails').value,
    reporterName: document.getElementById('editReporterName').value
  };
  if(mi!==-1) myReports[mi] = { ...myReports[mi], ...patch };
  if(pi!==-1) publicReports[pi] = { ...publicReports[pi], ...patch };
  closeModal();
  renderMyReports();
  showSuccessMessage('✅ ແກ້ໄຂລາຍງານເຮັດບຮ້ອຍແລ້ວ!');
});

// Modal controls
function closeModal(){ editModal.classList.add('hidden'); editModal.classList.remove('flex'); }
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('cancelEdit').addEventListener('click', closeModal);
editModal.addEventListener('click', e=>{ if(e.target===editModal) closeModal(); });

// Notifications
const newReportNotifications = [
  { sellerName:"ຮ້ານຂາຍຂອງປອມ ABC", platform:"Facebook",  scamType:"ຮັບເງິນແລ້ວບໍ່ສົ່ງສິນຄ້າ", amount:"550,000",  reporterName:"ນາງສົມສີ" },
  { sellerName:"TechShop Online",    platform:"Instagram", scamType:"ສົ່ງສິນຄ້າບໍ່ຕົງຕາມທີ່ໂຄສະນາ", amount:"1,200,000", reporterName:"ນາຍວິໄຊ" },
  { sellerName:"Beauty Store 2024",  platform:"Line",      scamType:"ສິນຄ້າປອມ/ເລຽນແບບ", amount:"380,000",  reporterName:"ນາງນິພາ" },
  { sellerName:"Fashion Outlet",     platform:"Shopee",    scamType:"ບໍ່ຍອມຄືນເງິນ", amount:"720,000",  reporterName:"ນາງສາວປິຍະ" },
  { sellerName:"Gadget Pro Max",     platform:"Lazada",    scamType:"ຫຼອກຂາຍສິນຄ້າທີ່ບໍ່ມີຢູ່ຈິງ", amount:"1,850,000", reporterName:"ນາຍທີລະພົງ" }
];
let notificationIndex = 0;

function showNewReportNotification(){
  const n = newReportNotifications[notificationIndex];

  if('vibrate' in navigator) navigator.vibrate([200,100,200]);

  const popup = document.createElement('div');
  popup.className = 'fixed top-4 left-4 right-4 bg-white rounded-2xl shadow-2xl border-l-4 border-red-500 z-50 fade-in';
  popup.style.animation = 'slideInFromTop 0.5s ease-out, pulseNotification 0.5s ease-in-out 0.5s';
  popup.innerHTML = `
    <div class="p-5">
      <div class="flex items-start justify-between mb-3">
        <div class="flex items-center">
          <div class="text-2xl mr-3">🚨</div>
          <div>
            <h4 class="text-lg font-bold text-red-600">ລາຍງານໃໝ່!</h4>
            <p class="text-sm text-gray-500">ເພີ່ງໄດ້ຮັບການແຈ້ງ</p>
          </div>
        </div>
        <button onclick="this.parentElement.parentElement.parentElement.remove()" class="text-gray-400 hover:text-gray-600 text-xl w-8 h-8 flex items-center justify-center">×</button>
      </div>
      <div class="bg-red-50 rounded-xl p-4 mb-4">
        <h5 class="font-bold text-red-700 mb-2">${n.sellerName}</h5>
        <div class="space-y-1 text-sm text-gray-700">
          <div><strong>ຊ່ອງທາງ:</strong> ${n.platform}</div>
          <div><strong>ປະເພດ:</strong> ${n.scamType}</div>
          <div><strong>ເສຍຫາຍ:</strong> ${n.amount} ກີບ</div>
          <div><strong>ແຈ້ງໂດຍ:</strong> ${n.reporterName}</div>
        </div>
      </div>
      <div class="flex gap-3">
        <button onclick="showPublicDatabase(); this.parentElement.parentElement.parentElement.remove();" class="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-xl text-sm font-bold transition-colors">ເບິ່ງລາຍລະອຽດ</button>
        <button onclick="this.parentElement.parentElement.parentElement.remove()" class="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 px-4 rounded-xl text-sm font-bold transition-colors">ປິດ</button>
      </div>
    </div>
  `;
  document.body.appendChild(popup);

  setTimeout(()=>{
    if(popup.parentElement){
      popup.style.animation = 'slideOutToTop 0.5s ease-in';
      setTimeout(()=> popup.parentElement && popup.remove(), 1000);
    }
  }, 5000);

  const newReport = {
    id: nextId++,
    sellerName: n.sellerName,
    platform: n.platform,
    contact: "",
    scamType: n.scamType,
    amount: n.amount.replace(/,/g,''),
    details: `ລາຍງານໃໝ່ຈາກ ${n.reporterName} ກ່ຽວກັບ ${n.scamType}`,
    reporterName: n.reporterName,
    date: new Date().toLocaleDateString('th-TH'),
    isMyReport: false
  };
  publicReports.unshift(newReport);
  updateCounts();
  notificationIndex = (notificationIndex + 1) % newReportNotifications.length;
}

// Auto-init
document.addEventListener('DOMContentLoaded', ()=>{
  updateCounts();
  startNotificationSystem();
});

// Run notifications
function startNotificationSystem(){
  setTimeout(()=>{
    showNewReportNotification();
    setInterval(showNewReportNotification, 200000);
  }, 5000);
}
