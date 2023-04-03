import React, { useEffect, useState } from 'react'
import { Button, Col, Divider, Modal, Row, Alert } from 'antd'
import style from '../../../index.module.scss'

const UpdateCheckModal = ({
  item,
  open,
  setOpen
}: {
  item: IdentityUpdateDataType
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
      title='审批操作-参数修改申请（正式账号）'
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
              <Row style={{ marginBottom: 20 }}>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>应用名称</Col>
                    <Col span={16}>在线公正服务（测试）</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>接入方式</Col>
                    <Col span={16}>SDK认证、扫码认证、出入境SDK认证</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>承建公司</Col>
                    <Col span={16}>XXX有限公司</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>使用场景</Col>
                    <Col span={16}>
                      这是一段使用场景描述文字，这是一段使用场景描述文字这是一段使用场景描述文字这是一段使用场景描述文字
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>应用描述</Col>
                    <Col span={16}>
                      这是一段使用场景描述文字，这是一段使用场景描述文字这是一段使用场景描述文字这是一段使用场景描述文字
                    </Col>
                  </Row>
                </Col>
              </Row>
              <p className='modal-sub-title'>并发配置</p>
              <Row>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>每秒限额</Col>
                    <Col span={16}>10</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>每日限额</Col>
                    <Col span={16}>1000</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>每月限额</Col>
                    <Col span={16}>不限制</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>每年限额</Col>
                    <Col span={16}>不限制</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row className={style['description-item']}>
                    <Col span={8}>总次数限</Col>
                    <Col span={16}>不限制</Col>
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
              <Row style={{ marginBottom: 20 }}>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      0 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>应用名称</Col>
                    <Col span={16}>在线公正服务（测试）</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      0 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>接入方式</Col>
                    <Col span={16}>SDK认证、扫码认证、出入境SDK认证</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      1 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>承建公司</Col>
                    <Col span={16}>XXX有限公司</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      0 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>使用场景</Col>
                    <Col span={16}>
                      这是一段使用场景描述文字，这是一段使用场景描述文字这是一段使用场景描述文字这是一段使用场景描述文字
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      1 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>应用描述</Col>
                    <Col span={16}>
                      这是一段使用场景描述文字，这是一段使用场景描述文字这是一段使用场景描述文字这是一段使用场景描述文字
                    </Col>
                  </Row>
                </Col>
              </Row>
              <p className='modal-sub-title'>并发配置</p>
              <Row>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      0 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>每秒限额</Col>
                    <Col span={16}>10</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      0 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>每日限额</Col>
                    <Col span={16}>1000</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      0 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>每月限额</Col>
                    <Col span={16}>不限制</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      0 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>每年限额</Col>
                    <Col span={16}>不限制</Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row
                    className={`${style['description-item']} ${
                      1 && style['is-updated']
                    }`}
                  >
                    <Col span={8}>总次数限</Col>
                    <Col span={16}>不限制</Col>
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
