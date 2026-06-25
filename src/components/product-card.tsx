import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Link from 'next/link'

interface ProductCardProps {
  product: any
  tone?: 'dark' | 'light'
}

const ProductCard: FC<ProductCardProps> = ({ product, tone = 'dark' }) => {
  const isLight = tone === 'light'

  return (
    <Box
      sx={{
        p: { xs: 1.5, sm: 2, md: 3 },
        mb: { xs: 2, md: 4 },
        bgcolor: isLight ? 'common.white' : 'rgba(255, 255, 255, 0.03)',
        border: isLight ? '1px solid' : '1px solid rgba(255,255,255,0.12)',
        borderColor: isLight ? 'divider' : 'rgba(255,255,255,0.12)',
        backdropFilter: isLight ? 'none' : 'blur(10px)',
        borderRadius: 1,
        height: '100%',
        boxShadow: isLight ? '0 16px 40px rgba(10,25,47,0.08)' : 'none',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          borderColor: isLight ? 'primary.light' : 'rgba(255,255,255,0.24)',
          boxShadow: isLight ? '0 22px 50px rgba(10,25,47,0.14)' : '0 10px 40px rgba(0,0,0,0.2)',
          '& .MuiIconButton-root': {
            backgroundColor: 'primary.light',
            color: isLight ? 'common.white' : '#051021',
          },
        },
      }}
    >
      <Box
        sx={{
          lineHeight: 0,
          overflow: 'hidden',
          borderRadius: 1,
          mb: 3,
          position: 'relative',
          height: { xs: 150, sm: 180, md: 220 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: isLight ? 'background.default' : 'rgba(255,255,255,0.05)',
        }}
      >
        {product.image || product.images?.[0] ? (
          <img
            src={product.image || product.images[0]}
            alt={product.title}
            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
          />
        ) : (
          <Typography variant="body2" sx={{ color: isLight ? 'text.secondary' : 'rgba(255,255,255,0.4)' }}>
            No Image Available
          </Typography>
        )}
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography
          component="h3"
          variant="h5"
          sx={{
            fontSize: { xs: '0.92rem', sm: '1rem', md: '1.15rem' },
            fontWeight: 700,
            mb: 1,
            color: isLight ? 'text.primary' : 'common.white',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            minHeight: { xs: '2.4rem', md: '2.8rem' }
          }}
        >
          {product.title}
        </Typography>
        
        {/* Render brand text if we don't have the object populated */}
        <Typography variant="body2" sx={{ color: isLight ? 'text.secondary' : 'rgba(255,255,255,0.5)', mb: 1, minHeight: '1.25rem', fontSize: { xs: '0.78rem', md: '0.9rem' } }}>
          {product.brandName ? `Brand: ${product.brandName}` : 'Marine Equipment'}
        </Typography>
        
        <Typography variant="body1" sx={{ color: 'primary.light', fontWeight: 700, fontSize: { xs: '0.95rem', md: '1.1rem' } }}>
          {product.price > 0 ? `$${product.price.toFixed(2)}` : 'Request Quote'}
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1, borderTop: isLight ? '1px solid rgba(10,25,47,0.08)' : '1px solid rgba(255,255,255,0.1)', pt: 2 }}>
        <Link href={`/products/${product.slug || product._id}`} passHref>
          <Box component="a" sx={{ textDecoration: 'none', color: isLight ? 'text.primary' : 'common.white', display: 'flex', alignItems: 'center', fontWeight: 700, fontSize: { xs: '0.76rem', md: '0.9rem' }, letterSpacing: 0, '&:hover': { color: 'primary.light' } }}>
            View Details
          </Box>
        </Link>
        <Link href={`/products/${product.slug || product._id}`} passHref>
          <IconButton
            component="a"
            sx={{
              backgroundColor: isLight ? 'rgba(10,25,47,0.06)' : 'rgba(255,255,255,0.1)',
              color: isLight ? 'text.primary' : 'common.white',
              transition: 'all 0.3s',
              width: { xs: 34, md: 40 },
              height: { xs: 34, md: 40 },
            }}
          >
            <ArrowForward fontSize="small" />
          </IconButton>
        </Link>
      </Box>
    </Box>
  )
}

export default ProductCard
