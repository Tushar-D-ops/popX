
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

const Signup=()=>{
    const nav=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        nav('/dashboard');
    }
  return (
    <div className="min-h-screen flex flex-col justify-center p-6 bg-gray-50">
      <p className="text-2xl font-bold mb-4">Create Your<br/> PopX account</p>
      <form onSubmit={handlesubmit} className="space-y-6">
        {['Full Name', 'Phone number', 'Email address', 'Password', 'Company name'].map((label, idx) => (
          <div key={idx} className="relative ">
            <label className="absolute left-2 -top-3 bg-white px-2 text-purple-600 text-sm font-semibold">
              {label}{label !== 'Company name' && '*'}
            </label>
            <input className="w-full p-2 border-2 border-purple-600 rounded-xl" type="text" placeholder={`Enter ${label}`} required />
          </div>
        ))}
        <div>
          <label className="text-sm font-semibold">Are you an Agency?*</label>
          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" className="accent-purple-600" defaultChecked /> Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="agency" className="accent-purple-600" /> No
            </label>
          </div>
        </div>
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;