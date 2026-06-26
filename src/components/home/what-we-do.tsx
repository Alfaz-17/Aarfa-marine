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
    <Box sx={{ 
      py: { xs: 10, md: 14 }, 
      bgcolor: 'primary.dark',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative ambient glows using primary.light */}
      <Box sx={{ position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(30,95,166,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(237,28,36,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="caption" sx={{ color: 'primary.light', fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', display: 'block', mb: 2 }}>
            What We Do
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3.5rem' }, fontWeight: 700, color: 'common.white', position: 'relative', display: 'inline-block' }}>
            Our Three Core{' '}
            <Box component="span" sx={{ position: 'relative', display: 'inline-block', pb: { xs: 2, md: 3 } }}>
              Services
              <Box sx={{ position: 'absolute', bottom: '0px', left: '50%', transform: 'translateX(-50%) rotate(2deg)', '& img': { width: { xs: 80, md: 120 }, opacity: 0.9 }, zIndex: -1 }}>
                <img src="/images/headline-curve.svg" alt="Headline curve" />
              </Box>
            </Box>
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Box sx={{ 
                bgcolor: 'rgba(255,255,255,0.02)', 
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.05)', 
                borderRadius: 4, 
                p: { xs: 4, md: 5 },
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.04)',
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  '& .accent-bar': {
                    opacity: 1
                  },
                  '& .icon-wrapper': {
                    transform: 'scale(1.1) rotate(5deg)',
                    bgcolor: 'primary.main',
                    borderColor: 'secondary.main'
                  },
                  '& .icon': {
                    color: 'secondary.main'
                  }
                }
              }}>
                {/* Accent Top Bar using secondary color */}
                <Box className="accent-bar" sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: 'secondary.main', opacity: 0, transition: 'opacity 0.4s ease' }} />

                <Box className="icon-wrapper" sx={{ 
                  width: 80, height: 80, 
                  borderRadius: '50%', 
                  bgcolor: 'rgba(255,255,255,0.03)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  mb: 4,
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.4s ease',
                }}>
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'icon', sx: { fontSize: 40, color: 'primary.light', transition: 'color 0.4s ease' } })}
                </Box>
                <Typography variant="h4" sx={{ color: 'common.white', mb: 3, fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '1.05rem' }}>
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
