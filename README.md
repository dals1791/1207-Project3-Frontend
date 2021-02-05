# Project 3 - MERN - BUDGTPAD (name is not final)!

## Project Links

- [Frontend Repo Link](https://github.com/dals1791/1207-Project3-Frontend)
- [Backend Repo Link](https://github.com/dals1791/1207-Project3-Backend)
- [Netlify Link](https://elated-galileo-c1aa74.netlify.app/)
- [Heroku Link](https://project3-backend-1207.herokuapp.com/)

## Project Description

Our team will be building and deploying a full-stack application that will allow users to manage their income and expenses in their bank account. Their income and expenses will be visualized by a bar/pie chart on the main page. Users will be able to add daily transactions and see what their spending habits are on. Users can enter transactions based on category, cost, and even place date/time stamps for reference.

Tnis application will of course be built mobile first, followed by tablet and then desktop.

## Project Completion status

| Project Phase | Status/Notes | 
| --- | :---: |  
| Group meeting to decide what our application will do | Complete| 
| Front-End Architecture Planning  | Complete | 
| Back-End Architecture Planning | Complete | 
| Initializing React/Express for basic set-up use | Complete |
| Primary assembly of Express API Server | Pending |
| Primary assembly of React front-end application | Pending |
| Setting useState and useEffect hooks | Pending |
| Calling API to React application | Pending |
| Testing of bare-bone application for functionality | Pending |
| CSS Styling | Pending |

## API

Our team will be constructing our own API on an Express server. This API will have the following schema as an example transaction:

**User Schema**
- Contains user info - first and last name, email, password
- User will reference the Budget model which contains their income and how much they are willing to spend. 
- User will also reference a Transaction Model which contains details of what they spend money on.
```
User: {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    Budget: ref 'Budget' ,
    Transaction: ref 'Transactions'
}
```
**Budget Schema**
- This has an Income number for how much money user has right now.
- There is a Spend Goal amount which represents how much user is willing to spend monthly. (Not required)
- Spend Category is for which categories user would like to spend on.  (Not required)
```
Budget: {
    Income: Number,
    SpendGoal: {type: Number, required: false },
    SpendCategory: {type: String, required: false }
}
```
**Transactions Shcema**
- Description of transaction made ex: 'Sushi with family'
- Category of the transaction ex: Food, Gas, Travel, Groceries.
- Amount Spent for the transaction
- The date transaction was made
- What type of transaction? Routine Yes/No? --> Routine is for bills. If user has monthly bills to pay, that becomes a routine transaction.
- What type of transaction? Expense Yes/No? --> User can spend money or receive money. If someone pays them back or the user gets paid for work, the transaction is added to their income.

```
Transactions: {
    Description: String,
    Category: String,
    AmountSpent: Number,
    Time: Date,
    Routine: {type: Boolean, required: false}
    Expense: {type: Boolean, required: false}
}
```
## User Stories

- [User Stories](https://docs.google.com/spreadsheets/d/1Jt04_3x2bBOjLyEk1pWXB2FXh_d--9XjrhQ5qbZH9aM/edit#gid=0)

## Wireframes

Here are the official wireframes for our budget application. The first two links are the Figma wireframes for both mobile and desktop applications. Our architecture for our React front-end, and Express back-end are attached as well.

- [WireFrame - Mobile](https://www.figma.com/file/DfRQa0bx3jLrD2q41igogW/BUDGTPAD-WireFrame-Mobile-name-is-not-final?node-id=4%3A2)
- [WireFrame - Desktop](https://www.figma.com/file/njd9KOGH3tyByGZcg606vH/BUDGTPAD-WireFrame-Desktop?node-id=0%3A1)
- [Front-End Architecture](https://docs.google.com/document/d/1cihabkw6SrNlEe_E8MJKUVV-zLnOUvzDcJDbjgFdojk/edit?usp=sharing)
- [Back-End Architecture](https://docs.google.com/spreadsheets/d/1XECmUmoJZeuVNIFufisZjdueglj_SYs-7OsxV74k5nQ/edit#gid=0)


## Overall Project Requirements

The following **_must_** be met in order for the project to be considered
complete:

- Our app is deployed fully deployed (both the front-end and the back-end).
- Students include a `planning/` directory that sufficiently demonstrates their
  team's planning process.
- The repos have a README that adequately documents the project.
- The commit history of your repos show a roughly equal number of commits from
  each group member
- a `Team` page to show case each team memeber's picture, passion, and contribution on the project. 

### Technical Requirements

Two separate repo's are required for this project, one for the `Back-End` and one for the `Front-End`. They must not reside in the same repo. 

**Back-End Requirements:**

- Our back-end must be a Node, Express, and Mongoose API with at least 2
  models, more if needed, and one association.
- Must have Create, Read, Update, and Destroy functionality built throughout the
  app (i.e. You don't need full CRUD on every model, just full CRUD throughout
  your models where it makes sense).

**Front-End Requirements:**

- Your front-end must use React and leverage the backend API.
- You must use React Router to handle multiple views.
- You must communicate with the back-end API RESTfully to Create, Read, Update,
  and Destroy resources (using either `fetch` or `axios`).
- Your frontend must be responsive and work on mobile phones, tablets, and desktops

#### PostMVP Application

- User authentication for people to be able to make accounts and log-in.
- Light and dark mode.
- Sorting transactions (monthly, daily)
- Edit a transaction based on clicking the transaction versus clicking a button. 
- Settings page for users to configure light and dark mode.

## Front-End Pages and Components
Initial components decided for Project. 

| Pages | Description | 
| --- | :---: | 
| App.js | Main page to store and render all components |
| Login | Lets users log on the application. |
| Landing | Render pie chart, transactions and income. |
| Transactions | Shows daily transactions of user. |
| User info | Account infomation of user. |

| Components | Description | 
| --- | :---: |
| Team | Shows user stories and team members that worked on this app. |
| User Login Form | Lets users create account using email and password. |
| Pie Chart | Visual diagram of user income and expenses. |
| Add Transaction | Allows users to log transaction based on category, description, cost, date and time. |
| Add Income/Goal | Adding user income and goals of spending habits.       |

## Time-Frames

| Task | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create database | H | 5 hrs | *hrs* | *hrs* |
| Create React Components | H | 4 hrs | *hrs* | *hrs* |
| Create routes/test | H | 8 hrs | 4 hrs | *hrs* |
| Send routes to React | H | 1 hr | *hrs* |
| Render data on components | H| | 6 hrs | *hrs* |
| Link API to React | H| 1 hr | *hrs* | *hrs* |
| Final touches front-end | L | 1 hr | *hrs* | *hrs* |
| Final touches back-end | L | 1 hr | *hrs* | *hrs* |
| CSS Styling | M | 8 hrs | *hrs* | *hrs* |
| Total Time | H | 35 hrs | *hrs* | *hrs* |

## Additional Libraries
Our team will probably use the following libraries and frameworks:

- React.js
- React-Router
- Express.js
- Mongo Shell
- Mongoose
- Bootstrap (*optional*)

## Tasks for Team Members

Official tasks assigned to each team member. Collaboration will be done on Trello.

**Sean:**
- Working on the database. 
- Handling mostly back-end but will stand-by for front-end when neccesary.
- Creating planning directory and architecture.

**Anny:**
- Handling piechart diagrams.
- Seeding data.
- Helping out with routes, back-end and front-end. 

**Steven:**
- Handling visualization of the final product. Created wireframes for the project.
- CSS Styling when everything is up and running.
- Create basic component layout and render to React. 
- Update the readme file and provide updates on the team.
- Handling front-end look and components, will receive assistance when neccesary.
