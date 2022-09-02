# Fullstack-Typescript-Project

MongoDb, Express.js, and Node.js are wonderful tools in backend development, whereas React.js and Redux are amazing in frontend development. This project demonstrates a MERN full stack project combining these powerful tools together in TypeScript. This is my first full stack project and my first experience working with databases.<br>

Managed to implement the CRUD functionality for all endpoints necessary for the complete project. The 'services' folder wasn't used, but was kept in case of a need for additional functionality in the future. The controllers handle requests and responses because there isn't much functionality needed for CRUD, otherwise the file structure becomes more difficult to orient around.<br>

Used JWT as a primary tool for authentification and authorization to eliminate possibilities of different users to access other users' data. Implemented a protective middleware to protect routes, however, some of them may need additional attention and testing to make sure protected routes work.

## Logic, simplified ERD

### Users
Each logged in user has the following protected fields:
- address
- cart
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
