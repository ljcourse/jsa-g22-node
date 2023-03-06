const http = require('http');

const hnd = (req, res) => {

    const [_, funk, a] = req.url.split('/')

    console.log(funk, a);

    const parno = () => {
        if (karakteri % 2 === 0) {
            return "da";
        } else {
            return "ne";
        }
    };
    let karakteri = a.length;
    let samoglaski = a.match(/[aeiou]/gi).length;
    let soglaski = a.match(/[b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y]/gi).length;
    res.end(`parno: ${parno()}, karakteri: ${karakteri}, samoglaski: ${samoglaski}, soglaski: ${soglaski}`);

    //     switch (a) {
    //         case 'bojan':
    //             res.end(`parno: ${parno()}, karakteri: ${karakteri}, samoglaski: ${samoglaski}, soglaski: ${soglaski}`)
    //             break;
    //         case 'pero':
    //             res.end(`parno: ${parno()}, karakteri: ${karakteri}, samoglaski: ${samoglaski}, soglaski: ${soglaski}`)
    //             break;
    //         case 'aleksandra':
    //             res.end(`parno: ${parno()}, karakteri: ${karakteri}, samoglaski: ${samoglaski}, soglaski: ${soglaski}`)
    //             break;
    //         case 'jovana':
    //             res.end(`parno: ${parno()}, karakteri: ${karakteri}, samoglaski: ${samoglaski}, soglaski: ${soglaski}`)
    //         case 'stanko':
    //             res.end(`parno: ${parno()}, karakteri: ${karakteri}, samoglaski: ${samoglaski}, soglaski: ${soglaski}`)
    //             break;
    //         case 'ivana':
    //             res.end(`parno: ${parno()}, karakteri: ${karakteri}, samoglaski: ${samoglaski}, soglaski: ${soglaski}`)
    //             break;
    //         case 'goran':
    //             res.end(`parno: ${parno()}, karakteri: ${karakteri}, samoglaski: ${samoglaski}, soglaski: ${soglaski}`)
    //             break;
    //         default:
    //             res.end(`parno: ${parno()}, karakteri: ${karakteri}, samoglaski: ${samoglaski}, soglaski: ${soglaski}`)
    //     }
    // }
}
const server = http.createServer(hnd);

server.listen(1000, err => {
    if (err) return (err);
    console.log('success');
})