const asyncWrapper = (fn) => {

    return async (req, res, next) => {
        try {
            await fn(req, res, next);
            
        } catch (error) {
            next(error); // this will pass the error to the global error handler if no custom error handler is defined otherwise it will pass the error to the custom error handler
        }
    }
}

export default asyncWrapper;