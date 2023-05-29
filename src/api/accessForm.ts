import { request } from '@utils/request'
import {
  TBasicInfo,
  TAbilityInfo,
  TConcurrency,
  TUploadForm
} from '@pages/AccessForm/index.d'

/**
 * 保存应用数据
 */
const saveTAppInfo = (
  params: TBasicInfo & TAbilityInfo & TConcurrency & TUploadForm
): Promise<TResponse> => {
  return request.get('/app/saveTAppInfo')
}

export { saveTAppInfo }
