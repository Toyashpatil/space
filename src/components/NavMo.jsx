import AuthContext from '@/context/AuthContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

const NavMo = () => {
    const { open, setOpen } = useContext(AuthContext)
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
                    <button onClick={() => {
                        setOpen((prev) => !prev)
                    }
                    }>
                        <Image
                            src="/Group2.png"
                            width={20}
                            height={20}
                        />
                    </button>
                </div>

            </div>
            <div className='absolute'>
                {open && <div className="flex  items-center  justify-center">
                    <div className=" scale-up-tr  absolute rounded-lg Glass_morph flex items-center mt-[320px] ml-[200px] justify-center w-[200px]  h-[200px] ">
                        <div className='flex-col space-y-5'>
                            <div>
                                <Link href='/' onClick={() => {
                                    setOpen((prev) => !prev)
                                }
                                }  ><h1 className=" text_two ">00 Home</h1></Link>
                            </div>
                            <div>
                                <Link href='/destination' onClick={() => {
                                    setOpen((prev) => !prev)
                                }
                                } ><h1 className=" text_two ">01 Destination</h1></Link>
                            </div>
                            <div>
                                <Link href='/crew' onClick={() => {
                                    setOpen((prev) => !prev)
                                }
                                } ><h1 className=" text_two ">02 Crew</h1></Link>
                            </div>
                            <div>
                                <Link href='/tech' onClick={() => {
                                    setOpen((prev) => !prev)
                                }
                                }><h1 className=" text_two ">03 Technology</h1></Link>
                            </div>
                        </div>

                    </div>
                </div>}

            </div>
        </div>
    )
}

export default NavMo