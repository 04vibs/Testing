url='http://example.com/path/file.jpg'

function downloadFile(url,downloaded){
    if(!(url.split('://')[0] === 'http' || 
    url.split('://')==='https')){
        return downloaded(new Error("url must start with http or https"))
    }

    console.log("started download"+ url);

    //save it inside 'c:/windows/Images/'

    let savePath = 'c:/windows/Images/'+url.split('/').pop

    setTimeout(()=>{
        console.log("saved To "+savePath)
    },3000)
}

//path='c:/windows/Images/file.jpg'
function compressFile(path,compressed){
    console.log("Going to Compress"+path);

    let fileNameArr=path.split('/').pop().split('.')
    if (!(fileNameArr[1] === 'jpg' || fileNameArr[1] === 'png')) {
        return compressed(new Error("we can only compress jpg or png files"))
    }

    let fileName = fileNameArr[0]
    let compressedPath = 'c:/Files/' + fileName + '.zip'

    setTimeout(() => {
        console.log("Compressed To" + compressedPath)
        compressed(null, compressedPath)
    },2000)
}

//path='C:/Files/file.zip'
function uploadFile(path, uploaded) {
    console.log("Uploading file" + path);

    //ftp://fileserver.com/zipimages/file.zip

    let fileName = path.split('/').pop()

    if (!fileName.charAt(0).match(/([a-z][A-Z])/)) {
        return uploaded(new Error("Cannot upload files with name not starting with alphabet"))
    }

    let uploadedPath =
        'ftp://fileserver.com/zipimages/' + path.split('/').pop()

    setTimeout(() => {
        console.log("uploaded To " + uploadedPath);
        uploaded(null, uploadedPath)
    },2500)

}


function start(url){
    downloadFile(url,(err1,savedPath)=>{
        if(err1)throw err1
        compressFile(savedPath,(err2,compressedPath)=>{
            if(err2) throw err2
            uploadFile(compressedPath,(err3,uploadedUrl)=>{
                if(err3){
                    console.error(err3)
                    alert("could not upload")
                }
            })
        })
    })
}