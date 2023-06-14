import Link from 'next/link'
import { resource } from '@/data/apis'

export function generateMetadata(
  { params }: {
    params: {
      name: string
    }
  },
) {

  return {
    title: params.name,
  }
}

export default function Demo({
  children,
  params,
}: {
    children: React.ReactNode,
    params: {
      name: string
    }
  }) {
  return (
    <>
      <header className="bg-white">
        <nav className="mx-auto flex items-center justify-between py-3 px-5">
          {resource.map((resource) => (
            <Link key={resource.title} className={params.name === resource.title ? 'text-blue-600' : 'text-gray-600'} href={`/faker/${resource.title}`}>{resource.title}</Link>
          ))}
        </nav>
      </header>
      <div className='overflow-auto'>
        {children}
      </div>
    </>
  )
}