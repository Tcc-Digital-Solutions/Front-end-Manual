import { prisma } from '../../../../prisma/prisma'
import NextCors from 'nextjs-cors'
import { useEffect, useState } from 'react'

export default async function handler(req, res){

    // const [lng, setLng] = useState('')

    // useEffect(() => {
    //     setLng(localStorage.getItem(I18N_STORAGE_KEY))
    // }, [])

    await NextCors(req, res, {
        methods: ['GET'],
        origin: '*',
        optionsSuccessStatus: 200
    })

    if (req.method === 'GET'){
        const { id } = req.query
        const detalhe = await prisma.productsinfo.findMany({
            // colocar esse where relacionado com a linguagem tbmm que vai vir do localstorage
            
            where:{
                fkProd:id,
                // fkProd:id,
            }
        })
        res.json(detalhe)
        console.log(detalhe)
        // console.log(lng)
    }
}

// pega todas as tabelas aqui ou faz uma api separada pra cada um?