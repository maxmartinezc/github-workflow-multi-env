# GitHub Workflow Multi Env

A nodejs-expressjs project with a complex workflow for promotion artifact between environment:

![](doc/demo.gif)


## Features
- Jest: Unit test
- Eslint: Format and rules
- awsl-handler: For run on lambda
- node-server: For run on local
- check-coverage: Default rule branches 80,functions 80, lines 80
- Dependency Review: Vulnerabilities and licences violations scan review
- AWS S3 & Lambda Function integration: Upload an artifact to S3 Bucket an deploy into lambda function

### Multi-Environment
Environments with different secrets and variables for deploy an access with distinct credentials.
- Development: Auto deploy
- Test: Need approvals
- Staging: Need approvals
- Production: Need approvals

### Pull Request
The workflow is working over a trunk-base development. Create feature, pull request to main branch and ready to deploy.

### Manual dispatch
Manually run workflow to deploy a version into specific environment:

![](doc/manual-deploy.gif)
