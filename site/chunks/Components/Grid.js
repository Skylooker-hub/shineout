/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'

import locate from 'doc/locate'

import cn from 'doc/pages/components/Grid/cn.md'
import en from 'doc/pages/components/Grid/en.md'

const source = locate(cn, en)

const examples = [
  {
    name: '01-base',
    title: locate('任意等分', 'Arbitrary'),
    component: require('doc/pages/components/Grid/example-01-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Grid/example-01-base.js'),
  },
  {
    name: '02-offset',
    title: locate('Offset', 'Offset'),
    component: require('doc/pages/components/Grid/example-02-offset.js').default,
    rawText: require('!raw-loader!doc/pages/components/Grid/example-02-offset.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))