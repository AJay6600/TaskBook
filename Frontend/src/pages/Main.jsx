import React from 'react'
import { VscEdit } from "react-icons/vsc"
import { RiDeleteBin6Line } from "react-icons/ri";

const Main = () => {

    const data = [
        {
            id:1,
            name:"Do workout",
            des:'doing',
        },
        {
            id:2,
            name:"Reading",
            des:"Novel Reading"
        }
    ]

    const onEdit = () =>{

    }

    const onDelete = () =>{

    }

    const addTask =() =>{

    }

  return (
    <div className=' w-10/12 mx-auto mt-10'>
        <p className='text-4xl font-bold mb-8 text-caribbeangreen-500'>Tasks</p>
        
        <div className=' flex  justify-between ml-2 '>
            {/* leftpart */}
            <div className='w-[650px]'>
            {
                data ?
                    data.map((task,index)=>{
                        return(
                            <div className='flex flex-col gap-4 mt-4 p-4 bg-richblack-25 border border-richblack-50 shadow-xl' key={index}>
                            <div className=' flex justify-between'>
                                <div>
                                    <p className='font-bold text-2xl text-blue-200'>
                                        {task.name}
                                    </p>
                                    <p className='mt-2'>
                                        {task.des}
                                    </p>
                                </div>
                                <div className='flex flex-row gap-4'>
                                    <VscEdit
                                        className=' hover:cursor-pointer transition-all'
                                        onClick={()=>{onEdit()}}
                                    />
                                    <RiDeleteBin6Line
                                        className=' hover:cursor-pointer transition-all'
                                        onClick={()=>{onDelete()}}
                                     />
                                </div>
                            </div>
                        </div>
                        )
                    })
                
                :<p>No Taks Found</p>
            }
            </div>


            {/* rightPart */}
            <div className=' border border-black rounded-xl w-[300px] p-4 mr-20 max-h-fit shadow-2xl'>

                <form className='flex flex-col gap-6 mr-2 p-4'>
                    <p className='font-bold text-2xl text-pink-800'>
                        Add Task
                    </p>

                    <div className='flex flex-col gap-4 p-2 ' >
                        <label className='flex flex-col gap-2'>
                            Task Name :
                            <input
                                type='text'
                                placeholder='Enter the task'
                                className='border  h-[35px] p-2 rounded-md border-black'
                            />
                        </label>
                        <label className='flex flex-col gap-2'>
                            Description :
                            <textarea
                                className='border p-2 rounded-md border-black '
                            />
                        </label>
                    </div>

                    <div >
                        <button
                            type='submit'
                            onSubmit={()=>{addTask()}}
                            className=' border border-black w-full rounded-md p-1 font-semibold bg-yellow-50'
                        >
                            Add Task
                        </button>
                    </div>

                </form>
            </div>
        </div>

    </div>
  )
}

export default Main