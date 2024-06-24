

const isAuth = (req, res, next) => {
  let { userName } = req.cookies;
  if (userName) {
    next();
  } else {
    return res.redirect("/loginPage");
  }
};

module.exports = { isAuth };
