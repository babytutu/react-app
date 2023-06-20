'use client'

import Link from 'next/link'
import { Result } from 'antd-mobile'
import { SmileOutline } from 'antd-mobile-icons'

export default function NotFound() {
  return (
    <Result
      icon={<SmileOutline />}
      status="error"
      title="页面跑路啦"
      description={<Link href="/">返回首页</Link>}
    />
  )
}
