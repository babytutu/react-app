export default function Item({ item }: any) {
  return (
    <li className="leading-6 py-3">
      <p className="font-semibold text-gray-900">{item.title}</p>
      <p className="mt-1 text-sm text-gray-500">{item.content}</p>
      <p className="mt-1 text-xs text-gray-500">{item.more}</p>
    </li>
  )
}
