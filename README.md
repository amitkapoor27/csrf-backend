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

## Implementation

```code

// Use csurf middleware to handle CSRF protection
app.use(csurf({ cookie: true }));

// Add CSRF token to all responses
app.use(function(req, res, next) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  next();
});
// Add the CSRF token to every response object
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  });

// Add the CSRF token to forms
app.get('/example', (req, res) => {
    return res.status(200).json( { csrfToken: req.csrfToken() });
  });
  
// Validate CSRF token on all POST requests
app.post('/profile', function(req, res) {
  // Check if CSRF token is valid
  if (req.csrfToken() !== req.body._csrf) {
    return res.status(403).send('Invalid CSRF token');
  }
  
  // Process user profile update
  
});
```

## Author

👤 **Amit Kapoor**

* Github: [@amitkapoor27](https://github.com/amitkapoor27)
## Show your support

Give a ⭐️ if this project helped you!
