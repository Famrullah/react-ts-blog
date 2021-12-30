import Api from '../common/api'
import { Albums } from '../common/type'

const getAlbumsList = async (albums: string) => {
  try {
    const response = await Api.get<Albums[]>(albums)
    return response.data
  } catch (err) {
    throw err
  }
}

export { getAlbumsList }
