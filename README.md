# pdpa

- [ภาพรวมงานคุ้มครองข้อมูลส่วนบุคคล](https://kietpawpan.github.io/pdpa/tasks.html)

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


- [แนวทางการพิจารณาคำขอข้อมูลส่วนบุคคล](https://kietpawpan.github.io/pdpa/)
- [มาตรการคุ้มครองข้อมูลส่วนบุคคล](https://kietpawpan.github.io/pdpa/measures.html)
