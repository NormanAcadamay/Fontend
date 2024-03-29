import axios from 'axios';
import { useState } from "react";
import useAuth from '../hooks/useAuth';


export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    user_name: '',
    password: ''
  });

  const hdlChange = e => {
    setInput(prv => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async e => {
    try {
      e.preventDefault();
      // validation
      const rs = await axios.post('http://localhost:8000/auth/login', input);
      console.log(rs.data.token);
      localStorage.setItem('token', rs.data.token);
      const rs1 = await axios.get('http://localhost:8000/auth/me', {
        headers: { Authorization: `Bearer ${rs.data.token}` }
      });
      console.log(rs1.data);
      setUser(rs1.data);
      // แสดงป๊อบอัปเมื่อล็อกอินสำเร็จ
      const popup = document.createElement('div');
      popup.classList.add('popup');
      popup.textContent = 'ล็อกอินสำเร็จ ยินดีต้อนรับคุณNorman2';
      document.body.appendChild(popup);
      setTimeout(() => {
        popup.remove();
      }, 4000); // ปิดป๊อบอัปหลังจาก 3 วินาที
    } catch (err) {
      console.log(err.message);
    }
  };
  
  

  return (
    <div className="login-form" style={{
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: 'url("https://store-images.s-microsoft.com/image/apps.2678.14492077886571533.a48e9a4a-99a7-44a9-9d97-9e8e72220a7c.6b98c506-61b7-4126-80b6-449f2ff0fb96?q=90&w=1920&h=1080")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="p-5 border w-1/5 min-w-[400px] mx-auto rounded mt-5 bg-white shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
        <div className="text-3xl mb-5" style={{ textAlign: 'center', color: '#1976d2', fontWeight: 'bold' }}>ลงชื่อเข้าใช้</div> 
        <form className="flex flex-col gap-4" onSubmit={hdlSubmit}>
          <label className="form-control">
            <span className="label-text">ชื่อผู้ใช้</span>
            <input
              type="text"
              className="input input-bordered"
              name="user_name"
              value={input.user_name}
              onChange={hdlChange}
            />
          </label>

          <label className="form-control">
            <span className="label-text">รหัสผ่าน</span>
            <input
              type="password"
              className="input input-bordered"
              name="password"
              value={input.password}
              onChange={hdlChange}
            />
          </label>

          <div className="flex justify-between">
            <button type="submit" className="btn btn-primary" style={{ width: '48%' }}>ล๊อกอิน</button>
            <button type="button" className="btn btn-secondary" style={{ width: '48%' }}>สมัครสมาชิก</button>
          </div>

          <div className="flex justify-center"> 
            <div style={{ width: '48%' }}>
              <button type="button" className="btn btn-google" style={{ width: '100%' }}>Sign up with Google</button>
            </div>
        
          </div>
          <div className="flex justify-center"> 
          <div  style={{ width: '48%' }}>
              <button type="button" className="btn btn-facebook" style={{ width: '100%' }}>Sign up with Facebook</button>
            </div>
            </div>

        </form>
      </div>
    </div>
  );
}
