# Fullstack-Typescript-Project

For some reason working in the provided file structure led me to issues with the Postman tool, which was used as a primary testing tool. For this reason I decided to start from absolute scratch, figuring out tsconfig.json and package.json files by myself. Before working with this project I barely understood what these files did and I treated them as they did not exist to me. During this project I learned a lot about them, and now I know what they do and I treat them as helpers unlike before. I tried to keep the commands and declarations as close to the initial state of the repository as possible. The 'client' folder wasn't changed at all, only the 'api' folder.<br>

Managed to implement the CRUD functionality for all endpoints necessary for the complete project. Did not use the services folder, but kept it in case of a need for additional functionality in the future. The controllers handle requests and responses because there isn't much functionality needed for CRUD, otherwise the file structure becomes a little more difficult to orient around, which slows down the project progress (which wasn't great in the first place).

## Logic, protection, ERD
JWT is used as a protection method in this project. Simplified ERD is presented below

### Users
Each logged in user has the following protected fields:
- address
- cart
And unprotected ones:
- reviews

### Products
Each product has the following unprotected fields:
- categories
- reviews

### Cart
Cart belongs to a user and contains:
- array of products

### Reviews
Contains its own data and IDs of:
- reviewer
- product

### Category
Consists of its own data only

### Address
Holds user's data primarily related to their address

## Requirements

Below are the steps that you need to finish in order to finish this module

1. Explore the code base of the api folder, start with `server.ts` and `app.ts`
- `app.ts` file was deleted, current backend functionality is implemented in `server.ts`
2. Client folder is for the react frontend. Start with `api` first before moving on to `client`
- done
3. Create all the schema for your ERD
- schemas can be found in the `models` folder
4. Create CRUD endpoints for all the schema
- done
5. Separate the routers and controller, controller goes into the controller folders. Controllers only handles request and response, and will call service to process business logics.
- service folder hasn't been used yet, but might be needed later
6. Create more controller for your app if needed. Eg: borrow books, add product to order
- current number of controllers seems sufficient <br>
7. For business logic like saving data to database, filtering, searching or updating, these are services and goes into services folder
8. Add authentication middleware using passport, google and jwt strategy
9. Add tests for your controllers and services. Remember to create the jwt token for your tests, because if your controller is protected, then the test should send the token also
