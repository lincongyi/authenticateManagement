import React from 'react'
import { Button, Divider, Modal } from 'antd'

const CheckModal = ({
  open,
  setOpen
}: {
  open: boolean
  setOpen: Function
}) => {
  return (
    <Modal
      title='查看应用信息'
      open={open}
      width={640}
      onCancel={() => setOpen(false)}
      footer={[
        <Button key='back' onClick={() => setOpen(false)}>
          关闭
        </Button>
      ]}
    >
      <Divider />
    </Modal>
  )
}

export default CheckModal
