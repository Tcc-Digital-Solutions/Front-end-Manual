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
        const allprods = await prisma.productsinfo.findMany({
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
// tem que filtrar com where na linguagem tbmm
// SELECT productsinfo.fkProd, productsinfo.name, product.img_prod FROM productsinfo INNER JOIN product ON productsinfo.fkProd=product.codeId;
// então eu faço isso pra página de informação ao inves de dar 3 fetchs