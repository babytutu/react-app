// import Link from 'next/link'
// import { resource } from '@/data/apis'

// export default function Home() {
//   return (
//     <ul className="divide-y divide-gray-100 px-5">
//       {resource.map((link: any) => (
//         <li key={link.title} className="leading-6 py-3">
//           <Link href={`/faker/${link.title}`}>{link.title}</Link>
//         </li>
//       ))}
//     </ul>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import { Tabs } from 'antd-mobile'
import { resource } from '@/data/apis'
import { List } from 'antd-mobile'

export default function Page() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [activeKey, setActiveKey] = useState('addresses')

  function changeKey(key: string) {
    setActiveKey(key)
    getData(key)
  }

  function getData(key: string) {
    setLoading(true)
    setData([])
    fetch(
      `https://fakerapi.it/api/v1/${key}?_quantity=5&_characters=50`
    )
      .then((res) => res.json())
      .then((res) => {
        const data = res.data.map((i: any) => ({
          title: i.title || i.city || i.name || i.username,
          content: i.author || i.streetName || i.email || i.description,
          more: i.published || i.zipcode || i.phone || i.price || i.ip,
          id: i.id,
        }))
        setData(data)
        setLoading(false)
      })
      .catch(() => {
        setData([])
        setLoading(false)
      })
  }
  useEffect(() => {
    getData(activeKey)
  }, [])
  return (
    <List>
      <Tabs activeKey={activeKey} onChange={key => changeKey(key)}>
        {resource.map((link: any) => (
          <Tabs.Tab key={link.title} title={link.title}>
          </Tabs.Tab>
        ))}
      </Tabs>
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

