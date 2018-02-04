/* Copyright 2018 Riotz Works. */
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { version } from '../../package.json';

/**
 * System Web API's AWS Lambda handler function.
 *
 * @param event – event data.
 * @param context – runtime information of the Lambda function that is executing.
 * @param callback – optional callback to return information to the caller, otherwise return value is null.
 * @see http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
 */
export const handle: Handler = (event: APIGatewayEvent, context: Context, cb?: Callback): void => {

  const response = {
    'body': JSON.stringify({
      'version': version
    }),
    'statusCode': 200
  };

  if (cb !== undefined) {
    cb(null, response);  // tslint:disable-line
  } else {
    context.succeed(response);
  }
};
