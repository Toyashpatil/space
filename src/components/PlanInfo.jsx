import React from 'react'

const PlanInfo = ({title,desc,year,number}) => {
    return (
        <div className='flex-col space-y-12'>
            <div className='flex gap-10 items-start justify-center space'>
                <h1 className='text-[100px]'>{title}</h1>
            </div>
            <div className='flex items-center justify-center '>
                <div className='w-[60%] flex justify-center h-[60%] ml-10 '>
                    <h1 className=''>{desc}</h1>
                </div>
            </div>
            <div className='flex items-center justify-center gap-20 space-x-8 '>
                <div className='flex-col'>
                    <div>
                        <h1>Avg. Distance</h1>
                    </div>
                    <div>
                        <h1 className='text-[28px]'>{number}</h1>
                    </div>
                </div>
                <div className='flex-col'>
                    <div>
                        <h1>Est. travel time</h1>
                    </div>
                    <div>
                        <h1 className='text-[28px]'>{year}</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PlanInfo