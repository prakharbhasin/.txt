const Users = require("../models/User");

const getAll = async (req, res) => {
  let currUser = req.params.id;
  Users.find(
    { _id: { $ne: currUser } },
    { name: 1, email: 1, displayPicture: 1 }
  )
    .then((users) => {
      res.send({ success: true, users });
    })
    .catch((e) => {
      console.log(e);
      res.send({ success: false, message: "No Users!" });
    });
};
module.exports = { getAll };
