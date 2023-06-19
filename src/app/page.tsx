'use client'

import { useRouter } from 'next/navigation'
import { resource } from '@/data/apis'
import { List } from 'antd-mobile'

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
    </List>
  )
}
