const express = require('express');
import { generateUploadURL } from './s3.js'


const app = express();

console.log(app)

app.get('/s3Url', async (req, res) => {
    const url = await generateUploadURL()
    res.send({url})
})

app.listen(8080, () => {
    console.log('server listening on port 8080')
})