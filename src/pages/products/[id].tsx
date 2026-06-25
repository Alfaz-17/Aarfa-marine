import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import connectToDatabase from '@/lib/db'
import { Product } from '@/lib/models'

interface ProductDetailPageProps {
  product: any
}

const ProductDetailPage: NextPageWithLayout<ProductDetailPageProps> = ({ product }) => {
  if (!product) {
    return (
      <Box sx={{ py: 20, textAlign: 'center' }}>
        <Typography variant="h4">Product Not Found</Typography>
      </Box>
    )
  }

  // Parse specifications if it exists (assuming it's an object)
  const renderSpecifications = () => {
    if (!product.specifications || typeof product.specifications !== 'object') return null
    
    return (
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Technical Specifications
        </Typography>
        <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid', borderColor: 'grey.200' }}>
          <Table>
            <TableBody>
              {Object.entries(product.specifications).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 600, width: '30%', bgcolor: 'grey.50' }}>
                    {key}
                  </TableCell>
                  <TableCell>{String(value)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    )
  }

  return (
    <>
      <Head>
        <title>{product.metaTitle || product.title} | Aarfa Marine</title>
        <meta name="description" content={product.metaDescription || product.description?.substring(0, 160)} />
      </Head>

      {/* Breadcrumbs Banner */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', pt: { xs: 13, md: 18 }, pb: { xs: 3, md: 4 } }}>
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            <Link href="/" passHref>
              <Box component="a" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'white' } }}>Home</Box>
            </Link>
            <Link href="/products" passHref>
              <Box component="a" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'white' } }}>Products</Box>
            </Link>
            <Typography sx={{ color: 'white' }}>{product.title}</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ py: { xs: 5, md: 10 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 8 }}>
            {/* Left: Images */}
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  bgcolor: 'background.default', 
                  borderRadius: 1, 
                  p: 4, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  minHeight: { xs: 280, sm: 360, md: 400 },
                  position: 'relative'
                }}
              >
                {product.featured && (
                  <Chip 
                    label="Featured" 
                    color="primary" 
                    sx={{ position: 'absolute', top: 16, left: 16, fontWeight: 700 }} 
                  />
                )}
                {product.image || product.images?.[0] ? (
                  <img
                    src={product.image || product.images[0]}
                    alt={product.title}
                    style={{ maxWidth: '100%', maxHeight: 500, objectFit: 'contain' }}
                  />
                ) : (
                  <Typography color="text.secondary">No Image Available</Typography>
                )}
              </Box>
              
              {/* Secondary Images if any */}
              {product.images && product.images.length > 1 && (
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  {product.images.map((img: string, idx: number) => (
                    <Grid item xs={3} key={idx}>
                      <Box sx={{ bgcolor: 'background.default', borderRadius: 1, p: 1, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <img src={img} alt={`${product.title} ${idx}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>

            {/* Right: Details */}
            <Grid item xs={12} md={6}>
              {product.brandName && (
                <Typography sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', mb: 1 }}>
                  {product.brandName}
                </Typography>
              )}
              
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2 }}>
                {product.title}
              </Typography>

              <Box sx={{ display: 'flex', gap: { xs: 1.5, md: 3 }, mb: 4, alignItems: 'center', flexWrap: 'wrap' }}>
                <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  {product.price > 0 ? `$${product.price.toFixed(2)}` : 'Price on Request'}
                </Typography>
                
                <Chip 
                  label={product.availability === 'in-stock' ? 'In Stock' : product.availability === 'on-demand' ? 'On Demand' : 'Out of Stock'}
                  color={product.availability === 'in-stock' ? 'success' : product.availability === 'on-demand' ? 'warning' : 'error'}
                  variant="outlined"
                />
                
                {product.sku && (
                  <Typography variant="body2" color="text.secondary">
                    SKU: <strong>{product.sku}</strong>
                  </Typography>
                )}
              </Box>

              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: { xs: '1rem', md: '1.05rem' }, mb: 5 }}>
                {product.description || 'No description available for this product.'}
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, mb: 6, flexDirection: { xs: 'column', sm: 'row' } }}>
                <Button variant="contained" size="large" sx={{ py: 1.5, px: 4, fontWeight: 700, width: { xs: '100%', sm: 'auto' } }}>
                  Request Quote
                </Button>
                <Button variant="outlined" size="large" sx={{ py: 1.5, px: 4, fontWeight: 700, width: { xs: '100%', sm: 'auto' } }}>
                  Contact Sales
                </Button>
              </Box>

              {/* Keywords/Tags */}
              {product.keywords && product.keywords.length > 0 && (
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {product.keywords.map((kw: string, idx: number) => (
                    <Chip key={idx} label={kw} size="small" sx={{ bgcolor: 'grey.100', color: 'text.secondary' }} />
                  ))}
                </Box>
              )}
            </Grid>
          </Grid>

          {/* Specifications Table */}
          {renderSpecifications()}
          
        </Container>
      </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    await connectToDatabase()
    
    const { id } = context.params as { id: string }
    
    // Check if ID is a valid ObjectId, otherwise treat it as a slug
    const isObjectId = /^[0-9a-fA-F]{24}$/.test(id)
    const product = isObjectId 
      ? await Product.findById(id).populate('category brand').lean() 
      : await Product.findOne({ slug: id }).populate('category brand').lean()

    if (!product) {
      return { notFound: true }
    }

    const serializedProduct = JSON.parse(JSON.stringify(product))

    return {
      props: {
        product: serializedProduct,
      },
    }
  } catch (error) {
    console.error("Error fetching product:", error)
    return {
      props: {
        product: null,
      },
    }
  }
}

ProductDetailPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default ProductDetailPage
