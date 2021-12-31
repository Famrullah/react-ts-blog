import Api from '../common/api'
import { Users } from '../common/type'

const getUserList = async (user: string) => {
  try {
    const response = await Api.get<Users[], null>(user)
    return response.data
  } catch (err) {
    throw err
  }
}

export { getUserList }
