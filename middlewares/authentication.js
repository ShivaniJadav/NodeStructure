    function testmiddleware(req, res, next) {
        req.body['isAuth'] = true;
        next();
    }

    module.exports = {
        testmiddleware
    }