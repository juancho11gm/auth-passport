# My Store

## How to run

### 1. Install dependencies

```bash
$ nvm use
```

```bash
$ npm i
```

### 2. Run

For development environment.

```bash
$ npm run dev
```

### Dependencies

- `express` web framework.
- `cors` middleware.
- `joi` schema validator.
- `@faker-js/fake` mock data generator.
- `@hapi/boom` HTTP errors handler.
- `nodemon` for local development.
- `prettier, eslint` for formatting and enforcing code styling.

### Docker

- `docker-compose up -d postgres`
- `docker-compose up -d pgadmin`
- `docker-compose up -d mysql`

## Sequalize Migrations

Migrations help to keep track database changes.

- [Docs](https://sequelize.org/master/manual/migrations.html)

### Deployment

[Heroku Docs](https://devcenter.heroku.com/articles/deploying-nodejs).

Made with love <3.
