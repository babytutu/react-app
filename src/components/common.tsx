import { ErrorBlock, DotLoading, Space } from 'antd-mobile'

export function Common({
  loading,
  isEmpty,
}: {
  loading: boolean
  isEmpty: boolean
}) {
  return (
    <>
      {loading && <DotLoading />}
      {!loading && isEmpty && <ErrorBlock status="empty" />}
    </>
  )
}
