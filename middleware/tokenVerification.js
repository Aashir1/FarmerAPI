const jwt = require('jsonwebtoken');
const secret = '0123456789';
module.exports = function (req, res, next) {
    let token = req.headers['authorization'];
    if (token && token !== undefined) {
        req.token = token;
        jwt.verify(req.token, secret, (err, result) => {
            if (!err) {
                return next();
            }
            console.log('verification done:::::::::::::::::::::::::')
            return res.status(403).json({ code: 403, message: "illegal access or access denied" });
        })
    }
    else {
        return res.status(403).json({ code: 403, message: "illegal access or access denied" });
    }
};