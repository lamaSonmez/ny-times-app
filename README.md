# NyTimesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Run The Application
 - clone the project to your machine.
 - install packages used by Runining `npm install`.
 - navigate to project folder and Run `ng serve`.
 - since we are using jsonserver we need to run that server on 
   - go to auth-server by typing `cd auth-server`
   - Run `npm run start-auth`
the server will be runing at `http://localhost:8080`


## Application Structure
The application is consists of 3 modules
 1- core module 
 2- auth module 
 3- stories module 

Each module is consist of 
 - components : here all module components will be
 - models : module classes & interfaces
 - store : module state 
 - services : module services

## Core Module
In The Core module we have also 
- interceptors Folder  : inside it you will find two files:
  - auth Interceptor To append the Access Token to each outgoing request
  - error Interceptor to handle the http error 
- Guards : indsid this we have one file :
  - auth Guard : this is used to protect routes and just allow authenticated users to access them
- metareducers: we have here:
  - storage meta reducer: which is used to save current auth state in the storage so when we refresh a page we don't loose the credential  for the current logged in user

## Auth Module
we have two pages here:
- Login Page 
- Register Page.

When the user clicks on Login button , The Login Action is dispatched and a request to auth server is made to authenticate the user , when the request is returned with an access token (success) the setToken action is fired to store the token in a cookie for 15 mintues and the user will be redirected either to the home page or the page that was trying to access. And the auth state is Updated 

## Stories Module
We have to pages here:
  - Stories List :
     This page has two tabs with two categories `Science` & `World`,
     each tab has a search input to allow the user to search trow sories
     and a list of stories returned by the server ,
     In case of search articles is triggered the user will be able to load more data when clicking on `Load More` Button 
 -  Story Detail:
    this  will show the details of a selected story along with comments on it (`note`: `https://developer.nytimes.com/docs/community-api-product/1/overview` never being able to process with page , it was loading forever )
 

## Frontend Libraries:
  - Angular material 
  - Bootstrap library
  - ngx spinner 
  - toaster 
