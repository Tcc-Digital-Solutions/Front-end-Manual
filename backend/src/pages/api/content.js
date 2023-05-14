import { prisma } from '../../../../prisma/prisma'
import NextCors from 'nextjs-cors'

export default async function handler(req, res){

    await NextCors(req, res, {
        methods: ['GET'],
        origin: '*',
        optionsSuccessStatus: 200
    })
    if (req.method === 'GET'){
      // verificar com o lulu se o id deve ser puxado assim msm
      const { id } = req.query
      const detalhe = await prisma.content.findMany(
        { where }
      )
      res.json(detalhe)
  }
}