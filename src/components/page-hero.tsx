import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

interface PageHeroProps {
  title: string
  subtitle: string
  image?: string
}

const PageHero: FC<PageHeroProps> = ({ title, subtitle, image = '/images/marine-bridge.jpg' }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 320, md: 420 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pt: { xs: 12, md: 16 }, // Padding top for header overlap
        pb: { xs: 7, md: 9 },
        color: 'common.white',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(5,16,33,0.92) 0%, rgba(10,31,64,0.78) 55%, rgba(30,95,166,0.62) 100%)',
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h1" sx={{ fontSize: { xs: '2.35rem', md: '4rem' }, fontWeight: 800, mb: 2, letterSpacing: 0 }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.82)', fontWeight: 400, maxWidth: 680, mx: 'auto', lineHeight: 1.7 }}>
          {subtitle}
        </Typography>
      </Container>
    </Box>
  )
}

export default PageHero
