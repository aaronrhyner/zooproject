import InteractiveMapDialog from './InteractiveMapDialog'
import { useState } from 'react'
import { tiere } from '../../data/MapData'

export default function InteractiveMap() {
  const [open, setOpen] = useState(false)
  const [obj, setObj] = useState({})

  function handleClickOpen(tier) {
    setObj(tier)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <img
        src={'pictures/map/zoomap.png'}
        alt='zoomap'
        useMap={'#workmap'}
        width='1500px'
        height='auto'
        id={'zoomappicture'}
      />

      <map name='workmap'>
        {tiere.map((tier) => (
          <area
            key={tier.name}
            id={tier.name}
            shape='rect'
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
