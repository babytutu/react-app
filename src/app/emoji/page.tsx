import { emoji } from "@/data/emoji"

const category = [
  {
    label: '笑脸和人',
    name: 'smileys and people',
  },
  {
    label: '动物和自然',
    name: 'animals and nature',
  },
  {
    label: '食物和饮料',
    name: 'food and drink',
  },
  {
    label: '旅行和地方',
    name: 'travel and places',
  },
  {
    label: '活动',
    name: 'activities',
  },
  {
    label: '对象',
    name: 'objects',
  },
  {
    label: '符号和标志',
    name: 'symbols',
  },
  {
    label: '旗帜和字母',
    name: 'flags',
  },
]

export default function Page() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {category.map(item => (
        <div key={item.label}>
          <li className="flex justify-between px-5 py-1">
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{item.label}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.name}</p>
              </div>
            </div>
          </li>
          <div className="flex flex-wrap px-3">
            {Array.from(new Set(emoji[item.name])).map((i) => (
              <span className="p-1" dangerouslySetInnerHTML={{ __html:  i }}>
              </span>
            ))}
          </div>
        </div>
      ))}
    </ul>
  )
}
