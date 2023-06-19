'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Tabs } from 'antd-mobile'
import { resource } from '@/data/apis'

export default function Demo({
  children,
  params,
}: {
    children: React.ReactNode,
    params: {
      name: string
    }
  }) {
  const router = useRouter()
  const [activeKey, setActiveKey] = useState(params.name)

  function changeKey(key: string) {
    setActiveKey(key)
    router.push(`/faker/${key}`)
  }

  return (
    <>
      <Tabs activeKey={activeKey} onChange={(key) => changeKey(key)}>
        {resource.map((link: string) => (
          <Tabs.Tab key={link} title={link}></Tabs.Tab>
        ))}
      </Tabs>
      <div className="overflow-auto">{children}</div>
    </>
  )
}
