# FRONTEND :

  ## Commands used for Frontend :

    npx create-react-app frontend : for creating react application
    cd frontend : for jumping into frontend
    npm i axios : makes HTTP requests from your React application

  ## Files :

    service-->    api : fetch the logic from backend
    
    components--> Form     : takes the input 
                  Item     : blueprint of single task
                  List     : display list of task

    hooks-->      UseFetch :  handle loading , displaying data and error


  ## For running frontend

    cd frontend
    npm start


  ## After completing the frontend and backend part this are the errors i have tackeled with

    Uncaught Error: Cannot find module './services/api'
    at webpackMissingModule (List.js:19:1)
    at ./src/hooks/UseFetch.js (List.js:19:1)
    at options.factory (react refresh:37:1)
    at __webpack_require__ (bootstrap:22:1)
    at fn (hot module replacement:61:1)
    at hotRequire (react refresh:20:1)
    at ./src/App.js (App.css:78:1)
    at options.factory (react refresh:37:1)
    at __webpack_require__ (bootstrap:22:1)
    at fn (hot module replacement:61:1)


 ## Some of the erros i handel by own and some are little confusing so i simply goggle it so that i can know what it means so that i can fix the issues