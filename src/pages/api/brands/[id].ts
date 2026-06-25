import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '@/lib/db'
import { Brand } from '@/lib/models'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase()
  const { id } = req.query

  if (req.method === 'GET') {
    try {
      const brand = await Brand.findById(id).lean()
      if (!brand) return res.status(404).json({ error: 'Brand not found' })
      return res.status(200).json(brand)
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch brand' })
    }
  }

  if (req.method === 'PUT') {
    try {
      const brand = await Brand.findByIdAndUpdate(id, req.body, { new: true })
      if (!brand) return res.status(404).json({ error: 'Brand not found' })
      return res.status(200).json(brand)
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update brand' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      await Brand.findByIdAndDelete(id)
      return res.status(200).json({ message: 'Brand deleted' })
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete brand' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
