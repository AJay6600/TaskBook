import React from 'react'

const SignUp = () => {
  return (
<div className=' w-10/12 mx-auto flex items-center justify-center' >
        <div className=' w-[450px] mt-14'>
            <h1 className='m-2 p-2 font-bold text-4xl mb-4'>Signed Up Yourself</h1>
            <form className='flex flex-col gap-2'>
                <div className='flex flex-row gap-4 m-2 p-2'>
                    <label>
                        First Name
                        <input
                            type='text'
                            id='name'
                            placeholder='Enter your name'
                            className='border  h-[35px] p-2 rounded-md border-black'
                        />
                    </label>
                    <label>
                        Last Name
                        <input
                            type='text'
                            id='name'
                            placeholder='Enter your name'
                            className='border  h-[35px] p-2 rounded-md border-black'

                        />
                    </label>
                </div>

                <label className='flex flex-col gap-1 m-2 p-2'>
                    Email Address
                    <input
                        type='email'
                        placeholder='Enter your email'
                        id='email'
                        className='border  h-[35px] p-2 w-full rounded-md border-black'

                    />
                </label>

                <div className='flex flex-row gap-4 m-2 p-2'>
                    <label >
                        Create Password
                        <input
                            type='password'
                            id='password'
                            placeholder='Enter password'
                            className='border  h-[35px] p-2 rounded-md border-black'

                        />
                    </label>

                    <label>
                        Confirm Password
                        <input
                            type='password'
                            id='confirmPassword'
                            placeholder='Enter password'
                            className='border  h-[35px] p-2 rounded-md border-black'

                        />
                    </label>
                </div>

                <div className=' m-2 p-2'>
                    <button
                    type='submit'
                    className=' border border-black w-full rounded-md p-1 font-semibold bg-yellow-300'
                    >
                        Sign Up 
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp