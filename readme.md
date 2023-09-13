## install node js

1. npm i typescript express ts-node
1. npm i --save-dev @types/node @types/express
1. npm i dotenv
1. npx tsc --init
1. npm i -D concurrently nodemon

## add script to packets

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx tsc",
    "start": "ts-node server/server.ts",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/server.js\""
  },
```

## create a router
