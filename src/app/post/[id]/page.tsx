'use client'
import Card from '@/components/card'
import post from '@/services/post/post.service'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo, useEffect } from "react"
import { toast } from 'react-hot-toast';

interface cardProps {
  userId: number,
  id: number,
  title: string,
  body: string
}
function Page({ params }: { params: { id: string } }) {
  const [Post, setPost] = useState<cardProps>()

  const [isLoading, setisLoading] = useState(false)

  const fetchPost = async () => {
    setisLoading(true)
    try {
      const data = await post.getPostById(params.id)
      console.log(data.data)
      setPost(data.data)
      setisLoading(false)
    } catch (error:any) {
      toast.error('Something went wrong')
      toast.error(error)
      console.error(error)
      setisLoading(false)
    }
  }

  useEffect(() => {
    fetchPost()
  }, [])


  return (
    <>
      {
        isLoading ?
          <div className='col-span-2 md:col-span-4'>
            <Image src={"/images/loader/Spinner.gif"} height={200} width={200} alt='loader' />
          </div>
          :
          <section className=' w-11/12 md:w-9/12 lg:w-6/12 mx-auto my-[30px] p-5  bg-white shadow shadow-lg rounded'>
            <p className='font-bold mb-2 font-semibold text-2xl overflow-hidden whitespace-nowrap text-ellipsis'>{Post?.title}</p>
            <p className='text-sm font-light'>{Post?.body}</p>
          </section>
      }
    </>
  )
}

export default Page