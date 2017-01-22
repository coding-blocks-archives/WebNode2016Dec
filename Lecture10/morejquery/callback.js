/**
 * Created by championswimmer on 22/01/17.
 */


function doAfter3Sec(task) {
    console.log('will do after 3 sec');
    setTimeout(function () {
        console.log('doing after 3 sec');
        task(function (afterDone) {
            console.log('yes it is done');
            afterDone();
        });
    }, 3000)
}

function askForTask () {
    console.log('ask for task');

    doAfter3Sec(function (done) {
        console.log('task done');
        done(function () {
            console.log('thanks for doing it');
        });
    });

    console.log('is task done ?');
}


function downloadFile (url, downloaded) {
    // download file from the url, into var downloadedData
    downloaded(downloadedData);
}

function saveFile (data, filePath, saved) {
    // save data to filePath

    saved(filePath)
}

function compressFile (filePath, compressed) {
    // try to compress filePath
    // if successful
    compressed (true)
}

downloadFile("abc.com/pic.jpg", function (data) {
    saveFile (data, "C:/MyFolder/pic.jpg",
        function (path) {
            compressFile(path, function (isCompressed) {
                if (isCompressed)
                    console.log('file was compressed');
            })
    })
});

