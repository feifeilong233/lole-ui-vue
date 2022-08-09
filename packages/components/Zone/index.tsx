import { App } from "vue"
import { SFCWithInstall } from "../../types"
import Zone from "./zone"

Zone.install = (app: App) => {
  app.component(Zone.name, Zone)
}

export default Zone as SFCWithInstall<typeof Zone>
