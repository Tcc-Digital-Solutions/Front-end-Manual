import { prisma } from '../../../../prisma/prisma'

export default async function handler(req, res){
    const { id } = req.body
    const detalhe = await prisma.
}