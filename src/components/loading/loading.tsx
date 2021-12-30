import { css } from '@emotion/react'
import BarLoader from 'react-spinners/BarLoader'
import './loading.scss'

const override = css`
  display: block;
  margin: auto;
  background-color: #fff;
`

function Loading() {
  return (
    <div className="loading">
      <BarLoader css={override} />
    </div>
  )
}

export default Loading
