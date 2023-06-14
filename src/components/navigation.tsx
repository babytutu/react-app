'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Navigation({ navLinks } : { navLinks: any[] }) {
  const pathname = usePathname()
  return (
    <nav className="mx-auto flex items-center justify-between px-5 py-3">
      {navLinks.map((link: any) => {
        const isActive = pathname.replace(/\//g, '').replace('react-app', '') === link.to.replace(/\//g, '')
        return (
          <Link
            className={isActive ? 'text-blue-600' : 'text-black-600'}
            href={link.to}
            key={link.title}
          >
            {link.title}
          </Link>
        )
      })}
    </nav>
  )
}