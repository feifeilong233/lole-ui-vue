import { App } from "vue"
import { SFCWithInstall } from "../../types"
import Button from "./button"

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button as SFCWithInstall<typeof Button>
