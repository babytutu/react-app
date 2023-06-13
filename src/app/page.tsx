export default async function Example() {
  const { data } = await fetch('https://fakerapi.it/api/v1/books?_locale=zh_CN&_quantity=20&_characters=50').then(res => res.json())
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {data.map((item: any) => (
        <li key={item.id} className="flex justify-between px-5 py-3">
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{item.title}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.author}</p>
            </div>
          </div>
          <div className="sm:flex sm:flex-col sm:items-end">
            <p className="text-xs leading-6 text-gray-900">{item.published}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
