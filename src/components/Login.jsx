import {useState} from 'react';
import { useNavigate } from 'react-router';

const Login=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const nav=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        nav('/dashboard');
    }
    return (
    <div className="min-h-screen flex flex-col justify-center p-6 bg-gray-50">
      <p className='text-2xl font-bold mb-2'>Signin to your <br/> PopX account </p>
      <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <form onSubmit={handlesubmit} className="space-y-4">
        <div className='relative  '>
          <label className="absolute left-2 -top-3 px-2 bg-white text-purple-600 text-sm font-semibold">Email Address</label>
          <input className="w-full p-2 border-purple-600 border-2 rounded-xl" type="email" placeholder="Enter email address" onChange={(e)=>setEmail(e.target.value)} value={email} required />
        </div>
        <div className='relative'>
          <label className="absolute left-2 px-2 -top-3 bg-white text-purple-600 text-sm font-semibold" >Password</label>
          <input className="w-full p-2 border-purple-600 border-2 rounded-xl" type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} value={password} required />
        </div>
        <button type='submit' className={`w-full text-white py-2 rounded ${email && password ? 'cursor-pointer bg-purple-600' : 'cursor-not-allowed bg-gray-300 ' }`}>Login</button>
      </form>
    </div>
  );
}

export default Login;