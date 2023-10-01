import {customAPIError} from "../errors/error.js";

const errorHandler = (err, req, res, next) => {

    if (err instanceof customAPIError) {  
        return res.status(err.statusCode).json({ msg: err.message}); // this will display only when id is in the correct format but not in the database
    }

    return res.status(500).json({ msg: err}); // this will display only when id is not in the correct format like proper length or proper characters
}

export default errorHandler;