'use client'

import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { setName, setAge } from '@/store/form/FormSlice'
import { Form, Button, Input, Dialog, Stepper } from 'antd-mobile'

export default function Page() {
  const state = useAppSelector((state) => state.form)
  const dispatch = useAppDispatch()
  const [form] = Form.useForm()

  const onFinishFailed = () => {
    Dialog.alert({
      content: '输入验证失败',
    })
  }

  const onFinish = async () => {
    const values = form.getFieldsValue()
    const { name, age } = values
    dispatch(setName(name))
    dispatch(setAge(age))
    Dialog.alert({
      content: '设置成功',
    })
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
        <Form.Header>设置表单默认值</Form.Header>
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
    </div>
  )
}
