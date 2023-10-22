"use client"
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React, { useState } from 'react'


const page = () => {

  const [slideIndex, setSlideIndex] = useState(0)

const crewInfo=[{
  post:"commander",
  name:"Douglas Hurley",
  desc:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  path:"/Crew/image-douglas-hurley.png",
  width:"400",
  height:"400"
},
{
  post:"Mission Specialist ",
  name:"MARK SHUTTLEWORTH",
  desc:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  path:"/Crew/image-mark-shuttleworth.png",
  width:"300",
  height:"300"
},
{
  post:"PILOT",
  name:"Victor Glover",
  desc:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  path:"/Crew/image-victor-glover.png",
  width:"400",
  height:"400"
},
{
  post:"Flight Engineer",
  name:"Anousheh Ansari",
  desc:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  path:"/Crew/image-anousheh-ansari.png",
  width:"400",
  height:"400"
},

]

console.log(slideIndex)

  return (
    <main className='crew_page space-y-2'>
      <div>
        <Navbar />
      </div>
      <div className=' h-[80%] w-[100%] items-center justify-center gap-10 mt-2 flex '>
        <div className='h-[90%] w-[40%]   flex items-center justify-center '>
          <div className='flex-col'>
            <div className=' h-[400px] w-[80%] flex-wrap justify-center space-y-10 mt-10'>
              <div className='flex-col justify-center space-y-5'>
                <div className='flex items-center justify-start'>
                  <h1 className='text-[32px]'>{crewInfo[slideIndex].post}</h1>
                </div>
                <div className='flex items-center justify-start'>
                  <h1 className='text-[56px] '>{crewInfo[slideIndex].name}</h1>
                </div>
                <div className='flex items-center justify-center'>
                  <h1 className='text-[18px]'>
                    {crewInfo[slideIndex].desc}
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <div className='flex gap-5 items-end justify-start mt-10 '>
                <button onClick={() => {
                  setSlideIndex(0);
                }}>
                  <div className='h-[10px] w-[10px] bg-[#FFFF00] cursor-pointer rounded-full '>

                  </div>
                </button>

                <button onClick={() => {
                  setSlideIndex(1);
                }}>
                  <div className='h-[10px] w-[10px] bg-[#FFFF00] cursor-pointer rounded-full '>

                  </div>
                </button>
                <button onClick={() => {
                  setSlideIndex(2);
                }}>
                  <div className='h-[10px] w-[10px] bg-[#FFFF00] cursor-pointer rounded-full '>

                  </div>
                </button>
                <button onClick={() => {
                  setSlideIndex(3);
                }}>
                  <div className='h-[10px] w-[10px] bg-[#FFFF00] cursor-pointer rounded-full '>

                  </div>
                </button>
              </div>
            </div>


          </div>

        </div>
        <div className='h-[100%] w-[30%]  flex items-end justify-center '>
            <Image src={crewInfo[slideIndex].path}
              width={crewInfo[slideIndex].width}
              height={crewInfo[slideIndex].height}
            />
        </div>
      </div>
    </main>
  )
}

export default page