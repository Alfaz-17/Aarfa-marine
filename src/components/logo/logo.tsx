import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Image from 'next/image'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  isScrolled?: boolean
}

const Logo: FC<Props> = ({ onClick, isScrolled }) => {
  return (
    <Box onClick={onClick} sx={{ 
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      '& img': {
        transition: 'all 0.3s ease-in-out',
        width: { xs: isScrolled ? 50 : 65, md: isScrolled ? 60 : 75 },
        height: 'auto',
      }
    }}>
      <Image src="/aarfa-logo.png" alt="Aarfa Marine Logo" width={80} height={88} objectFit="contain" />
    </Box>
  )
}



Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
