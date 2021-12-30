import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Login = () => {
  const params = useParams()
  console.log(params)
  useEffect(() => {
    console.log('use')
  }, [])

  return <>{JSON.stringify(params)}</>
}

export default Login
