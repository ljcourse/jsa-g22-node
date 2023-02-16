const fs = require('fs'); // vcituvanje na moduli i paket so filesystem - fajlovi i direktoriumi


// fs.writeFile(
//     'data.txt',//kreiranje fajl 1.
//     'HELLO WRLD... ',//sodrzina na fajlot 2.
//     (err) => {// funkcijata 3. /* 3 parametri  */
//         if (err) return console.log(err);
//         console.log('script')
//     })


// fs.writeFile(
//     'data.txt', 'HELLO WRLD... ', (err) => {
//         if (err) return console.log(err);
//         console.log('script')
//     })


// PROMISE

//step one

// const fileWrite = () => {

// }

// step II

// const fileWrite = () => {
//     return new Promise();
// }

//step 3

// const fileWrite = () => {
//     return new Promise(() => {

//     });
// }

// step 4

// const fileWrite = () => {

//     return new Promise((success,fail) => {

//     });
// }

// step 5

// const fileWrite = () => {

//     return new Promise((success, fail) => {

//         fs.writeFile(
//             'data.txt', 'HELLO WRLD... ', (err) => {
//                 if (err) return console.log(err);
//                 console.log('script')
//             })



//     });
// }

// step 6

// const fileWrite = () => {

//     return new Promise((success, fail) => {

//         fs.writeFile(
//             'data.txt', 'HELLO WRLD... ', (err) => {
//                 if (err) return fail(err);
//                 return success()
//             })



//     });
// }

// step 7

const fileWrite = (filename, data) => {

    return new Promise((success, fail) => {

        fs.writeFile(
            filename,
            data,
            (err) => {

                if (err) return fail(err);
                return success()
            })



    });
}

fileWrite('data0.txt', 'new script with promise')

    .then(() => {
        console.log('script is a success in data0.txt')

    })

    .catch(() => {
        console.log(err)
    });

// (async () => {

//     try {

//         await fileWrite('data0.txt', 'new script with promise')
//         await fileWrite('data00.txt', 'new script with promise so await i try')
//         await fileWrite('data000.txt', 'new script with promise so await i try ')

//     } catch (err) {

//         console.log(err)

//     }

// })()


const main = async () => {

        try {

        await fileWrite('data0.txt', 'new script with promise')
        await fileWrite('data0.txt', 'new script with promise so await i try')
        await fileWrite('data0.txt', 'new script with promise so await i try ')

    } catch (err) {

        console.log(err)

    }

}


main()