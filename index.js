// code away!

const server = require("./server")
const port = process.env.PORT || 5000



server.listen(port, () => console.log(`\n== API is up on http://localhost:${port} ==\n`))