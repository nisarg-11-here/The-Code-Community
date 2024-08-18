// require('dotenv').config();

const test = (req, res) => {
    res.json("test is working");
};

// const register = async (req, res) => {
//     const { name, username, password } = req.body;

//     if (!name || name.length == 0) {
//         // console.log("non name!!!!!!")
//         return res.json({
//             error: "Name is required",
//         });
//     }

//     if (!username || username.length < 6) {
//         return res.json({
//             error: "Username is required and should be atleast 6 characters long!",
//         });
//     }

//     if (!password || password.length < 6) {
//         return res.json({
//             error: "Password is required and should be 6 characters long!",
//         });
//     }


//     const hashedPassword = await hashPassword(password);

//     const checkUsernameQuery = 'SELECT * FROM users WHERE username = ?';
//     db.query(checkUsernameQuery, [username], (checkErr, checkResult) => {
//         if (checkErr) {
//             console.error('Error executing username check query: ' + checkErr.stack);
//             res.status(500).send('Error executing username check query');
//             return;
//         }

//         if (checkResult.length > 0) {
//             // Username already exists
//             return res.json({
//                 error: 'Username already exists. Please choose a different username.',
//             });
//         } else {
//             // Username is available, proceed with registration
//             const insertUserQuery = 'INSERT INTO users (username, password, name) VALUES (?, ?, ?)';
//             db.query(insertUserQuery, [username, hashedPassword, name], (insertErr, insertResult) => {
//                 if (insertErr) {
//                     console.error('Error executing registration query: ' + insertErr.stack);
//                     res.status(500).send('Error executing registration query');
//                     return;
//                 }
//                 console.log('New record inserted');
//                 res.status(200).send('New record inserted');
//             });
//         }
//     });
// };

// const login = async (req, res) => {
//     const { username, password } = req.body;

//     if (!username) {
//         return res.json({
//             error: "Username cannot be empty!",
//         });
//     }

//     if (!password) {
//         return res.json({
//             error: "Password is required!",
//         });
//     }

//     try {
//         // Use mysql2/promise for promise-based queries
//         const [results] = await db.promise().query('SELECT * FROM users WHERE username = ?', [username]);

//         if (results.length > 0) {
//             const user = results[0];
//             // Compare hashed password
//             const passwordMatch = await comparePassword(password, user.password);
//             // console.log(process.env.JWT_SECRET);
//             // console.log('JWT_SECRET:', process.env);
//             const secret_key = "9737824296";
//             // Make sure to make changes to use process.env.JWT_SECRET later!!!!
//             if (passwordMatch) {
//                 res.clearCookie("token");
//                 jwt.sign(
//                     { username: user.username, id: user.id, name: user.name },
//                     secret_key,
//                     {},
//                     (err, token) => {
//                         if (err) throw err;
//                         res.cookie("token", token).json(user);
//                     }
//                 );
//                 // User found, login successful
//                 // res.json({ message: 'Login successful' });
//             } else {
//                 // Password doesn't match, login failed
//                 return res.json({
//                     error: "Password is incorrect!",
//                 });
//             }
//         } else {
//             // No matching user found, login failed
//             return res.json({
//                 error: "User not found!",
//             });
//         }
//     } catch (err) {
//         console.error('Error executing query: ' + err.stack);
//         res.status(500).json({ error: 'Error executing query' });
//     }
// };

// const getProfile = async (req, res) => {
//     const { token } = req.cookies;
//     if (token) {
//         jwt.verify(token, process.env.REACTAPP_KEY, {}, (err, user) => {
//             if (err) throw err;
//             res.json(user);
//         })
//     }
//     else {
//         res.json(null);
//     }
// }

// const getAllUsers = async (req, res) => {
//     const { token } = req.cookies;

//     try {
//         // Get the current user's ID
//         const user_id = await getID(token);
//         const user = await getUserById(user_id);

//         // Fetch all users except admin and the current user
//         const query = `
//             SELECT * FROM users 
//             WHERE username != 'admin11' AND id != ? AND username != 'deleted-user';
//         `;

//         const users = await queryPromise(query, [user_id]);

//         // Respond with the fetched users
//         res.status(200).json({ users, user });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// const deleteUser = async (req, res) => {
//     const { user_id } = req.body;
//     try {
//         await queryPromise('START TRANSACTION');

//         // Update the user's name and username to indicate deletion
//         await queryPromise('UPDATE users SET name = "deleted-user", username = "deleted-user" WHERE id = ?', [user_id]);


//         // Update user_name in replies table
//         const updateQuery = `
//          UPDATE replies
//          SET user_name = (SELECT name FROM users WHERE users.id = replies.user_id);
//      `;

//         await queryPromise(updateQuery, [user_id]);

//         // Commit the transaction
//         await queryPromise('COMMIT');

//         res.status(200).send('Delete Users and Associated Records Successful');
//     } catch (error) {
//         // Rollback the transaction in case of an error
//         await queryPromise('ROLLBACK');

//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }

// };

// const getUserByUserID = async (req, res) => {
//     const userId = req.params.userId;
//     try {
//         const query = 'SELECT * FROM users WHERE id = ?;'

//         const user = await queryPromise(query, [userId]);
//         // Respond with the fetched users
//         const userData = user[0];
//         res.status(200).json({ userData });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// const logout = (req, res) => {
//     res.clearCookie('token');
//     res.status(200).json({ message: 'Logout successful' });
// };


module.exports = {
    test,
}