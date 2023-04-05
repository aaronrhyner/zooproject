import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import news from './NewsArray'
import { Grid, ImageList, ImageListItem } from '@mui/material'

export default function InfoPage() {
  const [obj, setObj] = useState({})
  const { id } = useParams()
  useEffect(() => {
    console.log(news.find((obj) => obj.id === 1))
    setObj(news.find((obj) => obj.id === Number.parseInt(id)))
  }, [])

  useEffect(() => {
    console.log(obj)
  }, [obj])

  const myCardStyle = {
    border: '1px solid var(--surface-border)',
    padding: '10px',
    margin: '20px',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
    borderRadius: '12px'
  }
  const imgStyling = {
    border: '1px solid black',
    padding: '0 0'
  }
  return (
    <div style={myCardStyle}>
      {obj && (
        <>
          <h2>{obj.titel}</h2>
          <img style={imgStyling} src={obj.img} alt={obj.alt} height={100} />
          <h4>{obj.text}</h4>

          {obj.imgs && (
            <ImageList
              sx={{ width: 500, height: 450 }}
              cols={3}
              rowHeight={164}
            >
              {obj.imgs.map((item) => (
                <>
                  <ImageListItem key={item.img}>
                    <img src={item.src} alt={item.alt} loading="lazy" />
                  </ImageListItem>
                </>
              ))}
            </ImageList>
          )}
        </>
      )}
    </div>
  )
}
