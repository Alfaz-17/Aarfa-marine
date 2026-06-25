import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '@/lib/db'
import { Product } from '@/lib/models'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase()

  if (req.method === 'GET') {
    try {
      const { category, featured, search, limit } = req.query
      const filter: any = {}
      if (category) filter.category = category
      if (featured === 'true') filter.featured = true
      if (search) {
        filter.$or = [
          { title: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
        ]
      }
      const products = await Product.find(filter)
        .populate('category', 'name')
        .populate('brand', 'name logo')
        .sort({ createdAt: -1 })
        .limit(limit ? parseInt(limit as string) : 100)
        .lean()
      return res.status(200).json(products)
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch products' })
    }
  }

  if (req.method === 'POST') {
    try {
      const product = await Product.create(req.body)
      return res.status(201).json(product)
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create product' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
