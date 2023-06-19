'use client'

import { useRouter } from 'next/navigation'
import { resource } from '@/data/apis'
import { List, AutoCenter } from 'antd-mobile'
import { home } from '@/data/home'
export default function Home() {
  const router = useRouter()
  return (
    <List header="fakerapi">
      {resource.map((link: string) => (
        <List.Item
          key={link}
          onClick={() => router.push(`/faker/?name=${link}`)}
        >
          {link}
        </List.Item>
      ))}
      {home.map((link: any) => (
        <List.Item key={link.title} onClick={() => window.open(link.link)}>
          {link.title}
        </List.Item>
      ))}
      <List.Item>
        <AutoCenter>
          <img src={process.env.basePath + '/xcx.png'} width={200} />
        </AutoCenter>
      </List.Item>
    </List>
  )
}
