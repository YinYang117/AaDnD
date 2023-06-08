#!/bin/bash

#Create a user

echo "Setting up your backend! Please wait for prompts..."

read -p "Enter your db Username:  " uservar

echo "Continuing with username set to:  $uservar"

read -p "Enter a db Password:  " passwordvar

echo "Continuing with password set to:  $passwordvar"

#set the working dir to backend
cd ..

npm i

function generateSecretKey(){
    secretKey="'$(openssl rand -base64 10)'"
}
generateSecretKey

echo >> .env "
PORT=5000
DB_USERNAME=$uservar
DB_PASSWORD=$passwordvar
DB_DATABASE=dnd_database
DB_HOST=localhost
JWT_SECRET=$secretKey
JWT_EXPIRES_IN=604800

"

psql -c "Create User $uservar Password '$passworvar' CREATEDB"

npx dotenv sequelize db:create

npx dotenv sequelize db:migrate

npx dotenv sequelize db:seed:all

echo "back end should be all set up! Starting up the server!"

npm start
