

const http = require('http');




http.createServer( (req, res) => {

        res.writeHead(200, { 'content-type': 'application/json'});

        let salida = {
            nombre: 'Anggel',
            edad: 30,
            url: req.url
        }

        res.write( JSON.stringify(salida));
        //res.write('Planate Curioso');
        res.end();

    })
    .listen(8080);



console.log('Escuchando el puerto 8080');