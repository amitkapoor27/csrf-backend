
import express from 'express';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
const app = express();

// Use cookie parser middleware to parse cookies
app.use(cookieParser());

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
  // ...
});

// Start server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});
