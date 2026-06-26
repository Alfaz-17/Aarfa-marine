import React, { FC, useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Head from 'next/head'
import { StyledButton } from '@/components/styled-button'

interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'Years Experience',
    value: '9+',
  },
  {
    label: 'Product Categories',
    value: '20+',
  },
  {
    label: 'Global Export',
    value: '100%',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: 1.5,
      py: { xs: 0.5, md: 0 }
    }}>
      <Typography
        sx={{ color: 'secondary.main', fontSize: { xs: 22, md: 26 }, fontWeight: 800 }}
      >
        {value}
      </Typography>
      <Typography sx={{ color: '#D9EAF8', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
        {label}
      </Typography>
    </Box>
  )
}

const HomeHero: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => setVideoReady(true)
    video.addEventListener('canplay', handleCanPlay)

    // If already ready (cached)
    if (video.readyState >= 3) {
      setVideoReady(true)
    }

    return () => video.removeEventListener('canplay', handleCanPlay)
  }, [])

  return (
    <>
      {/* Preload the hero video for fastest possible start */}
      <Head>
        <link rel="preload" href="/videos/hero.webm" as="video" type="video/webm" />
        <link rel="preload" href="/videos/hero-poster.jpg" as="image" />
      </Head>
      <Box id="hero" sx={{ 
        position: 'relative', 
        minHeight: { xs: '100svh', md: '100vh' },
        height: { md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 11, md: 8 },
        pb: { xs: 5, md: 2 },
        overflow: 'hidden',
        backgroundColor: 'primary.dark',
      }}>
        {/* Tiny blurred placeholder — renders instantly (~1KB) */}
        <Box
          component="img"
          src="/videos/hero-poster-tiny.jpg"
          alt=""
          aria-hidden="true"
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
            zIndex: 0,
            filter: 'blur(20px)',
            transform: 'scale(1.1)', // prevent blur edge artifacts
          }}
        />
        {/* Video element with poster for fast first-frame display */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
            zIndex: 1,
            opacity: videoReady ? 0.8 : 0,
            transition: 'opacity 0.6s ease-in-out',
          }}
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      {/* Slight black overlay for cinematic feel and text contrast */}
      <Box sx={{ 
        position: 'absolute', 
        width: '100%', 
        height: '100%', 
        top: 0, 
        left: 0, 
        backgroundColor: 'rgba(0, 0, 0, 0.4)', 
        zIndex: 2 
      }} />
      <Container maxWidth="lg" sx={{ 
        position: 'relative',
        zIndex: 3,
        height: { md: '100%' }, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between' 
      }}>
        <Grid container spacing={0} sx={{ 
          flexDirection: 'column', 
          flex: { md: 1 }, 
          alignItems: 'center',
          justifyContent: 'center',
          py: { xs: 4, md: 0 }
        }}>
          <Grid item xs={12} md={10} lg={8} sx={{ mx: 'auto' }}>
            <Box
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '2.25rem', sm: '2.8rem', md: '3rem', lg: '3.5rem' },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: 0,
                  color: 'common.white',
                  mb: 0,
                  textShadow: '0px 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                Marine Navigation & <br />
                <Typography
                  component="span"
                  sx={{
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    fontFamily: 'inherit',
                    color: '#D9EAF8',
                  }}
                >
                  Communication
                </Typography> <br />
                Systems
              </Typography>

              <Typography 
                sx={{ 
                  color: '#F8FAFC',
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  fontWeight: 400,
                  mt: 3,
                  mb: 4,
                  maxWidth: { xs: 520, md: 600 },
                  mx: 'auto',
                  textShadow: '0px 1px 3px rgba(0,0,0,0.5)',
                }}
              >
                Trader, distributor, and service provider for reconditioned marine electronics, navigation aids, and automation equipment.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, width: { xs: '100%', sm: 'auto' }, flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
                <Link href="/products" passHref>
                  <StyledButton color="primary" size="large" variant="contained" sx={{
                    borderRadius: 1,
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    textTransform: 'uppercase',
                    fontWeight: 800,
                    letterSpacing: 1,
                    fontSize: '0.75rem',
                    px: 4.5,
                    py: 1.5,
                    width: { xs: '100%', sm: 'auto' },
                    backgroundColor: 'primary.main',
                    '&:hover': { 
                      transform: 'translateY(-2px)', 
                      backgroundColor: 'primary.light',
                      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)' 
                    }
                  }}>
                    Explore
                  </StyledButton>
                </Link>
                <Link href="/contact" passHref>
                  <StyledButton size="large" variant="outlined" sx={{
                    borderRadius: 1,
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    color: 'common.white',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(5px)',
                    textTransform: 'uppercase',
                    fontWeight: 800,
                    letterSpacing: 1,
                    fontSize: '0.75rem',
                    px: 4.5,
                    py: 1.5,
                    width: { xs: '100%', sm: 'auto' },
                    '&:hover': { 
                      transform: 'translateY(-2px)', 
                      borderColor: 'common.white', 
                      backgroundColor: 'rgba(255, 255, 255, 0.12)' 
                    }
                  }}>
                    Contact
                  </StyledButton>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        {/* Experience Stats - Card-less Clean Text */}
        <Box sx={{ 
          py: 2, 
          mt: { xs: 4, md: 2 },
          mb: { xs: 0, md: 2 },
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <Grid container spacing={2}>
            {exps.map((item) => (
              <Grid key={item.value} item xs={12} md={4}>
                <ExpItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
    </>
  )
}

export default HomeHero
