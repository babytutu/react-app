export default async function Example() {
  const res = await fetch('https://87tetwnrqe.hk.aircode.run/xml2js', {
    body: JSON.stringify({
      url: 'https://www.digit77.com/categories/macapps/index.xml'
    }),
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  }).then(res => res.json())
  const data: Array<any> = res.data.rss.channel.item.map((i: any) => ({
    title: i.title,
    id: i.guid,
    pubDate: new Date(i.pubDate.replace(' &#43;0800', '')).toLocaleString(),
    description: i.description.replace(/\n/g, '').replace(/.*欢迎每日关注更新内容/, ''),
    imageUrl: i.description.replace(/\n/g, '').replace(/.*src=\"(.*?)".*/, '$1'),
  }))

  return (
    <ul role="list" className="divide-y divide-gray-100">
      { data.map((item: any) => (
        <li key={item.id} className="flex justify-between gap-x-6 p-5">
          <div className="flex gap-x-4 overflow-hidden">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={item.imageUrl} alt="" />
            <div className="min-w-0 flex-wrap">
              <p className="text-sm font-semibold leading-6 text-gray-900">{item.title}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500 overflow-hidden">{item.description}</p>
              <p className="mt-1 truncate text-xs leading-4 text-gray-500">{item.pubDate}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
