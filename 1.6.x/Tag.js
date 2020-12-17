(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[45],{1437:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),s=t(535),l=t(536),i=t(33),r=t(1438),c=t.n(r),u=t(1439),d=t.n(u),g=Object(i.b)(c.a,d.a),f=[{name:"1-base",title:Object(i.b)("基本用法 \n 基本的使用","Base \n Basic usage"),component:t(1440).default,rawText:t(1441)},{name:"2-type",title:Object(i.b)("类型 \n 内置了 4 种类型（样式），[default,success, info, warning, danger]，默认为 default","type \n There are four built-in types (styles), [default,success, info, warning, danger], the default value is default."),component:t(1442).default,rawText:t(1443)},{name:"3-bgcolor",title:Object(i.b)("背景色 \n 可以通过backgroundColor, 和style去设置自己想要的样式","background color \n You can set the style you want with backgroundColor, and style."),component:t(1444).default,rawText:t(1445)},{name:"4-close",title:Object(i.b)("关闭 \n 设置 onClose 属性时，显示关闭按钮 \n onClose 为 true 时，只关闭提示，不处理 \n onClose 为函数时，关闭后调用此函数","onClose \n When the onClose property is set, the close button is displayed. \n When the onClose property is true, only hide the component. \n When the onClose is a function, call this function after hiding it."),component:t(1446).default,rawText:t(1447)},{name:"5-disabled",title:Object(i.b)("禁用 \n 禁用tag","disabled \n disabled the tag"),component:t(1448).default,rawText:t(1449)},{name:"6-dynamic",title:Object(i.b)("动态用法 \n 通过数组生成tags,动态增改","Dynamic usage \n create tags by use array, add and remove"),component:t(1450).default,rawText:t(1451)},{name:"7-editable",title:Object(i.b)("可编辑 \n onCompleted 不为空时，可编辑","editable \n editable when onCompleted is not empty"),component:t(1452).default,rawText:t(1453)}];n.default=Object(s.a)(function(e){return o.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:g,examples:f}))})},1438:function(e,n){e.exports="# Tag *标签*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | ReactNode | 无 | 内容，文字或react组件 |\n| className | string | 无 | 扩展className |\n| backgroundColor | string | 无 | 背景色,可以自行的设置标签的背景色 |\n| onClose | () => void \\| boolean | 无 | 当 onClose 为空时，不显示关闭。如果需要关闭又不需要处理回调，设置为true即可 |\n| onClick | (e: MouseEvent) => void | 无 | 点击tag事件 |\n| style | object | 无 | 最外层扩展样式 |\n| disabled | boolean | false | 是否禁用 | \n| type | 'success' \\| 'info' \\| 'warning' \\| 'danger' \\| 'error' | *default* |  类型 |\n| onCompleted | (value) => void | 无 | Tag 编辑完成时触发该事件（children 必须为 string） |\n"},1439:function(e,n){e.exports="# Tag\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| -------- | ---- | ------- | ----------- |\n| children | ReactNode  | - | Content, text or react component |\n| className | string | - | Extend className |\n| backgroundColor | string | - | background color,can set the tag's background color by it |\n| onClose | () => void \\| boolean | - | When onClose is empty, no close is displayed. If you need to close and do not need to handle callbacks, set it true. |\n| onClick | (e: MouseEvent) => void | - | the click callback | \n| style | object | - | Container element style |\n| disabled | boolean | false | is disabled | \n| type | 'success' \\| 'info' \\| 'warning' \\| 'danger' \\| 'error' | *default* | types |\n| onCompleted | (value) => void | - | This event is triggered when Tag editing is completed (children must be string) |\n"},1440:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),s=t(302);n.default=function(){return o.a.createElement("div",null,o.a.createElement(s.a,null,"Tag 1"),o.a.createElement(s.a,null,"Tag 2"),o.a.createElement(s.a,{onClose:function(){return console.log("I am close")},onClick:function(){return console.log("I am click")}},"Tag 3"))}},1441:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 基本的使用\n * en - Base\n *    -- Basic usage\n */\nimport React from 'react'\nimport { Tag } from 'shineout'\n\nexport default function() {\n  return (\n    <div>\n      <Tag>Tag 1</Tag>\n      <Tag>Tag 2</Tag>\n      <Tag onClose={() => console.log('I am close')} onClick={() => console.log('I am click')}>\n        Tag 3\n      </Tag>\n    </div>\n  )\n}\n"},1442:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),s=t(302);n.default=function(){return o.a.createElement("div",null,o.a.createElement(s.a,null,"Default"),o.a.createElement(s.a,{type:"success"},"Success"),o.a.createElement(s.a,{type:"info"},"Info"),o.a.createElement(s.a,{type:"warning"},"Warning"),o.a.createElement(s.a,{type:"danger"},"Danger"))}},1443:function(e,n){e.exports='/**\n * cn - 类型\n *    -- 内置了 4 种类型（样式），[default,success, info, warning, danger]，默认为 default\n * en - type\n *    -- There are four built-in types (styles), [default,success, info, warning, danger], the default value is default.\n */\nimport React from \'react\'\nimport { Tag } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Tag>Default</Tag>\n      <Tag type="success">Success</Tag>\n      <Tag type="info">Info</Tag>\n      <Tag type="warning">Warning</Tag>\n      <Tag type="danger">Danger</Tag>\n    </div>\n  )\n}\n'},1444:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),s=t(302);n.default=function(){return o.a.createElement("div",null,o.a.createElement(s.a,{backgroundColor:"#eeeeee"},"#eeeeee"),o.a.createElement(s.a,{backgroundColor:"#613400"},"#613400"),o.a.createElement(s.a,{style:{color:"#eb2f96",background:"#fff0f6",borderColor:"#ffadd2"}},"#f50"),o.a.createElement(s.a,{style:{color:"#52c41a",background:"#f6ffed",borderColor:"#b7eb8f"}},"#87d068"))}},1445:function(e,n){e.exports="/**\n * cn - 背景色\n *    -- 可以通过backgroundColor, 和style去设置自己想要的样式\n * en - background color\n *    -- You can set the style you want with backgroundColor, and style.\n */\nimport React from 'react'\nimport { Tag } from 'shineout'\n\nexport default function() {\n  return (\n    <div>\n      <Tag backgroundColor=\"#eeeeee\">#eeeeee</Tag>\n      <Tag backgroundColor=\"#613400\">#613400</Tag>\n      <Tag\n        style={{\n          color: '#eb2f96',\n          background: '#fff0f6',\n          borderColor: '#ffadd2',\n        }}\n      >\n        #f50\n      </Tag>\n      <Tag\n        style={{\n          color: '#52c41a',\n          background: '#f6ffed',\n          borderColor: '#b7eb8f',\n        }}\n      >\n        #87d068\n      </Tag>\n    </div>\n  )\n}\n"},1446:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),s=t(302);n.default=function(){return o.a.createElement("div",null,o.a.createElement(s.a,{onClose:!0},"onClose=true"),o.a.createElement(s.a,{onClose:function(){return console.log("close")}},"onClose=function"),o.a.createElement(s.a,{onClose:function(){return new Promise(function(e){setTimeout(function(){console.log("promise close"),e(!0)},3e3)})}},"onClose=promise"))}},1447:function(e,n){e.exports="/**\n * cn - 关闭\n *    -- 设置 onClose 属性时，显示关闭按钮\n *    -- onClose 为 true 时，只关闭提示，不处理\n *    -- onClose 为函数时，关闭后调用此函数\n * en - onClose\n *    -- When the onClose property is set, the close button is displayed.\n *    -- When the onClose property is true, only hide the component.\n *    -- When the onClose is a function, call this function after hiding it.\n */\nimport React from 'react'\nimport { Tag } from 'shineout'\n\nexport default () => (\n  <div>\n    <Tag onClose>onClose=true</Tag>\n\n    <Tag onClose={() => console.log('close')}>onClose=function</Tag>\n\n    <Tag\n      onClose={() =>\n        new Promise(resolve => {\n          setTimeout(() => {\n            console.log('promise close')\n            resolve(true)\n          }, 3000)\n        })\n      }\n    >\n      onClose=promise\n    </Tag>\n  </div>\n)\n"},1448:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),s=t(302);n.default=function(){return o.a.createElement("div",null,o.a.createElement(s.a,{disabled:!0},"Tag 1"),o.a.createElement(s.a,{disabled:!0,type:"info"},"Tag 2"),o.a.createElement(s.a,{disabled:!0,onClose:!0},"Tag 3"))}},1449:function(e,n){e.exports="/**\n * cn - 禁用\n *    -- 禁用tag\n * en - disabled\n *    -- disabled the tag\n */\nimport React from 'react'\nimport { Tag } from 'shineout'\n\nexport default function() {\n  return (\n    <div>\n      <Tag disabled>Tag 1</Tag>\n      <Tag disabled type=\"info\">\n        Tag 2\n      </Tag>\n      <Tag disabled onClose>\n        Tag 3\n      </Tag>\n    </div>\n  )\n}\n"},1450:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return g});var l=t(27),i=t(5),a=t(6),r=t(7),c=t(3),o=t(8),s=t(0),u=t.n(s),d=t(302),g=function(e){function s(){var e,a;Object(i.a)(this,s);for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(s)).call.apply(e,[this].concat(t)))).state={tags:["Tag 1","Tag 2","Tag 3"],inputVisible:!1},a.remove=function(n){var e=a.state.tags.filter(function(e){return e!==n});a.setState({tags:e})},a.showInput=function(){a.setState({inputVisible:!0})},a.handleInputBlur=function(e){var n=a.state.tags,t=n;e&&-1===n.indexOf(e)&&(t=[].concat(Object(l.a)(n),[e])),console.log(t),a.setState({tags:t,inputVisible:!1})},a}return Object(o.a)(s,e),Object(a.a)(s,[{key:"render",value:function(){var n=this,e=this.state,t=e.tags,a=e.inputVisible;return u.a.createElement("div",null,t.map(function(e){return u.a.createElement(d.a,{key:e,onClose:function(){return n.remove(e)}},e)}),a?u.a.createElement(d.a.Input,{onBlur:this.handleInputBlur}):u.a.createElement(d.a,{onClick:this.showInput,style:{background:"#fff",borderStyle:"dashed"}},"+ New Tag"))}}]),s}(s.Component)},1451:function(e,n){e.exports="/**\n * cn - 动态用法\n *    -- 通过数组生成tags,动态增改\n * en - Dynamic usage\n *    -- create tags by use array, add and remove\n */\n\nimport React, { Component } from 'react'\nimport { Tag } from 'shineout'\n\nexport default class extends Component {\n  state = {\n    tags: ['Tag 1', 'Tag 2', 'Tag 3'],\n    inputVisible: false,\n  }\n\n  remove = removedTag => {\n    const tags = this.state.tags.filter(tag => tag !== removedTag)\n    this.setState({ tags })\n  }\n\n  showInput = () => {\n    this.setState({ inputVisible: true })\n  }\n\n  handleInputBlur = value => {\n    const { tags } = this.state\n    let newTags = tags\n    if (value && tags.indexOf(value) === -1) {\n      newTags = [...tags, value]\n    }\n    console.log(newTags)\n    this.setState({\n      tags: newTags,\n      inputVisible: false,\n    })\n  }\n\n  render() {\n    const { tags, inputVisible } = this.state\n    return (\n      <div>\n        {tags.map(a => (\n          <Tag key={a} onClose={() => this.remove(a)}>\n            {a}\n          </Tag>\n        ))}\n        {inputVisible ? (\n          <Tag.Input onBlur={this.handleInputBlur} />\n        ) : (\n          <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>\n            + New Tag\n          </Tag>\n        )}\n      </div>\n    )\n  }\n}\n"},1452:function(e,n,t){"use strict";t.r(n);var o=t(25),s=t(0),l=t.n(s),i=t(302);n.default=function(){var e=Object(s.useState)("abc"),n=Object(o.a)(e,2),t=n[0],a=n[1];return l.a.createElement("div",null,l.a.createElement(i.a,{onCompleted:function(e){a(e)},onClose:function(){console.log("close")}},t))}},1453:function(e,n){e.exports="/**\n * cn - 可编辑\n *    -- onCompleted 不为空时，可编辑\n * en - editable\n *    -- editable when onCompleted is not empty\n */\nimport React, { useState } from 'react'\nimport { Tag } from 'shineout'\n\nexport default function() {\n  const [value, setValue] = useState('abc')\n  return (\n    <div>\n      <Tag\n        onCompleted={val => {\n          setValue(val)\n        }}\n        onClose={() => {\n          console.log('close')\n        }}\n      >\n        {value}\n      </Tag>\n    </div>\n  )\n}\n"},302:function(e,n,t){"use strict";var m=t(19),a=t(5),o=t(6),s=t(7),l=t(3),i=t(8),r=t(1),c=t(0),v=t.n(c),u=t(17),d=t(24),g=t(67),C=t(2),f=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).bindRef=n.bindRef.bind(Object(r.a)(Object(r.a)(n))),n.handleChange=n.handleChange.bind(Object(r.a)(Object(r.a)(n))),n.handleBlur=n.handleBlur.bind(Object(r.a)(Object(r.a)(n))),n.handleKeyUp=n.handleKeyUp.bind(Object(r.a)(Object(r.a)(n))),n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){Object(d.a)(Object(l.a)(t.prototype),"componentDidMount",this).call(this),this.element&&this.element.focus()}},{key:"bindRef",value:function(e){this.element=e}},{key:"handleChange",value:function(e){var n=e.target.value,t=this.props.onChange;t&&t(n)}},{key:"handleKeyUp",value:function(e){var n=this.props,t=n.onBlur,a=n.onKeyUp,o=n.onEnterPress;13===e.keyCode&&(o?o(e.target.value,e):t&&t(e.target.value,e)),a&&a(e)}},{key:"handleBlur",value:function(e){var n=this.props.onBlur;n&&n(e.target.value,e)}},{key:"render",value:function(){var e=this.props,n=e.value,t=e.onFocus;return v.a.createElement("input",{ref:this.bindRef,type:"text",value:n,onFocus:t,onChange:this.handleChange,onKeyUp:this.handleKeyUp,onBlur:this.handleBlur})}}]),t}(u.b),y=Object(g.a)({className:Object(C.H)("input")})(f),b=t(26),p=t(42),h=t(40),T=t(29),j=t(10),O=t(11),k=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={dismiss:0,inputVisible:0,value:null},n.dismiss=n.dismiss.bind(Object(r.a)(Object(r.a)(n))),n.handleClick=n.handleClick.bind(Object(r.a)(Object(r.a)(n))),n.handleClose=n.handleClose.bind(Object(r.a)(Object(r.a)(n))),n.renderClose=n.renderClose.bind(Object(r.a)(Object(r.a)(n))),n.closeTag=n.closeTag.bind(Object(r.a)(Object(r.a)(n))),n.toggleInputVisible=n.toggleInputVisible.bind(Object(r.a)(Object(r.a)(n))),n.inputBlur=n.inputBlur.bind(Object(r.a)(Object(r.a)(n))),n.inputChange=n.inputChange.bind(Object(r.a)(Object(r.a)(n))),n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.children;e.onCompleted&&Object(j.isString)(n)&&!Object(j.isEmpty)(n)&&this.setState({value:n})}},{key:"closeTag",value:function(){this.setState({dismiss:2})}},{key:"dismiss",value:function(e){var n,t=this,a=this.props.onClose;if(!0!==a){if("function"==typeof a&&(n=a(e)),Object(j.isPromise)(n))return this.setState({dismiss:1}),void n.then(function(){t.closeTag()});e.defaultPrevented||this.closeTag()}else this.closeTag()}},{key:"inputBlur",value:function(e){var n=this.props.onCompleted;Object(j.isFunc)(n)&&n(e),this.setState({inputVisible:0})}},{key:"inputChange",value:function(e){this.setState({value:e})}},{key:"toggleInputVisible",value:function(){var e=this.state,n=e.inputVisible,t=e.value;this.props.onCompleted&&!Object(j.isEmpty)(t)&&this.setState({inputVisible:0===n?1:0})}},{key:"handleClick",value:function(e){var n=this.props,t=n.onClick;n.disabled||(this.toggleInputVisible(),"function"==typeof t&&t(e))}},{key:"handleClose",value:function(e){var n=this.props.disabled;0<this.state.dismiss||n||this.dismiss(e)}},{key:"renderClose",value:function(e){if(!this.props.onClose)return null;var n=Object(C.H)("close-icon"),t=Object(C.H)("close-loading");return 0===e?v.a.createElement("div",{className:n,onClick:this.handleClose},h.a.Close):v.a.createElement("div",{className:t},v.a.createElement(p.a,{name:"ring",size:10}))}},{key:"render",value:function(){var e=this.state,n=e.dismiss,t=e.inputVisible,a=e.value;if(2===n)return null;var o=this.props,s=o.children,l=o.className,i=o.type,r=o.backgroundColor,c=o.onClose,u=o.disabled;if(o.onCompleted&&1===t)return v.a.createElement(y,{value:a,onBlur:this.inputBlur,onChange:this.inputChange});var d=Object(T.wrapSpan)(s),g=this.props.style,f=Object(C.H)("_",u&&"disabled",i),b=Object(C.H)("inline"),p=c?{}:{onClick:this.handleClick},h=g||{};return l&&(f+=" ".concat(l)),r&&(h=Object(m.a)({color:Object(O.isDark)(r)?"#fff":"#000",backgroundColor:r,borderColor:"transparent"},g)),v.a.createElement("div",Object.assign({className:f,style:h},p),c?v.a.createElement("div",{onClick:this.handleClick,className:b},d):d,this.renderClose(n))}}]),t}(u.b);k.defaultProps=Object(m.a)({},b.a,{type:"default"});var E=k;E.Input=y,E.displayName="ShinoutTag";n.a=E}}]);