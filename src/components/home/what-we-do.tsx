import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InventoryIcon from '@mui/icons-material/Inventory'
import BuildIcon from '@mui/icons-material/Build'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

const services = [
  {
    title: 'Supply of Marine Equipment',
    desc: 'We supply a wide range of marine electronics — Navigation, Automation, and Communication equipment — sourced from trusted brands and the Alang Shipbreaking Yard. Products are available at prices starting from ₹1,000 and going up to ₹7,00,000 depending on the item.',
    icon: <InventoryIcon sx={{ fontSize: 40, color: 'primary.light' }} />
  },
  {
    title: 'Installation & Commissioning',
    desc: 'Our trained engineers visit the vessel and handle complete installation and testing of all equipment. We have hands-on experience with Radar, ECDIS, AIS, Autopilot, GPS, VDR, Speed Log, Satellite Compass, NAVTEX, BNWAS, Echo Sounder, and more.',
    icon: <BuildIcon sx={{ fontSize: 40, color: 'primary.light' }} />
  },
  {
    title: 'After-Sales Service & Technical Support',
    desc: "We don't disappear after the sale. Our team provides ongoing technical support, troubleshooting, and service — and we keep engineers trained and current with the latest product updates and IMO requirements.",
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: 'primary.light' }} />
  }
]

const WhatWeDo: FC = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'primary.main' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="caption" sx={{ color: '#D9EAF8', fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', display: 'block', mb: 2 }}>
            What We Do
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700, color: 'common.white', position: 'relative', display: 'inline-block' }}>
            Our Three Core{' '}
            <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
              Services
              <Box sx={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%) rotate(2deg)', '& img': { width: { xs: 80, md: 100 }, opacity: 0.9 }, zIndex: -1 }}>
                <img src="/images/headline-curve.svg" alt="Headline curve" />
              </Box>
            </Box>
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Box sx={{ 
                bgcolor: 'rgba(255,255,255,0.03)', 
                border: '1px solid rgba(255,255,255,0.08)', 
                borderRadius: 2, 
                p: { xs: 4, md: 5 },
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.06)',
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }
              }}>
                <Box sx={{ width: 70, height: 70, borderRadius: 2, bgcolor: 'rgba(217,234,248,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                  {item.icon}
                </Box>
                <Typography variant="h4" sx={{ color: 'common.white', mb: 2, fontWeight: 600, fontSize: '1.4rem' }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default WhatWeDo
