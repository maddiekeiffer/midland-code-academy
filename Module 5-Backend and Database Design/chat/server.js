const app = require("express")();
const cors = require("cors");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true,
    }
});

app.use(cors());

io.on("connection", (socket) => {
    console.log("New Client Connected.");

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
        console.log("Client Disconnected.");
    });
});

server.listen(8080, () => console.log("Server started."));