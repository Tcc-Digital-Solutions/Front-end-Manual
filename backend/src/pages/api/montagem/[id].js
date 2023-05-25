import { prisma } from '../../../../prisma/prisma'
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
        const { id } = req.query
        const montagem = await prisma.subtitleimage.findMany({
            where: {
                montage : {
                    is: {
                        fkProd: id
                    }
                },
                // trocar pelo que estiver no localstorage, talvez tenha que fazer where pra ver se bate com en-es ou deixar isso como
                // chave primária
                subtitlemontage: {
                    is: {
                        fkLanguage : 2
                    }
                }
            },
            include: {
                montage: true,
                subtitlemontage: true,
                imgmontage: true,
            }
        })
        // //colocar a condiçao da language tbmm pra puxar o id da language que tá no localstorage
        res.json(montagem)
        console.log(montagem)
    }
}
