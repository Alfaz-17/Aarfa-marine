import React from 'react'
import Head from 'next/head'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import StarIcon from '@mui/icons-material/Star'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import PageHero from '@/components/page-hero'
import { CtaBand, WhyChoose } from '@/components/home'

const reviews = [
  { name: 'Oleg Shcherbakov', country: 'Austria', product: 'Gyrocompass' },
  { name: 'Rafael', country: 'Venezuela', product: 'Navigational Equipment' },
  { name: 'Tran Khanh Tuong', country: 'Vietnam', product: 'Fish Finder' },
  { name: 'Barwil Syed Shafi', country: 'Chennai', product: 'Gyrocompass' },
  { name: 'Sandeep Surana', country: 'Kolkata', product: 'Fish Finder' },
  { name: 'Allipilli Chinnarao', country: 'Visakhapatnam', product: 'Marine GPS' },
]

const AboutUs: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>About Us | Aarfa Marine</title>
        <meta name="description" content="Aarfa Marine - Sourcing and supplying high-quality reconditioned marine navigation spares and ship machinery parts globally from Alang." />
      </Head>

      <PageHero 
        title="About Aarfa Marine" 
        subtitle="The Technical Room Specialists for the Global Maritime Fleet. Sourcing directly from Alang to supply certified navigation and automation systems."
        image="/images/marine-bridge.jpg"
      />

      {/* SECTION 1: WHO WE ARE */}
      <Box id="who-we-are" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img src="/images/marine-bridge.jpg" alt="Who We Are" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', display: 'block', mb: 2 }}>
                Section 01
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700, mb: 3, color: 'text.primary', position: 'relative', display: 'inline-block' }}>
                We Are Aarfa Marine
                <Box sx={{ position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%) rotate(2deg)', '& img': { width: { xs: 70, md: 90 }, opacity: 0.9 }, zIndex: -1 }}>
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                Aarfa Marine is a Bhavnagar, Gujarat-based company that supplies, installs, and services marine navigation, communication, and automation equipment. We work with ship owners, ship managers, shipping companies, and maritime businesses across India and worldwide.
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                Our products cover everything a vessel needs — from Gyro Compasses and Marine Radars to Engine Alarm Systems and Temperature Controllers. We stock products from more than 18 leading international brands and can deliver anywhere in the world within 24 hours.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SECTION 2: OUR STORY & MISSION */}
      <Box id="our-story" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#051021', color: 'common.white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center" direction="row-reverse">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                <img src="/images/home-hero.jpg" alt="Our Story" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="caption" sx={{ color: '#5B9BD5', fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', display: 'block', mb: 2 }}>
                Section 02
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700, mb: 3 }}>
                How It All Started
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
                Aarfa Marine was established in 2018 by Mr. Afzal, who began his career as a marine electronics engineer in 2014. After years of working on ships and understanding exactly what equipment vessels need — and how hard it is to get reliable spare parts quickly — he started Aarfa Marine with one goal: make quality marine electronics easy to get, at fair prices, fast.
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                Today, the company operates from Bhavnagar — home to the world-famous Alang Shipbreaking Yard — which gives us a unique advantage in sourcing genuine, tested marine equipment at competitive prices.
              </Typography>
              
              <Box sx={{ borderLeft: '4px solid #5B9BD5', pl: 3, py: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>Our Mission</Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.6 }}>
                  To be the most trusted supplier of marine equipment by stocking genuine tested parts, delivering within 24 hours, providing expert advice, and giving honest, transparent pricing.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SECTION 3: THE TEAM */}
      <Box id="the-team" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', display: 'block', mb: 2 }}>
              Section 03
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700, color: 'text.primary' }}>
              Meet the People Behind Aarfa Marine
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 4, border: '1px solid', borderColor: 'grey.200', borderRadius: 2, height: '100%' }}>
                <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 3, bgcolor: 'primary.main', fontSize: '2rem' }}>A</Avatar>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>Mr. Afzal</Typography>
                <Typography sx={{ color: 'primary.main', fontWeight: 600, mb: 2 }}>Managing Director & Founder</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Founded Aarfa Marine after nearly a decade working as a marine electronics engineer. He handles business operations, technical guidance, and customer relationships personally.
                </Typography>
                <Typography sx={{ mt: 2, fontWeight: 700, color: 'text.primary' }}>+91 9081811248</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 4, border: '1px solid', borderColor: 'grey.200', borderRadius: 2, height: '100%' }}>
                <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 3, bgcolor: 'primary.light', fontSize: '2rem' }}>F</Avatar>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>F. Gundigara</Typography>
                <Typography sx={{ color: 'primary.main', fontWeight: 600, mb: 2 }}>Operations Manager</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Handles day-to-day operations, order processing, and customer coordination ensuring seamless global dispatch.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 4, border: '1px solid', borderColor: 'grey.200', borderRadius: 2, height: '100%' }}>
                <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 3, bgcolor: 'secondary.main', fontSize: '2rem' }}>ET</Avatar>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>Engineering Team</Typography>
                <Typography sx={{ color: 'primary.main', fontWeight: 600, mb: 2 }}>Certified Technicians</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  A team of regularly trained marine electronics engineers who handle installation, testing, commissioning, and after-sales service on vessels globally.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <WhyChoose />

      {/* SECTION 5: CUSTOMER REVIEWS */}
      <Box id="customer-reviews" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', display: 'block', mb: 2 }}>
              Section 05
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700, color: 'text.primary', position: 'relative', display: 'inline-block' }}>
              Trusted by Customers Across the World
              <Box sx={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%) rotate(-2deg)', '& img': { width: { xs: 80, md: 120 }, opacity: 0.9 }, zIndex: -1 }}>
                <img src="/images/headline-curve.svg" alt="Headline curve" />
              </Box>
            </Typography>
          </Box>
          
          <Grid container spacing={3}>
            {reviews.map((review, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card sx={{ height: '100%', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid', borderColor: 'grey.100' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', color: '#FAAF00', mb: 2 }}>
                      {[1,2,3,4,5].map(star => <StarIcon key={star} fontSize="small" />)}
                    </Box>
                    <Typography sx={{ color: 'text.secondary', fontStyle: 'italic', mb: 2, minHeight: 48 }}>
                      "Excellent service and fast delivery for our {review.product} requirements."
                    </Typography>
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: 'text.primary' }}>{review.name}</Typography>
                      <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>{review.country}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <CtaBand tone="dark" />
    </>
  )
}

AboutUs.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default AboutUs
