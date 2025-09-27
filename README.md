# 🚨 Blacklist Seller App: ລະບົບແຈ້ງເຕືອນຜູ້ຂາຍທີ່ບໍ່ໜ້າເຊື່ອຖື

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML/CSS/JS](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/CSS/JavaScript)

ແອັບພລິເຄຊັນເດໂມນີ້ສ້າງຂຶ້ນເພື່ອເປັນເຄື່ອງມືໃນການລວບລວມແລະເຜີຍແຜ່ຂໍ້ມູນຜູ້ຂາຍອອນລາຍທີ່ບໍ່ໜ້າເຊື່ອຖື (Scam/Blacklist Sellers) ເພື່ອໃຫ້ຜູ້ໃຊ້ສາມາດກວດສອບແລະລະມັດລະວັງໄດ້ທັນການ.

---

## ✨ ຄຸນສົມບັດຫຼັກ (Features)

* **📝 ແຈ້ງລາຍງານໃໝ່ (Report Submission):** ຜູ້ໃຊ້ສາມາດກອກແບບຟອມເພື່ອສົ່ງລາຍງານຜູ້ຂາຍທີ່ມີບັນຫາເຂົ້າສູ່ລະບົບ.
* **📋 ລາຍການຂອງຂ້ອຍ (My Reports):** ຈັດການແລະແກ້ໄຂລາຍງານທີ່ຜູ້ໃຊ້ເປັນຜູ້ແຈ້ງເອງ.
* **🌐 ຖານຂໍ້ມູນສາທາລະນະ (Public Database):** ເບິ່ງລາຍຊື່ຜູ້ຂາຍທີ່ບໍ່ໜ້າເຊື່ອຖືທັງໝົດທີ່ຖືກລາຍງານໂດຍຜູ້ໃຊ້ທົ່ວໄປ.
* **🔔 ລະບົບແຈ້ງເຕືອນ (Notification System):** ຈຳລອງການແຈ້ງເຕືອນແບບ Pop-up ເມື່ອມີລາຍງານໃໝ່.
* **📊 ສະຖິຕິ (Statistics):** ສະແດງສະຖິຕິລວມຂອງຈຳນວນລາຍງານແລະຄວາມເສຍຫາຍทางการເງິນ (ຈຳລອງ).

---

## 💻 ເຕັກໂນໂລຊີທີ່ໃຊ້ (Tech Stack)

ໂປເຈັກນີ້ເປັນແອັບພລິເຄຊັນແບບ **Client-side** ແລະໃຊ້ເຕັກໂນໂລຍີຫຼັກດັ່ງນີ້:

* **HTML5:** ໂຄງສ້າງຫຼັກຂອງໜ້າເວັບ.
* **CSS3 (Tailwind CSS):** ໃຊ້ Tailwind CSS (ຜ່ານ CDN) ແລະ Custom CSS (`style.css`) ສຳລັບການຈັດສະໄຕລ໌ແລະ Animation.
* **JavaScript (Vanilla JS):** ຈັດການ Logic, Navigation, Data (CRUD - ຈັດເກັບໃນ Array/Session), ແລະ Notification.

---

## 🚀 ການຕິດຕັ້ງ ແລະ ວິທີການເລີ່ມຕົ້ນ (Getting Started)

ໂປເຈັກນີ້ຖືກອອກແບບມາໃຫ້ຮັນດ້ວຍ Static Server ເນື່ອງຈາກເປັນ Client-side ຢ່າງສົມບູນ.

### 1. ໂຄງສ້າງໄຟລ໌

ກວດສອບໃຫ້ແນ່ໃຈວ່າໄຟລ໌ຂອງທ່ານຢູ່ໃນໂຟລເດີດຽວກັນ:

/blacklist-seller-app
├── index.html
├── script.js
└── style.css

### 2. ການຮັນຜ່ານ Node.js (ແນະນຳ)

ທ່ານສາມາດໃຊ້ Static Server ງ່າຍໆ ເຊັ່ນ **`serve`** ເພື່ອຮັນ:

1.  **ຕິດຕັ້ງ Node.js** (ຖ້າທ່ານຍັງບໍ່ມີ).
2.  **ຕິດຕັ້ງ `serve`** ແບບ Global:
    ```bash
    npm install -g serve
    ```
3.  **ເລີ່ມ Server:** ເປີດ Terminal ພາຍໃນໂຟລເດີໂປເຈັກແລ້ວຮັນ:
    ```bash
    serve
    ```
4.  ເປີດເບົາເຊີຂອງທ່ານໄປທີ່ URL ທີ່ສະແດງ (ປົກກະຕິຄື: `http://localhost:3000`).

---

## 💡 ໝາຍເຫດສຳຄັນ

* **ຂໍ້ມູນຊົ່ວຄາວ:** ຂໍ້ມູນລາຍງານ (Reports) ທັງໝົດແມ່ນຖືກຈັດເກັບຢູ່ໃນ Array ໃນໄຟລ໌ `script.js` ເທົ່ານັ້ນ, ໝາຍຄວາມວ່າ **ຂໍ້ມູນຈະຖືກລີເຊັດ** ທຸກຄັ້ງທີ່ໂຫຼດໜ້າໃໝ່.
* **ການພັດທະນາຕໍ່ຍອດ:** ຖ້າຕ້ອງການໃຫ້ຂໍ້ມູນຍັງຄົງຢູ່ຖາວອນ, ທ່ານຈະຕ້ອງເພີ່ມ Backend Server (ເຊັ່ນ: Express.js, Firebase) ແລະເຊື່ອມຕໍ່ກັບ Database.

---

## 📜 ໃບອະນຸຍາດ (License)

ໂຄງການນີ້ເຜີຍແຜ່ພາຍໃຕ້ໃບອະນຸຍາດ MIT. ເບິ່ງໄຟລ໌ [LICENSE](LICENSE) ສຳລັບຂໍ້ມູນເພີ່ມເຕີມ.
