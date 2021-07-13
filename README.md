# Welcome to Microsoft Teams Clone :sparkles:
## Project Rational
Before the unfortunate COVID-19 pandemic made working remotely from home a necessity for many people, videoconferencing was an essential part of many businesses. However, as 
current circumstances have dictated, many business communication platforms like Microsoft Teams and many others can also play an indispensable role for those of you who are 
staying at home far more than usual.

Along with conducting business, many top video chat apps allow you to chat with friends, stay in touch with beloved family members, organize virtual parties,having online and remote classrooms for students provides a digital space that brings conversations, content, assignments, and apps together, enabling students to take full control of their own learning.

This project is focued on making real time chat application with features and video call.

## Agile Methodology adopted:
### 
1. For this project we used **React** franmework for frontend development as it has much more functionality and is easier to handle than HTML and CSS. For backend we used **express** on which the server is handeling the socket and authentication. 
2. To create the webapp, initially authenication page is created using simple token generation by frontend and verfication by backend. The backend can be found on the */server/index.js* and login auth is hosted on *http://localhost:8080:login*.
3. For Video Chat, sockets were used from **socket.io**. Sockets are favorable choice for this type of communication. Web socket is hosted on backend on *http://localhost:5000*. This allows multiple users to communicate with each other in realtime.
4. Sockets were also used for normal chat as well. Both video and normal chat were hosted via same socket as mentioned above.

###  Roadmap :calendar:
#### Week 1
 
  * First week was mostly dedicated in doing literature survey for similar projects build.
  
  * Revised Javascript concepts and read tutorials on basic React.js framework. 
  
  * Followed  Javascript video lectures from Harvard CS50.

  * Went through  tutorials from **https://reactjs.org/** .Learned about React Components ,props,Developer Tools from **https://reactjs.org/tutorial/tutorial.html**.
   
  * Saw tutorials on webrtc ,how sockets work.
  
  
#### Week 2
 
  * Started working on Video Chat application.
  
    a. Started writing backend code in server.js in folder.
  
    b. Installed CORS (Cross-Origin Resource Sharing) Web API allows cross-domain access to your Web API methods  in folder. CORS is a W3C standard that allows you to get away
     from the same origin policy adopted by the browsers to restrict access from one domain to resources belonging to another domain. 
    
    c. Made connections using socket-io server,include disconnect ,call  user,answer call feature.
  
    d. Made separate folder VideoChat which contains js and css file.and writing all the code of socket connection from client and user interface in js file and for styling used
    css file.
     
  * Made changes in Video Chat UI by using **@material-ui/core** library and react library to import various icons (Call icon and Hang up Icon).
  
  * Made Navigation bar which contains tabs like Home page,Chat,Video Chat,Messages and Support.
  
  
####  Week 3
  
  * Start to work on chat application.
  
    a. I was planning to this on socket but due to unknown conflicts backend became very slow and it was taking huge time to process any changes.
    
    b. To avoid this i used preexisting open source event emmitter framework **ChatEngine** for building chat applications.
    
    c. To use this we have to open two window in one window first user would login with his/her credentials and in other window second user would login wth his/her credentials 
      and then communicate with each other via chat.
  
#### Week 4
  
  * Deployed video chat application on herouku.
  
    a. Frontend and backend are separately deployed.
    
    b. Frontend is deployed on netlify and Backend is deployed on herouku.
    
    c. Created heroku repository and upload this project directory in repo using git after successfully pushing changes after it automatically build and run backend.
    
    d. For frontend i create build folder onto which the whole app has been build then we upload this to netlify which automatically build files.
    
    e. Replaced every url-*http://localhost:5000* to heroku https://teams-clone-bknd-test.herokuapp.com/ in frontend.
    
  * Worked on Adapt Feature
  
    a. I used same sockets that were used for video chat to build  chat application in video chat  but backend was already running slow whenever we were trying to use  chat
    application functions in backend it was crashing.
   
  
  
  


## Features and Functionalities :smiley:
  
  * Video call with others
  
  * Chat in real time
  
  * Chat Notifications
  
  # Screenshots📸
   ## LoginPage
   ![login1](https://user-images.githubusercontent.com/78307937/125407611-ac1d3080-e3d7-11eb-9ddc-80bda26e5966.png)

   ## HomePage
   ![homepage](https://user-images.githubusercontent.com/78307937/125186938-b2ca6d00-e24a-11eb-8f9d-d92be8847af0.png)


   ## VideoChat
   ### From First user end
   ![1](https://user-images.githubusercontent.com/78307937/125462529-34fd721a-0615-4104-a94d-9066272829d8.png)

   
   
   ### From Second user end
   ![second2](https://user-images.githubusercontent.com/78307937/125462562-2acd65c9-9ec0-4f70-9399-9457ff8e177b.png)



   
   
   ## Chat feature
   ### From first user end
   ![first user](https://user-images.githubusercontent.com/78307937/125396214-e1bb1d00-e3c9-11eb-8668-a5bb39ef112f.png)
   
   ### Login from second user side
   ![login2](https://user-images.githubusercontent.com/78307937/125407704-c1925a80-e3d7-11eb-8ec6-fc663db5fcf6.png)

   
   ### From Second user end
   ![second user](https://user-images.githubusercontent.com/78307937/125396267-f13a6600-e3c9-11eb-829b-02e2d260abb9.png)


  ## Techstack used🖥
    Webrtc
    Socket.io
    Node.js
    React.js
    Material-ui
    yarn
    npm
    
  ## Installation 🔧
  
   1. Clone this repo in your local storage using command :
    
       $ git clone https://github.com/milostivyy/Teams-Clone 
       
   2. Open a new terminal to go to server folder, install packages and run the server 
   
     $ cd server
       
     $ npm install
       
     $ npm start
       
   3. Open another new terminal to go to frontend folder, install packages and run the client
   
     $ cd frontend
       
     $ yarn install
       
     $ yarn start
       
       
   4. You can also use the webapp from https://practical-bhabha-e2590e.netlify.app , on which it is hosted. 
     
  
   
   
  
  
