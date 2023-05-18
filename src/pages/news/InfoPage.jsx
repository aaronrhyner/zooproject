import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import news from '../../data/NewsArray'
import { Box, Grid, ImageList, ImageListItem, Typography } from '@mui/material'

export default function InfoPage() {
  const [obj, setObj] = useState({})
  const { id } = useParams()
  useEffect(() => {
    setObj(news.find((obj) => obj.id === Number.parseInt(id)))
  }, [id])

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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          {obj && (
            <Box>
              <Typography variant={'h2'}>{obj.titel}</Typography>
              <img
                style={imgStyling}
                src={obj.img}
                alt={obj.alt}
                height={100}
              />
              <Typography variant={'h4'}>{obj.text}</Typography>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet.
              </p>
            </Box>
          )}
        </Grid>
        <Grid item xs={6}>
          {obj.imgs && (
            <ImageList variant='masonry' cols={3} gap={50}>
              {obj.imgs.map((item) => (
                <Box>
                  <ImageListItem key={item.img}>
                    <img src={item.src} alt={item.alt} loading='lazy' />
                  </ImageListItem>
                </Box>
              ))}
            </ImageList>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}
