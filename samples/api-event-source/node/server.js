'use strict';

exports.getHandler = (event, context, callback) => {
  // console.log(`Context: ${context}`);
  var bodyObject = {
    user: {
      id: "1",
      name: "Tejas",
      age: 26
    }
  };
  var bodyObjectString = JSON.stringify(bodyObject);
  // console.log(bodyObject);
  // console.log(bodyObjectString);
  callback(null, {
    statusCode:200,
    body: bodyObjectString
  });
}


exports.postHandler = (event, context, callback) => {
  console.log(JSON.parse(event.body));
  callback(null, {
    statusCode:200,
    body: event.body
  });
}
