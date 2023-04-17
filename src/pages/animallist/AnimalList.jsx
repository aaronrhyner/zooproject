import { List, ListItem, ListItemButton } from '@mui/material'
import animalClasses from './AnimalClasses'
import { useNavigate } from 'react-router-dom'

function AnimalList() {
  const navigate = useNavigate()

  return (
    <List>
      {animalClasses.map((c) => (
        <ListItem>
          <ListItemButton onClick={() => navigate(`/animals/${c.class_type}`)}>
            {c.class_type_de}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default AnimalList
