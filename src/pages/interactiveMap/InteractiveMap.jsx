import * as React from 'react'
import { tiere } from './data/AnimalData'
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
        width="1500px"
        height="auto"
        id={'zoomappicture'}
      />

      <map name="workmap">
        {tiere.map((tier) => (
          <area
            id={tier.name}
            shape="rect"
            coords={tier.coords}
            alt={tier.name}
            onClick={() => handleClickOpen(tier)}
          />
        ))}
      </map>

      <InteractiveMapDialog handleClose={handleClose} open={open} obj={obj} />
    </div>
  )
}
