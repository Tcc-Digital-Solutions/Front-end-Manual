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
        const detalhe = await prisma.pdf.findMany({
            where:{ 
                fkProd: id,
                fkLanguage: 1,
            }
        })
        res.json(detalhe)
    }
}

// pega todas as tabelas aqui ou faz uma api separada pra cada um?