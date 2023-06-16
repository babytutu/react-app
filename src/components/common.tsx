import { Empty, DotLoading } from 'antd-mobile'

export function Common({
  loading,
  isEmpty,
}: {
  loading: boolean
  isEmpty: boolean
}) {
  return (
    <div>
      {loading && (
        <div className="p-3">
          <DotLoading />
        </div>
      )}
      {!loading && isEmpty && <Empty />}
    </div>
  )
}
