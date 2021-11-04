import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'

import styles from '../../assets/scss/Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'left' },
                typography: 'body1',
              }}
            >
              © 2021 Crypto Recorder App, All Rights Reserved.
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: { xs: 'center', md: 'right' },
              }}
            >
              <Link sx={{ minWidth: 100 }} color="inherit" underline="hover" href="#">
                Home
              </Link>
              <Link sx={{ minWidth: 100 }} color="inherit" underline="hover" href="#">
                About
              </Link>
              <Link sx={{ minWidth: 100 }} color="inherit" underline="hover" href="#">
                News
              </Link>
              <Link sx={{ minWidth: 100 }} color="inherit" underline="hover" href="#">
                Contact
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
