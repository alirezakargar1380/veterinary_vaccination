const response = require("../utils/response.utitlity");

exports.API_authenticaiton = async (req, res, next) =>
{
  // console.log(req.headers)
  // check for basic auth header
  if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
    return res.status(401).json({ message: 'Missing Authorization Header' });
  }

  // verify auth credentials
  const base64Credentials =  req.headers.authorization.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');
  if (username === "veterinary" && password === "97s7qwr14as7f98")
  {
    return next()
  }
  response.error(res, "user or pass was wrong!")
}
