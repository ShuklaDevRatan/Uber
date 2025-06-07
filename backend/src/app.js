import express from "express";
import morgan from "morgan";
import cors from "cors"
import  userRoutes from "./routes/user.routes.js"
import captionRoutes from './routes/caption.routes.js'
const app = express();


app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/users',userRoutes)
app.use('/captions',captionRoutes)


export default app;