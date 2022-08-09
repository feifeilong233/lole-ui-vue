import { App } from "vue"
import { SFCWithInstall } from "../../types"
import Image from "./image"

Image.install = (app: App) => {
  app.component(Image.name, Image)
}

export default Image as SFCWithInstall<typeof Image>
