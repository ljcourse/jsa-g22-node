const http = require('http');

const hnd = (req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers['user-agent']);
    // console.log('object');

    // let path = req.url;
    // res.end(`tekst from path:${path}`)

    const [_, funk, a, b] = req.url.split('/');
    console.log(funk, a, b);
    let o;

    switch (funk) {
        case 'sobiranje':
            o = Number(a) + Number(b);
            res.end(`${o}`)
            break;
        case 'odzemanje':
            o = Number(a) - Number(b);
            res.end(`${o}`)
            break;
        case 'delenje':
            o = Number(a) / Number(b);
            res.end(`${o}`)
            break;
        case 'mnozenje':
            o = Number(a) * Number(b);
            res.end(`${o}`)
            break;
        default:
            res.end('ok')
    }


};

const server = http.createServer(hnd);

server.listen(1000, err => {
    if (err) return (err);
    console.log('success');
})



// /ime/bojan
// /ime/pero
// /ime/aleksandra
// /ime/jovana
// /ime/stanko
// /ime/ivana
// /ime/goran

// parno: da, karakteri: 5, soglaski: 2, samoglaski: 3