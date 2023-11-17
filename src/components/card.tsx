import React from 'react'
interface cardProps {
    userId: number,
    id: number,
    title: string,
    body: string
}
function Card({ userId, id, title, body }: cardProps) {
    return (
        <section className='cols-span-1 md:h-[300px] w-full p-5  bg-white shadow shadow-lg rounded flex flex-col justify-between'>
            <div>
                <p className='font-bold mb-2 font-semibold text-2xl overflow-hidden whitespace-nowrap text-ellipsis'>{title}</p>
                <p className='text-sm font-light'>{body}</p>
            </div>
            {/* <div className='h-[50px] w-fit p-5 hover:border hover:border-2 hover:border-[#35B0AB] rounded flex items-center justify-center'> */}
                <p className='text-[#35B0AB] w-[50%] py-3 px-3 text-sm rounded border-white border-[1.5px] hover:border-[#35B0AB] transition duration-400 ease-in-out'>View Details</p>
            {/* </div> */}
        </section>
    )
}

export default Card