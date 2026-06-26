import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import StarIcon from '@mui/icons-material/Star'

const reviews = [
  { name: 'Oleg Shcherbakov', country: 'Austria', product: 'Gyrocompass' },
  { name: 'Rafael', country: 'Venezuela', product: 'Navigational Equipment' },
  { name: 'Tran Khanh Tuong', country: 'Vietnam', product: 'Fish Finder' },
  { name: 'Barwil Syed Shafi', country: 'Chennai', product: 'Gyrocompass' },
  { name: 'Sandeep Surana', country: 'Kolkata', product: 'Fish Finder' },
  { name: 'Allipilli Chinnarao', country: 'Visakhapatnam', product: 'Marine GPS' },
]

const CustomerReviews: FC = () => {
  return (
    <Box id="customer-reviews" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', display: 'block', mb: 2 }}>
            Testimonials
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700, color: 'text.primary', position: 'relative', display: 'inline-block' }}>
            Trusted by Customers Across the World
            <Box sx={{ position: 'absolute', bottom: '0px', left: '50%', transform: 'translateX(-50%) rotate(-2deg)', '& img': { width: { xs: 80, md: 120 }, opacity: 0.9 }, zIndex: -1 }}>
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
  )
}

export default CustomerReviews
