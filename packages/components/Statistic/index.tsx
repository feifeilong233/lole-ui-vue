import { App } from "vue"
import { SFCWithInstall } from "../../types"
import Statistic from "./statistic"

Statistic.install = (app: App) => {
  app.component(Statistic.name, Statistic)
}

export default Statistic as SFCWithInstall<typeof Statistic>
