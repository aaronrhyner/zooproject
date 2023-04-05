import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import news from './NewsArray'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'

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
    <Box style={myCardStyle}>
      {obj && (
        <>
          <Typography variant={'h2'}>{obj.titel}</Typography>
          <img style={imgStyling} src={obj.img} alt={obj.alt} height={100} />
          <Typography variant={'h4'}>{obj.text}</Typography>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet.
          </p>
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
    </Box>
  )
}
