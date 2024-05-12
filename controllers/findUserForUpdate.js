const users = require("../data/userData.json");

// Export a function that handles the route logic
module.exports = function (req, res) {
  const userId = req.body.userId;
  // Find the user with the matching ID
  const user = users.find((user) => {
    //also work without return:  user.id === parseInt(userId);
    return user.id === userId;
  });

  // If user is found, generate HTML to display user information
  if (user) {
    res.render('updateTheUser',{user});
    console.log(user);
  } else {
    // If user with the given ID is not found, send a 404 error
    res.render("user404");
  }
};