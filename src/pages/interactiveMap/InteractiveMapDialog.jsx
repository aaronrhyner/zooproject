import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useMediaQuery, useTheme } from '@mui/material'

export default function InteractiveMapDialog({ handleClose, open, obj }) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <p>{obj.name}</p>
          <p>Weibchen: {obj.weibchen}</p>
          <p>Männchen: {obj.männchen}</p>
          <p>Jungtiere(Weiblich): {obj.weiblichejungtiere}</p>
          <p>Jungtiere(Männlich): {obj.männlichejungtiere}</p>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  )
}
