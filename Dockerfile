# Dockerfile

# ใช้ image ของ node เวอร์ชั่น lts ล่าสุด
FROM node:lts-alpine3.10

# set ตำแหน่งอ้างอิงไปที่ /usr/src/app ที่อยู่ใน Image
WORKDIR /usr/src/app

# copy ไฟล์ package*.json จากที่อยู่อ้างอิง ไปไว้ในโฟลเดอร์อ้างอิง
# COPY [original file] [Image directory]
COPY package*.json .

# รันคำสั่งจาก terminal ใน Image ในที่นี้คือ npm install เพื่อติดตั้ง module ที่จำเป็นทั้งหมด
RUN npm install 

# คัดลอกไฟล์ทั้งหมดในโฟลเดอร์ที่ Dockerfile อยู่ ไปยัง โฟลเดอร์เป้าหมายบน Image (อ้างอิงจาก WORKDIR ในที่นี่คือ /usr/src/app)
# ไฟล์ และ directory ที่ระบุใน .dockerignore จะถูกละเว้นจากคำสั่งนี้
COPY . . 

# กำหนดให้ Image เปิด PORT 3000 ให้ภายนอกเข้าถึงได้
EXPOSE 4000

# รันคำสั่ง npm start ตอน container เริ่มการทำงาน
CMD ["npm","start"]