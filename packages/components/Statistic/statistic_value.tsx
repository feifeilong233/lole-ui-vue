import { defineComponent, PropType, CSSProperties } from "vue"
import classnames from "classnames"
import "./_style.scss"

export interface BaseStatisticValueProps {
  className?: string
  style?: CSSProperties
  text?: boolean
  [key: string]: any
}

const baseStatisticValueProps = () => ({
  className: String,
  style: {
    type: Object as PropType<CSSProperties>,
  },
  text: {
    type: Boolean,
    default: false,
  },
})

export default defineComponent({
  name: "StatisticValue",
  props: baseStatisticValueProps() as any,
  setup(props, { slots }) {
    return () => {
      const { className, text, style } = props

      return (
        <div
          class={classnames(
            {
              text: text,
              value: true,
            },
            className,
          )}
          style={style}
        >
          {slots.default!()}
        </div>
      )
    }
  },
})
