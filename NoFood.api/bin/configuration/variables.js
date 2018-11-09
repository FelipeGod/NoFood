const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database:{
        connection: process.env.connection || 'mongodb://admin:nofood0@ds157843.mlab.com:57843/nofood'
    }
}
module.exports = variables;