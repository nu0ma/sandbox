# Example of skaffold implementation from frontend to DB

> Skaffold で DB からフロントエンドまでを動かす例

### developing APIs

- `cd environments/api`
- `skaffold dev -f deps.yaml`

### developing FrontEnd

- `cd environments/web`
- `skaffold dev -f deps.yaml`

### When everything is run in Skaffold

- wip
