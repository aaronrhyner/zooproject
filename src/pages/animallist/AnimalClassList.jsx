import { List, ListItem, ListItemButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import animalListData from '../../data/AnimalListData'

function AnimalClassList() {
  const navigate = useNavigate()

  return (
    <List>
      {animalListData.map((animalClass) => (
        <ListItem key={animalClass.classId}>
          <ListItemButton
            onClick={() => navigate(`/animals/${animalClass.classType}`)}
          >
            {animalClass.classTypeDe}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default AnimalClassList
