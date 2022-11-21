import { Duration, Stack, StackProps } from 'aws-cdk-lib';

import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cdk from 'aws-cdk-lib';


import { Construct } from 'constructs';

export class ApigwCdk101Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);


    const api = new apigateway.RestApi(this, 'api', {
      description: 'example api gateway',
      
      // 👇 enable CORS
     defaultCorsPreflightOptions: {
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
        ],
        allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowOrigins: ['*']

      },
    });

   
    new cdk.CfnOutput(this, 'apiUrl', {value: api.url});

    // 👇 define get hello function
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,   
      code: lambda.Code.fromAsset('lambda'),  
      handler: 'hello.handler',                
      


    });

    const todos = api.root.addResource('pets');

    // 👇 integrate GET with function
    todos.addMethod(
      'GET',
      new apigateway.LambdaIntegration(hello, {proxy: true}),
    );    
    
  }
}
