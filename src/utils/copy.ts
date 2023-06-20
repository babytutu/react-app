/**
 * 复制文本
 * @param text 文本
 * @returns 复制结果
 */
export const copyText = (text: string) => {
  let flag = false
  try {
    const input = document.createElement('input')
    input.value = text
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    flag = true
  } catch (error) {
    console.log(error)
  }
  return flag
}
