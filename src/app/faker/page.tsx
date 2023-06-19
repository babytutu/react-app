'use client'

import { useState, useEffect } from 'react'
import { List, Tabs } from 'antd-mobile'
import { Common } from '@/components/common'
import { useSearchParams, useRouter } from 'next/navigation'
import { resource } from '@/data/apis'

export default function Page() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const searchParams = useSearchParams()
  const router = useRouter()
  const type: string = searchParams.get('name') || ''

  function changeKey(key: string) {
    router.push(`/faker/?name=${key}`)
  }

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
    <div className="flex flex-col overflow-hidden height-100">
      <Tabs defaultActiveKey={type} onChange={(key) => changeKey(key)}>
        {resource.map((link: string) => (
          <Tabs.Tab key={link} title={link}></Tabs.Tab>
        ))}
      </Tabs>
      <Common loading={isLoading} isEmpty={data.length === 0} />
      {data.length > 0 && (
        <List className="flex-1 overflow-auto">
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
    </div>
  )
}
