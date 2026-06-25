import React, { FC } from 'react'
import Box from '@mui/material/Box'
// Removed react-scroll import as it's no longer used
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import type { Navigation as NavType } from '@/interfaces/navigation'
import { navigations } from './navigation.data'

interface NavigationProps {
  isScrolled?: boolean
  items?: NavType[]
}

const Navigation: FC<NavigationProps> = ({ isScrolled, items }) => {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const activeItems = items || navigations

  const linkStyles = (isActive: boolean) => ({
    position: 'relative',
    color: isScrolled 
      ? (isActive ? 'primary.main' : 'text.secondary')
      : (isActive ? 'common.white' : 'rgba(255, 255, 255, 0.72)'),
    cursor: 'pointer',
    fontWeight: 700,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: { xs: 2, md: 3 },
    py: { xs: 1.25, md: 1 },
    mb: { xs: 1, md: 0 },
    fontSize: { xs: '1.1rem', md: '1rem' },
    textDecoration: 'none',
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
      color: isScrolled ? 'primary.main' : 'common.white',
      '& .hover-curve': {
        display: 'block',
      },
    },
    '&.current': {
      color: isScrolled ? 'primary.main' : 'common.white',
      '& .hover-curve': {
        display: 'block',
      },
    },
  })


  const renderCurve = (showByDefault = false) => (
    <Box
      className="hover-curve"
      sx={{
        position: 'absolute',
        bottom: -4,
        left: '50%',
        transform: 'translateX(-50%) rotate(2deg)',
        lineHeight: 0,
        pointerEvents: 'none',
        display: showByDefault ? 'block' : 'none',
        '& img': { width: 36, height: 'auto' },
      }}
    >
      <img src="/images/headline-curve.svg" alt="Headline curve" />
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
      {activeItems.map(({ path: destination, label, children }) => {
        const isActive = router.pathname === destination

        return (
          <Box key={destination} sx={{ position: 'relative', '&:hover .dropdown-menu': { display: 'block', opacity: 1, transform: 'translateY(0)' } }}>
            <NextLink href={destination} passHref>
              <Box
                component="a"
                sx={linkStyles(isActive)}
              >
                {renderCurve(isActive)}
                {label}
                {children && <Box component="span" sx={{ ml: 0.5, fontSize: '0.7rem', opacity: 0.7 }}>▼</Box>}
              </Box>
            </NextLink>

            {children && (
              <Box
                className="dropdown-menu"
                sx={{
                  display: 'none',
                  opacity: 0,
                  transform: 'translateY(10px)',
                  position: 'absolute',
                  top: '100%',
                  left: { xs: '50%', md: 0 },
                  transformOrigin: 'top',
                  minWidth: 220,
                  bgcolor: 'background.paper',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                  borderRadius: 2,
                  py: 1.5,
                  zIndex: 999,
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  ...( { xs: { transform: 'translateX(-50%)' }, md: {} } )
                }}
              >
                {children.map((child, idx) => (
                  <NextLink key={idx} href={child.path} passHref>
                    <Box
                      component="a"
                      sx={{
                        display: 'block',
                        px: 3,
                        py: 1.5,
                        color: 'text.secondary',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        transition: 'all 0.2s',
                        '&:hover': {
                          bgcolor: 'rgba(30,95,166,0.05)',
                          color: 'primary.main',
                          pl: 4,
                          borderLeft: '4px solid',
                          borderColor: 'primary.main'
                        }
                      }}
                    >
                      {child.label}
                    </Box>
                  </NextLink>
                ))}
              </Box>
            )}
          </Box>
        )
      })}
    </Box>
  )
}

export default Navigation
