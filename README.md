# React-app

基于[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 路由

通过文件目录自动添加路由

例子：

- 普通路由 /test
- 动态路由 /test/a, /test/b（export导出还有bug）

```
- test               // 目录
    - [name]         // 动态路由
        - layout     // 框架
        - page       // 页面
    - layout         // 框架
    - page           // 页面
```

## Redux

### 定义store

store/store.ts

```ts
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import formReducer from './form/FormSlice'

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

store/form/FormSlice.ts

```ts
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
  name: string
  age: number
}

const initialState: FormState = {
  name: 'test',
  age: 10,
}

export const FormSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setName, setAge } = FormSlice.actions

export default FormSlice.reducer
```

### 初始化

nextjs默认都是服务端渲染，需要单独客户端组件加载redux

store/providers.tsx

```tsx
'use client'

/* Core */
import { Provider } from 'react-redux'

/* Instruments */
import { store } from '@/store/store'

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>
}
```

RootLayout中加载

app/layout.tsx

```tsx
import { Providers } from '@/store/providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  )
}
```

### 添加hooks.ts

方便页面调用

app/hooks.ts

```ts
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '@/store/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
```

### 页面调用

- useAppSelector 获取state的值
- useAppDispatch 通过dispatch方法修改state的值

```tsx
import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { setName } from '@/store/form/FormSlice'

export default function Page() {
  const state = useAppSelector((state) => state.form)
  const dispatch = useAppDispatch()
  function setData (name: string) {
    dispatch(setName(name))
  }
  return <div>{state.name}</div>
}
```

## 组件库

安装组件库

```
yarn add antd-mobile
```

在 Next.js 中使用 antd-mobile 需要做一些额外的配置

next.config.js

```js
const nextConfig = {
  transpilePackages: ['antd-mobile'],
}

module.exports = nextConfig
```

在 app 目录下使用 antd-mobile，需要在文件顶部添加 'use client' 指令

app/page.tsx

```tsx
'use client'

import { Button } from 'antd-mobile'
```
