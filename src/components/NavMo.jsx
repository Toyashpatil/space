import Image from 'next/image'
import React from 'react'

const NavMo = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-[100%] h-[96px] flex items-center gap-4 justify-start bg-blue '>
            <div className='ml-10 flex'>

            <Image
                src="/Group.png"
                width={50}
                height={50}
            />
            </div>
            <div className=' w-[100%] gap-10 justify-end flex mr-10 '>
            <Image
                src="/Group2.png"
                width={20}
                height={20}
            />
            </div>

            </div>
        </div>
    )
}

export default NavMo