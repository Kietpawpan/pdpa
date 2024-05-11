# pdpa

- [ภาพรวมงานคุ้มครองข้อมูลส่วนบุคคล](https://kietpawpan.github.io/pdpa/tasks.html)
```mermaid
sequenceDiagram
	ผู้ควบคุม-->>เจ้าของ: แจ้งประกาศความเป็นส่วนตัว (Privacy Notice)
	Note over เจ้าของ: อ่าน/รับทราบ
	เจ้าของ->>ผู้ควบคุม:ให้/เก็บข้อมูลส่วนบุคคล
	Note over ผู้ควบคุม: กำหนดมาตรการคุ้มครองข้อมูลส่วนบุคคล
	Note over ผู้ควบคุม: บันทึกกิจกรรมการประมวลผลข้อมูลส่วนบุคคล
	Note over ผู้ควบคุม: จัดให้มีช่องทางการใช้สิทธิของเจ้าของข้อมูลส่วนบุคคล
	เจ้าของ-->>ผู้ควบคุม:ขอใช้สิทธิ์ (ถ้ามีความประสงค์)
	Note over ผู้ควบคุม: พิจารณาคำขอเกี่ยวข้องข้อมูลส่วนบุคคลและดำเนินการตามกฎหมาย
	Note over ผู้ควบคุม: จัดให้มีช่องทางการแจ้งเหตุละเมิดข้อมูลส่วนบุคคล
	เจ้าของ-->>ผู้ควบคุม:แจ้งเหตุละเมิด (ถ้าพบ)
	Note over ผู้ควบคุม: ตรวจสอบข้อเท็จจริงการละเมิด
	ผู้ควบคุม-->>เจ้าของ: แจ้งเหตุละเมิด (ถ้ามีความเสี่ยงสูงต่อสิทธิเสรีภาพของเจ้าของ)
	ผู้ควบคุม-->>สคส.: แจ้งเหตุละเมิด (ถ้ามีความเสี่ยงต่อสิทธิเสรีภาพของเจ้าขอ)
	Note over ผู้ควบคุม: ทบทวนมาตรการคุ้มครองข้อมูลส่วนบุคคล
	ผู้ควบคุม-->>ผู้ประมวลผล: จัดทำข้อตกลง
```

- [แนวทางการพิจารณาคำขอข้อมูลส่วนบุคคล](https://kietpawpan.github.io/pdpa/)
  ```mermaid
  flowchart LR
    A[รับคำขอ<br>ข้อมูลส่วนบุคคล] --> B{ผู้ขอเป็นเจ้าของ?}
    B -->|Yes| C{มีกฎหมายห้ามเปิดเผย<br>หรือศาลสั่งห้าม<br>หรือกระทบสิทธิเสรีภาพ<br>ของบุคคลอื่น?}
         B -->|No| E{ได้รับความยินยอม?}
         C --> |Yes| D[<font color="red">ไม่เปิดเผย </font><br><a href="#30v2">ตามมาตรา 30 วรรค 2 PDPA</a>]-->N[บันทึกการปฏิเสธคำขอ<br><a href="#30v3">ตามมาตรา 30 วรรคสาม</a><br>ประกอบ<a href="#39">มาตรา 39</a> PDPA]
  C-->|No| G[<font color="blue">เปิดเผย</font> <br><a href="#30">ตามมาตรา 30 PDPA</a>]
  E-->|Yes| C
  E-->|No| F{กฎหมายอื่นให้เปิดเผย?}
  F-->|Yes| H[<font color="blue">เปิดเผย</font><br>ตาม<a href="#24ioa">มาตรา 24</a> OIA ประกอบ<a href="#19">มาตรา 19</a> PDPA]
  F-->|No| I{ยกเว้นตาม<a href="#24">มาตรา 24</a> หรือ<br><a href="#26">มาตรา 26</a> PDPA?}
  I-->|Yes| K[<font color="blue">เปิดเผย</font><br>ตาม<a href="#27">มาตรา 27</a> PDPA]
  I-->|No| J[<font color="red">ไม่เปิดเผย</font><br>ตาม<a href="#27">มาตรา 27 PDPA</a>]-->N
  K-->L[บันทึกการเปิดเผยใน ROPA<br>ตาม<a href="#27v3">มาตรา 27 วรรคสาม</a>]
  K-->M[ผู้ขอต้องไม่ใช้หรือเปิดเผยเพื่อวัตถุประสงค์อื่น<br>นอกเหนือจากที่แจ้ง<br>ตาม<a href="#27v2">มาตรา 27 วรรคสอง</a>]
  H-->P{เปิดเผยต่อ จนท.<br>ภายในหน่วยงานของรัฐ<br>หรือใช้ตามวัตถุประสงค์ปกติ<br>ภายในหน่วยงานของรัฐ?}
  P-->|Yes| O[จบ]
  P-->|No| Q[จัดทำบัญชีแสดงการเปิดเผย<br><a href="#24v2ioa">ตามมาตรา 24 วรรคสอง</a> IOA และ<br><a href="pdf/reg24v2ioa.pdf">กฎกระทรวง</a>]
  G-->R[ดำเนินการตามคำขอโดยไม่ชักช้า<br>แต่ต้องไม่เกิน 30 วัน<br>นับแต่วันที่ได้รับคำขอ<br>ตาม<a href="#30v4">มาตรา 30 วรรคสี่</a> PDPA]
```
- [มาตรการคุ้มครองข้อมูลส่วนบุคคล](https://kietpawpan.github.io/pdpa/measures.html)
  ```mermaid
  stateDiagram-v2
	[*]-->มาตรการเชิงองค์กร
	state มาตรการเชิงองค์กร {
		[*]-->จัดฝึกอบรมเกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคล
		จัดฝึกอบรมเกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคล-->เวียนประกาศนโยบายคุ้มครองข้อมูลส่วนบุคคล
		เวียนประกาศนโยบายคุ้มครองข้อมูลส่วนบุคคล-->ปฏิบัติตามพระราชบัญญัติข้อมูลข่าวสารของราชการฯ
		ปฏิบัติตามพระราชบัญญัติข้อมูลข่าวสารของราชการฯ-->ปฏิบัติตามระเบียบว่าด้วยการรักษาความลับของทางราชการฯ
		ปฏิบัติตามระเบียบว่าด้วยการรักษาความลับของทางราชการฯ-->กำหนดผู้มีสิทธิเข้าถึงเครื่องแม่ข่ายเพียงคนเดียว
		กำหนดผู้มีสิทธิเข้าถึงเครื่องแม่ข่ายเพียงคนเดียว-->เก็บข้อมูลให้น้อยที่สุดและเท่าที่จำเป็น
		เก็บข้อมูลให้น้อยที่สุดและเท่าที่จำเป็น-->มีระบบทำลายเอกสารตามระเบียบว่าด้วยงานสารบรรณฯ
		มีระบบทำลายเอกสารตามระเบียบว่าด้วยงานสารบรรณฯ-->ซักซ้อมแนวปฏิบัติกรณีพบเหตุละเมิดข้อมูลส่วนบุคคล
		ซักซ้อมแนวปฏิบัติกรณีพบเหตุละเมิดข้อมูลส่วนบุคคล-->ใช้ระบบจีพีพีซีรองรับการปฏิบัติตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
		ใช้ระบบจีพีพีซีรองรับการปฏิบัติตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล-->ตรวสอบบุคคลภายนอกที่เข้าออกอาคารอย่างเคร่งครัด
		ตรวสอบบุคคลภายนอกที่เข้าออกอาคารอย่างเคร่งครัด-->มาตรการเชิงกายภาพ
	state มาตรการเชิงกายภาพ {
		[*]--> ล๊อคห้องเก็บเครื่องแม่ข่าย
			ล๊อคห้องเก็บเครื่องแม่ข่าย-->ล๊อคตู้เก็บข้อมูลส่วนบุคคล
			ล๊อคตู้เก็บข้อมูลส่วนบุคคล-->ทำลายหรือลบข้อมูลเมื่อครบระยะเวลาเก็บรักษา
			ทำลายหรือลบข้อมูลเมื่อครบระยะเวลาเก็บรักษา-->เก็บรหัสเข้าระบบงานในที่ปลอดภัย
			เก็บรหัสเข้าระบบงานในที่ปลอดภัย-->ไม่เปิดคอมพิวเตอร์ทิ้งไว้
			ไม่เปิดคอมพิวเตอร์ทิ้งไว้-->ไม่ส่งต่ออีเมลที่มีข้อมูลส่วนบุคคล
			ไม่ส่งต่ออีเมลที่มีข้อมูลส่วนบุคคล-->ปกปิดข้อมูลส่วนบุคคลในเอกสารให้มากที่สุดเท่าที่สามารถกระทำได้
			ปกปิดข้อมูลส่วนบุคคลในเอกสารให้มากที่สุดเท่าที่สามารถกระทำได้-->มาตรการเชิงเทคนิค
	state มาตรการเชิงเทคนิค {
		[*]--> Firewall
			Firewall-->Web_Application_Firewall
			Web_Application_Firewall-->DDoS_Attack_Prevention
			DDoS_Attack_Prevention-->Antivirus
			Antivirus-->Secure_Server_Installation
			Secure_Server_Installation-->Best_Secure_Hash_Algorithm
			Best_Secure_Hash_Algorithm-->Regular_Softwares_Update
			Regular_Softwares_Update-->Comlicate_Password
			Comlicate_Password-->Secure_Socket_Layer
			Secure_Socket_Layer-->Form_Validation
			Form_Validation-->Htmlspecialcharacter
			Htmlspecialcharacter-->Enable_Logging
			Enable_Logging-->Regular_Password_Change
			Regular_Password_Change-->[*]}}}
```
