const { CustomAPIError } = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({
            message: err.message
        })
    }
    return res.status(err.status || 500).json({
        error: err.message
    })
}

module.exports = errorHandlerMiddleware