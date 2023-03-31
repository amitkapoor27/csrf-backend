##  How to implement CSRF protection using the csurf middleware in MERN

**Cross-site request forgery (CSRF)** is a security vulnerability that can allow attackers to execute unauthorized actions on behalf of a logged-in user. Implementing CSRF protection in a MERN application is critical to prevent these types of attacks. Here is a high-level overview of how to implement CSRF protection in a MERN application:

**Generate a CSRF Token**: When a user logs in or performs a sensitive action, generate a CSRF token on the server and store it in the user's session. The token should be a random string that is unique to each user and changes with every request.

**Include the CSRF Token in Forms and Requests**: Include the CSRF token in all forms and requests that modify data on the server. This includes forms that allow users to update their profile, make a payment, or perform any other sensitive action. The token can be included in a hidden form field or as a custom HTTP header.

**Validate the CSRF Token on the Server**: When a request is received on the server, validate the CSRF token to ensure that it matches the token stored in the user's session. If the token is missing or does not match, reject the request and return an error message.

**Use CSRF Middleware**: In a Node.js and Express.js server, CSRF middleware can be used to automatically validate the CSRF token on all incoming requests. The middleware checks the request header or body for the CSRF token and compares it to the token stored in the user's session. If the tokens do not match, the middleware returns an error response.

## Installation


Clone the repository:

```bash
https://github.com/amitkapoor27/csrf-backend.git
```
Install the dependencies:
```bash
cd csrf-backend
npm install
```    

## Author

👤 **Amit Kapoor**

* Github: [@amitkapoor27](https://github.com/amitkapoor27)
## Show your support

Give a ⭐️ if this project helped you!
