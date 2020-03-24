# Welcome to your BookShelf
Your one stop shop for all your reading needs. 

- Hosted FE ([LINK](https://my-book-shelf.netlify.com))  


Get a recomendation from a coworker? Log it! 
Just finish a book? Review it! 
Is it a new favorite of yours? Rate it against your yearly and all time rankings & promote it to your friends!
Want to know what another user is reading? Turn your profile 'public' and allow other to interact with you and your BookShelf!

# Tech
## Stack
S - SQL  
E - EXPRESS  
R - React  
N - Node 

## HTTP Client
Axios ([LINK](https://github.com/axios/axios))  

## Query Builder
Knex ([LINK](http://knexjs.org))  


## UI
Material UI ([LINK](https://material-ui.com))  
Styled Components  ([LINK](https://styled-components.com))    

## Utils
Package Manager: NPM  

## APIs
- BOOKS 
1. NY Times: Books API ([LINK](https://developer.nytimes.com/docs/books-product/1/overview)) 

    - Get all available book lists:
        - Root URL: https://api.nytimes.com/svc/books/v3/lists/
        - Endpoint: `names.json`
        - Path Parameters: None

    - Get individual list by date
        - Root URL: https://api.nytimes.com/svc/books/v3/lists/
        - Endpoint: `{date}/{list}.json` 
        - Path Parameters:
            - Date: YYYY-MM-DD or "current"
            - List: Name of the Best Sellers List (e.g. hardcover-fiction)  
            
    ** Credit Requirements: https://developer.nytimes.com/branding



2. Good Reads ([LINK](https://www.goodreads.com/api))  
3. Google Books APIs ([LINK](https://developers.google.com/books))  

## Versions
- 0.0.3:
    - FE: Hosted
        - Login & Register
        - Homepage - Vert Tabs - NYT Bestseller List
    
    - BE: Hosted
        - Login & Register both setting token on Redux store -> login & register 1 step to homepage

    Screenshot:  
    <img src="client/src/assets/readMeImgs/Register_0.0.3.png" width='250'>
    <img src="client/src/assets/readMeImgs/Login_0.0.3.png" width='250'>


- 0.0.2:
    - FE: Hosted Homepage - Material UI Vertical Tabs - NYT Bestseller List Explorer 
    - BE: Login & Register functionality working in postman but not hooked up to FE

    Screenshot:  
    <img src="client/src/assets/readMeImgs/homepage_0.0.2.png" height='250'>
    
- 0.0.1:
    - FE: Hosted Homepage - Desktop Only - NYT Bestseller List Pyramid
    - BE: Login & Register functionality working in postman but not hooked up to FE

    Screenshot:  
    <img src="client/src/assets/readMeImgs/homepage_0.0.1.png" height='500'>
---
Author: Reed Turgeon