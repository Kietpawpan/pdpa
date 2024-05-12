# pdpa

- [ภาพรวมงานคุ้มครองข้อมูลส่วนบุคคล](https://kietpawpan.github.io/pdpa/tasks.html)
```mermaid
sequenceDiagram
	Note over ผู้ควบคุม: บันทึกรายการกิจกรรมการประมวลผล (record of processing activities)
	Note over ผู้ควบคุม: กำหนดมาตรการคุ้มครองข้อมูลส่วนบุคคล
	Note over ผู้ควบคุม: ประกาศนโยบายคุ้มครองข้อมูลส่วนบุคคล (privacy policy)
	ผู้ควบคุม-->>เจ้าของ: แจ้งประกาศความเป็นส่วนตัว (privacy notice)
	Note over เจ้าของ: อ่าน/รับทราบ
	เจ้าของ->>ผู้ควบคุม:ให้/เก็บข้อมูลส่วนบุคคล
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
- [แนวทางการพิจารณาคำขอข้อมูลส่วนบุคคล](https://kietpawpan.github.io/pdpa/index.html)
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
			Regular_Password_Change-->Server_Backup
			Server_Backup-->[*]}}}
```
# การประเมินความเสี่ยง
เพื่อควบคุมให้มีความเสี่ยงต่ำหรือไม่มีนัยสำคัญ
1. ถ้ามีผลกระทบต่อสิทธิเสรีภาพสูง ต้องทำให้ข้อมูลให้ระบุตัวตนไม่ได้ เช่น เข้ารหัส หรือปกปิดบางส่วน
2. ถ้าข้อมูลจำเป็นต้องระบุตัวตนได้ ต้องทำให้มีผลกระทบต่ำ เช่น ปกปิดบางส่วน ป้องกันการเข้าถึง
3. ถ้าข้อมูลถูกละเมิดแล้ว ระบบทำงานผิดปกติ ต้องสำรองข้อมูล และมีระบบตรวจจับการละเมิด
   
```mermaid
quadrantChart
    title Risk of Personal Data Breach
    x-axis Unidentificable --> Identificable
    y-axis Not Affect Rights/Operation --> Affect Rights/Operation
    quadrant-1 High Risk
    quadrant-2 Moderate Risk
    quadrant-3 Negligible Risk
    quadrant-4 Low Risk
	Server Access: [0.3, 0.9]
    	Email leak: [0.9, 0.9]
    Index Browsing: [0.9, 0.7]
    National ID Leak: [0.78, 0.34]
    Sever damage: [0.2, 0.7]
```
```mermaid
quadrantChart
    title Risk Management
    x-axis Unidentificable --> Identificable
    y-axis Not Affect Rights/Operation --> Affect Rights/Operation
    quadrant-1 High Risk
    quadrant-2 Moderate Risk
    quadrant-3 Negligible Risk
    quadrant-4 Low Risk
	Server Login System: [0.5, 0.4]
    	Confidential Email: [0.9, 0.2]
    Disable Index Browsing: [0.7, 0.3]
    Hashed National ID: [0.1, 0.34]
    Server Data Backup: [0.6, 0.1]
```
# Information Assets
```mermaid
block-beta
  columns 3
  Z["Client's device"]:3
  block:group1:2
    columns 2
    Mailbox PC
  end
  PPT
  block:group2:3
    %% columns auto (default)
    A["LINE OA"] B["e-Tracking Server"] C["Meeting Room"] D["Meeting Document"]
end
  block:group3:3
  	Folder Table Bin
end
```
# Risk Identification
```mermaid
stateDiagram
   direction TB

   accTitle: e-Tracking Risk
   accDescr: This is an accessible description

   classDef notMoving fill:grey
   classDef movement font-style:italic;
   classDef badBadEvent fill:#f00,color:white,font-weight:bold,stroke-width:2px,stroke:yellow

   [*] --> eRequest:::notMoving
   eRequest--> eMail:::movement
   eMail --> Checked:::badBadEvent
	Checked:::badBadEvent-->Deleted:::badBadEvent
Checked:::badBadEvent-->Forwarded:::badBadEvent
   Checked:::badBadEvent --> Printed:::badBadEvent
Printed:::badBadEvent-->Coppied:::badBadEvent
Coppied:::badBadEvent-->Delivered:::badBadEvent
Coppied:::badBadEvent-->DocAndPPTFiles:::badBadEvent
DocAndPPTFiles:::badBadEvent-->Meeting:::badBadEvent
Meeting:::badBadEvent-->MeetingReport:::badBadEvent
MeetingReport:::badBadEvent-->Reply:::badBadEvent
Reply:::badBadEvent-->eTrackingUpdated:::badBadEvent
eTrackingUpdated:::badBadEvent-->eTracking:::badBadEvent
eTracking:::badBadEvent-->payFee:::badBadEvent
payFee:::badBadEvent-->Receipt:::badBadEvent
Receipt:::badBadEvent-->GetDocument:::badBadEvent
GetDocument:::badBadEvent-->DestroyData:::badBadEvent
DestroyData:::badBadEvent-->[*]
```
# Key Risk with Email
```mermaid
mindmap
  Data Breach((mindmap))
    Confidentiality
      แอบดูข้อมูลในอีเมล
      ::icon(fa fa-book)
      เปิดเผยคำขอโดยมิชอบ ส่งต่อไปยังบุคคลอื่น แอบอ่านคำขอที่เป็นกระดาษ แอบทำสำเนาหรือถ่ายรูป
    Availability
      อีเมลถูกเปลี่ยนรหัสโดย hacker
      เข้าใช้อีเมลไม่ได้
        รหัสผ่าน
            ลืมรหัสผ่าน
            ไม่ทำตามเงื่อนไขของผู้ให้บริการ
    Integrity
      Pen and paper
      Mermaid
```
