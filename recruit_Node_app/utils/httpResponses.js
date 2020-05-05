
module.exports = {

    SUCCESS : ( message, data = {} ) => {
        return {
            meta : {
                status : 200,
                response : "OK",
                message
            },
            data
        }
    },
    CREATED : ( message, data = {} ) => {
        return {
            meta : {
                status : 201,
                response : "Created",
                message
            },
            data
        }
    },
    ACCEPTED : ( message, data = {} ) => {
        return {
            meta : {
                status : 202,
                response : "Accepted",
                message
            },
            data
        }
    },

    BAD_REQUEST : ( message, data = {} ) => {
        return {
            meta : {
                status : 400,
                response : "Bad Request",
                message
            },
            data
        }
    },
    UNAUTHORIZED : ( message, data = {} ) => {
        return {
            meta : {
                status : 401,
                response : "Unauthorized",
                message
            },
            data
        }
    },
    FORBIDDEN : ( message, data = {} ) => {
        return {
            meta : {
                status : 403,
                response : "Forbidden",
                message
            },
            data
        }
    },
    NOT_FOUND : ( message, data = {} ) => {
        return {
            meta : {
                status : 404,
                response : "Not Found",
                message
            },
            data
        }
    },
    CONFLICT : ( message, data = {} ) => {
        return {
            meta : {
                status : 409,
                response : "Conflict",
                message
            },
            data
        }
    },
  
}