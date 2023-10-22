import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-[100%] h-[96px] flex items-center gap-4 justify-start mt-8  '>
                <div className='ml-10'>
                    <Image src="/Group.png"
                        width={70}
                        height={70}
                    />
                </div>
                {/* #FFFF00 */}
                <div className=' w-[100%] Glass_morph gap-10 ml-[500px]  h-[100%] items-center justify-end  flex'>
                    <div className="w-[100%] justify-end flex mr-60 gap-11 text_two font-medium  ">
                        <div className=' down_bar cursor-pointer '>
                            <Link href="/"><button>00 Home</button></Link>
                        </div>
                        <div className='down_bar cursor-pointer'>
                            <Link href="/destination"><button>01 Destination</button></Link>
                        </div>
                        <div className='down_bar cursor-pointer'>
                            <Link href="/crew"><button>02 Crew</button></Link>
                        </div>
                        <div className='down_bar cursor-pointer'>
                            <Link href="/tech"><button>03 Technology</button></Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar