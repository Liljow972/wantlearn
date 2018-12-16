var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = '0fskdjf8sdfsf4fdeg7dfgf2gkiufgbbdfgbvd5fdgbv6sxfdgbsxfuijgk4';
module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '1h'
        });
    },
    parseAuthorization: function(authorisation) {
        return (authorisation != null) ? authorisation.replace('Bearer ', '') : null;
    },
    getUserId: function(authorization) {
        var userId = -1;
        var token = module.exports.parseAuthorization(authorization);
        if(token != null) {
          try {
            var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
            if(jwtToken != null)
              userId = jwtToken.userId;
          } catch(err) { }
        }
        return userId;
      }
}