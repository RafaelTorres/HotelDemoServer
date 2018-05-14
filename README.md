Boilerplate used : [node-rest-api-boilerplate](https://github.com/kylealwyn/node-rest-api-boilerplate)

## Getting Started
First, ensure you have node and mongo installed on your system.

```sh
# clone it
git clone https://github.com/RafaelTorres/HotelDemoServer.git
cd HotelDemoServer

# Install dependencies
npm install

# Run it
npm start

# In other terminal run it, to add dummy data
npm run create
```

## Environment Variables
Place a `.env` file in the top level of the directory you've cloned. These variables will be automatically assigned to `process.env` when the application boots. It is gitignored by default as it's not good practice to store your environment variables in your remote repository.
Your `.env` file can look something like this:

```shell
MONGO_URI=mongodb://somewhere:27017/dbName
SESSION_SECRET=lolthisissecret
```

Now we can access one of these variables with something like `process.env.MONGO_URI`!

## NPM Scripts

- **`npm start`** - Start live-reloading development server
- **`npm run create`** - Add dummy data in document object model for test
- **`npm run build`** - Generate production ready application in `./build`

## Api Documentation
[Postman](https://documenter.getpostman.com/view/3439269/hotels/RVnZgxw6#834be0b7-2655-44eb-8a9f-da5d61b4e9ea)
