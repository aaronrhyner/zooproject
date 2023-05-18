import { Typography } from '@mui/material'
import animalsData from '../../data/AnimalsData'
import { useParams } from 'react-router-dom'

function AnimalDetails() {
  const { animalname } = useParams()

  return (
    <Typography variant={'h4'}>
      {
        animalsData.find((animal) => animal.animal_name === animalname)
          .animal_name
      }
    </Typography>
  )
}

export default AnimalDetails
