const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const PORT = 3003;
const app = express();


const allowedOrigins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
];

app.use(
    cors({
        origin: (origin, callback) => {
            if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
                callback(null, true);
            } else {
                callback(new Error(`${origin} is not allowed by CORS`));
            }
        },
        credentials: true,
        optionsSuccessStatus: 200,
    })
)

let db;

function handleDisconnect() {
    db = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "password",
        database: "code_community"
    });

    db.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            setTimeout(handleDisconnect, 2000); // Try to reconnect after 2 seconds
        } else {
            console.log('Connected to the database.');
        }
    });

    db.on('error', (err) => {
        console.error('Database error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.fatal) {
            handleDisconnect(); // Reconnect on connection loss or fatal error
        } else {
            throw err;
        }
    });
}

handleDisconnect();

module.exports = db;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// app.use("/uploads", express.static("./uploads"));
app.use("/", require("./routes/userRoutes"));
// app.use("/channel", require("./routes/channelRoutes"));
// app.use("/topic", require("./routes/topicRoutes"));
// app.use("/reply", require("./routes/replyRoutes"));

app.listen(PORT, () => {
    console.log("Server is running on 3003");
});

