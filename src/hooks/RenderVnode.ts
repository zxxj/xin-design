import { defineComponent } from 'vue'

const renderVnode = defineComponent({
  props: {
    vNode: {
      // 可以接收普通文本与html元素
      type: [String, Object],
      required: true
    }
  },

  setup(props) {
    return () => props.vNode
  }
})

export default renderVnode
