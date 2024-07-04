import express from 'express';
import cors from 'cors';

import helmet from 'helmet';
import fs from 'fs';
//http module prebuild ni node
import https from 'https';
import envs from 'dotenv';
envs.config();

const port = process.env.PORT || 8000


const app = express();
app.use(cors());
app.use(express.json());

app.use(helmet());

app.get('/secret',(req,res)=>{
    return res.send("SDASDASDASDASD")
})

const server = https.createServer({
   key: fs.readFileSync('key.pem'),
    cert:fs.readFileSync('cert.pem'),
},app);
server.listen(port,()=>console.log(`ports are working ${port}`))

