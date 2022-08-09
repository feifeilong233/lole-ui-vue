import { defineComponent, PropType, CSSProperties } from "vue"
import classnames from "classnames"
import "./_style.scss"

export interface BaseImageProps {
  alt: string
  src: string

  as?: string
  href?: string

  avatar?: boolean
  bordered?: boolean
  centered?: boolean
  circular?: boolean
  className?: string
  style?: CSSProperties
  disabled?: boolean
  floated?: ImageFloatedType
  fluid?: boolean
  hidden?: boolean
  inline?: boolean
  rounded?: boolean
  size?: ImageSizeType
  spaced?: boolean | ImageSpacedType
  verticalAlign?: ImageVerticalAlignType
  [key: string]: any
}

enum ImageSizeType {
  Mini = "mini",
  Tiny = "tiny",
  Small = "small",
  Medium = "medium",
  Large = "large",
}

enum ImageVerticalAlignType {
  Top = "top",
  Middle = "middle",
  Bottom = "bottom",
}

enum ImageFloatedType {
  Left = "left",
  Right = "right",
}

enum ImageSpacedType {
  Middle = "middle",
  Left = "left",
  Right = "right",
}

const imageProps = () => ({
  alt: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },

  as: String,
  href: String,

  avatar: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  centered: {
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
  disabled: {
    type: Boolean,
    default: false,
  },
  floated: {
    type: String as PropType<ImageFloatedType>,
    default: ImageFloatedType.Left,
  },
  fluid: {
    type: Boolean,
    default: false,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
  inline: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<ImageSizeType>,
    default: ImageSizeType.Medium,
  },
  spaced: {
    type: String as PropType<ImageSpacedType>,
    default: ImageSpacedType.Middle,
  },
  verticalAlign: {
    type: String as PropType<ImageVerticalAlignType>,
    default: ImageVerticalAlignType.Middle,
  },
})

export default defineComponent({
  name: "Image",
  props: imageProps() as any,
  setup(props) {
    const classes = classnames("lole-image", props.className, {
      [`${props.size}`]: props.size,
      avatar: props.avatar,
      bordered: props.bordered,
      circular: props.circular,
      centered: props.centered,
      disabled: props.disabled,
      fluid: props.fluid,
      hidden: props.hidden,
      inline: props.inline,
      rounded: props.rounded,
      [`${props.spaced + " spaced"}`]: props.spaced,
      [`${props.floated} floated`]: props.floated,
      [`${props.verticalAlign} aligned`]: props.verticalAlign,
      image: true,
    })

    return () => {
      const { as, href, style, alt, src } = props
      if (as === "a") {
        return (
          <a href={href} class={classes} style={style}>
            <img alt={alt} src={src} />
          </a>
        )
      }

      return (
        <>
          <img alt={alt} src={src} class={classes} style={style}/>
        </>
      )
    }
  },
})
