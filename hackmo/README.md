# HackMo

## Copyright

&copy; 2018 Hack Reactor. This material is copyrighted by Hack Reactor and may not be distributed to the public

## Prompt

You will be creating a full-stack application to allow monetary transfer between users.
In order to do this you will be using some pre-existing user data that you will store in a [MySQL](https://dev.mysql.com/doc/refman/5.7/en/) database.
Your front end will display views created from data in the database.
You will use [ReactJS](https://facebook.github.io/react/) and serve your application with a [NodeJS](https://nodejs.org/) web server, using [ExpressJS](https://expressjs.com/).

HOW TO START THIS APP
* *[Modify this section to tell graders how to start your app]*

By design, <u>__this assessment contains more work than you will be able to complete in a day__</u>, so don't be concerned about not completing all of the features below.
Rather, please work on the following features <u>**in order**</u>, moving on to the next feature only after the one you are working on is complete.
**Please commit WORKING code early and often**, and in particular, commit after completing each feature.

### Getting Balance

![part one][one]

**Implement the following user story:**
* As a user, when I enter my name and click "Get Balance" I expect to see my current balance.

Implement this user story by doing the following:
* **Server**
  * Start your server by running `npm start` or by using the debugger.
  * Create the database and the `users` table using the provided `schema.sql`, following the directions provided in the comments to populate your database.
  * Complete the `getUserByName` function in `server/db/index.js`.
  * In your express server `server/api/index.js`, add a route that will respond to GET requests to `/api/user/:name` with a JSON object of a user with that name. If any errors occur, ensure the error is logged and the server responds with a 500 status code.
* **Client**
  * Build your client code with `npm run react-dev`
  * Inside of `react-client/src/components/App.jsx`, use the `<BalanceForm />` and pass it a prop called `onSubmit` that will be called with the username searched.
  * Inside of the `react-client/src/components/BalanceForm.jsx`, build out the `<BalanceForm />` to collect a username as input. When the 'Get Balance' button is clicked on, call the `onSubmit` prop with the username typed in.
  * Create a helper method in the `<App />` component called `getUser` that takes in a `username`. Have this method set the `user` state to a fake user using the `username` provided:
    ```js
    {
      id: 1, // hardcoded, this can be whatever
      name: 'Halle', // dynamic, based on what was passed in
      balance: 9.25, // hardcoded, this can be whatever
    }
    ```
  * Inside your `<App />` component, make it so when ever you retrieve the username, you use your `getUser` helper.
  * Have your `<App />` component conditionally render the `<Balance />` component only when you have a `user` on the state (not null). Pass in that `user` as a prop to the `<Balance />` component.
  * Build out the `<Balance />` component to render the passed in user's name and balance values.
  * At this point, if we type in a username and submit, we should see that user's name and hardcoded balance.
    Now we want to retrieve the real user information from the server.

    Refactor your `getUser` in the `<App />` helper to send a GET request to your server at the proper endpoint for that user with the provided username.

**WHEN COMPLETE** please make a commit with "step one complete".

### Transferring Money

![part two][two]

#### Implement the following user stories:
  * As a user, when I enter my name and click "Get Balance," I expect to see my current balance and a list of other users, excluding myself.
  * As a user, when I click on another user's name, I expect to see an input box and button to transfer money.
  * As a user, when I click on the button to transfer money, I expect my balance debited and the other user's balance credited in the database.
  * The UI should reflect this change in my balance

Implement this user story by doing the following:
  * Create any new components as necessary.
  * Create any new server-side routes as necessary.

**WHEN COMPLETE** please make a commit with "step two complete".

### Transferring Money to Friends

![part three][three]

#### Implement the following user stories:
  * As a user, when I enter my name and click "Get Balance," I expect to see my current balance and a list of my friends.

Implement this user story by doing the following:
  * Use the data in `server/fakeFriendsData.js` to update your database to reflect friendships.
  * Update any components or directives as necessary.
  * Create any new server-side routes as necessary.

**WHEN COMPLETE** please make a commit with "step three complete".

### Transferring Money to Friends of Friends

![part four][four]

#### Implement the following user stories:
  * As a user, when I enter my name and click "Get Balance," I expect to see my current balance and a list of my friends and friends of friends.

Implement this user story by doing the following:
  * Use the existing data in your database and create any new query methods as necessary.
  * Update any components or directives as necessary.
  * Create any new server-side routes as necessary.

**WHEN COMPLETE** please make a commit with "step four complete".

### Limit transactions between users

![part five][five]

#### Implement the following developer stories:
  * When a user attempts to transfer more than $500 in one transaction, block the transaction and display a message.
  * When a user attempts to transfer to the same user more than two times within 15 seconds, block the transaction and display a message.

Implement this user story by doing the following:
  * Write rate-limiting middleware for your Express server (do no use any existing npm modules).
  * Create any new components or directives as necessary.

**WHEN COMPLETE** please make a commit with "step five complete".

### Authentication

#### Implement the following developer stories:
  * When a user enters their name and a password for the first time they check their balance, save this password to their account and require it for all subsequent logins.

Implement this user story by doing the following:
  * Write authentication middleware for your Express server.
  * Update any components or directives as necessary.

**WHEN COMPLETE** please make a commit with "step six complete".

## Available Resources

* [MDN](https://developer.mozilla.org/)
* [ExpressJS Docs](https://expressjs.com/)
* [Body Parser Middleware Docs](https://github.com/expressjs/body-parser)
* [MySQL Doc](https://dev.mysql.com/doc/refman/5.7/en/)
* [MySQL npm package Docs](https://www.npmjs.com/package/mysql)
* [AngularJS Docs](https://angularjs.org/)
* [ReactJS Docs](https://facebook.github.io/react/)
* [NodeJS Docs](https://nodejs.org/)
* [ExpressJS Docs](https://expressjs.com/)
* [Postman](https://www.getpostman.com/)
* Docs for any npm packages you might use
* [Stack Overflow](http://stackoverflow.com/)
* [Google Search](https://google.com) to search for the correct page on any of the documentation above

[one]: PART1.gif
[two]: PART2.gif
[three]: PART3.gif
[four]: PART4.gif
[five]: PART5.gif
