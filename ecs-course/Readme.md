## CFn コマンド

aws cloudformation create-stack --stack-name ecr --capabilities CAPABILITY_IAM --template-body file://./ecs-course/ecr.yml

aws cloudformation create-stack --stack-name ecs-iam-role-setting --capabilities CAPABILITY_IAM --template-body file://./ecs-course/create_IAM_roles.yml

aws cloudformation create-stack --stack-name vpc --capabilities CAPABILITY_IAM --template-body file://./ecs-course/vpc.yml

aws cloudformation create-stack --stack-name ecs-cluster --capabilities CAPABILITY_IAM --template-body file://./ecs-course/ecs-cluster.yml

aws cloudformation create-stack --stack-name https-frontend-service --capabilities CAPABILITY_IAM --template-body file://./ecs-course/https-frontend-service.yml

aws cloudformation create-stack --stack-name frontend-auto-scaling --capabilities CAPABILITY_IAM --template-body file://./ecs-course/auto_scaling_setup.yml

aws cloudformation create-stack --stack-name backend-service --capabilities CAPABILITY_IAM --template-body file://./ecs-course/backend-service.yml

aws cloudformation create-stack --stack-name frontend-code-pipeline --capabilities CAPABILITY_IAM --template-body file://./ecs-course/code-pipeline.yml --parameters ParameterKey=GitHubOAuthToken,ParameterValue=ghp_XXXXXXXXXX

## Github の secret scope

admin:repo_hook が必要

## ECR の設定

## 認証トークンを取得し、レジストリに対して Docker クライアントを認証します

aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin <your-aws-account-number>.dkr.ecr.us-east-2.amazonaws.com

## レジストリ情報を確認する

aws ecr describe-repositories

## イメージを探す

docker images | grep <your-image-name>

## ローカルのイメージに ECR レポジトリのタグ名をつける

docker tag <your-image-name> <your-aws-account-number>.dkr.ecr.us-east-2.amazonaws.com/<your-ecr-repo-name>:latest

## 上記 ECR レポジトリのタグ名を使って push する

docker push <your-aws-account-number>.dkr.ecr.us-east-2.amazonaws.com/<your-ecr-repo-name>:latest
