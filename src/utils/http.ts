interface Res {
  success: boolean
  result: any
}

export async function http(url: string, body?: any): Promise<Res> {
  return await fetch(url, {
    body: body && JSON.stringify(body),
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  }).then((res) => res.json())
}
