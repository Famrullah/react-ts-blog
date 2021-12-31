export interface IParams {
  params: {
    _start: number
    _limit: number
  }
}

export interface Albums {
  id: number
  title: string
  userId: number
  user: [Users]
}

export interface Album extends Users {
  id: number
  title: string
  userId: number
  user: [Users]
}

export interface Users {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
  geo: {
    lat: string
    lng: string
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface Photos {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface Params {
  params: {
    start: number
    limit: number
  }
}
