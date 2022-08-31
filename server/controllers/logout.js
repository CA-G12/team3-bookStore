const logout = (req, res) => {
  res.clearCookie("loggedUser").redirect("/");
};
module.exports = logout;
