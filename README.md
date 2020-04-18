# Welcome to your BookShelf
Your one stop shop for all your reading needs. 

- Visit The Site! 👉🏼👉🏼 ([LINK](https://my-book-shelf.netlify.com))  
- API Documentation: ([Postman Documenter](https://documenter.getpostman.com/view/10122836/Szf54pe1?version=latest))


Get a recomendation from a coworker? Log it! 
Just finish a book? Review it! 
Is it a new favorite of yours? Rate it against your yearly and all time rankings & promote it to your friends!
Want to know what another user is reading? Turn your profile 'public' and allow other to interact with you and your BookShelf!

# Tech Stack
| title                   | name                                    | link                                                                             |
| --- --- ---             | --- --- ---                             | --- --- ---                                                                      | 
| Database                | S: SQL - Postgres                       | [LINK](https://www.postgresql.org)                                               |
| Server                  | E: Express                              | [LINK](https://expressjs.com)                                                    |
| UI Component Library    | R: React                                | [LINK](https://reactjs.org)                                                      |
| Server Run Time         | N: NodeJS                               | [LINK](https://nodejs.org/en/)                                                   |
| --- --- ---             | --- --- ---                             | --- --- ---                                                                      | 
| Package Manage          | NPM                                     | [LINK](https://nodejs.org/en/)                                                   |
| --- --- ---             | --- --- ---                             | --- --- ---                                                                      | 
| HTTP Client             | Axios                                   | [LINK](https://github.com/axios/axios)                                           |
| Query Builder           | Knex (prioritized used of .raw(``))     | [LINK](http://knexjs.org)                                                        |
| Styling                 | Material UI                             | [LINK](https://material-ui.com)                                                  |
| --- --- ---             | --- --- ---                             | --- --- ---                                                                      | 
| API Integration Testing | SuperTest & Jest                        | [SuperTest](https://www.npmjs.com/package/supertest) / [Jest](https://jestjs.io) |
| Unit Testing            | Jest                                    | [LINK](https://jestjs.io)                                                        | 
| End to End Testing      | Cypress                                 | [LINK](https://www.cypress.io)

## APIs  
- NY Times: Books API ([LINK](https://developer.nytimes.com/docs/books-product/1/overview)) 

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
            
    ** NYT API Credit Requirements: [LINK](https://developer.nytimes.com/branding  )

    <img src="client/src/assets/NYT_dataAttribution.png" width='150'>

## Credit
| title         | notes                    | link                                                                |
| ------------- | ------------------------ | ------------------------------------------------------------------- |
| favicon       | Author: Good Ware        | [LINK](https://www.flaticon.com/authors/good-ware)                  |
| Books API     | Title: NYT Books API     | [LINK](https://developer.nytimes.com/docs/books-product/1/overview) |

## Versions
- Version Numbering System: #.#.#
    - Digit 1 = LTS (long term support)
    - Digit 2 = Feature Release / Security Enhancements
    - Digit 3 = Maitenance Release - smaller improvements to existing features & defect corrections 
---
### Latest: 1.5.0 -- Testing Update

<details open>
<summary>1.5.0 -- Initial API Integration Testing</summary>

- End to End Testing - Cypress
    - Guest Login 

- API Integration Testing - JEST
    - TODO: Users
        - ✅ Routes & Models Separated
        - ✅ Integration Testing: Models & Routes 
            - beforeEach() => truncate USERS table
            1. Get /users/all
            2. Put /users/:userID
            3. Del /users/:userID

    - TODO: Books
        - ✅ Routes & Models Separated
        - ✅ Integration Testing: Models & Routes 
            - beforeEach() => truncate BOOKS table
            1. Post /books/
            2. Get /books/all
            3. Get /books/:bookID
            4. Put /books/:bookID
            5. Del /books/:bookID
            
    - TODO: Reviews
        - ✅ Routes & Models Separated
        - ✅ Integration Testing: Models & Routes 
            - beforeEach() => truncate REVIEWS / BOOKS / USERS table
            1. Post /reviews/
            2. Get /reviews/all
            3. Get /reviews/singleReview/:reviewID
            4. Get /reviews/singleBook/:bookID
            5. Get /reviews/singleUser/:userID
            6. Put /reviews/:reviewID
            7. Del /reviews/:reviewID

    - TODO: Logs
        - ✅ Routes & Models Separated
        - ✅ Integration Testing: Models & Routes 
            - beforeEach() => truncate COMPLETEDBOOKS / BOOKS / USERS table
            1. Post /logs/
            2. Get /logs/all
            3. Get /logs/:singleUser/:userID
            4. Get /logs/:singleBook/:bookID
            5. Get /logs/:singleLog/:logID
            6. Del /logs/:logID

    - TODO: Register
        - ✅ Routes & Models Separated
        - ✅ Integration Testing: Models & Routes
            - beforeEach() => truncate USERS table
            1. Post /register/

    - TODO: Login
        - ✅ Routes & Models Separated
        - ✅ Integration Testing: Models & Routes
            - beforeEach() => truncate USERS table
            1. Post /login/

</details>

<details>
<summary>1.4.2 -- Visualize User Reviews</summary>

- Card that shows the users most revent review for that book

Screenshot:   
<img src="client/src/assets/readMeImgs/1.4.2_ProfilePageUpdate__visualizeUserReviews.png" width='300'>     
<img src="client/src/assets/readMeImgs/1.4.2_ProfilePageUpdate__visualizeUserReviews_addReview.png" width='300'>     

</details>

<details>
<summary>1.4.1 -- Visualize User Logs</summary>

- Table that shows all of the users logged books
- Table columns are sortable 

Screenshot:   
<img src="client/src/assets/readMeImgs/1.4.1_ProfilePage__visualizeUserLogs.png" width='300'>   

</details>

<details>
<summary>1.4.0 -- Profile Page Functionality Update</summary>

- Add Review for a book & styling update  

Screenshot:  
<img src="client/src/assets/readMeImgs/1.4.0_ProfilePage__addReview.png" width='300'>  
<img src="client/src/assets/readMeImgs/1.4.0_ProfilePage__logCompletedBook.png" width='300'>  

</details>

<details>
<summary>1.3.1 -- Profile Page Functionality Update</summary>

- Log completed Book

- Single user flow => 
    - title input entry searching DB
        - Title in DB
            - no author entry
            - log type === 'logOnly'
        - Title NOT in DB
            - author entry needed
            - log type === 'addAndLog'

    - adds book to DB if needed
    - adds entry to readHistory

Screenshot:  
<img src="client/src/assets/readMeImgs/1.3.1_profilePageUpdate.png" width='300'>  

</details>

<details>
<summary>1.3.0 -- HOTFIX: login</summary>

- Add book to DB
- Login Hotfix - forced premature merge

</details>

<details>
<summary>1.2.0 -- Account Page: Update profile</summary>

1. Username
2. Email
3. Public Profile

Screenshots:  
<img src="client/src/assets/readMeImgs/accountPage_1.2.0.png" width='250'>  
<img src="client/src/assets/readMeImgs/editAccountPage_1.2.0.png" width='250'>  
</details>

<details>
<summary>1.1.0 -- Sign in as guest</summary>

- FE
    - Button added to <login /> so user can login as a guest
    - <Loader /> color & position updated
    - <Homepage /> linking to 'helloWorld' <AccountPage />
- BE 
    - User privilages added to users table
</details>

<details>
<summary>1.0.0 -- HOSTED: Register & Login</summary>

- FE: Hosted  
    - Login & Register  
    - Homepage - Vert Tabs - NYT Bestseller List  

- BE: Hosted
    - Login & Register both setting token on Redux store -> login & register 1 step to homepage

Screenshots:  
<img src="client/src/assets/readMeImgs/Register_0.0.3.png" width='250'>  
<img src="client/src/assets/readMeImgs/Login_0.0.3.png" width='250'>  
</details>

<details>
<summary>0.1.1 -- Homepage Redesign: Material UI Vertical Tabs</summary>

- FE: Hosted Homepage - Material UI Vertical Tabs - NYT Bestseller List Explorer 
- BE: Login & Register functionality working in postman but not hooked up to FE

Screenshot:  
<img src="client/src/assets/readMeImgs/homepage_0.0.2.png" height='250'>  
</details>  

<details>
<summary>0.1.0 -- Homepage: Pyramid</summary>

- FE: Hosted Homepage - Desktop Only - NYT Bestseller List Pyramid
- BE: Login & Register functionality working in postman but not hooked up to FE

Screenshot:  
<img src="client/src/assets/readMeImgs/homepage_0.0.1.png" height='500'>  
</details>  
<br/>  

---  
Author: Reed Turgeon