const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({
  region: "us-east-1",
  apiVersion: "2012-08-10",
});

exports.handler = (event, context, callback) => {
  const params = {
    TableName: "whiskyLog-whisky",
  };
  dynamodb.scan(params, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      const whiskys = data.Items.map((item) => {
        return {
          id: item.id.S,
          name: item.name.S,
          type: item.type.S,
          age: item.age.S,
          proof: item.proof.N,
          bonded: item.bonded.BOOL,
          distillery: item.distillery.S,
          country: item.country.S,
          image: item.image.S,
        };
      });
      callback(null, whiskys);
    }
  });
};
