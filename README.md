# Password manager

## How to

Git clone the repository 
`git clone https://github.com/romainlq/password-manager.git`

### Start client

`cd client && npm i && npm run dev`  

### Start server

`cd server && npm i && npm run dev`

## Tech stack

### Client

- ViteJs
- React
- Redux toolkit

### Server

- koa
- postgresql database

### Issues

- I did not manage to make it work in production (cors + session issues), difficult to resolve to a lack of nodejs backend knowledge)

### Nice to have but I did not have the time 

- Edit a password (open a drawer and edit the password informations)
- Add a "copy" button to set a password into the clipboard
- Ability to search / sort
- Share a password with another user
- Get specific envs for dev / staging and production

