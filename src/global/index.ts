import { App } from 'vue'
import registerProperties from '@/global/register-properties'

export const globalRegister = (app: App) => {
  app.use(registerProperties)
}
