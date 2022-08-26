import { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'

const registerProperties = (app: App) => {
  app.config.globalProperties.$filters = {
    foo() {
      console.log('foo')
    },
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}

export default registerProperties
