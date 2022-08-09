import { App } from "vue"
import loleButton from "./components/Button"
import loleImage from "./components/Image"
import loleZone from "./components/Zone"
import loleStatistic from "./components/Statistic"
import loleStatisticValue from "./components/Statistic/statistic_value"
import loleStatisticLable from "./components/Statistic/statistic_label"

// 所有组件列表
const components = [loleButton, loleImage, loleZone, loleStatistic, loleStatisticValue, loleStatisticLable]

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component))
}

export { loleButton, loleImage, loleZone, loleStatistic, loleStatisticValue, loleStatisticLable }

export default {
  install,
}
