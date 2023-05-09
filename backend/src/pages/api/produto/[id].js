import { prisma } from '../../../../prisma/prisma'
import NextCors from 'nextjs-cors'

export default async function handler(req, res){

    await NextCors(req, res, {
        methods: ['GET'],
        origin: '*',
        optionsSuccessStatus: 200
    })

    if (req.method === 'GET'){
        const { id } = req.query
        const detalhe = await prisma.productsinfo.findUnique({
            where: { idProd: parseInt(id) }
        })
        res.json(detalhe)
        console.log(detalhe)
    }
}