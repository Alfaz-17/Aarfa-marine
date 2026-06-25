import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        backgroundColor: 'primary.dark',
        borderTop: '1px solid rgba(217,234,248,0.18)',
        py: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
        color: 'rgba(255,255,255,0.68)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.035,
          backgroundImage:
            'linear-gradient(#D9EAF8 1px, transparent 1px), linear-gradient(90deg, #D9EAF8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={{ borderLeft: '3px solid', borderColor: 'primary.light', pl: 3 }}>
              <Typography variant="h4" sx={{ color: 'common.white', fontWeight: 800, mb: 1 }}>
                AARFA MARINE
              </Typography>
              <Typography
                variant="caption"
                sx={{ display: 'block', color: '#D9EAF8', letterSpacing: 1.4, mb: 3, fontWeight: 800, textTransform: 'uppercase' }}
              >
                Marine Navigation Specialists
              </Typography>
              <Typography variant="body2" sx={{ mb: 4, lineHeight: 1.8 }}>
                Your trusted partner in marine navigation, supplying reconditioned, tested, and certified marine electronics worldwide.
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                border: '1px solid rgba(217,234,248,0.16)',
                p: 3,
                borderRadius: 1,
                bgcolor: 'rgba(255,255,255,0.025)',
                height: '100%',
              }}
            >
              <Typography variant="subtitle2" sx={{ color: '#D9EAF8', letterSpacing: 1.2, mb: 3, textTransform: 'uppercase' }}>
                Head Office
              </Typography>
              <Typography variant="body2" sx={{ color: 'common.white', mb: 1, fontWeight: 700 }}>
                Navapara Prime, Shop No. 28
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Haluria Chowk to Navapara Road
              </Typography>
              <Typography variant="body2">
                Bhavnagar 364001, Gujarat, India
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                border: '1px solid rgba(217,234,248,0.16)',
                p: 3,
                borderRadius: 1,
                bgcolor: 'rgba(255,255,255,0.025)',
                height: '100%',
              }}
            >
              <Typography variant="subtitle2" sx={{ color: '#D9EAF8', letterSpacing: 1.2, mb: 3, textTransform: 'uppercase' }}>
                Contact
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mb: 2, borderBottom: '1px solid rgba(217,234,248,0.12)', pb: 1, flexWrap: 'wrap' }}>
                <Typography variant="body2">Tel 1</Typography>
                <Typography variant="body2" sx={{ color: 'common.white' }}>+91 9081811248</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mb: 2, borderBottom: '1px solid rgba(217,234,248,0.12)', pb: 1, flexWrap: 'wrap' }}>
                <Typography variant="body2">Tel 2</Typography>
                <Typography variant="body2" sx={{ color: 'common.white' }}>+91 8160002323</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mb: 2, borderBottom: '1px solid rgba(217,234,248,0.12)', pb: 1, flexWrap: 'wrap' }}>
                <Typography variant="body2">Email 1</Typography>
                <Link href="mailto:sales@aarfamarine.com" sx={{ color: 'common.white', textDecoration: 'none', '&:hover': { color: '#D9EAF8' } }}>
                  sales@aarfamarine.com
                </Link>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
                <Typography variant="body2">Email 2</Typography>
                <Link href="mailto:aarfamarine@gmail.com" sx={{ color: 'common.white', textDecoration: 'none', '&:hover': { color: '#D9EAF8' } }}>
                  aarfamarine@gmail.com
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: '1px solid rgba(217,234,248,0.16)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.62)' }}>
            &copy; {new Date().getFullYear()} Aarfa Marine. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(217,234,248,0.72)' }}>
            Global marine supply and support
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
