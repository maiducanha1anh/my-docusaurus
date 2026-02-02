---
slug: tim-hieu-python
sidebar_position: 1
title: Tìm hiểu về ngôn ngữ Python – Từ tổng quan đến cơ chế hoạt động bên trong
authors: [admin]
tags: [python, interpreted, compiled, cpython, memory-management]
---
## 1. Tìm hiểu chung về ngôn ngữ Python

Python là một ngôn ngữ lập trình bậc cao (high-level language), được tạo ra bởi **Guido van Rossum** và chính thức ra mắt lần đầu vào năm **1991**. Python được thiết kế với triết lý **đơn giản – dễ đọc – dễ học – dễ bảo trì**, giúp lập trình viên tập trung nhiều hơn vào logic nghiệp vụ thay vì cú pháp phức tạp.

### Đặc điểm nổi bật của Python

- Cú pháp gần với ngôn ngữ tự nhiên, dễ đọc
- Ngôn ngữ **đa mục đích**: Web, AI, Data Science, Automation, Game, IoT
- Hệ sinh thái thư viện phong phú (NumPy, Pandas, TensorFlow, Django, Flask, ...)
- Chạy đa nền tảng: Windows, Linux, macOS
- Cộng đồng lớn, tài liệu đầy đủ

Python đặc biệt phù hợp cho:
- Sinh viên IT
- Người mới học lập trình
- Các hệ thống cần phát triển nhanh (Rapid Development)

---

## 2. Interpreted vs Compiled – Cơ chế thông dịch và biên dịch

Khi nói đến cách một ngôn ngữ được thực thi, ta thường phân biệt hai khái niệm: **Compiled** và **Interpreted**.

### Compiled Language (Ngôn ngữ biên dịch)

Ví dụ: C, C++, Go

**Quy trình:**

Source Code (.c) <br />
↓ <br />
Compiler <br />
↓ <br />
Machine Code (.exe) <br />


Đặc điểm:
- Biên dịch **toàn bộ** chương trình trước khi chạy
- Chạy nhanh, hiệu năng cao
- Phụ thuộc hệ điều hành và kiến trúc CPU
- Khó debug hơn

---

### Interpreted Language (Ngôn ngữ thông dịch)

Ví dụ: Python, JavaScript, PHP

Quy trình:

Source Code (.py) <br />
↓ <br />
Interpreter <br />
↓ <br />
Thực thi từng dòng <br />


Đặc điểm:
- Không cần tạo file `.exe`
- Dễ debug, dễ học
- Thường chậm hơn compiled language

⚠️ **Python không hoàn toàn là interpreted thuần túy** – điều này sẽ rõ hơn khi tìm hiểu CPython.

---

## 3. Workflow của Python – Từ lúc gõ code đến khi chương trình chạy

Khi bạn chạy một file Python (`file.py`), Python không thực thi trực tiếp source code ngay lập tức.

### Workflow tổng quát

IDE <br />
 ↓ (Save) <br />
file.py (Ổ cứng) <br />
 ↓ (Run) <br />
Source Code (RAM) <br />
 ↓ <br />
Lexical Analysis → Tokens (RAM) <br />
 ↓ <br />
Parsing → AST (RAM) <br />
 ↓ <br />
Compile <br />
 ↓ <br />
Bytecode (RAM + có thể ghi .pyc vào disk) <br />
 ↓ <br />
Python Virtual Machine (RAM) <br />
 ↓ <br />
CPU thực thi <br />


### Phân tích chi tiết

**Giai đoạn 1: Python đọc file.py vào bộ nhớ**
(Python Source Code → RAM)

Khi bạn chạy: 

```bash
python main.py
```
Đầu vào :
- File.py
- Vị trí: ổ cứng 

Python làm gì?
- Hệ điều hành đọc nội dung file.py
- Nạp toàn bộ source code vào RAM
- Chuyển code sang dạng chuỗi ký tự (text)

Đầu ra :
- Source code Python nằm trong RAM
- File.py vẫn còn trên ổ cứng, không bị thay đổi

📌 Từ thời điểm này:

Python chỉ làm việc với code trong RAM

Ổ cứng chỉ còn vai trò lưu trữ

---

**Giai đoạn 2: Lexical Analysis & Parsing**
(Source Code → AST)

2.1 Lexical Analysis (Phân tích từ vựng)

Đầu vào :
- Source code (text) trong RAM
Ví dụ :
```bash
a = 10
```
Python làm gì?

Chia code thành các token

a → IDENTIFIER

= → OPERATOR

10 → NUMBER

📌 Lúc này:

Python chưa hiểu logic

Chỉ mới hiểu “ký hiệu”

2.2 Parsing (Phân tích cú pháp)

Đầu vào :
- Token stream (RAM)

