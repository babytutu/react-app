'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Tabs } from 'antd-mobile'
import { resource } from '@/data/apis'

export default function Demo({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const search = useSearchParams()
  const name: string = search.get('name') || ''
  const [activeKey, setActiveKey] = useState(name)

  function changeKey(key: string) {
    setActiveKey(key)
    router.push(`/faker/?name=${key}`)
  }

  return (
    <div className="flex flex-col overflow-hidden height-100">
      <Tabs activeKey={activeKey} onChange={(key) => changeKey(key)}>
        {resource.map((link: string) => (
          <Tabs.Tab key={link} title={link}></Tabs.Tab>
        ))}
      </Tabs>
      <div className="overflow-auto">{children}</div>
    </div>
  )
}
