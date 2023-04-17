import { useLocation } from 'react-router-dom'
import { List } from '@mui/material'
import zooAnimals from './ZooAnimals'

function AnimalDetails() {
  const location = useLocation()

  return (
    <List>
      {
        zooAnimals.find(
          (a) => a.animal_name === location.pathname.split('/')[3]
        ).animal_name
      }
    </List>
  )
}

export default AnimalDetails
