import users from '../data/userData.json' assert { type: 'json' };

const findUserForUpdate = (req, res) => {
  const userId = req.body.userId;

  // Find the user with the matching ID
  const user = users.find((user) => user.id === userId);

  // If user is found, generate HTML to display user information
  if (user) {
    res.render('updateTheUser', { user });
    console.log(user);
  } else {
    // If user with the given ID is not found, send a 404 error
    res.render("user404");
  }
};

export default findUserForUpdate;