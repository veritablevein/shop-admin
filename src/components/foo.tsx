import { defineComponent, ref } from 'vue'

interface PropsType {
  msg: string
}

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup () {
    const count = ref(0)
    return (props: PropsType) => (
      <div>
        <p>{props.msg}</p>
        <p>{ count.value }</p>
      </div>
    )
  }
})

// export default defineComponent({
//   props: {
//     msg: {
//       type: String,
//       required: true
//     }
//   },
//   data () {
//     return {
//       count: 0
//     }
//   },
//   render () {
//     return (
//       <div>
//         <div>{this.msg}</div>
//         <p>{this.count}</p>
//       </div>
//     )
//   }
// })

// export default () => {
//   return (
//     <div>
//       <h1>foo 函数式组件</h1>
//     </div>
//   )
// }
