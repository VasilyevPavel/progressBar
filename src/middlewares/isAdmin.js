module.exports.isAdmin = (req, res, next) => {
  const isAdmin = req.session?.user?.isAdmin;

  if (isAdmin) {
    next();
    return;
  }
  res.redirect('/');
};
