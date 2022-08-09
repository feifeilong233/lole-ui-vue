import classnames from "classnames"
import { defineComponent, PropType } from "vue"
import "./_style.scss"

enum ButtonSize {
  Large = "lg",
  Middle = "md",
  Small = "sm",
}

enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
  Dashed = "dashed",
}

enum ButtonShape {
  Default = "default",
  Circle = "circle",
  Round = "round",
}

const buttonProps = () => ({
  label: String,
  btnType: {
    type: String as PropType<ButtonType>,
    default: ButtonType.Default,
  },
  className: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: ButtonSize.Middle,
  },
  href: String,
  shape: {
    type: String as PropType<ButtonShape>,
    default: ButtonShape.Default,
  },
  block: {
    type: Boolean,
    defalut: false,
  },
  ghost: {
    type: Boolean,
    defalut: false,
  },
})

const props = buttonProps()

export default defineComponent({
  name: "lole-button",
  props: props,
  setup(props, { slots, attrs }) {
    const classes = classnames("lole-btn", props.className, {
      [`btn-${props.btnType}`]: props.btnType,
      [`btn-${props.size}`]: props.size,
      [`btn-type-${props.shape}`]: props.shape,
      block: props.block,
      ghost: props.ghost,
      disabled: props.btnType === "link" && props.disabled,
    })

    return () => {
      const { btnType, href, disabled } = props
      if (btnType === ButtonType.Link && href) {
        return (
          <a {...attrs} href={href} class={classes}>
            {slots.default!()}
          </a>
        )
      } else {
        return (
          <button {...attrs} class={classes} disabled={disabled}>
            {slots.default!()}
          </button>
        )
      }
    }
  },
})
