import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import PageHero from '@/components/page-hero'
import { CtaBand } from '@/components/home'
import connectToDatabase from '@/lib/db'
import { Service } from '@/lib/models'

interface ServicesProps {
  services: any[]
}

const Services: NextPageWithLayout<ServicesProps> = ({ services }) => {
  return (
    <>
      <Head>
        <title>Our Services | Aarfa Marine</title>
        <meta name="description" content="Aarfa Marine - Explore our expertise in Marine Navigation, Communication, and Automation systems." />
      </Head>

      <PageHero 
        title="Our Services & Installation" 
        subtitle="Comprehensive supply, installation, and troubleshooting of maritime navigation and communication systems."
        image="/images/marine-radio.jpg"
      />



      {/* Dynamic Services Grid */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700, color: 'text.primary', position: 'relative', display: 'inline-block' }}>
              Comprehensive Service{' '}
              <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
                Coverage
                <Box sx={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%) rotate(-2deg)', '& img': { width: { xs: 80, md: 120 }, opacity: 0.9 }, zIndex: -1 }}>
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Box>
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {services && services.length > 0 ? (
              services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={service._id || index}>
                  <Card sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                    }
                  }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={service.img || '/images/marine-radio.jpg'}
                      alt={service.name}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                        {service.name}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.6 }}>
                        {service.dec}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Box sx={{ width: '100%', textAlign: 'center', py: 8 }}>
                <Typography variant="h6" sx={{ color: 'text.secondary' }}>No services available in the database.</Typography>
              </Box>
            )}
          </Grid>
        </Container>
      </Box>

      <CtaBand tone="dark" />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    await connectToDatabase()
    
    // Fetch all services from the database
    const services = await Service.find({}).lean()
    
    // Properly serialize Mongoose documents for Next.js
    const serializedServices = JSON.parse(JSON.stringify(services))

    return {
      props: {
        services: serializedServices,
      },
    }
  } catch (error) {
    console.error("Error fetching services:", error)
    return {
      props: {
        services: [],
      },
    }
  }
}

Services.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default Services
