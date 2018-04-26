// Post Endpoint that receives lead emails
exports.leadsPostHandler = (event, context, callback) => {
  var {email} = JSON.parse(event.body);
  var response = {email};
  var responseString = JSON.stringify(response);
  //console.log(email);
  callback(null, {
    statusCode:200,
    body: responseString
  });
}
