import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ProductCard from '../product-card'

interface FeaturedProductsProps {
  products: any[]
}

const FeaturedProducts: FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <Box
      id="featured-products"
      sx={{
        pt: {
          xs: 6,
          md: 10,
        },
        pb: 10,
        backgroundColor: 'primary.main',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 4 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box sx={{ width: 24, height: 2, bgcolor: 'primary.light' }} />
              <Typography variant="caption" sx={{ color: '#D9EAF8', fontWeight: 800, letterSpacing: 1.4, textTransform: 'uppercase' }}>
                Featured Products
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, color: 'common.white', lineHeight: 1.15 }}>
              <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
                Equipment
                <Box sx={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%) rotate(-2deg)', '& img': { width: { xs: 80, md: 100 }, opacity: 0.9 }, zIndex: -1 }}>
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Box>{' '}
              That Powers<br />
              <Typography component="span" sx={{ color: '#D9EAF8', fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit' }}>
                Safe Navigation
              </Typography>
            </Typography>
          </Box>
        </Box>

        {products && products.length > 0 ? (
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product._id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.62)' }}>
              Currently no featured products available. Please check back later.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default FeaturedProducts
