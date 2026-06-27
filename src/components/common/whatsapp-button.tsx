import React from 'react'
import Fab from '@mui/material/Fab'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '919081811248' // Mr. Afzal's number
  const message = 'Hello! I am interested in your marine equipment and services.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <Fab
      component="a"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      sx={{
        position: 'fixed',
        bottom: { xs: 24, md: 32 },
        right: { xs: 24, md: 32 },
        bgcolor: '#25D366',
        color: 'white',
        width: { xs: 56, md: 64 },
        height: { xs: 56, md: 64 },
        zIndex: 9999,
        boxShadow: '0 8px 24px rgba(37,211,102,0.4)',
        transition: 'all 0.3s ease',
        '&:hover': {
          bgcolor: '#1EBE57',
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 28px rgba(37,211,102,0.5)',
        }
      }}
    >
      <WhatsAppIcon sx={{ fontSize: { xs: 32, md: 36 } }} />
    </Fab>
  )
}

export default WhatsAppButton
