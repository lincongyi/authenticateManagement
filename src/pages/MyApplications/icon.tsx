import React from 'react'
import Icon from '@ant-design/icons'
import Icon01 from '@/assets/myApplications-menu-icon-01.png'
import Icon02 from '@/assets/myApplications-menu-icon-02.png'
import Icon03 from '@/assets/myApplications-menu-icon-03.png'
import Icon04 from '@/assets/myApplications-menu-icon-04.png'

export const MenuIcon01 = () => {
  return <Icon component={() => <img src={Icon01} alt='icon' />} />
}

export const MenuIcon02 = () => {
  return <Icon component={() => <img src={Icon02} alt='icon' />} />
}

export const MenuIcon03 = () => {
  return <Icon component={() => <img src={Icon03} alt='icon' />} />
}

export const MenuIcon04 = () => {
  return <Icon component={() => <img src={Icon04} alt='icon' />} />
}
