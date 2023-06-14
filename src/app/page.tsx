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
import Item from '@/components/item'

export default function Page() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(
      `https://fakerapi.it/api/v1/books?_quantity=20&_characters=50`
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
  }, [])
  return (
    <ul className="divide-y divide-gray-100 px-5">
      {isLoading && <p>Loading...</p>}
      {data && data.map((item: any) => <Item key={item.id} item={item} />)}
      {!isLoading && !data.length && <p>暂无数据</p>}
    </ul>
  )
}

