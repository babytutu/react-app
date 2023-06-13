import { emoji } from "@/data/emoji"
import Item from '@/components/item'

const category = [
  {
    title: '笑脸和人',
    content: 'smileys and people',
  },
  {
    title: '动物和自然',
    content: 'animals and nature',
  },
  {
    title: '食物和饮料',
    content: 'food and drink',
  },
  {
    title: '旅行和地方',
    content: 'travel and places',
  },
  {
    title: '活动',
    content: 'activities',
  },
  {
    title: '对象',
    content: 'objects',
  },
  {
    title: '符号和标志',
    content: 'symbols',
  },
  {
    title: '旗帜和字母',
    content: 'flags',
  },
]

export default function Emoji() {
  return (
    <ul className="divide-y divide-gray-100 px-5">
      {category.map(item => (
        <div key={item.content}>
          <Item item={item} />
          <div className="flex flex-wrap mb-3">
            {emoji[item.content].map((i: any) => (
              <span key={i} className="p-1" dangerouslySetInnerHTML={{ __html:  i }}>
              </span>
            ))}
          </div>
        </div>
      ))}
    </ul>
  )
}
