// 自己封装的组件的出口文件

import gxyButton from './buttons/button.vue'
import gxyRadio from './radios/radio.vue'

const components = {
   install(Vue){
       Vue.component('gxyButton',gxyButton)
       Vue.component('gxyRadio',gxyRadio)
   } 
}

/* 支持使用标签的方式引入 */
if(typeof window !== 'undefined' && window.Vue){
    window.Vue.use(components);
}
export default components;