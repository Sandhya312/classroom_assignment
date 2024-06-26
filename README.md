# Classroom Assignment - 

This project is backend project which consists of apis to manage the classroom assignments.

## Local Setup

 ### Prerequisites
- Ensure you have the following software installed:
    - Node.js (v12.x or later)
    - MySQL (v5.7 or later)

### Steps
 
- Clone the Repository
 ```bash
 git clone https://github.com/Sandhya312/classroom_assignment.git
 ```

- Install Dependencies
```bash
npm install
```
- Start the Server
```bash
node index
```

## Test the Apis
You can now test the API endpoints using tools like Postman. Ensure that you include the JWT token in the Authorization header for all authenticated routes except of '/','/signup', and /login route.  


## Endpoints

- **/api/assignment/** 

- **/api/assignment/create-assignment** 

- **/api/assignment/update-assignment/:id** 

- **/api/assignment/delete-assignment/:id** 

- **/api/auth/signup**

- **/api/auth/login**