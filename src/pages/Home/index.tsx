import React from 'react'
import style from './index.module.scss'
import { Button } from 'antd'
import Logo from '@/assets/logo-blue.png'
import Introduction from '@/assets/home-introduction.png'
import ApplicationIcon01 from '@/assets/home-application-01.png'
import ApplicationIcon02 from '@/assets/home-application-02.png'
import ApplicationIcon03 from '@/assets/home-application-03.png'
import AdvantageIcon01 from '@/assets/home-advantage-01.png'
import AdvantageIcon02 from '@/assets/home-advantage-02.png'
import AdvantageIcon03 from '@/assets/home-advantage-03.png'
import AdvantageIcon04 from '@/assets/home-advantage-04.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  // 头部导航栏标签
  const navList = [
    { name: '首页', href: '#' },
    { name: '应用场景', href: '#application' },
    { name: '特色优势', href: '#advantage' },
    { name: '新手指南', href: '#process' }
  ]
  /**
   * 应用场景内容
   */
  const cardList = [
    {
      icon: ApplicationIcon01,
      name: '安全访客',
      description:
        '对访客人员在线预约、线上审批、进门登记核验、出门注销、访客验证、随身物品登记的全流程线上操作管理，所有操作留痕，使得每次人员来访都有迹可查，同时数据上报公安，加强场所的安全保障力度，为公共安全服提供抓手能力。'
    },
    {
      icon: ApplicationIcon02,
      name: '安全登记',
      description:
        '通过对场所出入人员进行登记，可掌握场所出入人员的健康码状态信息，以实现涉疫人员信息追溯，切实保障人民群众生命安全和身体健康。同时，也能根据场所密集度、人流量等统计情况，合理制定或调整场所的管理措施，加强场所管理。'
    },
    {
      icon: ApplicationIcon03,
      name: '安全会展',
      description:
        '公共活动组织单位提供线上实名认证预约、线下实名核验进场的模式。用于公共活动登记和统计进场人员身份和数量，能解决当前人员活动情况监管困难，监管成本高，事后追查难度大的问题，将人员组织活动进行系统化管理，做到事前组织，事中监管，事后记录追查。'
    }
  ]

  /**
   * 四大优势内容
   */
  const advantageList = [
    { icon: AdvantageIcon01, name: '开放' },
    { icon: AdvantageIcon02, name: '共享' },
    { icon: AdvantageIcon03, name: '方便' },
    { icon: AdvantageIcon04, name: '快捷' }
  ]

  /**
   * 申请流程便捷高效内容
   */
  const processList = [
    '账号注册申请',
    '测试应用接入申请',
    '测试应用联调测试',
    '测试应用联调测试',
    '正式推广使用'
  ]

  const navigate = useNavigate()

  /**
   * 登录
   */
  const toLogin = () => {
    navigate('/login')
  }

  /**
   * 立即申请
   */
  const toApply = () => {
    navigate('/register/tour')
  }
  return (
    <>
      <div className={style.header}>
        <div className={style['left-side']}>
          <div className={style.logo}>
            <img src={Logo} />
          </div>
          <p className={style.title}>认证服务接入平台</p>
        </div>
        <div className={style['right-side']}>
          <ul className={style['nav-list']}>
            {navList.map((item, index) => (
              <li className={style['list-item']} key={index}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
          <Button type='primary' onClick={toLogin}>
            登录
          </Button>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.banner}>
          <div className={style.title}>【微警开放平台】认证服务接入平台</div>
          <div className={style.divider}></div>
          <div className={style['sub-title']}>
            开发、共享、合作、共赢 互联网
          </div>
          <div>
            <Button
              type='primary'
              className={style['applicate-btn']}
              onClick={toApply}
            >
              立即申请
            </Button>
          </div>
        </div>

        <div className={style['gray-bg']}>
          <div className={style.introduction}>
            <div className={style['left-side']}>
              <div className={style.title}>
                SDK+API+行业解决方案=互联网+
                <br />
                时代一站式能力提供平台
              </div>
              <p className={style.description}>
                【微警开放平台】认证服务接入平台为主动满足广大群众对于网上办事特别是掌上服务的迫切需求，按照我省“数字政府”创新政务服务的要求，广东省政务服务数据管理局依托广州市公安局南沙区分局
                “互联网+公安政务服务”，通过“可信身份认证服务平台”示范基地，为群众办事提供一个成熟、可靠的身份认证基础能力开放互联的合作平台，签约用户可以通过调用开放服务，专注自身业务，以达到场景生态提升，实现生态链条的延伸对服务质量大幅度的提高。目前合作客户已有多家机构接入，有认证服务需求的单位可申请。
              </p>
            </div>
            <div className={style['right-side']}>
              <img src={Introduction} />
            </div>
          </div>
        </div>

        <div
          className={`${style.section} ${style.application}`}
          id='application'
        >
          <div className={style.title}>应用场景</div>
          <div className={`${style['section-list']} ${style['card-list']}`}>
            {cardList.map(item => (
              <div className={style.card} key={item.name}>
                <img className={style['card-icon']} src={item.icon} />
                <p className={style['card-name']}>{item.name}</p>
                <p className={style.description}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={style['gray-bg']}>
          <div className={`${style.section} ${style.advantage}`} id='advantage'>
            <div className={style.title}>四大优势</div>
            <div
              className={`${style['section-list']} ${style['advantage-list']}`}
            >
              {advantageList.map(item => (
                <div className={style['advantage-item']} key={item.name}>
                  <img className={style['advantage-icon']} src={item.icon} />
                  <p className={style['advantage-name']}>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${style.section} ${style.process}`} id='process'>
          <div className={style.title}>申请流程便捷高效</div>
          <div className={`${style['section-list']} ${style['process-list']}`}>
            {processList.map((item, index) => (
              <div className={style['process-item']} key={index}>
                <div className={style['step-tag']}>
                  {item}
                  {index !== processList.length - 1 && (
                    <i className={style.arrow}></i>
                  )}
                </div>
                <p className={style['step-name']}>step{index + 1}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={style.guide}>
          <p className={style.title}>【微警开放平台】认证服务接入平台</p>
          <div className={style['guide-btn']} onClick={toApply}>
            立即申请
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.copyright}>
          <p>主办单位：陕西省公安厅 联系电话：020-6606688</p>
          <p>
            Copyright © 2006-2018 Guangzhou Municipal Public Security Bureau,
            All Rights Reserved 陕西省公安厅版权所有
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
