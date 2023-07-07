'use client'

import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { setType, setCost } from '@/store/form/FormSlice'
import { Form, Button, Input, Toast, Radio, Space } from 'antd-mobile'

export default function Page() {
  const state = useAppSelector((state) => state.form)
  const dispatch = useAppDispatch()
  const [form] = Form.useForm()

  const onFinishFailed = () => {
    Toast.show('输入验证失败')
  }

  const onFinish = async () => {
    const values = form.getFieldsValue()
    const { type, cost } = values
    dispatch(setType(type))
    dispatch(setCost(cost))
    Toast.show('设置成功')
  }

  return (
    <div>
      <Form
        layout="horizontal"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={state}
        footer={
          <>
            <Button block type="submit" color="primary" size="large">
              设置
            </Button>
          </>
        }
      >
        <Form.Header>设置默认值</Form.Header>
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
        <Form.Item name="cost" label="金额">
          <Input placeholder="请输入金额" type="number" clearable />
        </Form.Item>
      </Form>
    </div>
  )
}
