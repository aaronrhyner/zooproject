import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import animalListData from '../../data/AnimalListData'

function AnimalDetails() {
  const { classType, animalName } = useParams()

  return (
    <Typography variant={'h4'}>
      {
        animalListData
          .find((animalClass) => animalClass.classType === classType)
          .animalObjects.find(
            (animaObject) => animaObject.animalName === animalName
          ).animalName
      }
    </Typography>
  )
}

export default AnimalDetails
