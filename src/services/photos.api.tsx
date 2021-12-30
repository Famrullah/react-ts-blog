import Api from '../common/api'
import { Photos } from '../common/type'

const getPhotoList = async (photos: string) => {
  try {
    const response = await Api.get<Photos[]>(photos)
    return response.data
  } catch (err) {
    throw err
  }
}

export { getPhotoList }
