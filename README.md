# pdpa
ข้อมูลส่วนบุคคล ถูกเก็บรวบรวมไว้ 2 รูปแบบ คือ ในกระดาษและในระบบอิเล็กทรอนิกส์
1. ข้อมูลในกระดาษ สามารถคุ้มครองโดยกำหนดชั้นความลับ และปฏิบัติตามระเบียบว่าด้วยการรักษาความลับของราชการ พ.ศ. 2544
2. ข้อมูลในระบบอิเล็กทรอนิกส์ สามารถคุ้มครองโดยการรักษาความมั่นคงปลอดภัยไซเบอร์เป็นการเพิ่มเติม
ทั้งนี้ ต้องปฏิบัติตามกฎหมายที่เกี่ยวข้อง ดังนี้   
```mermaid
timeline
    title Data Laws in Thailand
    2540 : Official Information Act (OIA)
    2562 : Personal Data Protection Act (PDPA)
         : Public Administration and Services via Digital Systems Act
	 : Cybersecurity Act
    2565 : Official Electronic Operation Act
    2566 : Cybersecurity Policy
```
Repository นี้ พิจารณาเฉพาะด้านการรักษาความมั่นคงปลอดภัยไซเบอร์

# Cybersecurity
ดำเนินการตาม [ประมวลแนวทางปฏิบัติและกรอบมาตรฐานด้านการรักษาความมั่นคงปลอดภัยไซเบอร์](https://kietpawpan.github.io/pdpa/pdf/2564cyberGuide.PDF)
## 1. หน่วยงานโครงสร้างพื้นฐานสำคัญ
```mermaid
block-beta
  columns 3
  Z["แผนการตรวจสอบด้านการรักษาความมั่นคงปลอดภัยไซเบอร์"]:3
  block:group1:3
  %% columns auto (default)
    ประเมินความเสี่ยงด้านการรักษาความมั่นคงปลอดภัยไซเบอร์
    แผนรับมือภัยคุกคามไซเบอร์
 end
  block:group2:3
    %% columns auto (default)
    Identify Protect Detect Respond Recover
end
```
> [!Note]
> ต้องตรวจสอบอย่างน้อย ปีละ 1 ครั้ง
> ### 1.1 ผลกระทบทางธุรกิจ
> 1. ผู้ได้รับผลกระทบ คือ ประชาชนผู้ยื่นคำขอข้อมูลข่าวสารของ ทส.
> 2. ขั้นตอนที่กระทบ คือ การแสดงคู่มือประชาชน การยื่นคำขอ และการติดตามสถานะคำขอ
>
> ### 1.2 บริการที่สำคัญ
> ### 1.3 การปฏิบัติตามประมวลแนวทางปฏิบัติ
> ปฏิบัติตามประมวลแนวทางปฏิบัติและกรอบมาตรฐานด้านการรักษาความมั่นคงปลอดภัยไซเบอร์ พ.ศ. 2564
> ### 1.4 กำหนดนโยบายการบริหารความเสี่ยงด้านความมั่นคงปลอดภัยไซเบอร์

# [ภาพรวมงานคุ้มครองข้อมูลส่วนบุคคล](https://kietpawpan.github.io/pdpa/tasks.html)

## การประเมินความเสี่ยง
บริการที่สำคัญ
> ระบบ e-Request มีการเก็บรวบรวมข้อมูลส่วนบุคคล
```mermaid
    C4Context
      title e-Request System Context
      Enterprise_Boundary(b0, "ขอบเขตของระบบงานบริการข้อมูลข่าวสาร") {
        Person(customerA, "Customer A", "ผู้ขอข้อมูลข่าวสาร โดยระบุข้อมูลส่วนบุคคลเพื่อแสดงตน")
 	Person(customerB, "Customer D",  "ผู้ขอข้อมูลข่าวสาร โดยระบุข้อมูลส่วนบุคคลเพื่อแสดงตน")
	Person_Ext(customerC, "Customer C", "desc")

      

        System(SystemAA, "e-Request Web Application System", "อนุญาตให้ผู้ขอกรอก e-Form เพื่อสร้างคำขอข้อมูลข่าวสารของราชการและคัดลอกพื่อส่งคำขอทางอีเมล")

        Enterprise_Boundary(b1, "MNRE") {


          System_Boundary(b2, "Elastic Cloud Server") {
            System(SystemA, "e-Tracking User Interface", "รับรหัสคำขอ ตรวจสอบ และรายงานสถานะคำขอ")
            System(SystemB, "e-Tracking Database", "เก็บข้อมูลสถานะคำขอและรหัสคำขอ")
            System(Apache, "Web Server Files", "เก็บข้อมูลพื้นฐานของ Web Server")

          }

          System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")
      
          Boundary(b3, "MNRE Office Space", "เจ้าหน้าที่ ศบร.ทส.") {
            SystemQueue(SystemF, "Personal Computer", "อุปกรณ์สำรองข้อมูล")
            SystemQueue_Ext(SystemG, "Computer Tablet", "อุปกรณ์สำรองข้อมูล")
          }
        }
      }

      BiRel(customerA, SystemAA, "Uses")
      BiRel(SystemAA, SystemA, "Uses")
      Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")
      Rel(SystemC, customerA, "Reply")
      Rel(SystemF, SystemB, "Edit")
      BiRel(Apache, SystemF, "Setting/Back up")
      Rel(Apache, SystemG, "Back up")

      UpdateElementStyle(customerA, $fontColor="white", $bgColor="grey", $borderColor="red")
      UpdateRelStyle(customerA, SystemAA, $textColor="blue", $lineColor="blue", $offsetX="5")
      UpdateRelStyle(SystemAA, SystemE, $textColor="blue", $lineColor="blue", $offsetY="-10")
      UpdateRelStyle(SystemAA, SystemC, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")
      UpdateRelStyle(SystemC, customerA, $textColor="red", $lineColor="red", $offsetX="-50", $offsetY="20")

      UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")


```
### ระบุความเสี่ยง
1. การเข้าถึงไฟล์ใน server ผ่าน Index Browing 
2. การ login เข้าเครื่อง sever โดยปราศจากอำนาจหรือโดยมิชอบ
3. การดักจับข้อมูลผ่าน http
4. ข้อมูลรั่วไหลจากสื่อบันทึกข้อมูลแบบถอดได้หรืออุปกรณ์แบบพกพา
5. ระบบ server ถูกโจมตี จนหยุดทำงาน         
   
### วิเคราะห์ความเสี่ยง
1. ติดตั้ง Server โดยไม่ได้ตั้งค่าปิด Index Browsing ทำให้ผู้ใช้มองเห็นไฟล์ในกรณีที่ Folder นั้น ไม่มีหน้า index
2. มีผู้แอบใช้ password ของ Admin ในการ login เข้าสู่ ESC
3. http://esc.mnre.go.th ไม่ปลอดภัย
4. การ backup ข้อมูลในสื่อบันทึกแบบถอดได้ หรืออุปกรณ์แบบพกพา อาจทำให้ข้อมูลรั่วไหล กรณีสุญหายหรือถูกโจรกรรม
5. ระบบ server ถูกโจมตีโดย jacker ทำให้ระบบใช้งานไม่ได้ เช่น ไวรัส การใส่ scripts การเปลี่ยนหน้า index และขโมยข้อมูล
   
### ประเมินค่าความเสี่ยง
1. ร้ายแรง
2. ร้ายแรง
3. ร้ายแรง
4. ร้ายแรง
5. ร้ายแรง

### Cybersecurity Measures 
การควบคุมความมั่นคงปลอดภัยไซเบอร์
1. ตั้งค่าเครื่องแม่ข่าย เพื่อห้ามฟังก์ชัน Index Browsing และปกปิดข้อมูลเกี่ยวกับ IP Addess รวมถึงชื่อโปรแกรมและรุ่นของ Web Server Software
2. ใช้รหัสผ่านเข้าเครื่องคอมพิวเตอร์แม่ข่าย ที่คาดเดายาก (strong password)
3. ติดตั้งใบรับรองความปลอดภัยอิเล็กทรอนนิกส์ (SSL Certificate) เพื่อเข้ารหัสการเชื่อมต่อเครื่องแม่ข่าย (https)
4. ไม่มีการเก็บข้อมูลในสื่อบันทึกข้อมูลแบบถอดได้หรืออุปกรณ์เคลื่อนที่ และตั้งรหัสสำหรับ PC ที่เก็บสำรองไฟล์
5. ติดตั้ง Firewall, Web Application Firewall, ระบบป้องกัน DDoS Attack, และโปรแกรม Antivirus, Update ซอฟแวร์ และ Operating System เป็นระยะ
6. สร้างความตระหนักรู้เรื่อง Cybersecurity
7. จัดทำแผนความต่อเนื่องทางธุรกิจ (Business Continuty Plan)
   
# งานคุ้มครองข้อมูลส่วนบุคคล   
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
[มาตการหลัก 5 ประการ](https://kietpawpan.github.io/pdpa/5measures.html)
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
# Key Risks with Email
```mermaid
mindmap
  Root((Mailbox))
    Confidentiality
      แอบดูข้อมูลในอีเมล
      ::icon(fa fa-book)
      เปิดเผยคำขอโดยมิชอบ
        ส่งต่อไปยังบุคคลอื่น
        แอบอ่านคำขอที่เป็นกระดาษ
        แอบทำสำเนาหรือถ่ายรูป
    Availability
      อีเมลถูกเปลี่ยนรหัสโดย hacker
      เข้าใช้อีเมลไม่ได้
        รหัสผ่าน
            ลืมรหัสผ่าน
        ไม่ทำตามเงื่อนไขบริการ
    Integrity
      ผู้ขอ
         กรอกข้อมูลคลาดเคลื่อน
         กรอกข้อมูลเท็จ
         กรอกข้อมูลไม่ครบถ้วน
      เจ้าหน้าที่
         สั่งพิมพ์หรือจัดชุดเอกสารคลาดเคลื่อน
```
>[!TIP]
> มาตรการเชิงองค์กร
> - จัดทำแนวปฏิบัติ แจ้งเวียนเพื่อทราบและถือปฏิบัติโดยเคร่งครัด
> - ห้ามส่งต่ออีเมลไปยังบุคคลอื่น
> - สั่งพิมพ์เป็นเอกสาร แล้วกำหนดเป็นข้อมูลข่าวสารลับ
> - กำชับเจ้าหน้าที่ให้ปฏิบัติตามระบียบว่าด้วยการรักษาความลับของทางราชการ พ.ศ. 2540 และที่แก้ไขเพิ่มเติมอย่างเคร่งครัด
> 
> มาตรการเชิงเทคนิค
> - ตั้งรหัสผ่านที่คาดเดายาก (strong password) และเปลี่ยนทุก 90 วัน
> - ปฏิบัติตามเงื่อนไขของผู้ให้บริการอีเมล
> - เก็บรหัสผ่านไว้ในที่ปลอดภัย
> - ไม่เปิดคอมพิวเตอร์ทิ้งไว้ และต้องใช้รหัสผ่านในการเปิดเครื่อง
> - แจ้งเตือนผ่าน App e-Request ให้ผู้ขอกรอกข้อมูลให้ครบถ้วนถูกต้อง

# การละเมิด
ดำเนินการตาม [คู่มือการปฏิบัติตามหลักเกณฑ์และวิธีการแจ้งเหตุการละเมิดข้อมูลส่วนบุคคล พ.ศ. 2565](https://kietpawpan.github.io/pdpa/lamerd.html)
```mermaid
flowchart TD
 
    A[ได้รับแจ้งเหตุละเมิดข้อมูลส่วนบุคคล ตามข้อ 5] --> B{น่าเชื่อถือ?} 
    B --Yes -->C[ผู้ควบคุมข้อมูล ตรวจสอบข้อเท็จจริง ตามข้อ 5]
	B --No -->D[เสร็จสิ้นกระบวนการ]
	C-->E{เสี่ยงกระทบสิทธิเสรีภาพบุคคล? \nตามข้อ 5 อนุ 3}
	E --ระบุตัวตนได้ นำไปใช้ได้-->F{เสี่ยงสูงตามข้อ 5 อนุ 4 \nประกอบข้อ 12?}
	E --ระบุตัวตนไม่ได้ นำไปใช้ไม่ได้-->I[ดำเนินมาตรการ ระงับ ตอบสนอง แก้ไข ฟื้นฟู \nป้องกัน ทบทวนมาตรการ ตามข้อ 5 อนุ 5]-->D
	F--No-->K{ภายใน 72 ชม.?}
	K--Yes-->J[แจ้งเหตุละเมิดต่อ สคส. ภายใน 72 ชม. \nตามข้อ 5 อนุ 3]-->I
	K--No-->L{ภายใน 15 วัน?}
	L--Yes-->M[ขอยกเว้นความผิดจากการแจ้งเหตุละมิดล่าช้า \nตามข้อ 7]-->I
	L--No-->N[ต้องระวางโทษปรับทางปกครองไม่เกิน 3 ล้านบาท \nตามมาตรา 83 ประกอบมาตรา 37]:::warning
       classDef warning stroke:#f00
	F --Yes -->G1[ป้องกัน ระงับ หรือแก้ไขให้การละเมิดสิ้นสุดทันที \nตามข้อ 5 อนุ 2]-->H[แจ้งเจ้าของข้อมูลทราบเหตุ \nและแนวทางเยียวยา ตามข้อ 5 อนุ 4 และข้อ 10]-->K
```

# ร่างแผน
```mermaid
     gantt
	title แผนปฏิบัติการเพื่อคุ้มครองข้อมูลส่วนบุคคล

	tickInterval 1month
  	weekday monday


    	section ต.ค. 67
		กกล. ทำหน้าที่ Admin ของระบบแพลตฟอร์มภาครัฐรองรับการปฏิบัติตามกฎหมายคุ้มครองข้อมูลส่วนบุคคลของ สป.ทส.: a11, 2024-10-01, 365d
		ศทอ. ปรับปรุงธรรมาภิบาลข้อมูลของ สป.ทส. ตามมาตรฐานรัฐบาลดิจิทัล: a1, 2024-10-01, 60d
    	section ธ.ค. 67
		กกล. จัดให้มีช่องทางการใช้สิทธิ์ของเจ้าของข้อมูลส่วนบุคคล และเผยแพร่บนเว็บไซต์ของหน่วยงาน: a7, after a1, 7d
    	section ม.ค. 68
		กกล. จัดให้มีช่องทางการแจ้งเหตุละเมิดข้อมูลส่วนบุคคล: a8, after a7, 7d
		กกล. จัดทำคู่มือสำหรับเจ้าหน้าที่ กรณีเกิดเหตุละเมิดข้อมูลส่วนบุคคล: a9, after a8, 30d
    	section ก.พ. 68
		กกล. จัดทำแนวทางการพิจารณาคำขอให้เปิดเผยข้อมูลส่วนบุคคล: a10, after a9, 30d 
	section ม.ค. 68
		ศทอ. เสนอคณะกรรมการธรรมาภิบาลข้อมูลของ สป.ทส. พิจารณาเห็นชอบธรรมาภิบาลข้อมูลของ สป.ทส. ฉบับปรับปรุง: a2, after a1, 15d
		ศทอ. จัดทำนโยบายคุ้มครองข้อมูลส่วนบุคคล : a3, after a2, 60d
	section เม.ย. 68
		ศทอ. จัดทำมาตรการรักษาความมั่นคงปลอดภัยไซเบอร์ รวมถึงข้อมูลส่วนบุคคล: a4, after a3, 60d
	section ก.ค. 68
		กกล. จัดทำบันทึกรายการกิจกรรมการประมวลผลข้อมูลส่วนบุคคล: a5, after a4, 60d
	section ต.ค. 68
		ทุกหน่วยงาน จัดทำประกาศความเป็นส่วนตัว (privacy notice): a6, after a5, 30d
```
