'use client'

import { useState, useEffect } from 'react'
import { List } from 'antd-mobile'
import { Common } from '@/components/common'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const searchParams = useSearchParams()
  const type: string = searchParams.get('name') || ''

  useEffect(() => {
    setLoading(true)
    setData([])
    fetch(`https://fakerapi.it/api/v1/${type}?_quantity=20&_characters=50`)
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
        setLoading(false)
      })
  }, [type])
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
