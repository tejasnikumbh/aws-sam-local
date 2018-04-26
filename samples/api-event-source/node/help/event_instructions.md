NAME:
   sam local generate-event - Generates Lambda events (e.g. for S3/Kinesis etc) that can be piped to 'sam local invoke'

USAGE:
   sam local generate-event command [command options] [arguments...]

COMMANDS:
     s3        Generates a sample Amazon S3 event
     sns       Generates a sample Amazon SNS event
     kinesis   Generates a sample Amazon Kinesis event
     dynamodb  Generates a sample Amazon DynamoDB event
     api       Generates a sample Amazon API Gateway event
     schedule  Generates a sample scheduled event

OPTIONS:
   --help, -h  show help
   
