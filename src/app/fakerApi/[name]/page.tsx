'use client'

import { useState, useEffect } from 'react'
import { List } from 'antd-mobile'
import { Common } from '@/components/common'

export default function Page({ params }: { params: { name: string } }) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch(
      `https://fakerapi.it/api/v1/${params.name}?_quantity=20&_characters=50`
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
  }, [params.name])
  return (
    <>
      <Common loading={isLoading} isEmpty={data.length === 0} />
      {data.length > 0 && (
        <List>
          {data.map((item: any) => (
            <List.Item
              key={item.id}
              description={item.content}
              title={item.more}
            >
              {item.title}
            </List.Item>
          ))}
        </List>
      )}
    </>
  )
}
