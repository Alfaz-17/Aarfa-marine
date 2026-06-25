import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface BrandsSectionProps {
  brands?: any[]
}

const STATIC_BRANDS = ['FURUNO', 'GARMIN', 'RAYMARINE', 'SIMRAD', 'JRC', 'SAILOR', 'KODEN', 'SPERRY MARINE', 'TOKIMEC', 'YOKOGAWA', 'SAM ELECTRONICS']

const BrandsSection: FC<BrandsSectionProps> = ({ brands = [] }) => {
  const hasImages = brands && brands.length > 0 && brands.some((b) => b.image)

  return (
    <Box
      sx={{
        backgroundColor: 'common.white',
        py: { xs: 3, md: 5 },
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'grey.200',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: { xs: 4, md: 8 },
          alignItems: 'center',
          animation: 'scroll 30s linear infinite',
          width: 'max-content',
          '@keyframes scroll': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        }}
      >
        {/* Render twice for seamless loop */}
        {hasImages ? (
          // Render Database Brand Images
          [...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            brand.image ? (
              <Box 
                key={`${brand._id}-${index}`} 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  width: { xs: 110, sm: 130, md: 150 }, 
                  height: { xs: 44, sm: 52, md: 60 },
                  opacity: 0.6,
                  transition: 'opacity 0.3s',
                  '&:hover': { opacity: 1 }
                }}
              >
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                />
              </Box>
            ) : null
          ))
        ) : (
          // Render Fallback Text
          [...STATIC_BRANDS, ...STATIC_BRANDS].map((brand, index) => (
            <Typography
              key={index}
              variant="button"
              sx={{
                fontSize: { xs: '12px', md: '14px' },
                fontWeight: 700,
                color: 'text.disabled',
                letterSpacing: 2,
                whiteSpace: 'nowrap',
                transition: 'color 0.2s',
                cursor: 'default',
                '&:hover': { color: 'primary.main' },
              }}
            >
              {brand}
            </Typography>
          ))
        )}
      </Box>
    </Box>
  )
}

export default BrandsSection
