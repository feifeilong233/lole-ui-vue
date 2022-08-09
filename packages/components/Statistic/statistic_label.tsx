import { defineComponent, PropType, CSSProperties } from "vue"
import classnames from "classnames"
import "./_style.scss"

export interface BaseStatisticLableProps {
  className?: string
  style?: CSSProperties
  [key: string]: any
}

const baseStatisticLableProps = () => ({
  className: String,
  style: {
    type: Object as PropType<CSSProperties>,
  },
})

export default defineComponent({
  name: "StatisticLabel",
  props: baseStatisticLableProps() as any,
  setup(props, { slots }) {
    return () => {
      const { className, style } = props
      return (
        <div
          class={classnames("label", className)}
          style={style}
        >
          {slots.default!()}
        </div>
      )
    }
  },
})
