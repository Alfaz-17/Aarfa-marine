import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const StatsBand: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        py: { xs: 8, md: 6 },
        color: 'common.white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          {/* Stat 1 */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'center', borderRight: { md: '1px solid rgba(255,255,255,0.1)' } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '3.5rem', md: '4.5rem' }, fontWeight: 800, mb: 1, color: 'common.white' }}>
              9<Typography component="sup" sx={{ fontSize: '1.8rem', color: 'secondary.main', ml: 0.5 }}>+</Typography>
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', letterSpacing: 1.5, textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600 }}>
              Years of Marine<br />Electronics Expertise
            </Typography>
          </Grid>

          {/* Stat 2 */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'center', borderRight: { md: '1px solid rgba(255,255,255,0.1)' } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '3.5rem', md: '4.5rem' }, fontWeight: 800, mb: 1, color: 'common.white' }}>
              500<Typography component="sup" sx={{ fontSize: '1.8rem', color: 'secondary.main', ml: 0.5 }}>+</Typography>
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', letterSpacing: 1.5, textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600 }}>
              Vessels Equipped &<br />Successfully Serviced
            </Typography>
          </Grid>

          {/* Stat 3 */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '3.5rem', md: '4.5rem' }, fontWeight: 800, mb: 1, color: 'common.white' }}>
              24<Typography component="sup" sx={{ fontSize: '1.8rem', color: 'secondary.main', ml: 0.5 }}>hr</Typography>
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', letterSpacing: 1.5, textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600 }}>
              Rapid Spares Delivery<br />Worldwide
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default StatsBand
