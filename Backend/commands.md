# Sequlieze Cheat Sheet commands

To create a user run:

```bash
psql -c "Create User dnd_user PASSWORD 'strongdndpassword' CREATEDB"
```

To create the database run:

```bash
npx dotenv sequelize db:create
```

To create a User model:

**TODO: Update this with whatever the final user model is**

```bash
npx sequelize model:generate --name User --attributes username:string,email:string,hashedPassword:string
```

To migrate user:

```bash
npx dotenv sequelize db:migrate

```

To generate a seed file for user:

```bash
npx sequelize seed:generate --name demo-user
```

To migrate seed files you can run:

```bash
npx dotenv sequelize db:seed:all
```

To undo seed you can run:

```bash
npx dotenv sequelize db:seed:undo
```

To undo all seeds you can run:

```bash
npx dotenv sequelize db:seed:undo:all
```
