export default function Item({ item }: any) {
  return (
    <li className="leading-6 text-xm py-3">
      <p className="font-semibold text-gray-900">{item.title}</p>
      <p className="mt-1 text-gray-500">{item.content}</p>
      <p className="mt-1 text-gray-500">{item.time}</p>
    </li>
  )
}
