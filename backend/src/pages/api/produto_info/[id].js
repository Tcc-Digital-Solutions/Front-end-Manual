import { prisma } from '../../../../prisma/prisma'
import NextCors from 'nextjs-cors'

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
            where:{
                fkProd:id,
            },
            // colocar esse where relacionado com a linguagem tbmm que vai vir do localstorage
        })
        res.json(detalhe)
        console.log(detalhe)
    }
}