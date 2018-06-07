function downloadFile(url) {
    return new Promise((resolve, reject) => {
        if (!(url.split('://')[0] === 'http' ||
            url.split('://') === 'https')) {
            return reject(new Error("Url must start with http/https"))
        }
        console.log("Started download " + url)
        // Save it inside 'C:/Windows/Images/'
        let savePath = 'C:/Windows/Images/' + url.split('/').pop()

        setTimeout(() => {
            console.log("Saved to " + savePath)
            resolve(savePath)
        }, 3000)
    })
}

function compressFilePath(path, compressed) {
    return new Promise((resolve, reject) => {
        console.log("Going to compress" + path);

        let fileNameArr = path.split('/').pop().split('.')

        if (!(fileNameArr[1] === 'jpg' || fileNameArr[1] === 'png')) {
            return reject(new Error("we can only compress jpg or png files"))
        }

        let fileName = fileNameArr[0]
        let compressedPath = 'c:/Files/' + fileName + '.zip'

        setTimeout(() => {
            console.log("Compressed To " + compressedPath);
            resolve(compressedPath)
        },2000)
    })
}


function uploadFile(path, uploaded) {
    return new Promise((resolve, reject) => {
        console.log("Uploading file" + path);

        let fileName = path.split('/').pop()

        if (!fileName.charAt(0).toLowerCase().match(/([a-z])/)) {
            return reject(new Error("Cannot upload files with name not starting with alphabet"))
        }

        let uploadedPath = 'ftp://fileserver.com/zipimages/' +
            path.split('/').pop()


        setTimeout(() => {
            console.log("Uploaded to" + uploadedPath);
            resolve(uploadedPath)
        },2500)
    })
}


function start(url) {
    downloadFile(url).then((savedPath) => {
        compressFile(savedPath).then((compressedPath) => {
            uploadFile(compressedPath).then((uploadedPath) => {

            })
        })
    })

}
