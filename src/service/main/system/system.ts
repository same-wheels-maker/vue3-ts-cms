import xRequest from '../../index'
import { IDataType } from '@/service/types'

export const getPageListData = (url: string, queryInfo: any) => {
  return xRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return xRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return xRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return xRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
