const express = require("express");
const router = express.Router();
const cors = require("cors");
const { test } = require("../controllers/userController")
const db = require("../server");

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get("/", test);

router.get('/users', (req, res) => {
    const sql = "SELECT * FROM test";
    db.query(sql, (err, data)=> {
        if (err) return res.json(err);
        return res.json(data);
    })
})

// router.post("/register", register);

// router.post('/login', login);

// router.get("/profile", getProfile);

// router.get("/getAllUsers", getAllUsers);

// router.delete("/deleteUser", deleteUser);

// router.get("/getUserByUserID/:userId", getUserByUserID);

// router.post('/logout', logout);

// Apply the middleware to all routes in this group
// router.use(checkTokenExpiry);


module.exports = router;