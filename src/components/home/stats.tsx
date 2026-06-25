import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const StatsBand: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        borderTop: '1px solid rgba(10,25,47,0.08)',
        borderBottom: '1px solid rgba(10,25,47,0.08)',
        py: { xs: 6, md: 8 },
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          {/* Stat 1 */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'center', borderRight: { md: '1px solid rgba(10,25,47,0.1)' } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 800, mb: 1, color: 'text.primary' }}>
              9<Typography component="sup" sx={{ fontSize: '1.5rem', color: 'primary.light', ml: 0.5 }}>+</Typography>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', letterSpacing: 1, textTransform: 'uppercase', fontSize: '0.8rem' }}>
              Years of Marine<br />Electronics Expertise
            </Typography>
          </Grid>

          {/* Stat 2 */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'center', borderRight: { md: '1px solid rgba(10,25,47,0.1)' } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 800, mb: 1, color: 'text.primary' }}>
              500<Typography component="sup" sx={{ fontSize: '1.5rem', color: 'primary.light', ml: 0.5 }}>+</Typography>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', letterSpacing: 1, textTransform: 'uppercase', fontSize: '0.8rem' }}>
              Vessels Equipped &<br />Successfully Serviced
            </Typography>
          </Grid>

          {/* Stat 3 */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 800, mb: 1, color: 'text.primary' }}>
              24<Typography component="sup" sx={{ fontSize: '1.5rem', color: 'primary.light', ml: 0.5 }}>hr</Typography>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', letterSpacing: 1, textTransform: 'uppercase', fontSize: '0.8rem' }}>
              Rapid Spares Delivery<br />Worldwide
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default StatsBand
