# 🏥 TRC Exam Prep PWA (ระบบเตรียมสอบเจ้าหน้าที่บริหารงานทั่วไป สภากาชาดไทย)

เว็บแอปพลิเคชัน Progressive Web App (PWA) แบบออฟไลน์ 100% สำหรับเตรียมสอบแข่งขันตำแหน่งเจ้าหน้าที่บริหารงานทั่วไป ระดับ 3-5 สภากาชาดไทย รวบรวมและสังเคราะห์จากคู่มือเตรียมสอบฉบับเต็ม 240 หน้า

🔗 **GitHub Repository:** [https://github.com/mstackhub/trc-exam](https://github.com/mstackhub/trc-exam)

---

## ✨ ไฮไลต์ฟีเจอร์เด่น (Key Features)

### 1. 🎯 คลังข้อสอบจริง 761 ข้อ ครบทั้ง 7 หมวด
- **หมวด 1:** ความรู้เกี่ยวกับสภากาชาดไทย (30 ข้อ)
- **หมวด 2:** ความสามารถทางด้านเหตุผล (115 ข้อ)
- **หมวด 3:** ความสามารถด้านภาษาไทย (147 ข้อ)
- **หมวด 4:** แนวข้อสอบความสามารถด้านคอมพิวเตอร์ (124 ข้อ)
- **หมวด 5:** แนวข้อสอบเจ้าหน้าที่บริหารงานทั่วไป (145 ข้อ)
- **หมวด 6:** แนวข้อสอบระเบียบงานสารบรรณ (100 ข้อ)
- **หมวด 7:** สรุปข่าวเด่นและความรู้ทั่วไป (100 ข้อ)
- ทุกข้อมาพร้อม**เฉลยละเอียด**, เหตุผลกำกับ, และ **🔑 สูตรลัดช่วยจำ (Key Rule)** สำหรับตัดชอยส์

### 2. 🃏 3D Flashcards & Leitner SRS Memory Engine
- การ์ดจำคำศัพท์และมาตราสำคัญแบบ 3D พลิกหน้า-หลัง
- อัลกอริทึม **Leitner 5-Box SRS** (Spaced Repetition System) คัดกรองข้อที่จำไม่ได้มาทวนซ้ำอย่างเป็นระบบ
- บันทึกความจำลง LocalStorage โดยตรง ทำงานได้แม้ออฟไลน์

### 3. 📑 ห้องสมุดช็อตโน้ต (Study Notes Library)
- สรุปย่อสาระสำคัญ 6 หมวดหลัก สังเคราะห์จากคู่มือสอบ 240 หน้า
- มีจุดระวังที่ชอบหลอก (**⚠️ Exam Traps**) และสูตรช่วยจำ (**💡 Memory Hacks**)
- ระบบ Live Search ค้นหาคีย์เวิร์ดแบบเรียลไทม์

### 4. 🎮 Arcade Mini-Game (โหมดเกมทดสอบความเร็ว)
- **60s Blitz:** ตอบแข่งกับเวลา 60 วินาที เก็บคอมโบ x2, x3, x4
- **Sudden Death:** ตอบผิดครั้งเดียวเกมจบ วัดความแม่นยำ 100%
- ระบบเสียง Native Web Audio SFX (ไม่ต้องโหลดไฟล์เสียงภายนอก)
- บันทึก High Score แยกโหมด

### 5. 🤖 อาจารย์กาชาด AI (Smart AI Coach & Mentor)
- **ปุ่มแชทลอย (Floating FAB):** รองรับทั้ง Mobile, Tablet, Desktop
- **Built-in Smart Knowledge Engine (100% Free & Offline):** ค้นหาข้อสอบและเฉลยตรงข้อจากคลัง 761 ข้อทันที หรือพิมพ์ถามหัวข้อกฎหมาย/ระเบียบ
- **แท็บชี้แนะส่วนบุคคล (Diagnostic Tab):** คำนวณ **Exam Readiness Index (0-100%)** พร้อมวาง Roadmap 3 ขั้นตอน
- **Live AI Hint & Trap Detector:** ปุ่มขอคำใบ้ระหว่างทำข้อสอบ ช่วยตัดชอยส์โดยไม่สปอยล์
- **Generative AI Live Chat:** รองรับการเชื่อมต่อ **Gemini API Key ฟรี** ผ่านปุ่มฟันเฟือง ⚙️

### 6. 📱 Progressive Web App (PWA) ติดตั้งได้ทันที
- รองรับการติดตั้งแบบ Standalone (Add to Home Screen) ทั้ง iOS, Android, macOS และ Windows
- มี Service Worker แคชไฟล์ทั้งหมด ใช้งานได้แบบ **100% Offline**

---

## 🚀 การติดตั้งและใช้งาน (Getting Started)

### รันแบบ Local
เปิดไฟล์ `index.html` ผ่านเว็บเซิร์ฟเวอร์ใดก็ได้ เช่น:
```bash
# ใช้ Python
python3 -m http.server 8080

# หรือใช้ Node.js http-server
npx http-server -p 8080
```
เปิดเบราว์เซอร์ไปที่ `http://localhost:8080`

### การ Deploy ขึ้น GitHub Pages
1. ไปที่แท็บ **Settings** ของ Repository บน GitHub
2. เลือกเมนู **Pages** ทางซ้ายมือ
3. ภายใต้ **Build and deployment** เลือก Source เป็น **Deploy from a branch**
4. เลือก Branch: `main` / Folder: `/(root)` แล้วกด **Save**
5. เว็บแอปจะออนไลน์ที่ `https://mstackhub.github.io/trc-exam/` ทันที

---

## 🛠️ โครงสร้างไฟล์ (Project Structure)
```
trc-exam/
├── index.html            # โครงสร้าง UI หลัก, Tailwind CSS, และ ExamApp Controller
├── manifest.json         # PWA Manifest configuration
├── sw.js                 # Service Worker แคชไฟล์ออฟไลน์ (Cache Storage v6)
├── icons/                # ไอคอน PWA (192x192, 512x512, apple-touch-icon)
│   ├── icon-192.png
│   ├── icon-512.png
│   └── apple-touch-icon.png
├── data/
│   ├── questions.js      # คลังข้อสอบฉบับสมบูรณ์ 761 ข้อ
│   └── notes.js          # สรุปเนื้อหาและช็อตโน้ตเตรียมสอบ 6 หมวด
└── README.md             # เอกสารคู่มือโครงการ
```

---

## 📄 ลิขสิทธิ์ & ข้อตกลง
จัดทำขึ้นเพื่อการศึกษาและการเตรียมสอบแข่งขัน สภากาชาดไทย
