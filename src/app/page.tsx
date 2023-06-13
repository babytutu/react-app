'use client'

import { useState, useEffect } from 'react'
import Item from '@/components/item'

export default function Home() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('https://fakerapi.it/api/v1/books?_locale=zh_CN&_quantity=20&_characters=50')
      .then((res) => res.json())
      .then((res) => {
        const data = res.data.map((i: any) => ({
          title: i.title,
          content: i.author,
          time: i.published,
          id: i.id,
        }))
        setData(data)
        setLoading(false)
      })
  }, [])
  return (
    <ul className="divide-y divide-gray-100 px-5">
      {isLoading && <p>Loading...</p>}
      {data && data.map((item: any) => (
        <Item key={item.id} item={item} />
      ))}
      {!data && <p>暂无数据</p>}
    </ul>
  )
}
