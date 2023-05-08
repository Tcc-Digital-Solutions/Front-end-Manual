import { prisma } from '../../../prisma/prisma'

export default async function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
