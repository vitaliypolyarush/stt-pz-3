const rest = require("rest");
const mime = require("rest/interceptor/mime");

const client = rest.wrap(mime);

const getListOfRestEndPoint = () =>
    client("https://www.anapioficeandfire.com/api").then((response) => response.entity);

const getBooks = () => {
    return client("https://www.anapioficeandfire.com/api/books")
        .then(response => response.entity)
        .catch(error => {
            console.error("Error fetching books:", error);
            throw error;
        });
}

exports = { getListOfRestEndPoint, getBooks };