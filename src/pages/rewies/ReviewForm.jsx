import React, { useState } from 'react'
import { Box, Button, Rating, TextField, Typography } from '@mui/material'

const ReviewForm = () => {
  const [title, setTitle] = useState('')
  const [stars, setStars] = useState('')
  const [file, setFile] = useState()
  const [commentList, setCommentList] = useState([
    {
      name: 'DER Familienspass!',
      stars: 5,
      text: 'Ich durfte mit der Ganzen Familien einen Tollen Tag erleben!',
      image: 'pictures/review/family.png'
    }
  ])
  const [text, setText] = useState('')

  const handleImageUpload = (e) => {
    setFile(e.target.files[0])
  }
  const commentClick = (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = () => {
      const newComment = {
        name: title,
        stars: stars,
        text: text,
        image: reader.result
      }
      setCommentList([...commentList, newComment])
    }
    reader.readAsDataURL(file)
  }

  return (
    <div>
      <h1>Review</h1>
      <form>
        <TextField
          label='Titel'
          variant='standard'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <Rating
          name='simple-controlled'
          value={stars}
          onChange={(e) => {
            setStars(e.target.value)
          }}
        />
        <br />
        <TextField
          label='Enter your text'
          multiline
          rows={4}
          variant='outlined'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <input
          type='file'
          id='imageInput'
          accept='image/*'
          onChange={handleImageUpload}
          required
        />
        <br />
        <Button onClick={(e) => commentClick(e)}>Comment!</Button>
      </form>
      <hr />
      <h2>Comments</h2>
      {commentList.map((image, index) => (
        <Box style={{ border: 'solid 1px black', marginBottom: '10px' }}>
          <strong>{image.name}</strong>
          <br />
          Stars: {image.stars}
          <br />
          <Box>
            <p>{image.text}</p>
          </Box>
          <img
            src={image.image}
            alt="Bild couldn't load"
            style={{ maxWidth: '200px' }}
          />
        </Box>
      ))}
    </div>
  )
}

export default ReviewForm
