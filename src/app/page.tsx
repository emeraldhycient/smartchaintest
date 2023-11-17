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

export default function Home() {
  const [Posts, setPosts] = useState<cardProps[]>([])

  const [isLoading, setisLoading] = useState(false)

  const fetchAllPost = async () => {
    setisLoading(true)
    try {
      const data = await post.getPosts()
      console.log(data.data)
      setPosts(data.data)
      setisLoading(false)
    } catch (error: any) {
      toast.error('Something went wrong')
      toast.error(error)
      console.error(error)
      setisLoading(false)
    }
  }

  useEffect(() => {
    fetchAllPost()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 md:p-24">
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          isLoading ?
            <div className='col-span-2 md:col-span-4'>
              <Image src={"/images/loader/Spinner.gif"} height={200} width={200} alt='loader' />
            </div>
            :
            Posts.map((item, index) => (
              <Link href={`/post/${item.id}`} key={index}>
                <Card userId={item?.userId} id={item.id} title={item?.title} body={item.body} />
              </Link>
            ))
        }
      </section>
    </main>
  )
}
