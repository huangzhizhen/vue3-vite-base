import {createVNode} from 'vue';

import * as kIcon from '@element-plus/icons-vue';

const kvIcon = (props) => {
  const { name } = props;
  // 当传入的是自定义svg时，则直接返回（自定义svg在配置文件中已经配置了svg的格式）
  if (typeof name !== 'string') {
    return name.render();
  }
  return createVNode(kIcon[name]);
}


export default {name: 'kvIcon', kvIcon}
