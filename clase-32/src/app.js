import express from 'express';
import compression from 'express-compression';


const app = express();

app.listen(8088, () => { console.log('Servidor iniciado en puerto 8088') });

//Para comprimir elementos grandes en send.
//GZIP:
//app.use(compression());
//BROTLI:
app.use(compression({ brotli: { enabled: true, zlib: {} } }));

app.get('/stringLarge', (req, res) => {
    let string = '<br> Un texto es una composición de signos codificados en un sistema de escritura (como un alfabeto) que forma una unidad de sentido. También es una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto. Es un acto de habla en tanto que poseedor de una intención comunicativa.'
    for (let i = 0; i < 10e4; i++) {
        string += ". #############################";
    }

    res.send(string);
})