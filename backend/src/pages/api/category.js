import { prisma } from '../../../prisma/prisma'
import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
    /*
        cors next js
        https://dev.to/steadylearner/how-to-use-cors-for-all-routes-with-next-js-and-browser-session-api-jmo
    */
    await NextCors(req, res, {
        methods: ['GET'],
        origin: '*',
        optionsSuccessStatus: 200
    })

    if (req.method === 'GET'){
        const category = await prisma.category.findMany({
           where:{
            fkLanguage: 1
           },
           include:{
            subcategory: true
           }
        })
        res.json(category)
    }
}