import { Box, Button, Grid, Typography } from '@mui/material'
import news from '../../data/NewsArray'
import { Link as RouterLink } from 'react-router-dom'

function News() {
  const boxStyling = {
    backgroundColor: 'Lightgray',
    borderRadius: '5px',
    width: 'calc(30% + 400px)',
    border: '1px solid black',
    padding: '30px 30px 30px 30px',
    textAlign: 'left',
    marginLeft: '10px',
    marginBottom: '5px',
    boxShadow: '10px 5px 15px black',
    color: 'black'
  }

  const imgStyling = {
    border: '1px solid black',
    padding: '0 0'
  }

  return (
    <Box style={{ backgroundColor: 'lightblue' }}>
      <Typography variant={'h4'}>News</Typography>

      {news.map((news) => (
        <Button
          component={RouterLink}
          to={'/news/' + news.id}
          style={boxStyling}
        >
          <Grid container spacing={3} columns={16}>
            <Grid item xs={3}>
              <img
                style={imgStyling}
                src={news.img}
                alt={news.alt}
                height={100}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant={'h5'}>{news.titel}</Typography>
              <p>{news.text}</p>
            </Grid>
            <Grid item xs={6}>
              <p>
                Time: <u>{news.time}</u> Uhr{' '}
              </p>
              <p>Place: {news.place}</p>
            </Grid>
          </Grid>
        </Button>
      ))}
    </Box>
  )
}

export default News
