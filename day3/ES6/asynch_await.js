function wait(sec) {
    return new Promise((resolve) => setTimeout(resolve,sec*1000))
}

function downloadFile(url) {
    return new Promise((resolve, reject) => {
        if (!(url.split('://')[0] === 'http' ||
            url.split('://') === 'https')) {
            return reject(new Error("url must start with http/https"))
        }

        console.log("Started download" + url);
        //save it inside 'c:/windows/Images/'

        let savePath = 'C:/windows/Images/' + url.split('/').pop()

        setTimeout(() => {
            console.log("Saved to" + savePath);
            return savePath;
        },3000)

    })

}

async function downloadFile(url) {
    if (!(url.split('://')[0] === 'http' ||
        url.split('://')[0] === 'https')) {
        throw (new Error("url must start with http/https"))
    }
    console.log("Started download" + url);
    let savePath = 'C:/windows/Images/' + url.split('/').pop()
    await wait(3)
    return savePath

}

downloadFile('https://abc.com/a.jpg').then((sp) => console.log(sp))


// async function task() {
//     console.log("wait 1 sec")
//     await wait(1)
//     console.log("waited")
//     console.log("wait 2 sec")
//     await wait(2)
//     console.log("waited")
// }
// task()