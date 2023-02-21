const fs = require('fs');



// fs.writeFile('dat.txt','script',(err)=>{
//     if(err) return console.log(err);
//     console.log('script')
// })


const fileWrite = (filename, data) => {

    return new Promise((success, fail) => {

        fs.writeFile(

            filename,
            data,
            (err) => {

                if (err) return fail(err);
                return success()

            }
        )
    })
}

fileWrite('dat0.txt', 'new script with promise')

    .then(() => {

        console.log('script is a success in data0.txt')

    })

    .catch(() => {

        console.log(err)

    })

const main = async () => {

    try {

        await fileWrite('dat0.txt', 'new script with promise + await')


    } catch (err) {

        console.log(err);

    }

}

main()


const copyFile = (filename, filename1) => {

    return new Promise((success, fail) => {

        fs.copyFile(

            filename,
            filename1,
            (err) => {

                if (err) return fail(err);
                return success()

            }
        )
    })
}

copyFile('dat.txt', 'dat0.txt')

    .then(() => {

        console.log('copy')

    })

    .catch(() => {

        console.log(err)

    })

const main0 = async () => {

    try {

        await copyFile('dat.txt', 'dat0.txt')

    } catch (err) {

        console.log(err)

    }


}

main0()


const chmod = (filename, mode) => {

    return new Promise((success, fail) => {

        fs.chmod(

            filename,
            mode,
            (err) => {

                if (err) return fail(err);
                return success()

            }
        )
    })
}

chmod('dat0.txt', 0o700)

    .then(() => {

        console.log('log')

    })

    .catch(() => {

        console.log(err);

    })

    const main00 = async () => {

        try {

            await chmod('dat0.txt' , 0o700 )

        } catch(err) {

            console.log(err);

        }
    }

main00()