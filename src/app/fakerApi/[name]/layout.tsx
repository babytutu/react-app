'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Tabs } from 'antd-mobile'
import { resource } from '@/data/apis'

export async function generateStaticParams() {
  // Props returned will be passed to the page component
  return resource.map((i: any) => ({ name: i.name }))
}

export default function Demo({
  children,
  params,
}: {
  children: React.ReactNode
  params: {
    name: string
  }
}) {
  const router = useRouter()
  const [activeKey, setActiveKey] = useState(params.name)

  function changeKey(key: string) {
    setActiveKey(key)
    router.push(`/fakerApi/${key}`)
  }

  return (
    <div className="flex flex-col overflow-hidden height-100">
      <Tabs
        activeKey={activeKey}
        onChange={(key) => changeKey(key)}
        style={{
          '--title-font-size': '13px',
        }}
      >
        {resource.map((link: string) => (
          <Tabs.Tab key={link} title={link}></Tabs.Tab>
        ))}
      </Tabs>
      <div className="overflow-auto">{children}</div>
    </div>
  )
}
