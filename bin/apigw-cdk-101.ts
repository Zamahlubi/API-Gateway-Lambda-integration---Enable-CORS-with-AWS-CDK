#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ApigwCdk101Stack } from '../lib/apigw-cdk-101-stack';

const app = new cdk.App();
new ApigwCdk101Stack(app, 'ApigwCdk101Stack');
