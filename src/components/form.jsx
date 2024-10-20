import React from 'react';

const Form = () => {
  return (
    <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray'>
        <h1 className="text-5xl font-semibold">Welcome Back</h1>
        <p className="font-medium text-lg text-gray-500 mt-4">Welcome Back! Please enter your details.</p>
        <div className='mt-8'>
            <div>
                <label className='text-lg font-medium'>Email</label>
                <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'  placeholder="Enter Your Email" />
            </div>
            <div>
                <label className='text-lg font-medium'>Password</label>
                <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" placeholder="Enter Your Password" type="password" />
            </div>
            <div className='mt-8 flex justify-between items-center'>
                <div>
                    <input type="checkbox" id="remember"/>
                    <label for="remember" className='ml-2 font-medium text-base'>Remember for 30 days</label>
                </div>
                <button className="font-medium text-base text-violet">Forgot Password</button>
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
                <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">Sign in</button>
                <button>Sign in with Google</button>
            </div>
        </div>
    </div>
  );
};

export default Form;
