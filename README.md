# Welcome to your BookShelf
Your one stop shop for all your reading needs. 

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


---
Author: Reed Turgeon