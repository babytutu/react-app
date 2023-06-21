'use client'

import { useState, useEffect } from 'react'
import { List, Dialog, Toast, Image } from 'antd-mobile'
import { Common } from '@/components/common'
import { copyText } from '@/utils/copy'

export default function Macapp() {
  const [data, setData] = useState<Array<any>>([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch('https://87tetwnrqe.hk.aircode.run/xml2js', {
      body: JSON.stringify({
        url: 'https://www.digit77.com/categories/macapps/index.xml',
      }),
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const data = res.data.rss.channel.item.map((i: any) => ({
          id: i.guid,
          title: i.title,
          content: i.description
            .replace(/\n/g, '')
            .replace(/.*欢迎每日关注更新内容/, ''),
          extra: new Date(i.pubDate.replace(' &#43;0800', '')).toLocaleString(),
          link: i.link,
          avatar: i.description
            .replace(/\n/g, '')
            .replace(/.*src="(https.*?)".*/, '$1'),
        }))
        setData(data)
        setLoading(false)
      })
      .catch(() => {
        setData([])
        setLoading(false)
      })
  }, [])

  function showLink(item: any) {
    Dialog.confirm({
      title: item.title,
      content: item.content,
      confirmText: '复制下载地址',
      cancelText: '关闭',
      onConfirm: () => {
        const res = copyText(item.link)
        res && Toast.show('复制成功')
      },
    })
  }

  return (
    <>
      <Common loading={isLoading} isEmpty={data.length === 0} />
      {data.length > 0 && (
        <List>
          {data.map((item: any) => (
            <List.Item
              key={item.id}
              title={item.extra}
              onClick={() => showLink(item)}
              prefix={
                <Image
                  src={item.avatar}
                  alt={item.title}
                  fit="cover"
                  width={50}
                  height={50}
                />
              }
            >
              {item.title}
            </List.Item>
          ))}
        </List>
      )}
    </>
  )
}
