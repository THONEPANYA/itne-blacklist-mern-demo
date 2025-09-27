// server.js
const path = require("path");
const express = require("express");
const app = express();

const root = __dirname;

// เสิร์ฟไฟล์ static ทั้งหมด
app.use(express.static(root));

// Fallback สำหรับทุก GET ที่ไม่ตรงไฟล์จริง
app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(root, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
