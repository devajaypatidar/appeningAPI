# API
This project implements a set of APIs for an application with the following features:

1. User Signup and Login
2. List Users
3. String Search

## Features

### 1. User Signup and Login

- Implements a user signup and login system.
- Uses a token-based authentication system (JWT).
- EndPoints :
- Register User
  -  /api/user/register
  - Method: POST
  - Purpose: To register a user
  - Body:  ```{
  "username": "vim",
  "password": "1234",
  "role": "user" or "admin"
}```
- Login User
  - /api/user/login
  - Method: POST
  - Purpose: To register a user
  - Body:  ```{
    "username": "ajay",
    "password": "1234"
  }```

### 2. List Users

- Provides an API to list all users.
- Accessible only to users with the type "admin".
- Endpoints :
  - /api/user/list
  - Method: GET
  - Purpose: To get users data
  - Header: JWT Token Authorization token
  - response: List of Users only to Admin Role

### 3. String Search

- Provides an API to find a given string in an array of strings.
- Uses a predefined array of strings. `["Race", "Part", "Heart", "Listen"]`.
- Returns `true` if the input string is an anagram of any string in the array; otherwise, returns `false`.
- Endpoints :
  - api/search
  - Method: POST
  - Body: Body containing String
  ```
  {
  "string":"Trap"
    }
  ```
  

#### Examples:

- Input: `Trap`; Response: `True`
- Input: `Care`; Response: `True`
- Input: `Charge`; Response: `False`

 API Deployed on Render: `https://appeningapi.onrender.com/`
