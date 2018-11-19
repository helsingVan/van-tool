function log () {
    console.log.apply(null, arguments);
}

function forInLog (obj) {
    for (var key in obj) {
        log(key, obj[key]);
    }
}