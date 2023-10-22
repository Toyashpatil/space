"use client"
import React, { useState } from 'react'
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import NavMo from '@/components/NavMo';


const page = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const crewInfo = [{
        post: "THE TERMINOLOGY…",
        name: "LAUNCH VEHICLE",
        desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        path: "/Tech/image-launch-vehicle-portrait.jpg",
        pathMo: "/Tech/mobile/image-launch-vehicle-landscape.jpg",
        width: "400",
        height: "400"
    },
    {
        post: "THE TERMINOLOGY…",
        name: "SPACEPORT",
        desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        path: "/Tech/image-spaceport-portrait.jpg",
        pathMo: "/Tech/mobile/image-spaceport-landscape.jpg",
        width: "400",
        height: "400"
    },
    {
        post: "THE TERMINOLOGY…",
        name: "SPACE CAPSULE",
        desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        path: "/Tech/image-space-capsule-portrait.jpg",
        pathMo: "/Tech/mobile/image-space-capsule-landscape.jpg",
        width: "400",
        height: "400"
    },

    ]
    return (
        <main className='tech_page'>
            <div className='Navbar_main'>
                <Navbar />
            </div>
            <div className='Navbar_mobile'>
                <NavMo />

            </div>
            <div className=' Navbar_main h-[80%] w-[100%] items-center justify-center gap-10 mt-2 flex '>
                <div className='flex items-center justify-center h-[80%] w-[100%]'>
                    <div className='h-[90%] w-[60%] gap-20  flex items-center justify-center '>
                        <div className='flex-col '>
                            <div className='flex-col space-y-5 gap-2 items-center justify-start mt-10 '>
                                <div>
                                    <button onClick={() => {
                                        setSlideIndex(0);
                                    }}>
                                        <div className='h-[50px] w-[50px] border-2 cursor-pointer rounded-full flex items-center justify-center '>
                                            <h1>1</h1>
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <button onClick={() => {
                                        setSlideIndex(1);
                                    }}>
                                        <div className='h-[50px] w-[50px] border-2 cursor-pointer rounded-full flex items-center justify-center'>
                                            <h1>2</h1>
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <button onClick={() => {
                                        setSlideIndex(2);
                                    }}>
                                        <div className='h-[50px] w-[50px] border-2 cursor-pointer rounded-full flex items-center justify-center'>
                                            <h1>3</h1>
                                        </div>
                                    </button>
                                </div>


                            </div>
                        </div>
                        <div className=' h-[400px] w-[80%] flex-wrap justify-center space-y-10 mt-10'>
                            <div className='flex-col justify-center space-y-5'>
                                <div className='flex items-start justify-start '>
                                    <h1 className="text-[18px] text_two text-[#D0D6F9] ">{crewInfo[slideIndex].post}</h1>
                                </div>
                                <div className='flex items-center justify-start'>
                                    <h1 className=" text_one text-[56px] justify-center " >{crewInfo[slideIndex].name}</h1>
                                </div>
                                <div className=" text_two flex items-center justify-start">
                                    <h1 className=' text-[#D0D6F9] text-[18px]'>
                                        {crewInfo[slideIndex].desc}
                                    </h1>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>

                <div className='h-[100%] w-[50%]  flex items-center justify-end '>
                    <Image src={crewInfo[slideIndex].path}
                        width={crewInfo[slideIndex].width}
                        height={crewInfo[slideIndex].height}
                    />
                </div>
            </div>
            <div className='Navbar_mobile space-y-6'>
                <div>
                    <div className='  flex items-center justify-center '>
                        <Image src={crewInfo[slideIndex].pathMo}
                            width={500}
                            height={500}
                        />
                    </div>

                </div>
                <div className=' flex items-center justify-center'>
                    <div className='flex gap-2 items-center justify-center '>
                        <div>
                            <button onClick={() => {
                                setSlideIndex(0);
                            }}>
                                <div className='h-[50px] w-[50px] border-2 cursor-pointer rounded-full flex items-center justify-center '>
                                    <h1>1</h1>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button onClick={() => {
                                setSlideIndex(1);
                            }}>
                                <div className='h-[50px] w-[50px] border-2 cursor-pointer rounded-full flex items-center justify-center'>
                                    <h1>2</h1>
                                </div>
                            </button>
                        </div>
                        <div>
                            <button onClick={() => {
                                setSlideIndex(2);
                            }}>
                                <div className='h-[50px] w-[50px] border-2 cursor-pointer rounded-full flex items-center justify-center'>
                                    <h1>3</h1>
                                </div>
                            </button>
                        </div>


                    </div>

                </div>
                <div className='flex items-center justify-center'>
                    <div className='flex items-start justify-start '>
                        <h1 className="text-[14px] text_two text-[#D0D6F9] ">{crewInfo[slideIndex].post}</h1>
                    </div>

                </div>
                <div className='flex items-center justify-center'>
                    <div className='flex items-start justify-start '>
                        <h1 className="text-[24px] text_one ">{crewInfo[slideIndex].name}</h1>
                    </div>

                </div>
                <div className='flex items-center justify-center'>
                    <div className='flex items-start justify-start '>
                        <h1 className="text-[15px] text_two text-center text-[#D0D6F9] ">{crewInfo[slideIndex].desc}</h1>
                    </div>

                </div>

            </div>
        </main>
    )
}

export default page