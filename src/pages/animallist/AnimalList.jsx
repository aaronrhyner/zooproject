import { Divider, List, ListItem } from '@mui/material'
import zooAnimals from './ZooAnimals'
import animalClasses from './AnimalClasses'

function AnimalList() {
  return (
    <List>
      {zooAnimals.map((a) => (
        <ListItem>{a.animal_name}</ListItem>
      ))}
      <Divider />
      {animalClasses.map((c) =>
        c.animal_names.map((an) => <ListItem>{an}</ListItem>)
      )}
    </List>
  )
}

export default AnimalList
