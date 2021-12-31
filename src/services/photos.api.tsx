import Api from '../common/api'
import { Photos } from '../common/type'

export interface IParams {
  params: {
    _start: number
    _limit: number
  }
}

const getPhotoList = async (photos: string, config?: IParams) => {
  try {
    const response = await Api.get<Photos[], IParams>(photos, config)
    return response.data
  } catch (err) {
    throw err
  }
}

export { getPhotoList }
