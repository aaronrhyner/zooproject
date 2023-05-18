import { List, ListItem, ListItemButton } from '@mui/material'
import animalClassesData from '../../data/AnimalClassesData'
import { useNavigate } from 'react-router-dom'

function AnimalList() {
  const navigate = useNavigate()

  return (
    <List>
      {animalClassesData.map((clazz) => (
        <ListItem key={clazz.class_number}>
          <ListItemButton
            onClick={() => navigate(`/animals/${clazz.class_type}`)}
          >
            {clazz.class_type_de}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default AnimalList
