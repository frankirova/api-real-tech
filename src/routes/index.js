const { Router } = require("express");
const { auth } = require("../firebase");

const router = Router();

router.get("/", async (req, res) => {
  const querySnapshot = await auth.listUsers();
  const users = querySnapshot.users.map((currentUser) => ({
    id: currentUser.uid,
    email: currentUser.email,
    // ...querySnapshot.users
  }));
  res.send(users);
});

module.exports = router;
