var jwt = require('jsonwebtoken');
var path = require("path");
var AuthSecret = require(path.join(__appbase, "config", "defaults", "db.json")).AuthSecret.secret;

function verifyToken(req, res, next) {
    var bearerHeader = req.headers['authorization'];
    try {
        var token = bearerHeader.replace("Bearer ", "");
    } catch (e) { }
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, AuthSecret, function (err, decoded) {
        if (err)
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        req.userId = decoded.id;
        next();
    });
}
module.exports = verifyToken;