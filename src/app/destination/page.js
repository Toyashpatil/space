"use client"
import Navbar from '@/components/Navbar'
import PlanInfo from '@/components/PlanInfo'
import AuthContext from '@/context/authContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const page = () => {

  const planet = ["MOON", "MARS", "EUPORA", "TITAN"]
  const { planetIndex, setPlanetIndex } = useContext(AuthContext)

  const planetInfo = [{
    title: "MOON",
    desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    num: "384,400 KM ",
    year: "3 DAYS",
    source: "/destination/image-moon.png",
  },
  {
    title: "MARS",
    desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    num: "225 MIL.KM",
    year: "9 MONTHS",
    source: "/destination/image-mars.png",
  },
  {
    title: "EUPORA",
    desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    num: "628 MIL.KM",
    year: "3 YEARS",
    source: "/destination/image-europa.png",
  },
  {
    title: "TITAN",
    desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    num: "1.6 BIL.KM ",
    year: "7 Years",
    source: "/destination/image-titan.png",
  },
  ]

  return (
    <main className='two_page'>
      <div>
        <Navbar />
      </div>
      <div className=' h-[80%] w-[100%] items-center justify-center gap-60  mt-2 flex'>
        <div className=' ml-[200px] h-[80%] w-[30%]  '>

          <div className=' mt-20 ml-10  flex items-center justify-center'>
            <Image src={planetInfo[planetIndex].source}
              width={300}
              height={300}
            />
          </div>

        </div>
        <div className=' h-[80%] w-[50%] z-10 flex-col gap-10 items-start justify-center space-y-10  '>
          <div className='flex gap-10 items-start justify-center'>
            {planet.map((planetName, index) => (
              <button key={index} onClick={() => { setPlanetIndex(index) }}><h1 className='text-[20px] down_bar ' key={index}>{planetName}</h1></button>
            ))}
          </div>
          <PlanInfo
            title={planetInfo[planetIndex].title}
            desc={planetInfo[planetIndex].desc}
            year={planetInfo[planetIndex].year}
            number={planetInfo[planetIndex].num}
          />
        </div>
      </div>
    </main>
  )
}

export default page