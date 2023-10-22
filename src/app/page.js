"use client"
import NavMo from '@/components/NavMo';
import Navbar from '@/components/Navbar';
import AuthContext from '@/context/AuthContext'
import Image from 'next/image'
import { useContext } from 'react'
import Link from 'next/link';

export default function Home() {

  const name = useContext(AuthContext);

  return (
    <main className=' absolute one_page '>
      <div className=" Navbar_main ">
        <Navbar />
      </div>
      <div className=' Navbar_mobile '>
        <NavMo />
      </div>
      <div className=' Navbar_main h-[80%] w-[100%] items-center justify-center gap-72 mt-2 flex'>
        <div className=' h-[80%] w-[30%] '>
          <div className=' flex-col space-y-2 z-20'>
            <div>
              <h1 className=" text-[#D0D6F9] text-[28px] text-two ">
                So, you want to travel to
              </h1>
            </div>
            <div>
              <h1 className="text-[150px] text_one ">
                SPACE
              </h1>
            </div>
            <div>
              <h1 className=" text-[18px] text_two text-[#D0D6F9]  ">
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
              </h1>
            </div>
          </div>
        </div>
        <div className=' h-[80%] w-[40%] z-10 flex items-end justify-center'>
          <Link href="/destination">
            <button>
              <div className='bg-[#ffff] h-[274px] w-[274px] rounded-full flex hover:ring-[50px] items-center justify-center'>
                <div>
                  <h1 className=" text_one text-[#000000]  text-[32px]">Explore</h1>
                </div>
              </div>
            </button>
          </Link>
          <div class="">
            <div class="plus">
              <a href="#" class="bdr-ripple-ani-btn"><i class="fa fa-link"></i></a>
            </div>
          </div>
        </div>

      </div>
      <div className='Navbar_mobile justify-center flex-col space-y-20'>
        <div>
          <div>
            <h1 className=" text-[#D0D6F9] text-[16px] text-two justify-center flex ">
              So, you want to travel to
            </h1>
          </div>
          <div>
            <h1 className="text-[100px] text_one justify-center flex ">
              SPACE
            </h1>
          </div>
          <div className='justify-center flex '>
            <h1 className=" text-[15px] text_two text-center text-[#D0D6F9]  ">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </h1>
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <Link href="/destination">
            <button>
              <div className='bg-[#ffff] h-[150px] w-[150px] rounded-full flex hover:ring-[50px] items-center justify-center'>
                <div>
                  <h1 className=" text_one text-[#000000]  text-[32px]">Explore</h1>
                </div>
              </div>
            </button>
          </Link>
          <div class="">
            <div class="plus">
              <a href="#" class="bdr-ripple-ani-btn"><i class="fa fa-link"></i></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