Python làm gì?
- Kiểm tra cú pháp có hợp lệ không
- Xây dựng Abstract Syntax Tree (AST)

Ví dụ:
```bash
a = 10
```

→ AST biểu diễn:

- Gán giá trị 10 cho biến a

Đầu ra :
- AST
- Nằm trong RAM

❌ Nếu sai cú pháp → SyntaxError (dừng tại đây)

---

**Giai đoạn 3: Compile sang Bytecode**
(AST → Bytecode .pyc)

Đầu vào :
- AST (RAM)

Python làm gì?

- Biên dịch AST thành Bytecode

Bytecode là:

- Mã trung gian

- Không phải mã máy

- Không phụ thuộc hệ điều hành

Đầu ra :

- Bytecode

- Nằm trong RAM

Đồng thời:

- Python có thể ghi bytecode ra ổ cứng

- Dưới dạng file .pyc trong thư mục __pycache__

📌 Quan trọng:

.pyc không phải lúc nào cũng được tạo

Dùng để:

- Chạy nhanh hơn ở lần sau

- Tránh compile lại nếu code không đổi

---

**Giai đoạn 4: Python Virtual Machine (PVM)**
(Bytecode → Thực thi)
Đầu vào :
- Bytecode (RAM)

Python làm gì?

+ Python Virtual Machine:

-Đọc từng instruction trong bytecode

-Thực thi lần lượt

+ Mỗi instruction:

- Gọi hàm C tương ứng trong CPython

- CPU thực hiện lệnh thật

Đầu ra :

- Chương trình chạy

- Tạo biến, object trong heap

- In ra màn hình, ghi file, gọi API, …

📌 Lưu ý cực quan trọng:

- PVM chạy trong RAM

- CPU không chạy source code Python

- CPU chỉ chạy mã máy của CPython

➡️ Vì vậy Python thường được mô tả là:

> **“Interpreted language with a compilation step”**

---

## 4. CPython là gì? Vì sao nó quan trọng?

### CPython

CPython là **implementation phổ biến nhất của Python**, được viết bằng ngôn ngữ **C**.

👉 Khi bạn tải Python từ `python.org`, bạn đang sử dụng **CPython**.

### Vai trò của CPython

- Biên dịch Python code → Bytecode
- Thực thi bytecode thông qua PVM
- Quản lý bộ nhớ
- Cung cấp API cho C Extension

### Các implementation khác của Python

- **PyPy**: sử dụng JIT, có thể nhanh hơn CPython
- **Jython**: chạy trên JVM
- **IronPython**: chạy trên .NET

➡️ Tuy nhiên, **CPython vẫn là tiêu chuẩn mặc định**.

---

## 5. Python quản lý bộ nhớ như thế nào?

Python **tự động quản lý bộ nhớ**, lập trình viên không cần cấp phát hay giải phóng thủ công.

### Các vùng bộ nhớ chính

1. **Stack Memory**
   - Lưu biến cục bộ
   - Function call

2. **Heap Memory**
   - Lưu object (list, dict, class instance, …)
   - Do CPython quản lý

### Object trong Python gồm

- Giá trị (value)
- Kiểu dữ liệu (type)
- Reference count (số lượng tham chiếu)

---

## 6. Garbage Collection trong Python

### Reference Counting

Python sử dụng **reference counting** làm cơ chế chính.

- Mỗi object có số lượng reference
- Khi reference = 0 → object bị giải phóng

Ví dụ:

```python
a = []
b = a

del a
del b  # lúc này object list mới bị giải phóng
```

## 7. Tổng kết

Tham khảo slide chi tiết tại đây :
- 🔗 https://www.canva.com/design/DAG_3zWkweQ/ZLs9aa_VVotSC-yXgsAZOw/edit

Python là ngôn ngữ có cú pháp đơn giản, dễ học, nhưng **bên trong có cơ chế hoạt động tương đối phức tạp**. Khi chạy một chương trình Python, source code không được thực thi trực tiếp mà phải trải qua nhiều giai đoạn như phân tích cú pháp, biên dịch sang bytecode và thực thi thông qua **Python Virtual Machine (PVM)**.

Python không phải là interpreted thuần túy, mà là **ngôn ngữ thông dịch có bước biên dịch trung gian**. **CPython** giữ vai trò trung tâm trong việc biên dịch, thực thi và quản lý bộ nhớ. Nhờ cơ chế **quản lý bộ nhớ tự động và Garbage Collection**, Python giúp lập trình viên tập trung vào logic thay vì xử lý tài nguyên.

Việc hiểu rõ workflow và cơ chế bên trong của Python giúp lập trình viên viết code hiệu quả hơn, debug tốt hơn và có nền tảng để học sâu về Python trong các hệ thống lớn.