/**
 * cn - 布局 \n 通过 layout 来控制组件是否显示以及显示的位置
 * en - Layout
 */
import React from 'react'
import { Pagination } from 'shineout'

const info = ({ total }) => `total ${total}`

export default function () {
  return (
    <Pagination
      total={128}
      pageSize={50}
      text={{
        jumper: 'Go to {input}',
      }}
      layout={['links', 'list', info, 'jumper']}
    />
  )
}
