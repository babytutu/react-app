import { emoji } from "@/data/emoji"
import Item from '@/components/item'

const category = Object.keys(emoji).map((i: string) => ({
  title: i
}))

export default function Emoji() {
  return (
    <ul className="divide-y divide-gray-100 px-5">
      {category.map(item => (
        <div key={item.title}>
          <Item item={item} />
          <div className="flex flex-wrap mb-3">
            {emoji[item.title].map((i: any) => (
              <span key={i} className="p-1" dangerouslySetInnerHTML={{ __html:  i }}>
              </span>
            ))}
          </div>
        </div>
      ))}
    </ul>
  )
}
