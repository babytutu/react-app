'use client'

import { useState, useEffect } from 'react'
import { List } from 'antd-mobile'

export default function Macapp() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch('https://87tetwnrqe.hk.aircode.run/xml2js', {
      body: JSON.stringify({
        url: 'https://www.digit77.com/categories/macapps/index.xml',
      }),
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const data = res.data.rss.channel.item.map((i: any) => ({
          id: i.guid,
          title: i.title,
          content: i.description
            .replace(/\n/g, '')
            .replace(/.*欢迎每日关注更新内容/, ''),
          more: new Date(i.pubDate.replace(' &#43;0800', '')).toLocaleString(),
        }))
        setData(data)
        setLoading(false)
      })
      .catch(() => {
        setData([])
        setLoading(false)
      })
  }, [])

  return (
    <List>
      {isLoading && <List.Item>Loading...</List.Item>}
      {data && data.map((item: any) =>
        <List.Item key={item.id} description={item.content} title={item.more}>
          {item.title}
        </List.Item>
      )}
      {!isLoading && !data.length && <List.Item>暂无数据</List.Item>}
    </List>
  )
}
