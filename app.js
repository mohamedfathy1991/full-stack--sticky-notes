import express from 'express'
 
import sequelize from './dbconnection.js'
import userRoute from './modules/user/user.routes.js'
import cookieParser from 'cookie-parser'
import noteRoute from './modules/notes/notes.routes.js'
import cors from "cors"
 
const app = express()
const port = 3000
sequelize.sync()
app.use(cors())
 app.use(express.json())
app.use(cookieParser())



app.get('/', (req, res) => res.send('Hello World!'))
app.use('/user',userRoute)
app.use('/notes',noteRoute)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))