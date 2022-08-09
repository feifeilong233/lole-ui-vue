import { defineComponent, PropType, CSSProperties } from "vue"
import classnames from "classnames"
import "./_style.scss"

enum colorType {
  Primary = "primary",
  Indigo = "indigo",
  Purple = "purple",
  Pink = "pink",
  Red = "red",
  Orange = "orange",
  Yellow = "yellow",
  Green = "green",
  Teal = "teal",
  Cyan = "cyan",
  Gray = "gray",
  Black = "black",
}

enum textAlignType {
  Left = "left",
  Center = "center",
  Right = "right",
}

export interface BaseZoneProps {
  attached?: boolean | "top" | "bottom"
  basic?: boolean
  circular?: boolean
  className?: string
  style?: CSSProperties
  color?: colorType
  compact?: boolean
  disabled?: boolean
  floated?: "left" | "right"
  inverted?: boolean
  padded?: boolean
  piled?: boolean
  raised?: boolean
  size?: "small" | "large"
  stacked?: boolean
  textAlign?: textAlignType
  vertical?: boolean
  listen?: boolean
  [key: string]: any
}

enum attachedType {
  Top = "top",
  Bottom = "bottom",
}

enum floatedType {
  Left = "left",
  Right = "right",
}

enum ZoneSize {
  Small = "small",
  Large = "large",
}

const zoneProps = () => ({
  attached: {
    type: [Boolean, String] as PropType<boolean | attachedType>,
    default: true as boolean | attachedType,
  },
  basic: {
    type: Boolean,
    default: false,
  },
  circular: {
    type: Boolean,
    default: false,
  },
  className: String,
  style: {
    type: Object as PropType<CSSProperties>,
  },
  color: {
    type: String as PropType<colorType>,
  },
  compact: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  floated: {
    type: String as PropType<floatedType>,
  },
  inverted: {
    type: Boolean,
    default: false,
  },
  padded: {
    type: Boolean,
    default: false,
  },
  piled: {
    type: Boolean,
    default: false,
  },
  raised: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<ZoneSize>,
  },
  stacked: {
    type: Boolean,
    default: false,
  },
  textAlign: {
    type: String as PropType<textAlignType>,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  listen: {
    type: Boolean,
    default: false,
  },
})

export default defineComponent({
  name: "Zone",
  props: zoneProps() as any,
  setup(props, { slots }) {
    const classes = classnames("lole-zone", props.className, {
      [`${props.color}`]: props.color,
      [`${props.size}`]: props.size,
      circular: props.circular,
      basic: props.basic,
      compact: props.compact,
      disabled: props.disabled,
      inverted: props.inverted,
      piled: props.piled,
      raised: props.raised,
      stacked: props.stacked,
      vertical: props.vertical,
      padded: props.padded,
      listen: props.listen,
      [`${props.attached === true ? "" : props.attached} attached`]: props.attached,
      [`${props.textAlign} aligned`]: props.textAlign,
      [`${props.floated} floated`]: props.floated,
      zone: true,
    })

    return () => {
      const { style } = props
      return (
        <div class={classes} style={style}>
          {slots.default!()}
        </div>
      )
    }
  },
})
