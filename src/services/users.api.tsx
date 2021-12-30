import Api from '../common/api'
import { Users } from '../common/type'

const getUserList = async (user: string) => {
  try {
    const response = await Api.get<Users[]>(user)
    return response.data
  } catch (err) {
    throw err
  }
}

export { getUserList }
