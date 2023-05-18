import { useNavigate, useParams } from 'react-router-dom'
import animalClassesData from './data/AnimalClassesData'
import { List, ListItem, ListItemButton } from '@mui/material'

function AnimalClassDetails() {
  const { classname } = useParams()
  const navigate = useNavigate()

  return (
    <List>
      {animalClassesData
        .find((clazz) => clazz.class_type === classname)
        .animal_names.map((animal) => (
          <ListItem key={animal}>
            <ListItemButton
              onClick={() => navigate(`/animals/${classname}/${animal}`)}
            >
              {animal}
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  )
}

export default AnimalClassDetails
