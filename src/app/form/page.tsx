'use client'

import {
  Form,
  Button,
  Input,
  Dialog,
  Toast,
  Stepper,
  List,
  SwipeAction,
} from 'antd-mobile'

import { http } from '@/utils/http'
import { useEffect, useState } from 'react'

import { useAppSelector } from '@/app/hooks'
import { Common } from '@/components/common'

export default function Pages() {
  const state = useAppSelector((state) => state.form)

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const [id, setId] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getItem()
  }, [])

  const getItem = () => {
    http('https://87tetwnrqe.hk.aircode.run/getItem').then(
      ({ success, result }) => {
        if (success) setList(result || [])
        setIsLoading(false)
      }
    )
  }
  const onFinish = async () => {
    if (loading) return
    const values = form.getFieldsValue()
    setLoading(true)
    const { success } = await http(
      `https://87tetwnrqe.hk.aircode.run/${id ? 'editItem' : 'addItem'}`,
      id
        ? {
            id,
            data: values,
          }
        : values
    )
    setLoading(false)
    if (success) {
      Toast.show('操作成功')
      getItem()
    }
    setId('')
    form.setFieldsValue(state)
  }

  const onFinishFailed = () => {
    Toast.show('输入验证失败')
  }

  return (
    <>
      <Form
        layout="horizontal"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={state}
        footer={
          <>
            <Button
              block
              loading={loading}
              type="submit"
              color="primary"
              size="large"
            >
              {id ? '修改' : '新增'}
            </Button>
          </>
        }
      >
        <Form.Header>表单提交</Form.Header>
        <Form.Item
          name="name"
          label="姓名"
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input placeholder="请输入姓名" clearable />
        </Form.Item>
        <Form.Item
          name="age"
          label="年龄"
          rules={[{ required: true, message: '年龄不能为空' }]}
        >
          <Stepper max={999} />
        </Form.Item>
      </Form>
      <Common loading={isLoading} isEmpty={list.length === 0} />
      {list.length > 0 && (
        <List>
          {list.map((item: any) => (
            <SwipeAction
              key={item._id}
              rightActions={[
                {
                  key: 'mute',
                  text: '编辑',
                  color: 'warning',
                  onClick: () => {
                    form.setFieldsValue({
                      name: item.name,
                      age: item.age,
                    })
                    setId(item._id)
                  },
                },
                {
                  key: 'delete',
                  text: '删除',
                  color: 'danger',
                  onClick: () => {
                    setId('')
                    form.setFieldsValue(state)
                    Dialog.confirm({
                      content: '确定要删除吗？',
                    }).then((action) => {
                      if (action) {
                        http('https://87tetwnrqe.hk.aircode.run/removeItem', {
                          id: item._id,
                        }).then((res) => {
                          if (res.success) {
                            Toast.show('操作成功')
                            getItem()
                          }
                        })
                      }
                    })
                  },
                },
              ]}
            >
              <List.Item extra={item.age}>{item.name}</List.Item>
            </SwipeAction>
          ))}
        </List>
      )}
    </>
  )
}
