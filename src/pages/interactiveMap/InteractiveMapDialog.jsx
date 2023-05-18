import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Grid, useMediaQuery, useTheme } from '@mui/material'

export default function InteractiveMapDialog({ handleClose, open, obj }) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby='responsive-dialog-title'
    >
      <DialogTitle
        id='responsive-dialog-title'
        style={{
          backgroundImage: 'url(' + obj.pic + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '100px',
          boxShadow: '0px 3px 4px gray'
        }}
      />
      <DialogContent>
        <Grid container rowSpacing={0} columnSpacing={{ xs: 4, md: 10 }}>
          <Grid item xs>
            <p>Weibchen: {obj.w}</p>
            <p>Männchen: {obj.m}</p>
            <p>Jungtiere (w): {obj.wCubs}</p>
            <p>Jungtiere (m): {obj.mCubs}</p>
          </Grid>
          <Grid item xs>
            <p>Klasse: {obj.class}</p>
            <p>Familie: {obj.family}</p>
            <p>Genus: {obj.genus}</p>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  )
}
