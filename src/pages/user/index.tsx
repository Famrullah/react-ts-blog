import React from 'react'
// import { getAlbumsList } from '../../services/albums.api'

// import Loading from '../../components/loading/loading'

// const User = (props: unknown) => {
//   useEffect(() => {
//     console.log('use')
//   }, [])

//   //   if (!listAlbums) return <Loading />
//   return <>{props.id}</>
// }

// export default User
export interface Users {
  name: string
  username: string
}

export const User: React.FC<Users> = (props: Users) => {
  const { name, username } = props
  return <li>{`${name}: ${username}`}</li>
}

// export default User
