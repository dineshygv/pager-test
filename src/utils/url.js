function parseQueryString(queryString) {
    var queryParams = {};

    if (queryString && queryString.length) {
        var vars = queryString.split("&");

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            var key = pair[0], value = pair[1];
            queryParams[key] = value;
        }
    }

    return queryParams;
}

module.exports = {
    parseQueryString: parseQueryString
}