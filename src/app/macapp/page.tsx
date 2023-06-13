'use client'

import { useState, useEffect } from 'react'
import Item from '@/components/item'

export default function Macapp() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('https://87tetwnrqe.hk.aircode.run/xml2js', {
      body: JSON.stringify({
        url: 'https://www.digit77.com/categories/macapps/index.xml'
      }),
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    }).then(res => res.json())
      .then((res) => {
        const data = res.data.rss.channel.item.map((i: any) => ({
          id: i.guid,
          title: i.title,
          content: i.description.replace(/\n/g, '').replace(/.*欢迎每日关注更新内容/, ''),
          time: new Date(i.pubDate.replace(' &#43;0800', '')).toLocaleString()
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
