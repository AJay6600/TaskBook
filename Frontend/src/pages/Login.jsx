import React from 'react'

const Login = () => {
  return (
    <div className=' w-10/12 mx-auto flex items-center justify-center' >
        <div className=' w-[400px] mt-14'>
            <h1 className='m-2 p-2 font-bold text-4xl mb-4'>Logged In Yourself</h1>
            <form>
                <label className='flex flex-col gap-1 m-2 p-2'>
                        Enter Email Id
                    <input
                        type='email'
                        id='emailId'
                        placeholder='Enter email id'
                        className='border  h-[35px] p-2 rounded-md border-black'
                    />
                </label>
                <label className='flex flex-col gap-1 m-2 p-2'>
                    Password
                    <input
                        type='password'
                        id='password'
                        placeholder='Enter password'
                        className='border  h-[35px] p-2 rounded-md border-black'

                    />
                </label>

                <div className=' m-2 p-2'>
                    <button
                    type='submit'
                    className=' border border-black w-full rounded-md p-1 font-semibold bg-yellow-300'
                    >
                        Login 
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login