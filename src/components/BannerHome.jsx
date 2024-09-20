import React from 'react'

const BannerHome = ({titulo, subtitulo}) => {
  return (
    <div className='bannerHome'>
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
    </div>
  )
}

export default BannerHome
