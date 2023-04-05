import { Box, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import PolicyIcon from '@mui/icons-material/Policy'
import GavelIcon from '@mui/icons-material/Gavel'

function Footer() {
  const myFooterStyle = {
    minHeight: '64px  ',
    backgroundColor: '#19d1c2',
    position: 'fixed ',
    left: '0',
    bottom: '0',
    right: '0',
    textAlign: 'center',
    color: '#1976d2',
    boxShadow: '8px -2px 7px -1px  rgba(0,0,0,0.8)'
  }
  return (
    <Box style={myFooterStyle}>
      <Button
        component={RouterLink}
        to={'/legalnotice'}
        style={{ textDecoration: 'none' }}
        startIcon={<GavelIcon />}
      >
        Legal Notice
      </Button>{' '}
      |{' '}
      <Button
        component={RouterLink}
        to={'/privacypolicy'}
        style={{ textDecoration: 'none' }}
        startIcon={<PolicyIcon />}
      >
        Privacy Policy
      </Button>
    </Box>
  )
}

export default Footer
