# Amazone Clone with API and Payment Processing

# Introduction

Hello! The is a Clone of Amazon with full E-Commerce functionality! It features a full secure user-authentification through user supplied email/password, and a fully functioning back-end with credit card payment processing through Stripe. The database (Google Firestore) stores all information associated with the user including email/password, and previous orders made.

The backend uses Google Firestore's Cloud Functions to host an API I created for processing credit card payments.

## Table of Contents

- <a href= https://github.com/Nicolasdha/Amazon-Clone#Technologies>Technologies</a>
- <a href= https://github.com/Nicolasdha/Amazon-Clone#Launch>Launch</a>
- <a href= https://github.com/Nicolasdha/Amazon-Clone#Structure> Structure</a>

### Technologies

This application was created using the following technologies:

Languages/Markup:

- Javascript
- CSS

Frameworks/Utilities:

- React^17.0.2
- ExpressJS
- NodeJS
- Stripe (Credit card processing)

Middleware:

- Cors
- Express.json()

Compilers/Bundlers:

- Webpack
- Bable

Platforms/Database:

- Google Firestore
- Google Cloud Functions

Third-Party Libraries:

- Axios
- Moment
- Material-ui
- react-currency-format

### Launch

This application is initalized using Google Firebase. Please follow this hyperlink to be taken to where this application is hosted:

<a href=ndurikhaecommclone.web.app> Amazon Clone - Fully Functional E-Commerce</a>

### Structure

To use this application please create an account an email and password, or feel free to use the test email/password

Email: test123@test.com<br>
Password: test123

After this you will be taken to the Amazon Clone homepage where you will see a products! These are hard coded in, but I am looking for an API that I would be able to pull products from dynamically. Here you can add the products to your cart. Once you have some products in your cart, click the top-righthand cart section to be taken to the checkout page. Click on Proceed to Checkout where you will be brought to the payment page. Use the following card credentials to check out:

Card # - 4242 4242 4242 4242<br>
MM/YY - 04 24<br>
Zip - 42424

Now the payment will be processed through my Stripe account, and you will be brought to the orders page. Here you will be able to see all the previous orders that have been made! Each order has an individual order ID that is set to the the client_secret.id used to processes the card payment.

All without a single page refresh of course!

Thank you for visiting! <br><br><br>

<!-- ![Logo](https://i.ibb.co/nr2trL4/Screen-Shot-2020-09-08-at-4-20-44-PM.png) -->
