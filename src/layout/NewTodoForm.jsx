import axios from "axios";
import { useState } from "react";

export default function ProfileForm() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdateProfile = async e => {
    try {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const response = await axios.put('http://localhost:8000/profile', input, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Profile updated successfully');
    } catch (err) {
      alert(err.message);
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
      <form className="p-5 border w-1/3 min-w-[320px] mx-auto rounded mt-3 bg-white shadow-lg" style={{ opacity: 0.8 }}>
        <div className="text-3xl mb-5 text-center text-gray-800">ข้อมูลส่วนตัว</div>
        <div className="flex flex-col gap-4">
          <label className="form-control">
            <span className="label-text text-gray-800">ชื่อ-สกุล</span>
            <input
              type="text"
              className="input input-bordered"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
          </label>
          <label className="form-control">
            <span className="label-text text-gray-800">อีเมล</span>
            <input
              type="email"
              className="input input-bordered"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
          </label>
          <label className="form-control">
            <span className="label-text text-gray-800">ที่อยู่</span>
            <input
              type="text"
              className="input input-bordered"
              name="address"
              value={input.address}
              onChange={handleChange}
            />
          </label>
          <label className="form-control">
            <span className="label-text text-gray-800">เบอร์โทรศัพท์</span>
            <input
              type="text"
              className="input input-bordered"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn btn-primary" onClick={handleUpdateProfile}>อัปเดตข้อมูลส่วนตัว</button>
        </div>
      </form>
    </div>
  );
}
