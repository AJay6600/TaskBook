import React, { useState } from 'react'

import logo from "../../assets/logo1.jpg"
import { useNavigate, useNavigation } from 'react-router-dom'
const Navbar = () => {

  const[flag, setFlag] = useState(true)

  const navigate = useNavigate();
  const setClicked = ( )=>{
    
    if(flag == true){
      setFlag(false);
      navigate("/login");
    }
    else{
      setFlag(true)
      navigate("/signup")
    
    }
  }

  return (
    <div className=' flex justify-between'>
        
        <div className='flex flex-row gap-3 items-center m-2 '>
          <img
            src={logo}
            width={100}
            height={40}
          />
          <h1 className=' text-xl font-bold text-gray-800'>
              Fitness Hub
          </h1>
        </div>

        <div className='mt-4'>
          <button className='m-2 mr-10 p-5 rounded-[8px] border border-gray-800 bg-black text-white font-bold px-[12px] py-[8px]'
          onClick={()=>setClicked()}
          >
              { flag ? "Login" : "Sign Up"}
          </button> 
        </div>


        
    </div>
  )
}

export default Navbar