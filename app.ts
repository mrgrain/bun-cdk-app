import cdk from "aws-cdk-lib";
import s3 from "aws-cdk-lib/aws-s3";
const app = new cdk.App();
const stack = new cdk.Stack(app, "BunStack");

new s3.Bucket(stack, "Bucket");

app.synth();