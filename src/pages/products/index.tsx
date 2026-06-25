import React, { useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import PageHero from '@/components/page-hero'
import ProductCard from '@/components/product-card'
import connectToDatabase from '@/lib/db'
import { Product, Category, Brand } from '@/lib/models'

interface ProductsPageProps {
  products: any[]
  categories: any[]
  brands: any[]
}

const MAIN_CATEGORIES = [
  { name: 'Navigation', image: '/images/categories/Navigation.jpg' },
  { name: 'Automation', image: '/images/categories/Automation.png' },
  { name: 'Communication', image: '/images/categories/Communication.jpg' }
]

const ProductsPage: NextPageWithLayout<ProductsPageProps> = ({ products, categories, brands }) => {
  const router = useRouter()
  const { category } = router.query

  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(null)
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Sync state with URL parameter
  React.useEffect(() => {
    if (category && typeof category === 'string') {
      setSelectedMainCategory(category)
    }
  }, [category])

  const handleMainCategoryClick = (catName: string) => {
    if (selectedMainCategory === catName) {
      setSelectedMainCategory(null)
      setSelectedSubCategory(null)
      router.push('/products', undefined, { shallow: true })
    } else {
      setSelectedMainCategory(catName)
      setSelectedSubCategory(null)
      router.push(`/products?category=${catName}`, undefined, { shallow: true })
    }
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      let match = true

      // Text Search
      if (searchQuery && !product.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        match = false
      }

      // Main Category Match
      if (selectedMainCategory) {
        const catObj = categories.find(c => c._id === (typeof product.category === 'string' ? product.category : product.category?._id))
        const mainCatOfProduct = catObj?.mainCategory || 'Navigation'
        if (mainCatOfProduct !== selectedMainCategory) match = false
      }

      // Sub Category Match
      if (selectedSubCategory) {
        const categoryId = typeof product.category === 'string' ? product.category : product.category?._id
        if (categoryId !== selectedSubCategory) match = false
      }
      
      return match
    })
  }, [products, categories, selectedMainCategory, selectedSubCategory, searchQuery])

  // Get sub-categories for the currently selected main category
  const activeSubCategories = selectedMainCategory 
    ? categories.filter(c => (c.mainCategory || 'Navigation') === selectedMainCategory)
    : []

  return (
    <>
      <Head>
        <title>Products Catalog | Aarfa Marine</title>
        <meta name="description" content="Browse our complete catalog of marine electronics, navigation aids, and communication systems." />
      </Head>

      <PageHero 
        title="Products Catalog" 
        subtitle="Explore our curated selection of high-quality marine navigation, communication, and automation systems."
        image="/images/marine-radio.jpg"
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default', minHeight: '100vh', position: 'relative' }}>
        {/* Subtle background glow */}
        <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100vw', height: '500px', background: 'radial-gradient(circle, rgba(30,95,166,0.10) 0%, rgba(245,247,250,0) 70%)', zIndex: 0, pointerEvents: 'none' }} />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          
          {/* SEARCH BAR */}
          <Box sx={{ maxWidth: 800, mx: 'auto', mb: 8 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search by equipment name, model, or brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'common.white',
                  backdropFilter: 'none',
                  borderRadius: 1,
                  color: 'text.primary',
                  border: '1px solid rgba(10,25,47,0.1)',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  '& fieldset': { border: 'none' },
                  '&:hover': {
                    backgroundColor: 'common.white',
                    border: '1px solid rgba(30,95,166,0.45)',
                  },
                  '&.Mui-focused': {
                    backgroundColor: 'common.white',
                    border: '1px solid',
                    borderColor: 'primary.light',
                    boxShadow: '0 4px 20px rgba(30,95,166,0.15)',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  py: 2.5,
                  fontSize: '1.1rem',
                  '&::placeholder': { color: 'rgba(10,25,47,0.4)', opacity: 1 }
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'primary.light', fontSize: 28, ml: 1, mr: 1 }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* MAIN CATEGORY TABS (IMAGE BASED) */}
          <Box sx={{ mb: 6 }}>
             <Grid container spacing={3} justifyContent="center">
                {MAIN_CATEGORIES.map((cat, idx) => {
                  const isSelected = selectedMainCategory === cat.name
                  return (
                    <Grid item xs={6} md={4} lg={3} key={idx}>
                      <Box
                        onClick={() => handleMainCategoryClick(cat.name)}
                        sx={{
                          position: 'relative',
                          height: { xs: 118, sm: 140, md: 160 },
                          borderRadius: 1,
                          overflow: 'hidden',
                          cursor: 'pointer',
                          border: isSelected ? '2px solid' : '1px solid rgba(10,25,47,0.1)',
                          borderColor: isSelected ? 'primary.light' : 'rgba(10,25,47,0.1)',
                          boxShadow: isSelected ? '0 10px 30px rgba(30,95,166,0.24)' : '0 4px 15px rgba(0,0,0,0.05)',
                          transform: isSelected ? 'translateY(-5px)' : 'none',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            borderColor: isSelected ? 'primary.light' : 'rgba(30,95,166,0.5)',
                            transform: 'translateY(-5px)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            '& .cat-img': { transform: 'scale(1.05)' },
                            '& .cat-overlay': { background: isSelected ? 'rgba(5,16,33,0.4)' : 'rgba(5,16,33,0.2)' }
                          }
                        }}
                      >
                        <Box 
                          className="cat-img"
                          sx={{
                            position: 'absolute', inset: 0,
                            backgroundImage: `url(${cat.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        />
                        <Box 
                          className="cat-overlay"
                          sx={{
                            position: 'absolute', inset: 0,
                            background: isSelected ? 'rgba(5,16,33,0.4)' : 'rgba(5,16,33,0.6)',
                            transition: 'background 0.4s ease'
                          }}
                        />
                        <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Typography variant="h5" sx={{ 
                            fontSize: { xs: '1rem', sm: '1.15rem', md: '1.35rem' },
                            fontWeight: 800, color: 'white', 
                            textShadow: '0 4px 20px rgba(0,0,0,0.8)', letterSpacing: 1
                          }}>
                            {cat.name}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  )
                })}
             </Grid>
          </Box>

          {/* SUB CATEGORY CHIPS */}
          {selectedMainCategory && activeSubCategories.length > 0 && (
            <Box sx={{ 
              display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', 
              mb: 8, p: 3, borderRadius: 1, bgcolor: 'common.white',
              border: '1px solid rgba(10,25,47,0.05)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              animation: 'fadeIn 0.5s ease-out'
            }}>
              <Box 
                onClick={() => setSelectedSubCategory(null)}
                sx={{
                  px: 3, py: 1.5, borderRadius: 50, cursor: 'pointer',
                  border: selectedSubCategory === null ? '1px solid' : '1px solid rgba(10,25,47,0.1)',
                  borderColor: selectedSubCategory === null ? 'primary.light' : 'rgba(10,25,47,0.1)',
                  bgcolor: selectedSubCategory === null ? 'rgba(30,95,166,0.10)' : 'transparent',
                  color: selectedSubCategory === null ? 'primary.light' : 'text.secondary',
                  fontWeight: selectedSubCategory === null ? 700 : 500,
                  transition: 'all 0.2s',
                  '&:hover': { bgcolor: selectedSubCategory === null ? 'rgba(30,95,166,0.10)' : 'rgba(10,25,47,0.04)', color: 'text.primary' }
                }}
              >
                All {selectedMainCategory}
              </Box>
              {activeSubCategories.map(subCat => (
                <Box 
                  key={subCat._id}
                  onClick={() => setSelectedSubCategory(subCat._id)}
                  sx={{
                    px: 3, py: 1.5, borderRadius: 50, cursor: 'pointer',
                    border: selectedSubCategory === subCat._id ? '1px solid' : '1px solid rgba(10,25,47,0.1)',
                    borderColor: selectedSubCategory === subCat._id ? 'primary.light' : 'rgba(10,25,47,0.1)',
                    bgcolor: selectedSubCategory === subCat._id ? 'rgba(30,95,166,0.10)' : 'transparent',
                    color: selectedSubCategory === subCat._id ? 'primary.light' : 'text.secondary',
                    fontWeight: selectedSubCategory === subCat._id ? 700 : 500,
                    transition: 'all 0.2s',
                    '&:hover': { bgcolor: selectedSubCategory === subCat._id ? 'rgba(30,95,166,0.10)' : 'rgba(10,25,47,0.04)', color: 'text.primary' }
                  }}
                >
                  {subCat.name}
                </Box>
              ))}
            </Box>
          )}

          {/* PRODUCT GRID RESULTS */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, mt: selectedMainCategory ? 0 : 8 }}>
            <Typography sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '1.05rem' }}>
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </Typography>
          </Box>

          {filteredProducts.length > 0 ? (
            <Grid container spacing={4}>
              {filteredProducts.map((product) => (
                <Grid item xs={6} sm={6} md={4} lg={3} key={product._id}>
                  <ProductCard product={product} tone="light" />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={{ py: 12, textAlign: 'center', bgcolor: 'common.white', border: '1px dashed rgba(10,25,47,0.15)', borderRadius: 1 }}>
              <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                No products found matching your criteria.
              </Typography>
            </Box>
          )}
          
        </Container>
      </Box>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    await connectToDatabase()
    
    const [products, categories, brands] = await Promise.all([
      Product.find({}).populate('category', 'name').populate('brand', 'name').sort({ createdAt: -1 }).lean(),
      Category.find({}).sort({ name: 1 }).lean(),
      Brand.find({}).sort({ name: 1 }).lean(),
    ])
    
    const serializedProducts = JSON.parse(JSON.stringify(products))
    const serializedCategories = JSON.parse(JSON.stringify(categories))
    const serializedBrands = JSON.parse(JSON.stringify(brands))

    return {
      props: {
        products: serializedProducts || [],
        categories: serializedCategories || [],
        brands: serializedBrands || [],
      },
    }
  } catch (error) {
    console.error("Error fetching products catalog:", error)
    return {
      props: {
        products: [],
        categories: [],
        brands: [],
      },
    }
  }
}

ProductsPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default ProductsPage
