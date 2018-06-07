//Login page
exports.loginPageHandler = function (req, res) {
    req.session.destroy();
    res.render('login.handlebars', {});
}


// City Route Handler
exports.landinPageHandler = function (req, res) {
    var person;
    if (req.session.userName) {
        person = req.session.userName;
    } else {
        person = req.query.nm;
        req.session.userName = person;
    }
    res.render('landingpage.handlebars', { welcomeMessage: person });
}


exports.cityPageHandler = function (req, res) {
    var interestValue = req.body.interest;
    var personNameValue = req.session.userName;
    var taglineValue, cityNameValue;
    if (interestValue === 'fashion') {
        cityNameValue = "peris";
        taglineValue = "Fashion capital of the world";
    } else if (interestValue === 'finance') {
        cityNameValue = "New York";
        taglineValue = "Business capital of world";
    } else if (interestValue === 'history') {
        cityNameValue = "Rome";
        taglineValue = "Early Civilization";
    }
    res.render('city.handlebars', {
        cityName: cityNameValue,
        tagline: taglineValue,
        personName:personNameValue
    });
}
