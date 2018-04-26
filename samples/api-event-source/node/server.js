'use strict';

// NOTE:- Important Points
// 1. event.body is received as string and should be converted into JSON by
// using JSON.parse(event.body)
// 2. While sending response, we should also send the body as a JSON string using
// JSON.stringify on our JSON object that we want to send as the body

// Simply returns a sample JSON object after stringifying it.
exports.getHandler = (event, context, callback) => {
  var bodyJSONObject = {
    user: {
      id: "1",
      name: "Tejas",
      age: 26
    }
  };
  var bodyJSONString = JSON.stringify(bodyJSONObject);
  callback(null, {
    statusCode:200,
    body: bodyJSONString
  });
}

// Returns the JSON string sent as the body in the post call
exports.postHandler = (event, context, callback) => {
  var bodyJSONString = event.body;
  var bodyJSONObject = JSON.parse(event.body);
  callback(null, {
    statusCode: 200,
    body: bodyJSONString
  });
}
