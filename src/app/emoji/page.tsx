'use client'

import { useState } from 'react'
import { emoji } from "@/data/emoji"
import { List, CenterPopup } from 'antd-mobile'

const category = Object.keys(emoji).map((i: string) => ({
  title: i
}))

export default function Emoji() {
  const [visible2, setVisible2] = useState(false)
  const [content, setContent] = useState('')
  function showDialog(item: any) {
    setVisible2(true)
    setContent(item.title)
  }
  return (
    <List>
      {category.map(item => (
        <div key={item.title}>
          <List.Item description={item.title} onClick={() => showDialog(item)}>
            {item.title}
          </List.Item>
          <CenterPopup
            visible={visible2}
            onMaskClick={() => {
              setVisible2(false)
            }}
            onClose={() => {
              setVisible2(false)
            }}
          >
            <h1 className='px-4 py-1'>{content}</h1>
            <div className="flex flex-wrap px-3 py-1 overflow-scroll m-h-40">
              {content && emoji[content].map((i: any) => (
                <span className="p-1" key={i} dangerouslySetInnerHTML={{ __html:  i }}>
                </span>
              ))}
            </div>
          </CenterPopup>
        </div>
      ))}
    </List>
  )
}
