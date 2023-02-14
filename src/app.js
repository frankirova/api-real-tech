const express = require("express");
const morgan = require("morgan");
const app = express();
const { auth } = require("./firebase");
app.use(morgan("dev"));

const listAllUsers = (nextPageToken) => {
  auth
    .listUsers(1000, nextPageToken)
    .then((listUsersResult) => {
      listUsersResult.users.forEach((userRecord) => {
        console.log("user", userRecord.toJSON());
        // const user = {user: user.id
        // userName: user.}
      });
      if (listUsersResult.pageToken) {
        listAllUsers(listUsersResult.pageToken);
      }
    })
    .catch((error) => {
      console.log("Error listing users:", error);
    });
};
listAllUsers();
app.get("/", (req, res) => {
  //   listAllUsers();
  res.send("Jorge rojas puto");
});

module.exports = app;
