import React, { useEffect, useState } from 'react'
import { getAlbumsList } from '../../services/albums.api'
import { getUserList } from '../../services/users.api'
import { Albums, Users, IParams } from './type'
import Loading from '../../components/loading/loading'
import { Button, Row, Col, Divider, Card, Avatar, Descriptions } from 'antd'
const { Meta } = Card

const Home = () => {
  const [listAlbums, setListAlbums] = useState<Albums[]>([])
  const [loading, setLoading] = useState({
    page: true,
    button: false,
  })
  const [params, setParams] = useState<IParams>({
    params: { _start: 0, _limit: 10 },
  })

  const mappingUserAlbum = (album: Albums[], users: Users[]) => {
    const albums = album.map((item) =>
      Object.assign(item, {
        user: users.filter((val) => item.userId == val.id),
      })
    )
    setListAlbums((prevState) => {
      if (prevState) {
        setListAlbums([...prevState, ...albums])
        isLoading()
      }
      return prevState
    })
  }

  const isLoading = () => {
    setLoading({
      page: false,
      button: false,
    })
  }

  const loadMore = () => {
    setParams({
      params: {
        _limit: params.params._limit,
        _start: params.params._start + 10,
      },
    })
    setLoading({
      page: false,
      button: true,
    })
  }

  useEffect(() => {
    const fetchAlbums = async () => {
      const getAlbum = await getAlbumsList('albums', params)
      const users = await getUserList('users')
      const data = getAlbum.map((item) =>
        Object.assign(item, {
          user: users.filter((val) => item.userId == val.id),
        })
      )
      mappingUserAlbum(data, users)
    }
    fetchAlbums()
  }, [setListAlbums, params])

  return (
    <>
      {loading.page ? (
        <Loading />
      ) : (
        <Row align="middle" gutter={40}>
          <Divider orientation="left">Album List</Divider>
          {listAlbums.map((item, index) => (
            <Col
              key={index}
              xs={{ span: 24 }}
              lg={{ span: 8 }}
              sm={{ span: 12 }}
            >
              <Card className="mb-10">
                <Meta
                  avatar={
                    <Avatar
                      src={`https://joeschmoe.io/api/v1/random?${Math.floor(
                        Math.random() * 100
                      )}`}
                    />
                  }
                  title={item.user[0].name}
                  description={`Album Title : ${item.title}`}
                />
                <hr className="mt-20 mb-20 primary" />
                <Descriptions column={1} title="Album Owner">
                  <Descriptions.Item label="UserName">
                    {item.user[0].username}
                  </Descriptions.Item>
                  <Descriptions.Item label="Telephone">
                    {item.user[0].phone}
                  </Descriptions.Item>
                  <Descriptions.Item label="Email">
                    {item.user[0].email}
                  </Descriptions.Item>
                  <Descriptions.Item label="Website">
                    {item.user[0].website}
                  </Descriptions.Item>
                  <Descriptions.Item label="City">
                    {item.user[0].address.city}
                  </Descriptions.Item>
                </Descriptions>
                <Button
                  style={{ float: 'right' }}
                  type="primary"
                  className="mt-50"
                >
                  Photo Album
                </Button>
              </Card>
            </Col>
          ))}
          <Button
            key="setting"
            type="link"
            block
            onClick={() => loadMore()}
            loading={loading.button}
          >
            Load More
          </Button>
        </Row>
      )}
    </>
  )
}

export default Home
