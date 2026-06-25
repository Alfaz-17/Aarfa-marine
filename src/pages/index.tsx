import React from 'react'
import dynamic from 'next/dynamic'
import { GetServerSideProps } from 'next'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import connectToDatabase from '@/lib/db'
import { Product } from '@/lib/models'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicStatsBand = dynamic(() => import('../components/home/stats'))
const DynamicAboutSection = dynamic(() => import('../components/home/about-section'))
const DynamicBrandsSection = dynamic(() => import('../components/home/brands-section'))
const DynamicWhatWeDo = dynamic(() => import('../components/home/what-we-do'))
const DynamicKeyFacts = dynamic(() => import('../components/home/key-facts'))
const DynamicFeaturedProducts = dynamic(() => import('../components/home/featured-products'))
const DynamicWhyChoose = dynamic(() => import('../components/home/why-choose'))
const DynamicCtaBand = dynamic(() => import('../components/home/cta-band'))

interface HomeProps {
  featuredProducts: any[]
  brands: any[]
}

const Home: NextPageWithLayout<HomeProps> = ({ featuredProducts, brands }) => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicStatsBand />
      <DynamicAboutSection />
      <DynamicBrandsSection brands={brands} />
      <DynamicFeaturedProducts products={featuredProducts} />
      <DynamicWhatWeDo />
      <DynamicKeyFacts />
      <DynamicWhyChoose />
      <DynamicCtaBand />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    await connectToDatabase()
    
    // Fetch products and brands concurrently
    const [products, brands] = await Promise.all([
      Product.find({}).limit(6).lean(),
      import('@/lib/models').then(m => m.Brand.find({}).lean())
    ])
    
    // Properly serialize Mongoose documents for Next.js props
    const serializedProducts = JSON.parse(JSON.stringify(products))
    const serializedBrands = JSON.parse(JSON.stringify(brands))

    return {
      props: {
        featuredProducts: serializedProducts,
        brands: serializedBrands,
      },
    }
  } catch (error) {
    console.error("Error fetching homepage data:", error)
    return {
      props: {
        featuredProducts: [],
        brands: [],
      },
    }
  }
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
