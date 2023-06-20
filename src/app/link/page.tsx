'use client'

import { useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()
  const search = searchParams.get('link') || ''
  return <iframe className="iframe-warp" src={search}></iframe>
}
