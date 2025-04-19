# Gateway Service

**Descripción**: API Gateway que expone una interfaz GraphQL al frontend.

- **Lenguaje:** Go
- **Framework:** gqlgen
- **Protocolo de comunicación:** GraphQL

## Variables de entorno
- `GQL_PORT`
- `REDIS_HOST`
- `VAULT_ADDR`

## Comando para correr
```bash
docker-compose up gateway-service
```
