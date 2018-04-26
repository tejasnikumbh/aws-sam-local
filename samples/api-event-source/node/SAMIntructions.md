# Installation Instructions
===========================
Can be found at github wiki of aws-sam-local

# Useful Commands
==================

* To generate Events for API and put it into event.json
  - sam local generate-event > event.json

* One off invocation of function named "GetFunction" with event.json payload
* <Names of functions and respective handlers can be specified in template.yaml> 
  - sam local invoke "GetFunction" -e event.json

* To start API Gateway locally
  - sam local start-api

* To validate template.yaml
  - sam validate
