import { useNavigate, useParams } from 'react-router-dom'
import { List, ListItem, ListItemButton } from '@mui/material'
import animalListData from '../../data/AnimalListData'

function AnimalNameList() {
  const { classType } = useParams()
  const navigate = useNavigate()

  return (
    <List>
      {animalListData
        .find((animalClass) => animalClass.classType === classType)
        .animalNames.map((animalName) => (
          <ListItem key={animalName}>
            <ListItemButton
              onClick={() => navigate(`/animals/${classType}/${animalName}`)}
            >
              {animalName}
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  )
}

export default AnimalNameList
