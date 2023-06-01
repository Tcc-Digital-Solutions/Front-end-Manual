import { prisma } from '../../../prisma/prisma'
import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
    console.log(req.method)
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
        const allprods = await prisma.productsinfo.findMany({
            where:{
                languages : {
                    is : {
                        idLanguages : 1
                    }
                }
            },
            select:{
                fkProd: true,
                name: true,

                product:{
                    select:{
                        img_prod: true,
                    }
                }
            }
        })
        res.json(allprods)
    }
}