class customAPIError extends Error {

    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const customError = (msg, statuscode) => {
    return new customAPIError(msg, statuscode); // returns instance of customAPIError
}

export {customError, customAPIError };