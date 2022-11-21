exports.handler = async function(event) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    return {
      statusCode: 200,
      body: `Hello, CDK! You've hit ${event.path}\n`,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
    };
  };
  