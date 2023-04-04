import * as React from 'react'
import animalData, { löwe } from './data/AnimalData'
import InteractiveMapDialog from './InteractiveMapDialog'
import { useState } from 'react'

export default function InteractiveMap() {
  const [open, setOpen] = useState(false)
  const [obj, setObj] = useState({})
  function handleClickOpen(tier) {
    console.log(JSON.stringify(tier))
    setObj(tier)
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
          id={'löwe'}
          shape="rect"
          coords="830,300,950,420"
          alt="Computer"
          onClick={() => handleClickOpen(löwe)}
        />
      </map>

      <InteractiveMapDialog handleClose={handleClose} open={open} obj={obj} />
      {JSON.stringify(obj || 'isEmpty')}
    </div>
  )
}
