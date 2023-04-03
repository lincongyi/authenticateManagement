import React, { useEffect, useState } from 'react'
import { Button, Col, Divider, Modal, Row, Image, Alert } from 'antd'
import style from '../../index.module.scss'

const UpdateCheckModal = ({
  item,
  open,
  setOpen
}: {
  item: OthersUpdateDataType
  open: boolean
  setOpen: Function
}) => {
  // 审批结果
  const approvalList: TApprovalItem[] = [
    {
      status: 1,
      label: '待审核',
      type: 'warning'
    },
    {
      status: 2,
      label: '审核通过',
      type: 'success'
    },
    {
      status: 3,
      label: '审核不通过',
      type: 'error'
    }
  ]
  const [approvalResult, setApprovalResult] = useState(
    approvalList[(item.status as number) - 1 || 0]
  )

  useEffect(() => {
    setApprovalResult(approvalList[(item.status as number) - 1 || 0])
  }, [item])

  return (
    <Modal
      title='查看'
      open={open}
      width={1000}
      onCancel={() => setOpen(false)}
      footer={[
        <Button key='back' onClick={() => setOpen(false)}>
          关闭
        </Button>
      ]}
    >
      <Divider />
      <Row gutter={[20, 20]}>
        <Col span={12}>
          <div className={`${style['update-box']} ${style.before}`}>
            <div className={style.header}>修改前</div>
            <div className={style.container}>
              <p className='modal-sub-title'>应用接入申请信息</p>
              <Row>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>单位名称</Col>
                    <Col span={16}>广州市城市管理和综合执法局</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>单位简称</Col>
                    <Col span={16}>广州市城市管理和综合执法局</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>接入地区</Col>
                    <Col span={16}>广州市城市管理和综合执法局</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>统一信用代码</Col>
                    <Col span={16}>广州市城市管理和综合执法局</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>信用代码证书</Col>
                    <Col>
                      <Image
                        width={200}
                        src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>管理员姓名</Col>
                    <Col span={16}>广州市城市管理和综合执法局</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>管理员手机号</Col>
                    <Col span={16}>广州市城市管理和综合执法局</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>管理员邮箱</Col>
                    <Col span={16}>广州市城市管理和综合执法局</Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className={`${style['update-box']} ${style.after}`}>
            <div className={style.header}>修改后</div>
            <div className={style.container}>
              <p className='modal-sub-title'>应用接入申请信息</p>
              <Row>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      0 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>单位名称</Col>
                    <Col span={16}>广州市城市管理和综合执法局</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      0 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>单位简称</Col>
                    <Col span={16}>广州市城市管理和综合执法局</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      0 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>接入地区</Col>
                    <Col span={16}>广州市城市管理和综合执法局</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      1 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>统一信用代码</Col>
                    <Col span={16}>广州市城市管理和综合执法局</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      1 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>信用代码证书</Col>
                    <Col>
                      <Image
                        width={200}
                        src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      0 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>管理员姓名</Col>
                    <Col span={16}>广州市城市管理和综合执法局</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      0 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>管理员手机号</Col>
                    <Col span={16}>广州市城市管理和综合执法局</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      0 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>管理员邮箱</Col>
                    <Col span={16}>广州市城市管理和综合执法局</Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col span={24}>
          <p className='modal-sub-title'>审批操作</p>
          <Alert
            message={approvalResult.label}
            type={approvalResult.type}
            showIcon
          />
        </Col>
        {approvalResult.status === 3 && (
          <Col span={24}>
            <p className='modal-sub-title'>驳回原因</p>
            <Alert message='每日限额数量过大不超过200' type='error' showIcon />
          </Col>
        )}
      </Row>
      <Divider />
    </Modal>
  )
}

export default UpdateCheckModal
