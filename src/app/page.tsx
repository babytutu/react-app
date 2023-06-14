import Link from 'next/link'
import { resource } from '@/data/apis'

export default function Home() {
  return (
    <ul className="divide-y divide-gray-100 px-5">
      {resource.map((link: any) => (
        <li key={link.title} className="leading-6 py-3">
          <Link href={`/faker/${link.title}`}>{link.title}</Link>
        </li>
      ))}
    </ul>
  )
}
