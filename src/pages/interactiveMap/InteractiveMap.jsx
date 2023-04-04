import * as React from 'react'
import animalData, { löwe } from './data/AnimalData'
import InteractiveMapDialog from './InteractiveMapDialog'

export default function InteractiveMap() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <img
        src={'zoomap.png'}
        alt="zoomap"
        useMap={'#workmap'}
        width="100%"
        height="100%"
        id={'zoomappicture'}
      />

      <map name="workmap">
        <area
          shape="rect"
          coords="830,300,950,420"
          alt="Computer"
          onClick={handleClickOpen}
        />
      </map>
      <InteractiveMapDialog handleClose={handleClose} open={open} obj={löwe} />
    </div>
  )
}
