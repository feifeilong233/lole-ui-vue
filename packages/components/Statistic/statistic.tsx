import { defineComponent, PropType, CSSProperties } from "vue"
import classnames from "classnames"
import "./_style.scss"

export interface BaseStatisticProps {
  className?: string
  style?: CSSProperties
  color?: colorType
  floated?: floatedType
  horizontal?: boolean
  size?: sizeType
  text?: boolean
  [key: string]: any
}

type colorType =
  | "primary"
  | "orange"
  | "yellow"
  | "indigo"
  | "green"
  | "teal"
  | "red"
  | "purple"
  | "pink"
  | "cyan"
  | "gray"

type floatedType = "left" | "right"

type sizeType = "mini" | "tiny" | "small" | "large" | "huge"

const statisticProps = () => ({
  className: String,
  style: {
    type: Object as PropType<CSSProperties>,
  },
  color: {
    type: String as PropType<colorType>,
  },
  floated: {
    type: String as PropType<floatedType>,
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<sizeType>,
  },
  text: {
    type: Boolean,
    default: false,
  },
})

export default defineComponent({
  name: "Statistic",
  props: statisticProps() as any,
  setup(props, { slots }) {
    const classes = classnames("lole-statistic", props.className, {
      [`${props.color}`]: props.color,
      [`${props.size}`]: props.size,
      [`${props.floated} floated`]: props.floated,
      horizontal: props.horizontal,
      statistic: true,
    })
    return () => {
      const { style } = props
      return (
        <>
          <div class={classes} style={style}>
            {slots.default!()}
          </div>
        </>
      )
    }
  },
})
