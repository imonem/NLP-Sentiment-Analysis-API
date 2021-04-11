let json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
};


const requestOptions = {
    method: 'POST',
    body: {
        key: process.env.API_KEY,
        txt: 'We went to the resataurant which was OK, but later my tummy ached',
        redirect: 'follow'
    },
    lang: 'en'
};


module.exports = json;
module.exports = requestOptions;