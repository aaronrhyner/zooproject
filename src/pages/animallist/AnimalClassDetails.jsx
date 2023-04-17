import { useLocation, useNavigate } from 'react-router-dom'
import animalClasses from './AnimalClasses'
import { List, ListItem, ListItemButton } from '@mui/material'

function AnimalClassDetails() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <List>
      {animalClasses
        .find((ac) => ac.class_type === location.pathname.substring(9))
        .animal_names.map((an) => (
          <ListItem>
            <ListItemButton
              onClick={() =>
                navigate(`/animals/${location.pathname.substring(9)}/${an}`)
              }
            >
              {an}
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  )
}

export default AnimalClassDetails
