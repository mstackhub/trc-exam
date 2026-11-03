/**
 * ชุดข้อสอบจริง: เจ้าหน้าที่บริหารงานทั่วไป 3-5 กลุ่มงานกลยุทธ์องค์กร สภากาชาดไทย
 * ถอดและสังเคราะห์จากเอกสารข้อสอบจริง 11 หน้า ครบถ้วนทั้ง 74 ข้อ (คะแนนเต็ม 200 คะแนน เวลา 120 นาที)
 * แบ่งเป็น:
 * 1. ปรนัย (กากบาท) 35 ข้อ (70 คะแนน - ตอบผิดหักข้อละ 1 คะแนน)
 * 2. อัตนัย (ข้อเขียน) 36 ข้อ (115 คะแนน)
 * 3. คำนวณการพัสดุ 3 ข้อ (15 คะแนน)
 */

const OFFICIAL_EXAM_PAPER = {
  info: {
    title: "ข้อสอบสำหรับ เจ้าหน้าที่บริหารงานทั่วไป 3-5 กลุ่มงานกลยุทธ์องค์กร สภากาชาดไทย",
    totalQuestions: 74,
    totalScore: 200,
    durationMinutes: 120,
    rules: [
      "เวลาทำข้อสอบ 120 นาที คะแนนเต็ม 200 คะแนน",
      "ข้อสอบปรนัย 35 ข้อ, อัตนัย 36 ข้อ, คำนวณ 3 ข้อ",
      "หากตอบผิดข้อสอบปรนัย หักข้อละ 1 คะแนน (ข้อสอบอัตนัยและคำนวณตอบผิดไม่หักคะแนน)",
      "อนุญาตให้ใช้เครื่องคิดเลขในการคำนวณได้",
      "ลายมือเขียนเร็วพออ่านเข้าใจได้ ไม่เน้นสวย เน้นข้อมูลสั้นกระชับครบถ้วน"
    ],
    categoriesSummary: [
      { name: "ความรู้สภากาชาดไทย", type: "ปรนัย", count: 5, score: 10 },
      { name: "งานในสำนักงาน (ปรนัย)", type: "ปรนัย", count: 15, score: 30 },
      { name: "งานในสำนักงาน (อัตนัย)", type: "อัตนัย", count: 10, score: 30 },
      { name: "งานการพัสดุ (อัตนัย)", type: "อัตนัย", count: 10, score: 30 },
      { name: "งานสารบรรณ (อัตนัย)", type: "อัตนัย", count: 15, score: 45 },
      { name: "ภาษาอังกฤษ (ปรนัย)", type: "ปรนัย", count: 15, score: 30 },
      { name: "การเขียนจดหมายราชการ", type: "อัตนัย", count: 1, score: 10 },
      { name: "การพัสดุ (คำนวณ)", type: "คำนวณ", count: 3, score: 15 }
    ]
  },

  // 1. ข้อสอบปรนัย 35 ข้อ (ข้อ 1-20 และ ข้อ 56-70)
  multipleChoice: [
    {
      id: "official_mc_1",
      number: 1,
      category: "ความรู้เกี่ยวกับสภากาชาดไทย",
      score: 2,
      question: "1. สภากาชาดไทยก่อตั้งขึ้นในสมัยรัชกาลที่เท่าใด?",
      options: [
        { id: "opt_a", text: "รัชกาลที่ 4" },
        { id: "opt_b", text: "รัชกาลที่ 5" },
        { id: "opt_c", text: "รัชกาลที่ 6" },
        { id: "opt_d", text: "รัชกาลที่ 7" }
      ],
      correctId: "opt_b",
      explanation: {
        summary: "สภากาชาดไทยก่อตั้งขึ้นเมื่อวันที่ 26 เมษายน พ.ศ. 2436 (ร.ศ. 112) ในรัชสมัยพระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว (รัชกาลที่ 5) โดยเริ่มแรกใช้ชื่อว่า 'สภาอุณาโลมแดงแห่งชาติสยาม'",
        keyRule: "ร.ศ. 112 = พ.ศ. 2436 = รัชกาลที่ 5 (กำเนิดจากวิกฤตการณ์ ร.ศ. 112)"
      }
    },
    {
      id: "official_mc_2",
      number: 2,
      category: "ความรู้เกี่ยวกับสภากาชาดไทย",
      score: 2,
      question: "2. ข้อใดคือวิสัยทัศน์ของสภากาชาดไทย",
      options: [
        { id: "opt_a", text: "เป็นองค์กรสาธารณกุศลระดับชาติดำเนินการเพื่อมนุษยธรรมตามหลักการกาชาดสากล" },
        { id: "opt_b", text: "เป็นองค์กรสาธารณกุศลระดับชาติดำเนินการเพื่อมนุษยธรรมตามหลักการกาชาดสากล เป็นที่พึ่งของประชาชน โดยเฉพาะผู้ด้อยโอกาสให้มีความเป็นอยู่ที่ดีได้" },
        { id: "opt_c", text: "เป็นองค์กรสาธารณกุศลระดับชาติเป็นที่พึ่งของประชาชนโดยเฉพาะผู้ด้อยโอกาสให้มีความเป็นอยู่ที่ดีได้" },
        { id: "opt_d", text: "เป็นองค์กรสาธารณกุศลระดับชาติ" }
      ],
      correctId: "opt_b",
      explanation: {
        summary: "วิสัยทัศน์สภากาชาดไทยตามแผนยุทธศาสตร์ระบุว่า 'เป็นองค์กรสาธารณกุศลระดับชาติดำเนินการเพื่อมนุษยธรรมตามหลักการกาชาดสากล เป็นที่พึ่งของประชาชน โดยเฉพาะผู้ด้อยโอกาสให้มีความเป็นอยู่ที่ดีได้'",
        keyRule: "วิสัยทัศน์ฉบับเต็มต้องมีทั้ง 'มนุษยธรรมตามหลักกาชาดสากล' และ 'เป็นที่พึ่งของประชาชนโดยเฉพาะผู้ด้อยโอกาส'"
      }
    },
    {
      id: "official_mc_3",
      number: 3,
      category: "ความรู้เกี่ยวกับสภากาชาดไทย",
      score: 2,
      question: "3. ข้อใดคือไม่ใช่ พันธกิจของสภากาชาดไทย",
      options: [
        { id: "opt_a", text: "การบริการทางการแพทย์และสุขภาพอนามัย" },
        { id: "opt_b", text: "การบรรเทาทุกข์ผู้ประสบภัย" },
        { id: "opt_c", text: "การบริการโลหิต" },
        { id: "opt_d", text: "เป็นพันธกิจของสภากาชาดไทยทุกข้อ" }
      ],
      correctId: "opt_d",
      explanation: {
        summary: "พันธกิจหลัก 4 ด้านของสภากาชาดไทย ได้แก่ 1. บริการทางการแพทย์และสาธารณสุข 2. บรรเทาทุกข์ผู้ประสบภัย 3. บริการโลหิต 4. ส่งเสริมคุณภาพชีวิต ดังนั้น ก, ข, ค ล้วนเป็นพันธกิจทุกข้อ",
        keyRule: "พันธกิจ 4 ด้าน = แพทย์, บรรเทาทุกข์, โลหิต, ส่งเสริมคุณภาพชีวิต"
      }
    },
    {
      id: "official_mc_4",
      number: 4,
      category: "ความรู้เกี่ยวกับสภากาชาดไทย",
      score: 2,
      question: "4. ข้อใด ไม่ใช่ ยุทธศาสตร์ของสภากาชาดไทย",
      options: [
        { id: "opt_a", text: "การช่วยเหลือผู้ประสบภัยอย่างรวดเร็ว" },
        { id: "opt_b", text: "การพัฒนาและส่งเสริมคุณภาพชีวิตของประชาชน" },
        { id: "opt_c", text: "การบริการทางการแพทย์และสาธารณสุขที่เป็นเลิศและครบวงจร" },
        { id: "opt_d", text: "บริหารจัดการระบบจัดเก็บภาษีอากรโดยยึดหลักการบริหารกิจการที่ดี" }
      ],
      correctId: "opt_d",
      explanation: {
        summary: "การจัดเก็บภาษีอากรเป็นหน้าที่ของกรมสรรพากร กระทรวงการคลัง สภากาชาดไทยเป็นองค์กรสาธารณกุศล จึงไม่มียุทธศาสตร์จัดเก็บภาษีอากร",
        keyRule: "สภากาชาดไทยมุ่งเน้น มนุษยธรรม/การแพทย์/โลหิต/บรรเทาทุกข์ ไม่เกี่ยวข้องกับการเก็บภาษี"
      }
    },
    {
      id: "official_mc_5",
      number: 5,
      category: "ความรู้เกี่ยวกับสภากาชาดไทย",
      score: 2,
      question: "5. ข้อใดคือหลักการของกาชาดทั้งหมด",
      options: [
        { id: "opt_a", text: "ความเป็นสากล ความประหยัด ความไม่ลำเอียง ความเป็นอิสระ บริการอาสาสมัคร มนุษยธรรม" },
        { id: "opt_b", text: "ความเอื้อเฟื้อ ความรัก บริการอาสาสมัคร ความเป็นสากล ความเป็นอิสระ ความเป็นกลาง" },
        { id: "opt_c", text: "มนุษยธรรม ความไม่ลำเอียง ความเป็นกลาง ความเป็นอิสระ ความเอื้อเฟื้อ บริการอาสาสมัคร" },
        { id: "opt_d", text: "มนุษยธรรม ความไม่ลำเอียง ความเป็นกลาง ความเป็นอิสระ บริการอาสาสมัคร ความเป็นสากล" }
      ],
      correctId: "opt_d",
      explanation: {
        summary: "หลักการกาชาดสากลมี 7 ประการ ได้แก่ 1. มนุษยธรรม 2. ความไม่ลำเอียง 3. ความเป็นกลาง 4. ความเป็นอิสระ 5. บริการอาสาสมัคร 6. เอกภาพ 7. ความเป็นสากล ในข้อ ง. แม้ข้อสอบพิมพ์ตกคำว่า 'เอกภาพ' แต่เป็นตัวเลือกเดียวที่มีเฉพาะหลักการจริงโดยไม่มีคำผิดเจือปน (ก มีความประหยัด, ข มีความรัก/ความเอื้อเฟื้อ, ค มีความเอื้อเฟื้อ)",
        keyRule: "หลัก 7 ประการ: มนุษยธรรม, ไม่ลำเอียง, เป็นกลาง, อิสระ, อาสาสมัคร, เอกภาพ, สากล (ไม่มีคำว่า รัก/ประหยัด/เอื้อเฟื้อ)"
      }
    },
    {
      id: "official_mc_6",
      number: 6,
      category: "งานในสำนักงาน",
      score: 2,
      question: "6. Web Server คืออะไร",
      options: [
        { id: "opt_a", text: "ส่วนประกอบคอมพิวเตอร์ในการทำงาน" },
        { id: "opt_b", text: "เป็นส่วนหนึ่งของอินเตอร์เน็ต" },
        { id: "opt_c", text: "เครื่องคอมพิวเตอร์ที่จัดสร้างข้อมูลข่าวสาร" },
        { id: "opt_d", text: "การค้นหาข้อมูล" }
      ],
      correctId: "opt_c",
      explanation: {
        summary: "Web Server ในข้อสอบชุดนี้หมายถึง เครื่องคอมพิวเตอร์แม่ข่ายที่ทำหน้าที่จัดเก็บ ให้บริการ และส่งมอบข้อมูลข่าวสาร/เว็บเพจ (Serving web content) ให้แก่ผู้ใช้งานผ่านระบบอินเทอร์เน็ต",
        keyRule: "Server = เครื่องแม่ข่ายที่ให้บริการจัดเก็บและประมวลผลข้อมูลข่าวสาร"
      }
    },
    {
      id: "official_mc_7",
      number: 7,
      category: "งานในสำนักงาน",
      score: 2,
      question: "7. อุปกรณ์ที่ทำหน้าที่แปลงสัญญาณติดตั้งคั่นกลางระหว่าง เครื่องคอมพิวเตอร์และสายโทรศัพท์ เรียกว่า",
      options: [
        { id: "opt_a", text: "แคช" },
        { id: "opt_b", text: "ปาล์ม" },
        { id: "opt_c", text: "โมเด็ม" },
        { id: "opt_d", text: "ซีพียู" }
      ],
      correctId: "opt_c",
      explanation: {
        summary: "โมเด็ม (Modem ย่อมาจาก Modulator/Demodulator) ทำหน้าที่แปลงสัญญาณดิจิทัลจากคอมพิวเตอร์เป็นสัญญาณอนาล็อกผ่านสายโทรศัพท์ และแปลงกลับเป็นดิจิทัลเข้าสู่คอมพิวเตอร์",
        keyRule: "แปลงสัญญาณคอมพิวเตอร์ ↔ สายโทรศัพท์ = โมเด็ม (Modem)"
      }
    },
    {
      id: "official_mc_8",
      number: 8,
      category: "งานในสำนักงาน",
      score: 2,
      question: "8. ถ้าเราต้องการนำข้อมูลจากอินเตอร์เน็ตมาลงเครื่องของเรา เราเรียกว่าอะไร",
      options: [
        { id: "opt_a", text: "up" },
        { id: "opt_b", text: "up load" },
        { id: "opt_c", text: "down load" },
        { id: "opt_d", text: "Down" }
      ],
      correctId: "opt_c",
      explanation: {
        summary: "การดึงหรือคัดลอกไฟล์ข้อมูลจากอินเทอร์เน็ต (Server) มาเก็บไว้ในคอมพิวเตอร์ของเรา (Client) เรียกว่า Download (ตรงข้ามกับ Upload ซึ่งเป็นการส่งข้อมูลจากเครื่องเราขึ้นไป)",
        keyRule: "เน็ต ➡️ เครื่องเรา = Download | เครื่องเรา ➡️ เน็ต = Upload"
      }
    },
    {
      id: "official_mc_9",
      number: 9,
      category: "งานในสำนักงาน",
      score: 2,
      question: "9. ข้อใดคือชื่อ e-mail",
      options: [
        { id: "opt_a", text: "toma@hotmail.com" },
        { id: "opt_b", text: "hotmail.com" },
        { id: "opt_c", text: "http://hotmal.com" },
        { id: "opt_d", text: "burin@tom@thaiabc.com" }
      ],
      correctId: "opt_a",
      explanation: {
        summary: "รูปแบบที่ถูกต้องของอีเมลต้องประกอบด้วย 'ชื่อผู้ใช้ (username)' ตามด้วยเครื่องหมาย '@' และ 'ชื่อโดเมน (domain name)' เพียงตัวเดียว ข้อ ก (toma@hotmail.com) ถูกต้อง ส่วน ข เป็นชื่อโดเมน, ค เป็น URL เว็บไซต์, ง มี @ ซ้ำซ้อน 2 ตัว",
        keyRule: "โครงสร้างอีเมล = username@domain.com มีเครื่องหมาย @ เพียงตัวเดียว"
      }
    },
    {
      id: "official_mc_10",
      number: 10,
      category: "งานในสำนักงาน",
      score: 2,
      question: "10. e-book มักเป็นแฟ้มนามสกุลใด",
      options: [
        { id: "opt_a", text: "jpg" },
        { id: "opt_b", text: "pdf" },
        { id: "opt_c", text: "doc" },
        { id: "opt_d", text: "Gif" }
      ],
      correctId: "opt_b",
      explanation: {
        summary: "e-book (หนังสืออิเล็กทรอนิกส์) มักเผยแพร่ในรูปแบบไฟล์ PDF (Portable Document Format) เนื่องจากคงรูปแบบหน้ากระดาษ ตัวอักษร และรูปภาพได้เหมือนต้นฉบับในทุกอุปกรณ์",
        keyRule: "e-book มาตรฐานทั่วไป = .pdf (เอกสารคงรูปข้ามแพลตฟอร์ม)"
      }
    },
    {
      id: "official_mc_11",
      number: 11,
      category: "งานในสำนักงาน",
      score: 2,
      question: "11. ในโปรแกรมการรับ - ส่ง E-mail ช่อง To มีไว้สำหรับทำอะไร",
      options: [
        { id: "opt_a", text: "ใส่หัวเรื่องของจดหมาย" },
        { id: "opt_b", text: "ใส่ E-Mail Address ของผู้รับ" },
        { id: "opt_c", text: "ใส่ชื่อแฟ้มที่ต้องการส่งไปพร้อมกับ E-mail" },
        { id: "opt_d", text: "ใส่ E-mail Address ของผู้รับสำเนา" }
      ],
      correctId: "opt_b",
      explanation: {
        summary: "ช่อง 'To' (ถึง) ใช้สำหรับระบุที่อยู่อีเมลของผู้รับโดยตรง (Primary Recipient) ส่วนช่อง Cc ใช้สำหรับผู้รับสำเนา และ Subject ใช้สำหรับหัวเรื่อง",
        keyRule: "To = ผู้รับหลัก, Cc = สำเนา, Bcc = สำเนาซ่อน, Subject = หัวเรื่อง"
      }
    },
    {
      id: "official_mc_12",
      number: 12,
      category: "งานในสำนักงาน",
      score: 2,
      question: "12. E-mail ย่อมาจากคำว่าอะไร",
      options: [
        { id: "opt_a", text: "Economic Mail" },
        { id: "opt_b", text: "Explorer Mail" },
        { id: "opt_c", text: "Education Mail" },
        { id: "opt_d", text: "Electronic Mail" }
      ],
      correctId: "opt_d",
      explanation: {
        summary: "E-mail ย่อมาจากคำว่า Electronic Mail (จดหมายอิเล็กทรอนิกส์)",
        keyRule: "E-mail = Electronic Mail"
      }
    },
    {
      id: "official_mc_13",
      number: 13,
      category: "งานในสำนักงาน",
      score: 2,
      question: "13. ผู้บุกรุกเข้าไปในระบบคอมพิวเตอร์ของคนอื่น เรียกว่าอะไร",
      options: [
        { id: "opt_a", text: "Networker" },
        { id: "opt_b", text: "Hacker" },
        { id: "opt_c", text: "Cracker" },
        { id: "opt_d", text: "Attacker" }
      ],
      correctId: "opt_b",
      explanation: {
        summary: "ในข้อสอบสายงานธุรการและสำนักงานทั่วไป คำสากลที่ใช้เรียกผู้ลักลอบเจาะเข้าระบบคอมพิวเตอร์คือ Hacker (หากเจาะเพื่อมุ่งทำลายสร้างความเสียหายในเชิงลึกอาจเรียก Cracker แต่ในข้อสอบราชการมักเฉลย Hacker)",
        keyRule: "ผู้บุกรุกเจาะระบบคอมพิวเตอร์ = Hacker"
      }
    },
    {
      id: "official_mc_14",
      number: 14,
      category: "งานในสำนักงาน",
      score: 2,
      question: "14. เครื่องที่ทำหน้าที่ให้บริการด้านการสื่อสาร เรียกว่าอะไร",
      options: [
        { id: "opt_a", text: "Communication Server" },
        { id: "opt_b", text: "Server Communication" },
        { id: "opt_c", text: "File Communication" },
        { id: "opt_d", text: "File Server" }
      ],
      correctId: "opt_a",
      explanation: {
        summary: "Communication Server คือเครื่องแม่ข่ายที่ให้บริการด้านการเชื่อมต่อและการสื่อสารข้อมูลระหว่างเครือข่าย",
        keyRule: "บริการสื่อสาร = Communication Server | บริการไฟล์ = File Server"
      }
    },
    {
      id: "official_mc_15",
      number: 15,
      category: "งานในสำนักงาน",
      score: 2,
      question: "15. ส่วนหัวจดหมาย (E-mail) Subject มีไว้สำหรับทำอะไร",
      options: [
        { id: "opt_a", text: "การทำสำเนาจดหมาย" },
        { id: "opt_b", text: "การแนบไฟล์ไปกับจดหมาย" },
        { id: "opt_c", text: "ระบุหัวเรื่องของอีเมล์ที่จะส่งไปว่าเกี่ยวกับเรื่องอะไร" },
        { id: "opt_d", text: "การระบุชื่อผู้ส่งจดหมาย" }
      ],
      correctId: "opt_c",
      explanation: {
        summary: "ช่อง Subject คือหัวเรื่องของจดหมาย ใช้สรุปสั้นๆ ให้ผู้รับทราบว่าอีเมลฉบับนี้ส่งมาเกี่ยวกับประเด็นเรื่องอะไร",
        keyRule: "Subject = หัวเรื่องจดหมาย/อีเมล"
      }
    },
    {
      id: "official_mc_16",
      number: 16,
      category: "งานในสำนักงาน",
      score: 2,
      question: "16. IP Address คืออะไร",
      options: [
        { id: "opt_a", text: "คือ วิธีกำหนดการทำงาน" },
        { id: "opt_b", text: "คือ วิธีกำหนดชื่อที่อยู่คอมพิวเตอร์" },
        { id: "opt_c", text: "คือ ระบบคอมพิวเตอร์อย่างหนึ่ง" },
        { id: "opt_d", text: "คือ อุปกรณ์ในการทำงาน" }
      ],
      correctId: "opt_b",
      explanation: {
        summary: "IP Address (Internet Protocol Address) คือหมายเลขประจำเครื่องที่ใช้ระบุที่อยู่ของอุปกรณ์คอมพิวเตอร์แต่ละเครื่องบนระบบเครือข่ายอินเทอร์เน็ต เพื่อให้ส่งข้อมูลหากันได้ถูกต้อง",
        keyRule: "IP Address = เลขระบุที่อยู่ของเครื่องคอมพิวเตอร์บนเครือข่าย"
      }
    },
    {
      id: "official_mc_17",
      number: 17,
      category: "งานในสำนักงาน",
      score: 2,
      question: "17. TCP/IP เป็นมาตรฐานในการเชื่อมต่อระบบ Internet คำนี้ย่อมาจากอะไร",
      options: [
        { id: "opt_a", text: "ไม่ใช่คำย่อเป็นเพียงชื่อเท่านั้น" },
        { id: "opt_b", text: "Transmission Control Protocol / Internet Protocol" },
        { id: "opt_c", text: "Top Control Process / Internet Protocol" },
        { id: "opt_d", text: "Tree Communication Protocol / Integrated Protocol" }
      ],
      correctId: "opt_b",
      explanation: {
        summary: "TCP/IP ย่อมาจาก Transmission Control Protocol / Internet Protocol เป็นชุดโพรโทคอลมาตรฐานที่ใช้สื่อสารและแลกเปลี่ยนข้อมูลบนอินเทอร์เน็ตทั่วโลก",
        keyRule: "TCP = Transmission Control Protocol | IP = Internet Protocol"
      }
    },
    {
      id: "official_mc_18",
      number: 18,
      category: "งานในสำนักงาน",
      score: 2,
      question: "18. เครือข่าย คืออะไร",
      options: [
        { id: "opt_a", text: "ระบบควบคุมการทำงานของระบบเครือข่าย" },
        { id: "opt_b", text: "การเชื่อมต่อกันระหว่างอุปกรณ์อิเล็กทรอนิกส์สื่อสาร" },
        { id: "opt_c", text: "ระบบส่งข่าวสารภายในเครือข่าย" },
        { id: "opt_d", text: "เป็นศูนย์กลางของการเก็บแฟ้มข้อมูล" }
      ],
      correctId: "opt_b",
      explanation: {
        summary: "เครือข่าย (Network) คือการเชื่อมต่อกันระหว่างอุปกรณ์อิเล็กทรอนิกส์และคอมพิวเตอร์ตั้งแต่ 2 เครื่องขึ้นไป เพื่อแลกเปลี่ยนข้อมูลข่าวสารและใช้ทรัพยากรร่วมกัน",
        keyRule: "เครือข่าย = การเชื่อมต่อสื่อสารระหว่างอุปกรณ์อิเล็กทรอนิกส์"
      }
    },
    {
      id: "official_mc_19",
      number: 19,
      category: "งานในสำนักงาน",
      score: 2,
      question: "19. ขนาดกระดาษที่ใช้ในการพิมพ์เอกสารทั่วไปคือข้อใด",
      options: [
        { id: "opt_a", text: "B4" },
        { id: "opt_b", text: "A4" },
        { id: "opt_c", text: "Letter" },
        { id: "opt_d", text: "B5" }
      ],
      correctId: "opt_b",
      explanation: {
        summary: "กระดาษมาตรฐานที่ใช้ในงานพิมพ์เอกสารราชการและสำนักงานทั่วไปในประเทศไทยคือขนาด A4 (210 มม. x 297 มม.) ตามระเบียบงานสารบรรณ",
        keyRule: "กระดาษมาตรฐานงานพิมพ์เอกสารราชการ = A4"
      }
    },
    {
      id: "official_mc_20",
      number: 20,
      category: "งานในสำนักงาน",
      score: 2,
      question: "20. การบันทึกข้อมูลครั้งใด ที่โปรแกรมจะให้ตั้งชื่อแฟ้ม",
      options: [
        { id: "opt_a", text: "ครั้งที่สอง" },
        { id: "opt_b", text: "ครั้งแรก" },
        { id: "opt_c", text: "ครั้งที่สาม" },
        { id: "opt_d", text: "ครั้งที่สี่" }
      ],
      correctId: "opt_b",
      explanation: {
        summary: "เมื่อสร้างเอกสารใหม่ การกดบันทึก (Save) ใน 'ครั้งแรก' โปรแกรมจะเปิดหน้าต่าง Save As ให้ผู้ใช้ตั้งชื่อแฟ้ม (File Name) และเลือกโฟลเดอร์จัดเก็บเสมอ การบันทึกครั้งถัดไปจะบันทึกทับไฟล์เดิมทันที",
        keyRule: "ตั้งชื่อแฟ้ม = การบันทึก (Save) ครั้งแรก"
      }
    },

    // หมวดภาษาอังกฤษ (ข้อ 56-70)
    {
      id: "official_mc_56",
      number: 56,
      category: "ภาษาอังกฤษ",
      score: 2,
      question: "56. He ______ a cup of tea in the morning.",
      options: [
        { id: "opt_a", text: "had" },
        { id: "opt_b", text: "have" },
        { id: "opt_c", text: "has" },
        { id: "opt_d", text: "having" }
      ],
      correctId: "opt_c",
      explanation: {
        summary: "ประธานคือ He (เอกพจน์บุรุษที่ 3) และมีคำว่า in the morning บ่งบอกกิจวัตรประจำวัน (Present Simple Tense) กริยา have ต้องผันเป็น has",
        keyRule: "He / She / It + has (Present Simple)"
      }
    },
    {
      id: "official_mc_57",
      number: 57,
      category: "ภาษาอังกฤษ",
      score: 2,
      question: "57. A: ______ does he do?  B: He is a policeman.",
      options: [
        { id: "opt_a", text: "Who" },
        { id: "opt_b", text: "What" },
        { id: "opt_c", text: "Where" },
        { id: "opt_d", text: "When" }
      ],
      correctId: "opt_b",
      explanation: {
        summary: "คำตอบคือ 'He is a policeman' (เขาเป็นตำรวจ) ซึ่งบอกอาชีพ สำนวนถามอาชีพในภาษาอังกฤษคือ 'What do/does someone do?' จึงต้องขึ้นต้นด้วย What",
        keyRule: "ถามอาชีพ: What does he do? = What is his job?"
      }
    },
    {
      id: "official_mc_58",
      number: 58,
      category: "ภาษาอังกฤษ",
      score: 2,
      question: "58. My father ______ the dishes after dinner.",
      options: [
        { id: "opt_a", text: "wash" },
        { id: "opt_b", text: "washing" },
        { id: "opt_c", text: "washed" },
        { id: "opt_d", text: "washes" }
      ],
      correctId: "opt_d",
      explanation: {
        summary: "ประธาน My father เป็นเอกพจน์ กิจวัตรหลังอาหารเย็นใช้ Present Simple กริยาที่ลงท้ายด้วย sh (wash) ให้เติม es -> washes",
        keyRule: "กริยาลงท้ายด้วย s, sh, ch, x, z, o เมื่อประธานเอกพจน์ให้เติม -es"
      }
    },
    {
      id: "official_mc_59",
      number: 59,
      category: "ภาษาอังกฤษ",
      score: 2,
      question: "59. He ______ his homework every evening.",
      options: [
        { id: "opt_a", text: "don't" },
        { id: "opt_b", text: "do" },
        { id: "opt_c", text: "does" },
        { id: "opt_d", text: "doesn't" }
      ],
      correctId: "opt_c",
      explanation: {
        summary: "ประธานคือ He + every evening (บอกเล่า Present Simple) สำนวนทำการบ้านคือ do homework ประธานเอกพจน์กริยา do ผันเป็น does (He does his homework)",
        keyRule: "He / She / It + does (กริยา do ผันเป็น does)"
      }
    },
    {
      id: "official_mc_60",
      number: 60,
      category: "ภาษาอังกฤษ",
      score: 2,
      question: "60. A: ______ you play football?  B: Yes, I do.",
      options: [
        { id: "opt_a", text: "Do" },
        { id: "opt_b", text: "Don't" },
        { id: "opt_c", text: "Does" },
        { id: "opt_d", text: "Doesn't" }
      ],
      correctId: "opt_a",
      explanation: {
        summary: "คำตอบตอบรับด้วย 'Yes, I do.' และประธานในประโยคคำถามคือ you กริยาช่วยที่ใช้ขึ้นต้นถาม Present Simple คู่กับ you คือ Do",
        keyRule: "Do + I/you/we/they? ตอบ Yes, I do."
      }
    },
    {
      id: "official_mc_61",
      number: 61,
      category: "ภาษาอังกฤษ",
      score: 2,
      question: "61. Ben ______ late for school.",
      options: [
        { id: "opt_a", text: "is" },
        { id: "opt_b", text: "are" },
        { id: "opt_c", text: "have" },
        { id: "opt_d", text: "has" }
      ],
      correctId: "opt_a",
      explanation: {
        summary: "Ben เป็นประธานเอกพจน์ คำว่า late เป็นคำคุณศัพท์ (Adjective) ต้องใช้คู่กับ Verb to be รูปเอกพจน์คือ is (Ben is late for school)",
        keyRule: "Subject (เอกพจน์) + is + Adjective"
      }
    },
    {
      id: "official_mc_62",
      number: 62,
      category: "ภาษาอังกฤษ",
      score: 2,
      question: "62. She ______ to school.",
      options: [
        { id: "opt_a", text: "doesn't walks" },
        { id: "opt_b", text: "don't walk" },
        { id: "opt_c", text: "doesn't walk" },
        { id: "opt_d", text: "don't walks" }
      ],
      correctId: "opt_c",
      explanation: {
        summary: "ประธาน She ในรูปปฏิเสธ Present Simple ใช้ doesn't และตามด้วยกริยาช่อง 1 รูปเดิมแท้ (V.inf) โดยไม่ต้องเติม s อีก -> doesn't walk",
        keyRule: "doesn't + กริยาช่อง 1 ไม่เติม s (V.infinitive)"
      }
    },
    {
      id: "official_mc_63",
      number: 63,
      category: "ภาษาอังกฤษ",
      score: 2,
      question: "63. We ______ golf.",
      options: [
        { id: "opt_a", text: "plays, never" },
        { id: "opt_b", text: "never, plays" },
        { id: "opt_c", text: "play, never" },
        { id: "opt_d", text: "never, play" }
      ],
      correctId: "opt_d",
      explanation: {
        summary: "Adverb of Frequency (never) ต้องวางไว้หน้ากริยาแท้ (Main Verb) และประธาน We เป็นพหูพจน์ กริยา play ต้องไม่เติม s จึงได้เป็น 'never play'",
        keyRule: "Adverb of frequency วางหน้า Main verb: We + never + play"
      }
    },
    {
      id: "official_mc_64",
      number: 64,
      category: "ภาษาอังกฤษ",
      score: 2,
      question: "64. I ______ shopping with my friends on Saturday.",
      options: [
        { id: "opt_a", text: "go" },
        { id: "opt_b", text: "went" },
        { id: "opt_c", text: "goes" },
        { id: "opt_d", text: "going" }
      ],
      correctId: "opt_a",
      explanation: {
        summary: "ประธาน I ใน Present Simple Tense ใช้กริยารูปธรรมดาไม่เติม s -> go shopping",
        keyRule: "I / You / We / They + go"
      }
    },
    {
      id: "official_mc_65",
      number: 65,
      category: "ภาษาอังกฤษ",
      score: 2,
      question: "65. The baby ______ all the time.",
      options: [
        { id: "opt_a", text: "cries" },
        { id: "opt_b", text: "cried" },
        { id: "opt_c", text: "cry" },
        { id: "opt_d", text: "crying" }
      ],
      correctId: "opt_a",
      explanation: {
        summary: "The baby เป็นประธานเอกพจน์ กริยา cry ลงท้ายด้วยพยัญชนะ + y ให้เปลี่ยน y เป็น i แล้วเติม es -> cries",
        keyRule: "พยัญชนะ + y ➡️ เปลี่ยน y เป็น i แล้วเติม -es (cry ➡️ cries)"
      }
    },
    {
      id: "official_mc_66",
      number: 66,
      category: "ภาษาอังกฤษ",
      score: 2,
      question: "66. That is a good movie, ______?",
      options: [
        { id: "opt_a", text: "do you" },
        { id: "opt_b", text: "isn't it" },
        { id: "opt_c", text: "is she" },
        { id: "opt_d", text: "isn't she" }
      ],
      correctId: "opt_b",
      explanation: {
        summary: "Question Tag: ประโยคหน้าเป็นประโยคบอกเล่าที่มีกริยา 'is' ส่วน Tag ต้องเป็นปฏิเสธ 'isn't' และสรรพนามแทน That (สิ่งของ) ใช้ 'it' จึงตอบ isn't it?",
        keyRule: "Statement (+) ➡️ Tag (-) : That is... ➡️ isn't it?"
      }
    },
    {
      id: "official_mc_67",
      number: 67,
      category: "ภาษาอังกฤษ",
      score: 2,
      question: "67. In Thailand the weather ______ normally cold in December.",
      options: [
        { id: "opt_a", text: "was" },
        { id: "opt_b", text: "is" },
        { id: "opt_c", text: "is going to be" },
        { id: "opt_d", text: "will be" }
      ],
      correctId: "opt_b",
      explanation: {
        summary: "มีคำว่า normally แสดงข้อเท็จจริงตามธรรมชาติและสภาพอากาศทั่วไปในเดือนธันวาคม ใช้ Present Simple Tense ประธาน the weather (เอกพจน์นับไม่ได้) ใช้กริยา is",
        keyRule: "บอกความจริงตามธรรมชาติ/สภาวะปกติ = Present Simple (is)"
      }
    },
    {
      id: "official_mc_68",
      number: 68,
      category: "ภาษาอังกฤษ",
      score: 2,
      question: "68. Up to now, the data for the research ______ collected yet.",
      options: [
        { id: "opt_a", text: "has not been" },
        { id: "opt_b", text: "have not been" },
        { id: "opt_c", text: "had not" },
        { id: "opt_d", text: "had not been" }
      ],
      correctId: "opt_a",
      explanation: {
        summary: "สำนวน 'Up to now' และ 'yet' ใช้คู่กับ Present Perfect Tense และประธานเป็นผู้ถูกกระทำ (Passive Voice) จึงใช้ have/has not been collected ทั้งนี้ ในภาษาอังกฤษทั่วไป data นิยมมองเป็น Mass Noun จึงใช้ has not been collected (ในทางวิชาการดั้งเดิมอาจมอง data เป็นพหูพจน์ใช้ have not been collected)",
        keyRule: "Up to now / yet = Present Perfect Passive (has/have not been + V.3)"
      }
    },
    {
      id: "official_mc_69",
      number: 69,
      category: "ภาษาอังกฤษ",
      score: 2,
      question: "69. I've been in Bangkok ______.",
      options: [
        { id: "opt_a", text: "two months ago" },
        { id: "opt_b", text: "for two months" },
        { id: "opt_c", text: "since two months" },
        { id: "opt_d", text: "for two months ago" }
      ],
      correctId: "opt_b",
      explanation: {
        summary: "ประโยค Present Perfect (I've been...) ที่บอกความต่อเนื่องของระยะเวลา ต้องใช้ 'for + ช่วงเวลา' คือ for two months (เป็นเวลา 2 เดือน) ส่วน since ใช้กับจุดเริ่มต้นเวลา เช่น since 2020",
        keyRule: "for + ระยะเวลา (for 2 months) | since + จุดเวลาเริ่มต้น (since May)"
      }
    },
    {
      id: "official_mc_70",
      number: 70,
      category: "ภาษาอังกฤษ",
      score: 2,
      question: "70. I ______ that story before.",
      options: [
        { id: "opt_a", text: "hear" },
        { id: "opt_b", text: "had heard" },
        { id: "opt_c", text: "am hearing" },
        { id: "opt_d", text: "have heard" }
      ],
      correctId: "opt_d",
      explanation: {
        summary: "มีคำว่า before (มาก่อน) บ่งบอกประสบการณ์ชีวิตที่ไม่ระบุเวลาเจาะจงในอดีต ต้องใช้ Present Perfect Tense โครงสร้าง S + have/has + V.3 (I have heard)",
        keyRule: "ประสบการณ์ + before / ever / never = Present Perfect (have/has + V.3)"
      }
    }
  ],

  // 2. ข้อสอบอัตนัย (ข้อเขียน 36 ข้อ) + ข้อสอบคำนวณ (3 ข้อ) = รวม 39 ข้อ
  subjectiveAndMath: [
    // หมวด 1: งานในสำนักงาน (ข้อ 21 - 30) ข้อละ 3 คะแนน
    {
      id: "subj_office_21",
      number: 21,
      category: "งานในสำนักงาน (อัตนัย)",
      score: 3,
      question: "21. อธิบายประโยชน์การใช้งาน Microsoft Excel",
      modelAnswer: "1. <strong>คำนวณตัวเลขและสถิติ:</strong> ประมวลผลสูตรและฟังก์ชันอัตโนมัติ แม่นยำ รวดเร็ว\n2. <strong>จัดการและจัดระเบียบฐานข้อมูล:</strong> คัดกรอง (Filter), เรียงลำดับ (Sort) และตรวจสอบข้อมูลปริมาณมาก\n3. <strong>วิเคราะห์ข้อมูลและรายงานผล:</strong> สรุปผลด้วย PivotTable, PivotChart และสร้างแดชบอร์ดผู้บริหาร\n4. <strong>สร้างกราฟและแผนภูมิ:</strong> แสดงแนวโน้มและเปรียบเทียบข้อมูลเชิงสถิติได้ชัดเจน",
      keyCriteria: "ต้องระบุเรื่องการคำนวณสูตร/ฟังก์ชัน, การวิเคราะห์ฐานข้อมูล (Pivot/Filter), และการสร้างกราฟสรุปผล"
    },
    {
      id: "subj_office_22",
      number: 22,
      category: "งานในสำนักงาน (อัตนัย)",
      score: 3,
      question: "22. ยกตัวอย่างชื่อสูตรที่ใช้ใน Microsoft Excel พร้อมคำอธิบายการใช้ อย่างน้อย 5 สูตร ที่นอกเหนือจากการบวกลบคูณหาร",
      modelAnswer: "1. <strong>SUM(range):</strong> คำนวณหาผลรวมของตัวเลขในช่วงเซลล์ที่กำหนด เช่น =SUM(A1:A10)\n2. <strong>AVERAGE(range):</strong> คำนวณหาค่าเฉลี่ยทางคณิตศาสตร์ของชุดข้อมูล เช่น =AVERAGE(B1:B20)\n3. <strong>IF(logical_test, val_if_true, val_if_false):</strong> ตรวจสอบเงื่อนไข ถ้าจริงทำตามค่าหนึ่ง ถ้าเท็จทำอีกค่าหนึ่ง\n4. <strong>VLOOKUP หรือ XLOOKUP:</strong> ค้นหาและดึงข้อมูลจากตารางอ้างอิงตามค่าคีย์เวิร์ดที่กำหนด\n5. <strong>COUNTIF(range, criteria):</strong> นับจำนวนเซลล์ที่ตรงตามเงื่อนไขที่ระบุ เช่น นับจำนวนคนที่สอบผ่าน",
      keyCriteria: "ระบุครบ 5 สูตรที่ไม่ใช่บวกลบคูณหาร พร้อมเขียนชื่อฟังก์ชันและอธิบายหน้าที่สั้นกระชับเข้าใจง่าย"
    },
    {
      id: "subj_office_23",
      number: 23,
      category: "งานในสำนักงาน (อัตนัย)",
      score: 3,
      question: "23. อธิบายประโยชน์การใช้งาน Microsoft Powerpoint",
      modelAnswer: "1. <strong>สร้างสื่อนำเสนอผลงาน (Presentation):</strong> ถ่ายทอดข้อมูล แผนงาน หรือผลการดำเนินงานในรูปแบบสไลด์\n2. <strong>ผสมผสานมัลติมีเดีย:</strong> นำเสนอด้วยข้อความ ภาพ กราฟ แผนภูมิ วิดีโอ และเสียง ช่วยให้เข้าใจง่าย ไม่น่าเบื่อ\n3. <strong>มีเครื่องมือ Animation & Transition:</strong> จัดลำดับการปรากฏของประเด็น ช่วยดึงดูดสายตาและคุมเวลาบรรยาย\n4. <strong>จัดทำเอกสารประกอบการบรรยาย (Handout):</strong> สั่งพิมพ์สไลด์พร้อมช่องบันทึกข้อความแจกผู้ฟัง",
      keyCriteria: "เน้นการนำเสนอผลงานรูปแบบสไลด์, มัลติมีเดีย (ภาพ/กราฟ), และการสื่อสารแผนงานให้เห็นภาพชัดเจน"
    },
    {
      id: "subj_office_24",
      number: 24,
      category: "งานในสำนักงาน (อัตนัย)",
      score: 3,
      question: "24. อธิบายโครงสร้างการเรียบเรียงเพื่อการนำเสนอ ตั้งแต่ต้นถึงจบ ต้องประกอบไปด้วยอะไรบ้าง โดย Microsoft Powerpoint",
      modelAnswer: "1. <strong>ส่วนต้น (Introduction - 10-15%):</strong> สไลด์หน้าปก (ชื่อเรื่อง/ผู้นำเสนอ), วัตถุประสงค์การนำเสนอ, และกำหนดการ/สารบัญหัวข้อ (Agenda)\n2. <strong>ส่วนเนื้อหา (Body - 70-80%):</strong> ร้อยเรียงตามตรรกะ เช่น ปัญหาที่พบ (Problem) ➡️ การวิเคราะห์ข้อมูล ➡️ ทางเลือก/กลยุทธ์ ➡️ แผนปฏิบัติการ (Action Plan) โดยเน้น 1 ประเด็นต่อ 1 สไลด์ และใช้ภาพ/กราฟสรุป\n3. <strong>ส่วนสรุป (Conclusion - 10%):</strong> สรุปประเด็นสำคัญ (Key Takeaways), ข้อเสนอแนะ/ก้าวต่อไป (Next Steps), และสไลด์ขอบคุณพร้อมเปิดช่วงถาม-ตอบ (Q&A)",
      keyCriteria: "ต้องแบ่ง 3 ส่วนชัดเจน: ส่วนต้น (หน้าปก/Agenda), ส่วนเนื้อหา (ตรรกะปัญหา-ทางออก-แผนงาน), และส่วนสรุป (Key takeaways/Q&A)"
    },
    {
      id: "subj_office_25",
      number: 25,
      category: "งานในสำนักงาน (อัตนัย)",
      score: 3,
      question: "25. อธิบายประโยชน์การใช้งาน Microsoft Word",
      modelAnswer: "1. <strong>จัดทำเอกสารและหนังสือราชการ:</strong> พิมพ์บันทึกข้อความ รายงาน หนังสือภายนอก ตามแบบฟอร์มมาตรฐาน\n2. <strong>จัดรูปแบบหน้ากระดาษและสิ่งพิมพ์:</strong> ตั้งระยะขอบ ใส่หัว/ท้ายกระดาษ เลขหน้า สารบัญอัตโนมัติ และแทรกตาราง\n3. <strong>มีระบบตรวจทานและพิสูจน์อักษร:</strong> ตรวจการสะกด ไวยากรณ์ และติดตามการแก้ไขร่วมกัน (Track Changes)\n4. <strong>ระบบจดหมายเวียน (Mail Merge):</strong> พิมพ์หนังสือหรือซองจดหมายถึงผู้รับจำนวนมากโดยดึงฐานข้อมูลอัตโนมัติ",
      keyCriteria: "เน้นการพิมพ์เอกสารราชการ/รายงาน, การจัดรูปแบบหน้า, ระบบตรวจทาน Track Changes, และระบบ Mail Merge"
    },
    {
      id: "subj_office_26",
      number: 26,
      category: "งานในสำนักงาน (อัตนัย)",
      score: 3,
      question: "26. อธิบายโครงสร้างการเรียบเรียง เพื่อจัดทำเอกสารจดหมายอย่างเป็นทางการ (Official letter) เพื่อส่งถึงหน่วยงานภายในหรือภายนอกองค์กร",
      modelAnswer: "1. <strong>ส่วนหัวหนังสือ:</strong> ตราครุฑ/ตราองค์กร, เลขที่หนังสือออก, ส่วนงานเจ้าของเรื่อง, วันเดือนปีที่ออกหนังสือ\n2. <strong>ส่วนหัวเรื่องและผู้รับ:</strong> เรื่อง (ใจความสั้นชัดเจน), คำขึ้นต้น (เรียน/กราบเรียน), อ้างถึง (ถ้ามี), สิ่งที่ส่งมาด้วย (ถ้ามี)\n3. <strong>ส่วนเนื้อหา (3 ย่อหน้ามาตรฐาน):</strong>\n   - ย่อหน้า 1 (เหตุที่มีหนังสือไป): ความเป็นมา วัตถุประสงค์ หรือปัญหาที่เกิดขึ้น\n   - ย่อหน้า 2 (การดำเนินงาน/รายละเอียด): ข้อมูล ข้อเท็จจริง หรือข้อกฎหมายระเบียบที่เกี่ยวข้อง\n   - ย่อหน้า 3 (ความประสงค์): สิ่งที่ขอให้ผู้รับปฏิบัติ เช่น 'จึงเรียนมาเพื่อโปรดพิจารณาอนุมัติ'\n4. <strong>ส่วนท้ายหนังสือ:</strong> คำลงท้าย ('ขอแสดงความนับถือ'), ลายมือชื่อ, ชื่อเต็มใต้ลายมือชื่อ, ตำแหน่ง, และส่วนท้ายระบุเบอร์โทร/อีเมลผู้ประสานงาน",
      keyCriteria: "ระบุครบ 4 ส่วน: ส่วนหัว (เลขที่/วันที่), ส่วนผู้รับ (เรื่อง/เรียน), ส่วนข้อความ 3 ย่อหน้า (เหตุ-รายละเอียด-ความประสงค์), และส่วนท้าย (คำลงท้าย/ลายมือชื่อ/เบอร์ติดต่อ)"
    },
    {
      id: "subj_office_27",
      number: 27,
      category: "งานในสำนักงาน (อัตนัย)",
      score: 3,
      question: "27. อธิบายโปรแกรมที่ใช้ในการประชุมออนไลน์ (Online Meeting) ที่เคยใช้ และอธิบายการใช้งานเครื่องมือหรือปุ่มของโปรแกรมนั้น 3 ปุ่มกด",
      modelAnswer: "<strong>โปรแกรมที่ใช้:</strong> Zoom Meetings (หรือ Microsoft Teams / Google Meet)\n<strong>อธิบายปุ่มกด 3 ปุ่ม:</strong>\n1. <strong>ปุ่ม Mute / Unmute (ไมโครโฟน):</strong> ใช้เปิด-ปิดเสียงพูดของตนเอง เพื่อป้องกันเสียงรบกวนแทรกในที่ประชุม\n2. <strong>ปุ่ม Share Screen:</strong> ใช้แชร์หน้าจอคอมพิวเตอร์ ไฟล์นำเสนอสไลด์ หรือเอกสารรายงานให้ผู้ร่วมประชุมทุกคนเห็นพร้อมกัน\n3. <strong>ปุ่ม Raise Hand (ยกมือ):</strong> ใช้ส่งสัญญาณขออนุญาตเปิดไมค์ซักถามหรือแสดงความคิดเห็นตามมารยาทการประชุมโดยไม่พูดแทรก",
      keyCriteria: "ระบุชื่อโปรแกรมประชุมออนไลน์ 1 โปรแกรม พร้อมอธิบายชื่อและหน้าที่ของปุ่มเครื่องมือถูกต้อง 3 ปุ่ม"
    },
    {
      id: "subj_office_28",
      number: 28,
      category: "งานในสำนักงาน (อัตนัย)",
      score: 3,
      question: "28. อธิบายชื่อและหน้าที่การทำงานของหน่วยงานต่างๆโดยย่อ ที่จำเป็นต้องมีในบริษัทขนาดกลางถึงใหญ่ อย่างน้อย 5 หน่วยงาน",
      modelAnswer: "1. <strong>ฝ่ายบริหารทรัพยากรบุคคล (HR):</strong> สรรหาว่าจ้าง พัฒนาฝึกอบรม ดูแลสวัสดิการ และประเมินผลการทำงานของบุคลากร\n2. <strong>ฝ่ายการเงินและบัญชี (Finance & Accounting):</strong> จัดทำบัญชี รับ-จ่าย วางแผนงบประมาณ บริหารกระแสเงินสด และจัดการภาษี\n3. <strong>ฝ่ายจัดซื้อและพัสดุ (Procurement/Purchasing):</strong> จัดหาวัสดุ อุปกรณ์ ครุภัณฑ์ และจ้างบริการ คัดเลือกคู่ค้า เจรจาต่อรอง และตรวจรับพัสดุ\n4. <strong>ฝ่ายกลยุทธ์และพัฒนาองค์กร (Strategic Planning):</strong> วางแผนยุทธศาสตร์ กำหนดเป้าหมายและ KPI ติดตามประเมินผลโครงการ และขับเคลื่อนนโยบาย\n5. <strong>ฝ่ายเทคโนโลยีสารสนเทศ (IT):</strong> ดูแลระบบเครือข่าย ซอฟต์แวร์ อุปกรณ์คอมพิวเตอร์ ความปลอดภัยข้อมูล และสนับสนุนระบบสารบรรณอิเล็กทรอนิกส์",
      keyCriteria: "ระบุครบ 5 หน่วยงานหลัก (HR, บัญชีการเงิน, จัดซื้อพัสดุ, แผนกลยุทธ์, IT) พร้อมหน้าที่การทำงานสั้นกระชับตรงประเด็น"
    },
    {
      id: "subj_office_29",
      number: 29,
      category: "งานในสำนักงาน (อัตนัย)",
      score: 3,
      question: "29. อธิบายหน้าที่การทำงาน ความสำคัญโดยย่อ ของหน่วยงานด้านการจัดซื้อจัดจ้าง (การพัสดุ)",
      modelAnswer: "<strong>หน้าที่การทำงาน:</strong>\n1. วางแผนและจัดหาพัสดุ/บริการตามความต้องการของหน่วยงาน\n2. กำหนดราคากลาง คัดเลือกผู้ขาย/ผู้รับจ้าง และเจรจาต่อรองเงื่อนไขและราคา\n3. จัดทำสัญญาหรือใบสั่งซื้อ (PO) ควบคุมการส่งมอบ และประสานงานตรวจรับพัสดุ\n<strong>ความสำคัญโดยย่อ:</strong>\nเป็นหน่วยงานที่ควบคุมการใช้งบประมาณให้เกิดความคุ้มค่าสูงสุด (Cost Efficiency) ได้พัสดุมีคุณภาพตรงสเปก ส่งมอบทันเวลา โปร่งใส ตรวจสอบได้ตามกฎหมาย/ระเบียบ ป้องกันการรั่วไหลและการทุจริต",
      keyCriteria: "ต้องแยกอธิบายทั้ง 'หน้าที่' (จัดหา/คัดเลือก/ทำสัญญา/ตรวจรับ) และ 'ความสำคัญ' (คุ้มค่างบประมาณ/โปร่งใส/ทันเวลา)"
    },
    {
      id: "subj_office_30",
      number: 30,
      category: "งานในสำนักงาน (อัตนัย)",
      score: 3,
      question: "30. ยกตัวอย่างชื่อโปรแกรมที่ใช้ในการทำงาน นอกจาก Microsoft Office อย่างน้อย 3 โปรแกรม และอธิบายการใช้ประโยชน์เบื้องต้น",
      modelAnswer: "1. <strong>Canva:</strong> โปรแกรมออกแบบกราฟิกออนไลน์ ใช้สร้างภาพประชาสัมพันธ์ Infographic แบนเนอร์ และรายงานแบบเข้าใจง่ายอย่างรวดเร็ว\n2. <strong>Adobe Acrobat Reader / Pro:</strong> โปรแกรมจัดการไฟล์ PDF ใช้เปิดอ่าน ตรวจทาน เซ็นลายมือชื่อดิจิทัล (Digital Signature) และรวม/แยกไฟล์เอกสาร\n3. <strong>Google Workspace (Docs / Sheets / Drive):</strong> ระบบคลาวด์ออฟฟิศ ใช้จัดเก็บไฟล์และทำงานร่วมกันแบบเรียลไทม์ (Collaborative Working) ได้พร้อมกันหลายคน",
      keyCriteria: "ยกตัวอย่างถูกต้อง 3 โปรแกรมนอกเหนือจาก MS Office (เช่น Canva, Adobe Acrobat, Google Workspace, Slack, Trello) พร้อมประโยชน์สั้นกระชับ"
    },

    // หมวด 2: งานการพัสดุ (ข้อ 31 - 40) ข้อละ 3 คะแนน
    {
      id: "subj_proc_31",
      number: 31,
      category: "การพัสดุ (อัตนัย)",
      score: 3,
      question: "31. อธิบาย ลำดับกระบวนการ จัดซื้อจัดจ้าง (การพัสดุ) ตั้งแต่ต้นจนจบโดยย่อ",
      modelAnswer: "1. <strong>จัดทำแผนและขออนุมัติ:</strong> หน่วยงานผู้ใช้เสนอความต้องการ ทำใบขอซื้อ (PR) และขออนุมัติจัดหา\n2. <strong>กำหนดสเปกและราคากลาง:</strong> จัดทำขอบเขตงาน (TOR) / สเปกพัสดุ และสืบหาราคากลาง\n3. <strong>ดำเนินการจัดซื้อจัดจ้าง:</strong> ดำเนินการตามวิธีที่กำหนด (เฉพาะเจาะจง / คัดเลือก / ประกาศเชิญชวน e-Bidding)\n4. <strong>พิจารณาผลและขออนุมัติสั่งซื้อ:</strong> ตรวจสอบคุณสมบัติ เปรียบเทียบราคา เสนอขออนุมัติ และออกใบสั่งซื้อ (PO) หรือสัญญา\n5. <strong>ส่งมอบและตรวจรับ:</strong> ผู้ขายส่งมอบพัสดุ คณะกรรมการตรวจรับพัสดุตรวจสอบความถูกต้อง\n6. <strong>เบิกจ่ายและลงทะเบียนคุม:</strong> ส่งเอกสารให้ฝ่ายการเงินเบิกจ่ายเงิน และลงทะเบียนคุมบัญชีพัสดุ/ครุภัณฑ์",
      keyCriteria: "ระบุขั้นตอนต่อเนื่อง 6 สเต็ป: แผน/PR ➡️ สเปก/ราคากลาง ➡️ ดำเนินการจัดหา ➡️ ขออนุมัติ/PO ➡️ ตรวจรับ ➡️ เบิกจ่าย/ลงทะเบียนคุม"
    },
    {
      id: "subj_proc_32",
      number: 32,
      category: "การพัสดุ (อัตนัย)",
      score: 3,
      question: "32. พัสดุหมายถึงอะไรบ้าง และวัสดุ กับ ครุภัณฑ์แตกต่างกันอย่างไร",
      modelAnswer: "<strong>พัสดุ หมายถึง:</strong> พัสดุ สินค้า งานบริการ งานก่อสร้าง งานจ้างที่ปรึกษา งานจ้างออกแบบหรือควบคุมงาน รวมตลอดถึงการซื้อ การจ้าง การเช่า และการแลกเปลี่ยน\n<strong>ความแตกต่างระหว่าง วัสดุ กับ ครุภัณฑ์:</strong>\n• <strong>วัสดุ:</strong> สิ่งของที่ใช้แล้วหมดไป สิ้นเปลือง สึกหรอ เสียหายง่าย หรือมีอายุการใช้งานไม่ถึง 1 ปี ราคาต่อหน่วยต่ำ เช่น กระดาษ ปากกา หมึกพิมพ์\n• <strong>ครุภัณฑ์:</strong> สิ่งของที่มีลักษณะคงทนถาวร มีอายุการใช้งานตั้งแต่ 1 ปีขึ้นไป มีมูลค่าสูง ต้องลงทะเบียนคุมทรัพย์สินและติดรหัสครุภัณฑ์ เช่น คอมพิวเตอร์ โต๊ะทำงาน เครื่องปรับอากาศ รถยนต์",
      keyCriteria: "นิยามพัสดุครบถ้วน และชี้ความต่างของวัสดุ (สิ้นเปลือง/อายุ<1ปี) vs ครุภัณฑ์ (คงทน/อายุ≥1ปี/มีทะเบียนคุม)"
    },
    {
      id: "subj_proc_33",
      number: 33,
      category: "การพัสดุ (อัตนัย)",
      score: 3,
      question: "33. การจัดหาพัสดุ หรือ การจัดซื้อ โดยพื้นฐาน (หรือ 6R) ควรคำนึงถึงอะไรบ้าง",
      modelAnswer: "1. <strong>Right Quality (คุณภาพถูกต้อง):</strong> คุณภาพและคุณลักษณะตรงตามสเปกหรือมาตรฐานที่กำหนด\n2. <strong>Right Quantity (ปริมาณถูกต้อง):</strong> ปริมาณพอดีตามความต้องการใช้งาน ไม่ขาดแคลนและไม่ล้นสต็อก\n3. <strong>Right Price (ราคาเหมาะสม):</strong> ราคาประหยัด ยุติธรรม คุ้มค่าเงินงบประมาณ\n4. <strong>Right Time (เวลาถูกต้อง):</strong> ส่งมอบตรงเวลา ทันตามกำหนดที่จำเป็นต้องใช้งาน\n5. <strong>Right Source / Supplier (แหล่งขายที่ถูกต้อง):</strong> จัดซื้อจากคู่ค้าที่น่าเชื่อถือ มีเสถียรภาพและบริการหลังการขายที่ดี\n6. <strong>Right Place (สถานที่ถูกต้อง):</strong> ส่งมอบและจัดส่ง ณ สถานที่ที่ถูกต้อง ปลอดภัย และสะดวกต่อการใช้งาน",
      keyCriteria: "ระบุครบหลัก 6R: Right Quality, Right Quantity, Right Price, Right Time, Right Source, Right Place"
    },
    {
      id: "subj_proc_34",
      number: 34,
      category: "การพัสดุ (อัตนัย)",
      score: 3,
      question: "34. อธิบาย หัวข้อ องค์ประกอบที่จำเป็นต้องมี ในการจัดทำสัญญา มีอะไรบ้าง",
      modelAnswer: "1. วันที่และสถานที่จัดทำสัญญา\n2. ข้อมูลคู่สัญญา (ชื่อ นิติบุคคล ที่อยู่ ของผู้ซื้อ/ผู้ว่าจ้าง และ ผู้ขาย/ผู้รับจ้าง)\n3. วัตถุประสงค์ ขอบเขตงาน และรายละเอียดคุณลักษณะพัสดุ (แนบ TOR)\n4. ราคาค่าพัสดุ/ค่าจ้าง และเงื่อนไขงวดการจ่ายเงิน\n5. กำหนดเวลาและสถานที่ส่งมอบงาน\n6. หลักประกันสัญญา (เงินสด/หนังสือค้ำประกันธนาคาร)\n7. อัตราค่าปรับกรณีส่งมอบงานล่าช้า หรือผิดสัญญา\n8. สิทธิการบอกเลิกสัญญา และการรับประกันความชำรุดบกพร่อง\n9. ลายมือชื่อคู่สัญญาและพยาน",
      keyCriteria: "ระบุหัวข้อสำคัญในสัญญา เช่น ข้อมูลคู่สัญญา, ขอบเขตงาน, ราคา/งวดเงิน, กำหนดส่งมอบ, หลักประกัน, ค่าปรับ, ลายมือชื่อคู่สัญญา"
    },
    {
      id: "subj_proc_35",
      number: 35,
      category: "การพัสดุ (อัตนัย)",
      score: 3,
      question: "35. อธิบาย ความแตกต่างระหว่าง การจัดซื้อสินค้า และการจัดจ้างงานบริการ มาพอเข้าใจ",
      modelAnswer: "• <strong>การจัดซื้อสินค้า:</strong> มุ่งเน้นการได้มาซึ่ง <em>'ทรัพย์สินที่มีตัวตน'</em> (จับต้องได้) เช่น วัสดุ อุปกรณ์ ครุภัณฑ์ มีการส่งมอบสิ่งของและโอนกรรมสิทธิ์ ตรวจรับจากความครบถ้วนและสภาพของตัวสินค้า\n• <strong>การจัดจ้างงานบริการ:</strong> มุ่งเน้นการได้มาซึ่ง <em>'การกระทำ ผลงาน หรือแรงงาน'</em> (จับต้องไม่ได้โดยตรง) เช่น จ้างทำความสะอาด จ้างรักษาความปลอดภัย จ้างซ่อมบำรุง ตรวจรับจากผลสัมฤทธิ์ คุณภาพการปฏิบัติงาน และระยะเวลาที่กำหนด",
      keyCriteria: "แยกความต่างชัดเจน: ซื้อสินค้า = ทรัพย์สินมีตัวตน/โอนกรรมสิทธิ์ vs จ้างบริการ = การกระทำ/ผลงาน/แรงงาน"
    },
    {
      id: "subj_proc_36",
      number: 36,
      category: "การพัสดุ (อัตนัย)",
      score: 3,
      question: "36. อธิบาย ความแตกต่างระหว่าง การเช่าใช้ และการเช่าซื้อ มาพอเข้าใจ",
      modelAnswer: "• <strong>การเช่าใช้ (Operating Lease):</strong> เป็นการจ่ายเงินเพื่อขอใช้ทรัพย์สินชั่วคราวตามระยะเวลาที่ตกลง โดย <em>'กรรมสิทธิ์ยังคงเป็นของผู้ให้เช่าตลอดไป'</em> เมื่อครบกำหนดสัญญาต้องส่งคืนทรัพย์สิน เหมาะกับอุปกรณ์ที่ตกรุ่นเร็ว เช่น เช่าเครื่องถ่ายเอกสาร เช่าคอมพิวเตอร์\n• <strong>การเช่าซื้อ (Hire Purchase):</strong> เป็นการเช่าที่เจ้าของนำทรัพย์สินออกให้เช่า โดยมีคำมั่นว่าจะขายหรือ <em>'กรรมสิทธิ์จะตกเป็นของผู้เช่าทันทีเมื่อชำระเงินค่าเช่าซื้อครบถ้วนตามงวดที่กำหนด'</em> เช่น การเช่าซื้อยานพาหนะ",
      keyCriteria: "ชี้ประเด็นกรรมสิทธิ์: เช่าใช้ = กรรมสิทธิ์ไม่โอน/คืนของเมื่อครบสัญญา vs เช่าซื้อ = ผ่อนครบกรรมสิทธิ์โอนเป็นของผู้เช่า"
    },
    {
      id: "subj_proc_37",
      number: 37,
      category: "การพัสดุ (อัตนัย)",
      score: 3,
      question: "37. อธิบายความหมาย และประโยชน์ของ งบประมาณ มาพอเข้าใจ",
      modelAnswer: "<strong>ความหมาย:</strong> แผนการทางการเงินที่แสดงประมาณการรายรับและกรอบวงเงินรายจ่ายขององค์กรในช่วงระยะเวลาหนึ่ง (ปกติรอบ 1 ปีงบประมาณ) เพื่อใช้ดำเนินงานให้บรรลุเป้าหมาย\n<strong>ประโยชน์ของงบประมาณ:</strong>\n1. <strong>เครื่องมือวางแผน:</strong> จัดสรรทรัพยากรเงินทุนให้สอดคล้องกับแผนยุทธศาสตร์และโครงการสำคัญ\n2. <strong>เครื่องมือควบคุม:</strong> ควบคุมการใช้จ่ายเงินให้อยู่ในกรอบวินัย ไม่ใช้จ่ายเกินตัว ป้องกันงบประมาณบานปลาย\n3. <strong>เครื่องมือวัดผล:</strong> ใช้ประเมินประสิทธิภาพความคุ้มค่าและความก้าวหน้าในการดำเนินงานของแต่ละหน่วยงาน",
      keyCriteria: "อธิบายความหมาย (แผนการเงิน/รายรับ-รายจ่าย) และประโยชน์ 3 ด้าน (วางแผนจัดสรร, ควบคุมการใช้จ่าย, วัดผลประสิทธิภาพ)"
    },
    {
      id: "subj_proc_38",
      number: 38,
      category: "การพัสดุ (อัตนัย)",
      score: 3,
      question: "38. อธิบาย องค์ประกอบที่ต้องระบุ ในการจัดทำแผนการจัดซื้อจัดจ้างประจำปี มาพอเข้าใจ",
      modelAnswer: "1. <strong>ชื่อโครงการ/รายการพัสดุ:</strong> ระบุรายการสินค้า งานบริการ หรือก่อสร้างที่จะจัดหา\n2. <strong>วงเงินงบประมาณ:</strong> วงเงินที่ได้รับจัดสรรหรือประมาณการที่จะใช้\n3. <strong>วิธีการจัดซื้อจัดจ้าง:</strong> วิธีการที่จะใช้ดำเนินการ (เช่น ประกาศเชิญชวนทั่วไป / คัดเลือก / เฉพาะเจาะจง)\n4. <strong>ช่วงเวลาคาดว่าจะจัดซื้อจัดจ้าง:</strong> เดือน/ปีที่คาดว่าจะเริ่มประกาศหรือเริ่มกระบวนการจัดหา\n5. <strong>กำหนดเวลาคาดว่าจะส่งมอบ/เบิกจ่าย:</strong> ช่วงเวลาที่ต้องได้รับของและจ่ายเงินให้เสร็จสิ้นตามแผน",
      keyCriteria: "ระบุองค์ประกอบสำคัญในแผน: ชื่อโครงการ, วงเงินงบประมาณ, วิธีการจัดหา, ช่วงเวลาดำเนินการ, และกำหนดส่งมอบ"
    },
    {
      id: "subj_proc_39",
      number: 39,
      category: "การพัสดุ (อัตนัย)",
      score: 3,
      question: "39. อธิบาย วิธีการจัดซื้อจัดจ้างกระทำได้โดยวิธีการใดบ้าง และทำอย่างไร มาพอเข้าใจ (ไม่เฉพาะต้องเป็นวิธีตามภาครัฐ)",
      modelAnswer: "1. <strong>วิธีเฉพาะเจาะจง / ตกลงราคา (Direct Contracting):</strong> เชิญผู้ประกอบการที่มีคุณสมบัติตรงเพียงรายใดรายหนึ่งเข้ามาเจรจาต่อรองราคาโดยตรง เหมาะกับวงเงินเล็กน้อย หรือพัสดุที่มีตัวแทนจำหน่ายผูกขาดเพียงรายเดียว\n2. <strong>วิธีคัดเลือก / เปรียบเทียบราคา (Selective / Price Comparison):</strong> ส่งหนังสือเชิญชวนผู้ขายตั้งแต่ 3 รายขึ้นไปที่มีคุณสมบัติตรงมายื่นซองเสนอราคา เพื่อคัดเลือกรายที่เสนอเงื่อนไขและราคาที่ดีที่สุด\n3. <strong>วิธีประกาศเชิญชวนทั่วไป / ประมูลราคา (Open Bidding / e-Bidding):</strong> ประกาศเผยแพร่ให้ผู้ประกอบการทั่วไปที่สนใจสามารถยื่นข้อเสนอแข่งขันราคาอย่างเปิดเผย โปร่งใส มักใช้กับโครงการวงเงินสูง",
      keyCriteria: "อธิบาย 3 วิธีหลัก: เฉพาะเจาะจง (เจรจารายเดียว), คัดเลือก/เปรียบเทียบราคา (เทียบ 3 รายขึ้นไป), ประกาศเชิญชวนทั่วไป/ประมูล (เปิดเสรีวงกว้าง)"
    },
    {
      id: "subj_proc_40",
      number: 40,
      category: "การพัสดุ (อัตนัย)",
      score: 3,
      question: "40. อธิบาย ความหมายของ PR, PA, PO ใครเป็นผู้จัดทำและส่งถึงใคร มาพอเข้าใจ",
      modelAnswer: "1. <strong>PR (Purchase Requisition - ใบขอซื้อ/ขอจ้าง):</strong> เอกสารแสดงความต้องการพัสดุ ➡️ <em>จัดทำโดย:</em> 'หน่วยงานผู้ใช้พัสดุ' ➡️ <em>ส่งถึง:</em> 'ฝ่ายจัดซื้อ/พัสดุ'\n2. <strong>PA (Purchase Approval / Price Agreement - ใบขออนุมัติซื้อ/ข้อตกลงราคา):</strong> เอกสารสรุปผลการเปรียบเทียบราคาและขออนุมัติสั่งซื้อ ➡️ <em>จัดทำโดย:</em> 'ฝ่ายจัดซื้อ/พัสดุ' ➡️ <em>ส่งถึง:</em> 'ผู้มีอำนาจอนุมัติ (ผู้บริหาร)'\n3. <strong>PO (Purchase Order - ใบสั่งซื้อ/สั่งจ้าง):</strong> เอกสารยืนยันการสั่งซื้อที่มีผลผูกพันทางกฎหมาย ➡️ <em>จัดทำโดย:</em> 'ฝ่ายจัดซื้อ/พัสดุ' (หลังได้รับอนุมัติ PA) ➡️ <em>ส่งถึง:</em> 'ผู้ขาย/คู่ค้าภายนอก'",
      keyCriteria: "อธิบายความหมายครบทั้ง 3 ตัว พร้อมระบุชัดเจนว่า 'ใครทำ' และ 'ส่งถึงใคร' (PR: แผนกผู้ใช้ ➡️ จัดซื้อ, PA: จัดซื้อ ➡️ ผู้บริหาร, PO: จัดซื้อ ➡️ ผู้ขาย)"
    },

    // หมวด 3: งานสารบรรณ (ข้อ 41 - 55) ข้อละ 3 คะแนน
    {
      id: "subj_saraban_41",
      number: 41,
      category: "งานสารบรรณ (อัตนัย)",
      score: 3,
      question: "41. งานสารบรรณ หมายความว่าอะไร",
      modelAnswer: "<strong>งานสารบรรณ หมายความว่า:</strong> งานที่เกี่ยวกับการบริหารงานเอกสาร เริ่มตั้งแต่ การคิด การร่าง การเขียน การแต่ง การพิมพ์ การจดจำ การทำสำเนา การรับ การส่ง การบันทึก การเสนอ การสั่งการ การจัดเก็บ การยืม การทำลาย จนถึงการรักษาความปลอดภัยของหนังสือราชการ",
      keyCriteria: "นิยามครบกระบวนการบริหารเอกสาร: คิด ร่าง เขียน พิมพ์ รับ ส่ง จัดเก็บ ยืม ทำลาย"
    },
    {
      id: "subj_saraban_42",
      number: 42,
      category: "งานสารบรรณ (อัตนัย)",
      score: 3,
      question: "42. หนังสือที่ต้องปฏิบัติให้เร็วกว่าปกติ แบ่งเป็นกี่ประเภท อะไรบ้าง",
      modelAnswer: "แบ่งเป็น <strong>3 ประเภท (ชั้นความเร็ว)</strong> ได้แก่:\n1. <strong>ด่วนที่สุด:</strong> ให้เจ้าหน้าที่ปฏิบัติในทันทีที่ได้รับหนังสือนั้น\n2. <strong>ด่วนมาก:</strong> ให้เจ้าหน้าที่ปฏิบัติโดยเร็ว\n3. <strong>ด่วน:</strong> ให้เจ้าหน้าที่ปฏิบัติเร็วกว่าปกติ เท่าที่จะทำได้",
      keyCriteria: "ระบุ 3 ประเภทถูกต้อง: ด่วนที่สุด (ทันที), ด่วนมาก (โดยเร็ว), ด่วน (เร็วกว่าปกติ)"
    },
    {
      id: "subj_saraban_43",
      number: 43,
      category: "งานสารบรรณ (อัตนัย)",
      score: 3,
      question: "43. การออกหนังสือถึงผู้บริหารระดับหัวหน้าหน่วยงาน คำขึ้นต้น และคำลงท้าย ใช้คำว่าอะไร",
      modelAnswer: "• <strong>คำขึ้นต้น:</strong> ใช้คำว่า <strong>'เรียน'</strong> (ตามด้วยชื่อตำแหน่งผู้บริหาร เช่น เรียน ผู้อำนวยการสำนัก...)\n• <strong>คำลงท้าย:</strong> ใช้คำว่า <strong>'ขอแสดงความนับถือ'</strong>",
      keyCriteria: "ระบุคำขึ้นต้น 'เรียน' และคำลงท้าย 'ขอแสดงความนับถือ'"
    },
    {
      id: "subj_saraban_44",
      number: 44,
      category: "งานสารบรรณ (อัตนัย)",
      score: 3,
      question: "44. ระเบียบงานสารบรรณสภากาชาดไทย หนังสือมีกี่ชนิด อะไรบ้าง",
      modelAnswer: "มี <strong>6 ชนิด</strong> (ยึดตามระเบียบงานสารบรรณสำนักนายกรัฐมนตรีและสภากาชาดไทย) ได้แก่:\n1. <strong>หนังสือภายนอก</strong> (ติดต่อต่างหน่วยงาน/บุคคลภายนอก ใช้ครุฑ/ตราสภากาชาด)\n2. <strong>หนังสือภายใน</strong> (ติดต่อภายในหน่วยงานเดียวกัน ใช้กระดาษบันทึกข้อความ)\n3. <strong>หนังสือประทับตรา</strong> (ใช้ประทับตราแทนการลงลายมือชื่อ สำหรับเรื่องไม่สำคัญ)\n4. <strong>หนังสือสั่งการ</strong> (มี 3 ชนิด: คำสั่ง, ระเบียบ, ข้อบังคับ)\n5. <strong>หนังสือประชาสัมพันธ์</strong> (มี 3 ชนิด: ประกาศ, แถลงการณ์, ข่าว)\n6. <strong>หนังสือที่เจ้าหน้าที่ทำขึ้นหรือรับไว้เป็นหลักฐานในราชการ</strong> (เช่น หนังสือรับรอง, รายงานการประชุม, บันทึก)",
      keyCriteria: "ระบุครบ 6 ชนิด: ภายนอก, ภายใน, ประทับตรา, สั่งการ, ประชาสัมพันธ์, ที่เจ้าหน้าที่ทำขึ้น/รับไว้เป็นหลักฐาน"
    },
    {
      id: "subj_saraban_45",
      number: 45,
      category: "งานสารบรรณ (อัตนัย)",
      score: 3,
      question: "45. ลักษณะทั่วไปของบันทึกที่ดี ประกอบด้วยอะไรบ้าง (ตอบอย่างน้อย 3 ประการ)",
      modelAnswer: "1. <strong>ความถูกต้อง (Accuracy):</strong> ข้อเท็จจริง ตัวเลข ข้อมูลอ้างอิง และระเบียบกฎหมายต้องถูกต้องแม่นยำ\n2. <strong>ความชัดเจน (Clarity):</strong> ใช้ภาษาเข้าใจง่าย ตรงประเด็น อ่านแล้วเข้าใจทันที ไม่กำกวม\n3. <strong>ความสั้นกระชับ (Conciseness):</strong> ได้ใจความสมบูรณ์ ไม่เยิ่นเย้อ ตัดข้อความที่ไม่จำเป็นออก\n4. <strong>ความสมบูรณ์ (Completeness):</strong> มีข้อมูลครบถ้วนทั้งเหตุผล ข้อเท็จจริง และข้อเสนอแนะเพื่อให้ผู้บังคับบัญชาตัดสินใจสั่งการได้ทันที",
      keyCriteria: "ระบุอย่างน้อย 3 ประการ: ความถูกต้อง, ความชัดเจน, ความกระชับ, ความสมบูรณ์"
    },
    {
      id: "subj_saraban_46",
      number: 46,
      category: "งานสารบรรณ (อัตนัย)",
      score: 3,
      question: "46. หนังสือรับรองรายงานการประชุมจัดอยู่ในหนังสือชนิดใด",
      modelAnswer: "จัดอยู่ใน <strong>'หนังสือที่เจ้าหน้าที่ทำขึ้นหรือรับไว้เป็นหลักฐานในราชการ'</strong> (หนังสือราชการชนิดที่ 6) ตามระเบียบสำนักนายกรัฐมนตรีว่าด้วยงานสารบรรณ",
      keyCriteria: "ระบุว่าจัดอยู่ใน 'หนังสือที่เจ้าหน้าที่ทำขึ้นหรือรับไว้เป็นหลักฐานในราชการ' (ชนิดที่ 6)"
    },
    {
      id: "subj_saraban_47",
      number: 47,
      category: "งานสารบรรณ (อัตนัย)",
      score: 3,
      question: "47. หนังสือสั่งการ มีกี่ชนิด อะไรบ้าง",
      modelAnswer: "หนังสือสั่งการ มี <strong>3 ชนิด</strong> ได้แก่:\n1. <strong>คำสั่ง:</strong> ข้อความที่ผู้บังคับบัญชาสั่งการให้ปฏิบัติโดยชอบด้วยกฎหมาย\n2. <strong>ระเบียบ:</strong> ข้อความที่ผู้มีอำนาจวางไว้เพื่อเป็นแนวปฏิบัติงานเป็นการถาวรหรือชั่วคราว\n3. <strong>ข้อบังคับ:</strong> ข้อความที่ผู้มีอำนาจกำหนดให้ใช้บังคับโดยอาศัยอำนาจตามกฎหมาย",
      keyCriteria: "ระบุ 3 ชนิดถูกต้อง: คำสั่ง, ระเบียบ, ข้อบังคับ"
    },
    {
      id: "subj_saraban_48",
      number: 48,
      category: "งานสารบรรณ (อัตนัย)",
      score: 3,
      question: "48. หนังสือประชาสัมพันธ์มีกี่ชนิด อะไรบ้าง",
      modelAnswer: "หนังสือประชาสัมพันธ์ มี <strong>3 ชนิด</strong> ได้แก่:\n1. <strong>ประกาศ:</strong> ข้อความที่ทางราชการประกาศหรือชี้แจงให้ทราบ หรือแนะแนวทางปฏิบัติ\n2. <strong>แถลงการณ์:</strong> ข้อความที่ทางราชการแถลงเพื่อทำความเข้าใจในกิจการหรือเหตุการณ์สำคัญเป็นทางการ\n3. <strong>ข่าว:</strong> ข้อความที่ทางราชการเห็นสมควรเผยแพร่ให้ประชาชนทราบ",
      keyCriteria: "ระบุ 3 ชนิดถูกต้อง: ประกาศ, แถลงการณ์, ข่าว"
    },
    {
      id: "subj_saraban_49",
      number: 49,
      category: "งานสารบรรณ (อัตนัย)",
      score: 3,
      question: "49. การจัดทำรายงานการประชุม มีองค์ประกอบ อะไรบ้าง",
      modelAnswer: "1. <strong>ชื่อการประชุม:</strong> (รายงานการประชุม... ครั้งที่...)\n2. <strong>วัน เดือน ปี และสถานที่ประชุม:</strong> พร้อมเวลาเริ่มประชุม\n3. <strong>รายชื่อผู้มาประชุม:</strong> พร้อมระบุตำแหน่งในที่ประชุม (ประธาน, กรรมการ)\n4. <strong>รายชื่อผู้ไม่มาประชุมและผู้เข้าร่วมประชุม:</strong> (ถ้ามี)\n5. <strong>ข้อความที่ประชุมตามวาระ:</strong> วาระที่ 1 ถึง 5 (เรื่องแจ้งให้ทราบ, รับรองรายงานฯ, สืบเนื่อง, พิจารณา, เรื่องอื่นๆ) พร้อมบันทึก <em>'มติที่ประชุม'</em> ชัดเจน\n6. <strong>เวลาเลิกประชุม และ ลายมือชื่อ:</strong> ผู้จดรายงานการประชุม และผู้ตรวจรายงานการประชุม",
      keyCriteria: "ระบุองค์ประกอบหลัก: ชื่อการประชุม, วันเวลา/สถานที่, ผู้มา/ไม่มาประชุม, เนื้อหาตามวาระ+มติ, เวลาเลิก, ผู้จด/ผู้ตรวจรายงาน"
    },
    {
      id: "subj_saraban_50",
      number: 50,
      category: "งานสารบรรณ (อัตนัย)",
      score: 3,
      question: "50. การจัดทำรายงานการประชุม มีเทคนิคในการจับใจความ อย่างไร",
      modelAnswer: "1. <strong>ใช้หลัก 5W1H:</strong> จับประเด็นว่า ใคร (Who) ทำอะไร (What) ที่ไหน (Where) เมื่อไหร่ (When) ทำไม (Why) และอย่างไร (How)\n2. <strong>แยกแยะ 'ความเห็น' ออกจาก 'มติ':</strong> จับประเด็นการอภิปรายสั้นๆ และเน้นบันทึก <strong>'มติที่ประชุม (Action/Decision)'</strong> ให้ชัดเจนเด็ดขาด\n3. <strong>จดเฉพาะสาระสำคัญ:</strong> ไม่จำเป็นต้องจดคำต่อคำ ให้จับประเด็นเหตุผล ข้อโต้แย้งหลัก และข้อสรุปสุดท้าย\n4. <strong>บันทึกตัวเลขและผู้รับผิดชอบ:</strong> วันกำหนดส่งมอบงาน งบประมาณ และชื่อผู้ได้รับมอบหมายต้องถูกต้องแม่นยำ 100%",
      keyCriteria: "ระบุเทคนิค: ใช้ 5W1H, แยกมติออกจากความเห็น, บันทึกเฉพาะสาระสำคัญ, และบันทึกผู้รับผิดชอบ/กำหนดเวลาชัดเจน"
    },
    {
      id: "subj_saraban_51",
      number: 51,
      category: "งานสารบรรณ (อัตนัย)",
      score: 3,
      question: "51. หนังสือที่จัดทำขึ้นให้มีสำเนาคู่ฉบับไว้อย่างน้อยกี่ฉบับ",
      modelAnswer: "ให้มีสำเนาคู่ฉบับเก็บไว้ที่ส่วนราชการต้นเรื่องอย่างน้อย <strong>1 ฉบับ</strong> โดยให้ติดตรายางคำว่า 'สำเนาคู่ฉบับ' ด้วยหมึกสีแดง และมีลายมือชื่อผู้ร่าง ผู้พิมพ์ และผู้ตรวจทานกำกับไว้",
      keyCriteria: "ระบุตัวเลขอย่างน้อย '1 ฉบับ' (เก็บที่ต้นเรื่อง พร้อมตรายางและลายมือชื่อผู้ร่าง/พิมพ์/ทาน)"
    },
    {
      id: "subj_saraban_52",
      number: 52,
      category: "งานสารบรรณ (อัตนัย)",
      score: 3,
      question: "52. หนังสือที่ต้องปฏิบัติให้เร็วกว่าปกติ ต้องระบุชั้นความเร็ว และขนาดตัวอักษร อย่างไร",
      modelAnswer: "• <strong>ข้อความและตำแหน่งระบุ:</strong> ให้ประทับตราชั้นความเร็วด้วย <strong>หมึกสีแดง</strong> บนกึ่งกลางด้านบนของหนังสือ และบนหน้าซองจดหมาย\n• <strong>ขนาดตัวอักษร:</strong> ใช้ตัวพิมพ์ขนาด <strong>ไม่เล็กกว่าตัวพิมพ์โป้ง 32 พอยต์</strong> ให้เห็นได้ชัดเจน\n• <strong>ชั้นความเร็วที่ระบุ:</strong> ประทับคำว่า 'ด่วนที่สุด', 'ด่วนมาก', หรือ 'ด่วน'",
      keyCriteria: "ระบุ: หมึกสีแดง, ขนาดไม่เล็กกว่าตัวพิมพ์โป้ง 32 พอยต์, ประทับบนหนังสือและหน้าซอง"
    },
    {
      id: "subj_saraban_53",
      number: 53,
      category: "งานสารบรรณ (อัตนัย)",
      score: 3,
      question: "53. กรณีต้องการให้หนังสือส่งถึงผู้รับภายในเวลาที่กำหนด ควรระบุอะไรบ้าง",
      modelAnswer: "1. <strong>ประทับตราชั้นความเร็ว:</strong> ประทับ 'ด่วนที่สุด' หรือ 'ด่วนมาก' ด้วยหมึกสีแดง\n2. <strong>ระบุวันและเวลาอย่างชัดเจนในเนื้อความ:</strong> เช่น <em>'ขอให้จัดส่งข้อมูล/เข้าร่วมประชุม ภายในวันที่ ... เวลา ... น.'</em> หรือ <em>'ด่วนที่สุด ภายในกำหนดเวลา...'</em>\n3. <strong>ระบุเบอร์โทรศัพท์ติดต่อด่วน:</strong> ใส่ชื่อและหมายเลขโทรศัพท์มือถือ/ช่องทางติดต่อทันทีของผู้ประสานงานไว้ที่ส่วนท้ายหนังสือ",
      keyCriteria: "ระบุ: ประทับชั้นความเร็ว, กำหนดวันและเวลาเส้นตายชัดเจนในเนื้อความ, และใส่เบอร์ติดต่อด่วนเจ้าของเรื่อง"
    },
    {
      id: "subj_saraban_54",
      number: 54,
      category: "งานสารบรรณ (อัตนัย)",
      score: 3,
      question: "54. 'ระบบงานสารบรรณอิเล็กทรอนิกส์' หมายความว่า",
      modelAnswer: "<strong>ระบบงานสารบรรณอิเล็กทรอนิกส์ หมายความว่า:</strong> การปฏิบัติงานสารบรรณด้วยระบบสารสนเทศหรือระบบอิเล็กทรอนิกส์ โดยการจัดทำ การรับ การส่ง การเก็บรักษา การยืม การตรวจสอบ และการทำลายหนังสือราชการ กระทำผ่านเครือข่ายคอมพิวเตอร์หรือระบบดิจิทัล (e-Document) แทนการใช้กระดาษ เพื่อความสะดวกรวดเร็ว ประหยัด และปลอดภัย",
      keyCriteria: "นิยาม: การบริหารงานเอกสารราชการ (ทำ/รับ/ส่ง/เก็บ/ทำลาย) ผ่านระบบอิเล็กทรอนิกส์หรือดิจิทัลแทนกระดาษ"
    },
    {
      id: "subj_saraban_55",
      number: 55,
      category: "งานสารบรรณ (อัตนัย)",
      score: 3,
      question: "55. ท่านมีเทคนิคในการติดต่อประสานงาน ติดตามงาน ให้มีประสิทธิภาพ ได้อย่างไร",
      modelAnswer: "1. <strong>สื่อสารชัดเจนตรงประเด็น (Clarity):</strong> สรุปสิ่งที่ต้องการ ขอบเขตงาน และกำหนดส่ง (Deadline) ให้ชัดเจนตั้งแต่เริ่มต้น\n2. <strong>เลือกช่องทางที่เหมาะสม (Multi-channel):</strong> เรื่องด่วนให้โทรศัพท์หรือประสานโดยตรงก่อน แล้วส่งเอกสาร/อีเมลยืนยันเป็นลายลักษณ์อักษรตามหลัง\n3. <strong>มีตารางติดตามงาน (Follow-up Tracking):</strong> ทำบันทึก Check-list ติดตามงานล่วงหน้าก่อนถึงกำหนดส่ง 1-2 วัน ไม่รอจนวันสุดท้าย\n4. <strong>มนุษยสัมพันธ์และทัศนคติเชิงบวก (Empathy):</strong> สื่อสารอย่างสุภาพ ให้เกียรติ รับฟังปัญหา และพร้อมช่วยประสานแก้ไขข้อติดขัดร่วมกัน",
      keyCriteria: "ระบุเทคนิค: สื่อสารชัดเจน, ช่องทางเหมาะสม (โทร+อีเมลยืนยัน), ตารางติดตามงานล่วงหน้า, มนุษยสัมพันธ์เชิงบวก"
    },

    // หมวด 4: การเขียนจดหมายราชการ (ข้อ 71) ข้อละ 10 คะแนน
    {
      id: "subj_letter_71",
      number: 71,
      category: "การเขียนจดหมายราชการ (อัตนัย)",
      score: 10,
      question: "71. ให้เขียนจดหมายในรูปแบบเป็นทางการ ส่งถึงผู้อำนวยการ หน่วยงานอื่น จากผู้อำนวยการหน่วยงานท่าน โดยจำลองสถานการณ์ แจ้งเรื่องประกาศเปลี่ยนแปลงการใช้ระบบสารบรรณอิเล็กทรอนิกส์ใหม่ โดยแสดงองค์ประกอบที่ครบถ้วน และคำเขียนที่ถูกต้อง (เนื้อหาสั้นๆ ได้ใจความ)",
      modelAnswer: `ที่ สภก. ๑๐๒/๒๕๖๗                                     สำนักงานกลยุทธ์องค์กร สภากาชาดไทย
                                                      ๑๘๗๑ ถนนพระราม ๔ ปทุมวัน กทม. ๑๐๓๓๐
                                 ๑๕ มีนาคม ๒๕๖๗
เรื่อง  การเปลี่ยนผ่านการใช้งานระบบงานสารบรรณอิเล็กทรอนิกส์ (e-Saraban)
เรียน  ผู้อำนวยการสำนักบริหารทรัพยากรบุคคล

สิ่งที่ส่งมาด้วย  คู่มือการใช้งานระบบสารบรรณอิเล็กทรอนิกส์ใหม่ จำนวน ๑ ชุด

        ด้วย สำนักงานกลยุทธ์องค์กร สภากาชาดไทย ได้พัฒนาระบบงานสารบรรณอิเล็กทรอนิกส์ (e-Saraban) รูปแบบใหม่ เพื่อยกระดับประสิทธิภาพ ความรวดเร็ว และความปลอดภัยในการบริหารจัดการเอกสารราชการ สอดคล้องตามระเบียบสำนักนายกรัฐมนตรีว่าด้วยงานสารบรรณฯ

        ในการนี้ สำนักงานกลยุทธ์องค์กร ขอแจ้งเปลี่ยนแปลงการรับ-ส่งเอกสารราชการทุกประเภทผ่านระบบ e-Saraban ใหม่ ตั้งแต่วันที่ ๑ เมษายน ๒๕๖๗ เป็นต้นไป โดยท่านสามารถศึกษารายละเอียดขั้นตอนการปฏิบัติงานตามคู่มือสิ่งที่ส่งมาด้วย

        จึงเรียนมาเพื่อโปรดทราบและพิจารณาแจ้งบุคลากรในสังกัดถือปฏิบัติต่อไป
                                     ขอแสดงความนับถือ

                                 (นายพิศาล ยุทธศาสตร์)
                          ผู้อำนวยการสำนักงานกลยุทธ์องค์กร
กลุ่มงานสารบรรณและเทคโนโลยี
โทร. ๐ ๒๒๕๖ ๔๐๐๐ ต่อ ๑๒๓
ไปรษณีย์อิเล็กทรอนิกส์: saraban@redcross.or.th`,
      keyCriteria: "โครงสร้างหนังสือราชการภายนอกครบถ้วน: เลขที่หนังสือ, ส่วนราชการเจ้าของเรื่อง, วันที่, เรื่อง, คำขึ้นต้น (เรียน...), สิ่งที่ส่งมาด้วย, เนื้อความ 3 ย่อหน้า (เหตุผล-การดำเนินงาน-ความประสงค์ จึงเรียนมาเพื่อโปรด...), คำลงท้าย (ขอแสดงความนับถือ), ลายมือชื่อ/ตำแหน่ง, และเบอร์ติดต่อส่วนท้าย"
    },

    // หมวด 5: การพัสดุ - คำนวณ (ข้อ 72 - 74) ข้อละ 5 คะแนน
    {
      id: "math_proc_72",
      number: 72,
      category: "การพัสดุ (คำนวณ)",
      score: 5,
      question: "72. สินค้ารายการหนึ่ง จำนวน 10 ชิ้น มีมูลค่า 1 ล้านบาท ซึ่งได้รวม vat 7% แล้ว ดังนั้นราคาสินค้าต่อชิ้น ก่อนรวม vat ราคาชิ้นละเท่าใด",
      modelAnswer: "<strong>1. คำนวณราคารวม VAT ต่อ 1 ชิ้น:</strong>\n   = 1,000,000 บาท ÷ 10 ชิ้น\n   = <strong>100,000 บาท/ชิ้น</strong> (รวม VAT 7%)\n\n<strong>2. สูตรคำนวณถอด VAT 7% หาราคาก่อนรวม VAT:</strong>\n   ราคาก่อนรวม VAT = ราคารวม VAT ÷ 1.07\n   = 100,000 ÷ 1.07\n   = <strong>93,457.94 บาท/ชิ้น</strong>\n\n*(หรือคำนวณยอดรวม 10 ชิ้นก่อน VAT = 1,000,000 ÷ 1.07 = 934,579.44 บาท แล้วหาร 10 ชิ้น = 93,457.94 บาท)*\n\n<strong>ตอบ:</strong> ราคาสินค้าต่อชิ้น ก่อนรวม VAT ราคาชิ้นละ <strong>93,457.94 บาท</strong> (มีภาษีมูลค่าเพิ่ม 7% เท่ากับ 6,542.06 บาท)",
      keyCriteria: "แสดงวิธีคำนวณหาราคาต่อชิ้น (2.5 คะแนน) และสูตรถอด VAT 7% (÷ 1.07) ได้คำตอบถูกต้อง 93,457.94 บาท (2.5 คะแนน)"
    },
    {
      id: "math_proc_73",
      number: 73,
      category: "การพัสดุ (คำนวณ)",
      score: 5,
      question: "73. งานจ้างทำความสะอาด มีมูลค่าสัญญาปี 2563 เท่ากับ 10 ล้านบาท ต่อมาปี 2564 ผ่านการประกวดราคา มูลค่าสัญญาคงเหลือ 8.5 ล้านบาท สามารถลดค่าใช้จ่ายได้ คิดเป็นกี่เปอร์เซ็นต์ (%Cost Saving)",
      modelAnswer: "<strong>1. คำนวณจำนวนเงินที่ประหยัดได้ (Cost Saving Amount):</strong>\n   = มูลค่าสัญญาเดิม (ปี 2563) - มูลค่าสัญญาใหม่ (ปี 2564)\n   = 10 ล้านบาท - 8.5 ล้านบาท\n   = <strong>1.5 ล้านบาท</strong>\n\n<strong>2. สูตรคำนวณสัดส่วนเปอร์เซ็นต์ที่ประหยัดได้ (%Cost Saving):</strong>\n   %Cost Saving = (จำนวนเงินที่ลดได้ ÷ มูลค่าสัญญาเดิม) × 100\n   = (1.5 ÷ 10) × 100\n   = <strong>15%</strong>\n\n<strong>ตอบ:</strong> สามารถลดค่าใช้จ่ายได้คิดเป็น <strong>15% (Cost Saving 15%)</strong>",
      keyCriteria: "แสดงวิธีคำนวณหาผลต่าง 1.5 ล้านบาท (2.5 คะแนน) และคำนวณสัดส่วน % เทียบกับฐานเดิม 10 ล้าน ได้ 15% (2.5 คะแนน)"
    },
    {
      id: "math_proc_74",
      number: 74,
      category: "การพัสดุ (คำนวณ)",
      score: 5,
      question: "74. (ข้อ 73 ลำดับที่สองในข้อสอบ) เขียนตารางเปรียบเทียบราคา ผู้ขายที่ได้รับคัดเลือกและเหตุผลในการคัดเลือก สำหรับขออนุมัติจัดซื้อเก้าอี้ 10 ตัว ให้ผู้อนุมัติเข้าใจง่าย โดยใช้เกณฑ์ราคาต่ำสุด มีผู้เสนอราคาผ่านคุณสมบัติ 3 ราย เสนอเก้าอี้ spec เดียวกัน โดยผู้เสนอราคา ชื่อ A เสนอ ตัวละ 1,000 บาท ผู้เสนอราคา ชื่อ B เสนอ ตัวละ 1,500 บาท ผู้เสนอราคา ชื่อ C เสนอ ตัวละ 800 บาท",
      modelAnswer: "<strong>ตารางเปรียบเทียบราคาการจัดซื้อเก้าอี้ (จำนวน 10 ตัว)</strong>\n<div class=\"overflow-x-auto my-2\"><table class=\"w-full text-xs border-collapse border border-slate-300\"><thead><tr class=\"bg-slate-100\"><th class=\"border border-slate-300 p-2 text-center\">ลำดับ</th><th class=\"border border-slate-300 p-2 text-left\">ผู้เสนอราคา</th><th class=\"border border-slate-300 p-2 text-center\">คุณสมบัติ/สเปก</th><th class=\"border border-slate-300 p-2 text-right\">ราคา/ตัว</th><th class=\"border border-slate-300 p-2 text-center\">จำนวน</th><th class=\"border border-slate-300 p-2 text-right\">ราคารวม (บาท)</th><th class=\"border border-slate-300 p-2 text-center\">ลำดับราคา</th><th class=\"border border-slate-300 p-2 text-center\">ผลการพิจารณา</th></tr></thead><tbody><tr class=\"bg-emerald-50/70 font-semibold\"><td class=\"border border-slate-300 p-2 text-center\">1</td><td class=\"border border-slate-300 p-2\">ผู้เสนอราคา C</td><td class=\"border border-slate-300 p-2 text-center text-emerald-700\">ครบถ้วนตามสเปก</td><td class=\"border border-slate-300 p-2 text-right text-emerald-700\">800</td><td class=\"border border-slate-300 p-2 text-center\">10</td><td class=\"border border-slate-300 p-2 text-right text-emerald-700 font-bold\">8,000</td><td class=\"border border-slate-300 p-2 text-center\">ต่ำสุด (อันดับ 1)</td><td class=\"border border-slate-300 p-2 text-center text-emerald-700 font-bold\">คัดเลือก</td></tr><tr><td class=\"border border-slate-300 p-2 text-center\">2</td><td class=\"border border-slate-300 p-2\">ผู้เสนอราคา A</td><td class=\"border border-slate-300 p-2 text-center\">ครบถ้วนตามสเปก</td><td class=\"border border-slate-300 p-2 text-right\">1,000</td><td class=\"border border-slate-300 p-2 text-center\">10</td><td class=\"border border-slate-300 p-2 text-right\">10,000</td><td class=\"border border-slate-300 p-2 text-center\">อันดับ 2</td><td class=\"border border-slate-300 p-2 text-center text-slate-400\">-</td></tr><tr><td class=\"border border-slate-300 p-2 text-center\">3</td><td class=\"border border-slate-300 p-2\">ผู้เสนอราคา B</td><td class=\"border border-slate-300 p-2 text-center\">ครบถ้วนตามสเปก</td><td class=\"border border-slate-300 p-2 text-right\">1,500</td><td class=\"border border-slate-300 p-2 text-center\">10</td><td class=\"border border-slate-300 p-2 text-right\">15,000</td><td class=\"border border-slate-300 p-2 text-center\">อันดับ 3</td><td class=\"border border-slate-300 p-2 text-center text-slate-400\">-</td></tr></tbody></table></div>\n\n<strong>ผู้เสนอราคาที่ได้รับคัดเลือก:</strong> <strong>ผู้เสนอราคา C</strong>\n<strong>เหตุผลในการคัดเลือก:</strong> เนื่องจากเป็นผู้เสนอราคาที่มีคุณสมบัติถูกต้องครบถ้วนตามเงื่อนไข เสนอสินค้าตรงตามสเปกที่กำหนด และเสนอราคา <strong>ต่ำสุด</strong> เป็นเงิน 8,000 บาท (เฉลี่ยตัวละ 800 บาท) ซึ่งช่วยประหยัดงบประมาณของสภากาชาดไทยได้สูงสุด",
      keyCriteria: "จัดทำตารางเปรียบเทียบราคาชัดเจน (2.5 คะแนน), ระบุผู้ได้รับการคัดเลือกคือ 'ผู้เสนอราคา C' พร้อมเหตุผลถูกต้องตามเกณฑ์ราคาต่ำสุด (2.5 คะแนน)"
    }
  ]
};

if (typeof window !== "undefined") {
  window.OFFICIAL_EXAM_PAPER = OFFICIAL_EXAM_PAPER;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { OFFICIAL_EXAM_PAPER };
}
