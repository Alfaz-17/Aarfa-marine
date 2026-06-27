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
    <Box id="customer-reviews" sx={{ py: { xs: 8, md: 6 }, backgroundColor: 'background.default' }}>
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
        
        <Grid container spacing={3} alignItems="flex-start" sx={{ pb: { sm: 4, md: 8 } }}>
          {reviews.map((review, idx) => {
            const isDark = idx % 3 === 1; // Middle column is dark
            return (
              <Grid item xs={12} sm={6} md={4} key={idx} sx={{ 
                transform: { 
                  xs: 'none',
                  sm: `translateY(${(idx % 2) * 30}px)`,
                  md: `translateY(${(idx % 3) * 40}px)` 
                },
                transition: 'transform 0.3s ease'
              }}>
                <Card sx={{ 
                  width: { xs: '92%', sm: '100%' },
                  ml: { xs: idx % 2 === 0 ? 0 : 'auto', sm: 0 },
                  mr: { xs: idx % 2 === 0 ? 'auto' : 0, sm: 0 },
                  boxShadow: '0 15px 40px rgba(0,0,0,0.08)', 
                  border: 'none',
                  borderRadius: idx % 2 === 0 ? '24px 8px 24px 8px' : '8px 24px 8px 24px',
                  backgroundColor: isDark ? 'primary.dark' : 'background.paper',
                  color: isDark ? 'common.white' : 'text.primary',
                  position: 'relative',
                  overflow: 'visible'
                }}>
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box sx={{ display: 'flex', color: '#FAAF00', mb: 3 }}>
                      {[1,2,3,4,5].map(star => <StarIcon key={star} fontSize="small" />)}
                    </Box>
                    <Typography sx={{ 
                      color: isDark ? 'rgba(255,255,255,0.85)' : 'text.secondary', 
                      fontStyle: 'italic', 
                      mb: 4, 
                      minHeight: 60,
                      fontSize: '1.05rem',
                      lineHeight: 1.6
                    }}>
                      "Excellent service and fast delivery for our {review.product} requirements."
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        width: 40, 
                        height: 40, 
                        borderRadius: '50%', 
                        bgcolor: isDark ? 'primary.main' : 'primary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'common.white',
                        fontWeight: 800
                      }}>
                        {review.name.charAt(0)}
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, color: isDark ? 'common.white' : 'text.primary', fontSize: '0.95rem' }}>{review.name}</Typography>
                        <Typography variant="body2" sx={{ color: isDark ? 'secondary.main' : 'primary.main', fontWeight: 600 }}>{review.country}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default CustomerReviews
