import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'shineout'
import locate, { setLanguage } from './locate'
import classGenerate from './utils/classname'
import theme from './utils/theme'

const headerClass = classGenerate(require('./styles/header.less'), 'header')

const themes = [{
  content: 'antd',
  id: '1',
}, {
  content: 'default',
  id: '2',
}]

function getPath(pathname) {
  const index = pathname.indexOf('/', 2)
  let path = pathname
  if (index > 0) path = pathname.substr(0, index)
  return path
}

function handleLangClick() {
  const lang = locate('en', 'zh-cn')
  setLanguage(lang)
}

function handleThemeClick(data) {
  const url = `?theme=${data.content}${window.location.hash}`
  window.location.href = url
}

function Header(props, context) {
  const path = getPath(context.router.route.location.pathname)

  const navs = [
    { path: '/', en: 'Home', cn: '首页' },
    { path: '/components', en: 'Components', cn: '组件' },
    { path: '/documentation', en: 'Documentation', cn: '文档' },
  ]

  const { pathname } = window.location
  let version = props.versions.find(v => pathname.indexOf(v.content) >= 0)
  if (version) version = version.content

  return (
    <div className={headerClass('_')}>
      <div className={headerClass('logo')}>Logo</div>
      <div className={headerClass('nav')}>
        {
          navs.map(nav => (
            <NavLink
              key={nav.path}
              to={nav.path}
              className={headerClass(path === nav.path && 'active')}
            >
              {locate(nav.cn, nav.en)}
            </NavLink>
          ))
        }
        <a href="javascript:;" onClick={handleLangClick}>{locate('English', '中文')}</a>
      </div>
      <div className={headerClass('right')}>
        {
          version &&
          <Dropdown
            className={headerClass('light')}
            data={props.versions}
            hover
            placeholder={version}
            type="link"
          />
        }

        <Dropdown
          className={headerClass('light')}
          data={themes}
          onClick={handleThemeClick}
          hover
          placeholder={`theme: ${theme.getTheme()}`}
          type="link"
        />
      </div>
    </div>
  )
}

Header.contextTypes = {
  router: PropTypes.object.isRequired,
}

Header.propTypes = {
  versions: PropTypes.array,
}

export default Header
