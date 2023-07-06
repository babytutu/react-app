import { resource } from '@/data/apis'
import { TabList } from '@/components/tabList'

export async function generateStaticParams() {
  return resource.map((i: string) => ({
    name: i,
  }))
}

export default function Demo({
  children,
  params,
}: {
  children: React.ReactNode
  params: {
    name: string
  }
}) {
  return (
    <div className="flex flex-col overflow-hidden height-100">
      <TabList name={params.name} />
      <div className="overflow-auto">{children}</div>
    </div>
  )
}
