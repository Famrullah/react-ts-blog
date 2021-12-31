import Api from '../common/api'
import { Albums } from '../common/type'

export interface IParams {
  params: {
    _start: number
    _limit: number
  }
}

const getAlbumsList = async (albums: string, config?: IParams) => {
  try {
    const response = await Api.get<Albums[], IParams | null>(albums, config)
    return response.data
  } catch (err) {
    throw err
  }
}

export { getAlbumsList }
