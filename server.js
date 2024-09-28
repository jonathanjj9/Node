import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())


app.get('/usuarios/', async (req, res) => {

    const users = await prisma.user.findMany()
    res.status(200).json(users)
    
})

app.post('/usuarios', async (req, res) => {

    const user = await prisma.user.create({
        data:{
            email: req.body.email, 
            age: req.body.age,
            name: req.body.name
        }
    })
 
    console.log(user)

    res.status(201).json ({user })  

})


app.put('/usuarios', async (req, res) => {


    const user = await prisma.user.update({
        where:{
            id: req.params.id
        },
        data:{
            email: req.body.email, 
            age: req.body.age,
            name: req.body.name
        }

        
    })

    res.status(200).json (user ) 

})

app.delete('/usuarios/:id', async(req,res) => {

await prisma.user.delete({
    where:{
        id: req.parans.id
    }
})

res.status(200).json({message: 'usuario deletado'} )
})

app.listen(3000)



//jonathanjj9 
//mo356y8v1TAzY6VX

// estava dentro das chaves do app.post
//users.push(req.body)
    //res.status(201).json({message: "usuario criado com sucesso"})
