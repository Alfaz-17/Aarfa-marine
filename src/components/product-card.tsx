import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

interface ProductCardProps {
  product: any
  tone?: 'dark' | 'light'
}

const ProductCard: FC<ProductCardProps> = ({ product, tone = 'dark' }) => {
  const isLight = tone === 'light'
  const categoryName = typeof product.category === 'object' ? product.category?.name : ''

  return (
    <Link href={`/products/${product.slug || product._id}`} passHref>
      <Box
        component="a"
        sx={{
          display: 'block',
          textDecoration: 'none',
          p: { xs: 1.5, sm: 2, md: 2 },
        mb: 0,
        bgcolor: isLight ? 'common.white' : 'rgba(255, 255, 255, 0.03)',
        border: isLight ? '1px solid' : '1px solid rgba(255,255,255,0.12)',
        borderColor: isLight ? 'divider' : 'rgba(255,255,255,0.12)',
        backdropFilter: isLight ? 'none' : 'blur(10px)',
        borderRadius: 1,
        height: '100%',
        boxShadow: isLight ? '0 16px 40px rgba(10,25,47,0.08)' : 'none',
        transition: 'all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        '&:hover': {
          transform: 'translateY(-6px)',
          bgcolor: isLight ? 'primary.main' : 'common.white',
          borderColor: isLight ? 'primary.main' : 'common.white',
          boxShadow: isLight
            ? '0 20px 40px rgba(10,25,47,0.2), 0 8px 16px #1E5FA624'
            : '0 20px 40px rgba(0,0,0,0.3)',
          '& .product-img': {
            transform: 'scale(1.08)',
          },
          '& .product-overlay': {
            opacity: 1,
          },
          '& .MuiIconButton-root': {
            backgroundColor: isLight ? 'common.white' : 'primary.main',
            color: isLight ? 'primary.main' : 'common.white',
          },
          '& .product-title': {
            color: isLight ? 'common.white' : 'primary.main',
          },
          '& .product-desc, & .product-brand': {
            color: isLight ? 'rgba(255,255,255,0.7)' : 'text.secondary',
          },
        },
      }}
    >
      <Box
        sx={{
          lineHeight: 0,
          overflow: 'hidden',
          borderRadius: 1,
          mb: 2,
          position: 'relative',
          height: { xs: 170, sm: 200, md: 240 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: isLight ? 'background.default' : 'rgba(255,255,255,0.05)',
        }}
      >
        {product.image || product.images?.[0] ? (
          <img
            className="product-img"
            src={product.image || product.images[0]}
            alt={product.title}
            style={{
              width: '100%', height: '100%', objectFit: 'contain', padding: '10px',
              transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          />
        ) : (
          <Typography variant="body2" sx={{ color: isLight ? 'text.secondary' : 'rgba(255,255,255,0.4)' }}>
            No Image Available
          </Typography>
        )}
        {/* Hover gradient overlay */}
        <Box
          className="product-overlay"
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: 1,
            background: isLight
              ? 'linear-gradient(180deg, transparent 50%, rgba(10,31,64,0.45) 100%)'
              : 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.45) 100%)',
            opacity: 0,
            transition: 'opacity 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            pointerEvents: 'none',
          }}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        {/* Category tag */}
        {categoryName && (
          <Typography sx={{
            fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: 1, color: 'secondary.main', mb: 0.75,
          }}>
            {categoryName}
          </Typography>
        )}

        <Typography
          className="product-title"
          component="h3"
          variant="h5"
          sx={{
            fontSize: { xs: '0.92rem', sm: '1rem', md: '1.15rem' },
            fontWeight: 700,
            mb: 1,
            color: isLight ? 'text.primary' : 'common.white',
            transition: 'color 0.3s ease',
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

        {/* Description */}
        {product.description && (
          <Typography className="product-desc" variant="body2" sx={{
            color: isLight ? 'text.secondary' : 'rgba(255,255,255,0.5)',
            transition: 'color 0.3s ease',
            fontSize: { xs: '0.78rem', md: '0.85rem' },
            lineHeight: 1.5,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            mb: 0.5,
          }}>
            {product.description}
          </Typography>
        )}
        
        {/* Brand (optional, subtle) */}
        {product.brandName && (
          <Typography className="product-brand" variant="body2" sx={{ 
            color: isLight ? 'text.secondary' : 'rgba(255,255,255,0.5)', 
            transition: 'color 0.3s ease',
            minHeight: '1.25rem', fontSize: { xs: '0.78rem', md: '0.9rem' } 
          }}>
            Brand: {product.brandName}
          </Typography>
        )}
      </Box>

      </Box>
    </Link>
  )
}

export default ProductCard
