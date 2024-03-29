import axios from 'axios';
import { useState } from "react";

export default function RegisterForm() {
  const [input, setInput] = useState({
    user_name: '',
    password: '',
    confirmPassword: '',
    phone_number: '',
    email: ''
  });

  const hdlChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async e => {
    try {
      e.preventDefault();
      // การตรวจสอบความถูกต้องของข้อมูล
      if (input.password !== input.confirmPassword) {
        return alert('กรุณาตรวจสอบรหัสผ่านอีกครั้ง');
      }
      const response = await axios.post('http://localhost:8000/auth/register', input);
      console.log(response);
      if (response.status === 200) {
        alert('การสมัครสมาชิกเสร็จสมบูรณ์');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div style={{
      display: 'grid',
      placeItems: 'center',
      minHeight: '100vh',
      backgroundImage: 'url("https://store-images.s-microsoft.com/image/apps.2678.14492077886571533.a48e9a4a-99a7-44a9-9d97-9e8e72220a7c.6b98c506-61b7-4126-80b6-449f2ff0fb96?q=90&w=1920&h=1080")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.8,
    }}>
      <div className="p-5 border w-1/3 min-w-[320px] mx-auto rounded mt-3 bg-white shadow-lg" style={{ opacity: 0.9 }}>
        <div className="text-3xl mb-5 text-center text-gray-800">สร้างบัญชีใหม่</div>
        <form className="flex flex-col gap-4" onSubmit={hdlSubmit}>
          <label className="form-control">
            <span className="label-text text-gray-800">ชื่อผู้ใช้</span>
            <input
              type="text"
              className="input input-bordered"
              name="user_name"
              value={input.user_name}
              onChange={hdlChange}
            />
          </label>
          <label className="form-control">
            <span className="label-text text-gray-800">อีเมล</span>
            <input
              type="email"
              className="input input-bordered"
              name="email"
              value={input.email}
              onChange={hdlChange}
            />
          </label>
          <label className="form-control">
            <span className="label-text text-gray-800">รหัสผ่าน</span>
            <input
              type="password"
              className="input input-bordered"
              name="password"
              value={input.password}
              onChange={hdlChange}
            />
          </label>
          <label className="form-control">
            <span className="label-text text-gray-800">ยืนยันรหัสผ่าน</span>
            <input
              type="password"
              className="input input-bordered"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={hdlChange}
            />
          </label>
          <label className="form-control">
            <span className="label-text text-gray-800">เบอร์โทรศัพท์</span>
            <input
              type="text"
              className="input input-bordered"
              name="phone_number"
              value={input.phone_number}
              onChange={hdlChange}
            />
          </label>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary">สมัครสมาชิก</button>
          </div>
        </form>
      </div>
    </div>
  );
}
