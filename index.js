// Import json server
const jsonServer = require('json-server')

// import cors
const cors = require('cors')

// create server using json server
const server = jsonServer.create()

// setup middleware
const middleware = jsonServer.defaults()

// setup routes
const route = jsonServer.router(db.json)

// implementing use
server.use(cors())
server.use(middleware)
server.use(route)

// create a port
const PORT = process.env.PORT || 3000

// start server
server.listen(PORT,()=>{
    console.log(console.log(`Server Running on ${PORT}`)
    );
    
})