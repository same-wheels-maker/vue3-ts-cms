import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export const formatUtcString = (
  urcString: string,
  format = 'YYYY-MM-DD HH:mm:ss'
) => {
  return dayjs.utc(urcString).format(format)
}
