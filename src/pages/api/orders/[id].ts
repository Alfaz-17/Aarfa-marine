import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from '@/lib/db'
import { Order } from '@/lib/models'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase()
  const { id } = req.query

  if (req.method === 'GET') {
    try {
      const order = await Order.findById(id).lean()
      if (!order) return res.status(404).json({ error: 'Order not found' })
      return res.status(200).json(order)
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch order' })
    }
  }

  if (req.method === 'PUT') {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, { new: true })
      if (!order) return res.status(404).json({ error: 'Order not found' })
      return res.status(200).json(order)
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update order' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      await Order.findByIdAndDelete(id)
      return res.status(200).json({ message: 'Order deleted' })
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete order' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
