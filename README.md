# Schema Sharing with Fastify and Next.js

> Fastify と Next.js でスキーマを共有する実装例

## SetUp

- API

  - `cd api && yarn && yarn dev`

- Web

  - `cd web && yarn && yarn generate && yarn dev`

- DB
  - `cd api && cd db && ./build.sh`

## API Docs

- http://localhost:3000/docs

<img width="1016" alt="スクリーンショット 2022-12-29 11 49 13" src="https://user-images.githubusercontent.com/29624403/209896847-46261f53-63eb-4703-a449-9165ac47be36.png">

## 実装方針

### Web

- コンポーネントの中で API フェッチ を行わない。基本的に Recoil の selector 経由でデータを表示する

- openapi2aspida を使用して、API クライアントを作成してそのクライアント経由でデータを取得する

- `Component ← Recoil Selector ← Openapi2aspida Client ← API`のような流れ

```sh
❯ cd web/src &&tree -L 3
.
├── components
│   ├── ErrorFallback.tsx
│   └── user
│       ├── User.tsx
│       └── UserInfo.tsx
├── lib
│   └── apiClient.ts
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   └── user.tsx
├── store
│   ├── recoilKeys.ts
│   └── user
│       └── userState.ts
└── utils
    └── array.ts

```

## API

- modules フォルダの中で取得するリソースについて切り分ける

```sh
❯ cd api/src &&tree -L 3
.
├── app.ts
├── index.ts
├── modules
│   ├── healthCheck
│   │   └── healthCheck.ts
│   └── user
│       ├── __tests__
│       ├── user.driver.ts
│       ├── user.handler.ts
│       ├── user.rest.ts
│       ├── user.schema.ts
│       └── user.usecase.ts
└── utils
    ├── db_pool.ts
    └── makeDoc.ts
```

- `rest → handler → usecase → driver → DB`
- スキーマ は`.schema.ts`ファイルしてリソース毎にそこに集める
- handler は usecase を呼ぶだけ（handler のテストは無し）

- テストは Driver を Mock した UseCase のテストのみ書いている。（全体 e2e は別の方法でテストしたい）

### 備考

- openapi からスキーマ自動生成は生成されるスキーマは`.gitignore`に含めて、GitHub Actions とかで生成させた方が良い。
- ローカルで開発するときに`yarn dev`コマンドの中にスキーマ生成コマンドを入れるとか

### 参考

- [Build a REST API with Fastify & Prisma](https://github.com/TomDoesTech/fastify-prisma-rest-api)

- [Fastify で作る API に Zod でスキーマバリデーションをかけながら型定義と実用レベルの OpenAPI 仕様を自動生成する](https://dev.classmethod.jp/articles/fastify-zod-openapi/)
