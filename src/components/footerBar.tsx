'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { TabBar } from 'antd-mobile'
import {
  ContentOutline,
  UnorderedListOutline,
  SmileOutline,
  FillinOutline,
  SetOutline,
} from 'antd-mobile-icons'

const home: any[] = [
  {
    title: 'Home',
    to: '/',
    icon: <ContentOutline />,
  },
  {
    title: 'MacApp',
    to: '/macapp',
    icon: <UnorderedListOutline />,
  },
  {
    title: 'Form',
    to: '/form',
    icon: <FillinOutline />,
  },
  {
    title: 'Redux',
    to: '/setting',
    icon: <SetOutline />,
  },
  // {
  //   title: 'faker',
  //   to: '/faker/addresses/',
  //   icon: <SmileOutline />
  // },
]

export function FooterBar() {
  const router = useRouter()
  const [activeKey, setActiveKey] = useState('/')
  const pathname = usePathname()
  useEffect(() => {
    const path = pathname.replace(process.env.basePath || '', '')
    setActiveKey(path || '/')
  }, [pathname])
  return (
    <TabBar safeArea activeKey={activeKey} onChange={(key) => router.push(key)}>
      {home.map((item) => (
        <TabBar.Item key={item.to} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}
