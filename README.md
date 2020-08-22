# react-redux-todo-app
This is my first react redux app. Through this app one can add list of to do and change the state based on it's completions to completed and incompleted.
 
Steps by step of applications
steps are:-
git --version
node --version
npm --version
npm install -g create-react-app

create-react-app --version

create-react-app <projectname>

cd <projectname>
npm install @reduxjs/toolkit
or
npm install redux
npm install react-redux
npm install --save-dev redux-devtools

npm start

##########################or ##################

npx create-react-app my-app
cd my-app
npm install redux react-redux --save 
//npm install react-redux
npm start


prerequisite for running react redux

installing git 
node.js
visual studio


The call flow of my todo app :-

when user enter todo in text box the call flow goes like this 

1 index.js (called for the first time in app)
2 component (here todo app, here provider is used to make component available for entire app)
3 another component (here AddTodo.js, from where action is dispatched to reducers)
4 index.js of reducers   (it is central reducers, here list of reducers are mentioned, and based on action  types the flow goes to that reducers )
5 todo.js reducers (as the action matched in this reducers so the call came to this reducer , now from here the data will be returned to the redux store  )
6 redux store will have the state and action sent by reducers.






















