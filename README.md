<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

作成中

## Installation

### Clone

```bash
$ git clone git@github.com:hito-kotaro/dcq-improved-morpheus.git
```

### 開発環境

#### コンテナ起動

以下のコマンドで開発用コンテナが起動します。

```bash
$ make up
```

コンテナは、`$ yarn start:dev`を実行しています(`$ TZ=JST nest start --watch `)  
ボリュームはリポジトリの`/`が bind マウントされています。
開発する際はローカルのファイルを更新すればコンテナ側でも自動で反映されます。

#### ログの表示

以下のコマンドで api コンテナのログを表示できます。

```bash
$ make log
```

実行すると api コンテナのログを表示します。

###　コンテナのビルド
以下のコマンドでイメージをビルドできます

```bash
$ make build
```

###　コンテナの PUSH
以下のコマンドでイメージを build して Push して Deploy します

```bash
$ make push
```

Push するときは、aws.yml に記載している以下のリソースを事前に作成しておく必要があります。

```yml
AWS_REGION: ap-northeast-1
ECR_REPOSITORY: morpheus
ECS_SERVICE: morpheus-service
ECS_CLUSTER: morpheus
CONTAINER_NAME: morpheus
```
