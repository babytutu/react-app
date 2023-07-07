'use client'

import {
  Form,
  Button,
  Input,
  Dialog,
  Toast,
  Radio,
  Space,
  List,
  SwipeAction,
  DatePicker,
} from 'antd-mobile'
import dayjs from 'dayjs'
import type { DatePickerRef } from 'antd-mobile/es/components/date-picker'

import { http } from '@/utils/http'
import { useEffect, useState, RefObject } from 'react'

import { useAppSelector } from '@/app/hooks'
import { Common } from '@/components/common'

export default function Pages() {
  const state = useAppSelector((state) => state.form)

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const [id, setId] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const now = new Date()

  useEffect(() => {
    getItem()
  }, [])

  const getItem = () => {
    http('https://5ykenqzacs.hk.aircode.run/getAllList', {
      type: 'test',
    }).then(({ success, result }) => {
      if (success) setList(result || [])
      setIsLoading(false)
    })
  }
  const onFinish = async () => {
    if (loading) return
    const values = form.getFieldsValue()
    const data = {
      ...values,
      time: dayjs(values.time).format('YYYY/MM/DD'),
    }
    setLoading(true)
    const { success } = await http(
      `https://5ykenqzacs.hk.aircode.run/${id ? 'editItem' : 'addItem'}`,
      {
        id,
        data: data,
        type: 'test',
      }
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
        <Form.Header>简易账本</Form.Header>
        <Form.Item
          name="type"
          label="类型"
          rules={[{ required: true, message: '类型不能为空' }]}
        >
          <Radio.Group>
            <Space>
              <Radio value="购物">购物</Radio>
              <Radio value="美食">美食</Radio>
              <Radio value="理发">理发</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="time"
          label="时间"
          trigger="onConfirm"
          rules={[{ required: true, message: '时间不能为空' }]}
          onClick={(e, datePickerRef: RefObject<DatePickerRef>) => {
            datePickerRef.current?.open()
          }}
        >
          <DatePicker max={now}>
            {(value) =>
              value ? dayjs(value).format('YYYY/MM/DD') : '请选择日期'
            }
          </DatePicker>
        </Form.Item>
        <Form.Item
          name="cost"
          label="金额"
          rules={[{ required: true, message: '金额不能为空' }]}
        >
          <Input placeholder="请输入金额" type="number" clearable />
        </Form.Item>
        <Form.Item name="content" label="说明">
          <Input placeholder="请输入说明" clearable />
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
                      type: item.type,
                      time: new Date(item.time),
                      cost: item.cost,
                      content: item.content,
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
                        http('https://5ykenqzacs.hk.aircode.run/removeItem', {
                          id: item._id,
                          type: 'test',
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
              <List.Item
                extra={item.cost}
                description={item.content}
                title={item.time}
              >
                {item.type}
              </List.Item>
            </SwipeAction>
          ))}
        </List>
      )}
    </>
  )
}
