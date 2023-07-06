'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Tabs } from 'antd-mobile'
import { resource } from '@/data/apis'

export function TabList({ name }: { name: string }) {
  const router = useRouter()
  const [activeKey, setActiveKey] = useState(name)

  function changeKey(key: string) {
    setActiveKey(key)
    router.push(`/fakerApi/${key}`)
  }

  return (
    <Tabs activeKey={activeKey} onChange={(key) => changeKey(key)}>
      {resource.map((link: string) => (
        <Tabs.Tab key={link} title={link}></Tabs.Tab>
      ))}
    </Tabs>
  )
}
