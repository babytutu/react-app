'use client'

import { useRouter } from 'next/navigation'
import { resource } from '@/data/apis'
import { List, AutoCenter, Image } from 'antd-mobile'
import { home } from '@/data/home'

import HelloWorld from '@/mdx/hello.mdx'

export default function Home() {
  const router = useRouter()
  return (
    <List header="fakerapi">
      <HelloWorld />
      {resource.map((link: string) => (
        <List.Item
          key={link}
          onClick={() => router.push(`/faker/?name=${link}`)}
        >
          {link}
        </List.Item>
      ))}
      {home.map((link: any) => (
        <List.Item
          key={link.title}
          onClick={() => router.push(`/link/?link=${link.link}`)}
        >
          {link.title}
        </List.Item>
      ))}
      <List.Item onClick={() => router.push(`/fakerApi/books`)}>404</List.Item>
      <List.Item>
        <AutoCenter>
          <Image
            alt="xcx"
            src={process.env.basePath + '/xcx.png'}
            width={200}
          />
        </AutoCenter>
      </List.Item>
    </List>
  )
}
