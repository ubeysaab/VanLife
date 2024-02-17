# React Router
`npm install react-router-dom`
is a library used to enabling _Client Side Routing_

- [MPA & SPA]

### Multiple Page Application & Single Page Application

to understand what is _Client Side Routing_ we need to take a look of MPA&&SPA history

_What is the difference between these two ?_
**MPA**
in a more traditional web site we have Mpa the client is the browser and the server which is just a compute that usually lives outside or some where else
so when we go to the browser and navigate a website let's say _mysite.com_ a simplified version of what happen is a request is made to the server thats associate with the domain of _mysite.com_ and is request the HTML page that needed to display the webPage and at that point the server will do some processing it will grab the HTML page and it will also might evaluating some CSS or JS it could potentially be reaching out to a DATABASE or making API calls to other servers in the end with ultimate goal of putting together a completed _home page_ to send back to the browser in form of HTML file, that HTML file is send back as a response from the sever to our browser and our browser then load that page for us to view
![alt text](image.png)

so then when we are look to at _home page_ we can go and click on _about page_ the url for this may will be _mysite.com/about_ which would then perform another request to the server the server again will would go to the same process as before then deliver the page to the browser and the browser then will replace the _old home page_ with _new about page_

<!-- adding gif about MPA  -->

from the browser infront of us it might look something more like the entirety of taht page is discarded and replaced with entirety of the new page like a flicker and that tell tale flicker is a good way to know tha tyou are currenlty looking on at a MPA

**SPA**
how SPA differ
SPA : doesn't mean that we'll have on single page but it's mean that our browser is only loading a single web document on time and then our app will make incremental updates to that existing document throught different methods like _internal react state changes or fetch request API_ it all start in very similar fashion in our browser we navigate to _mysite.com_ that makes a request to the server the server will then process a few thing _but this time_ \*_istead of its job being to process and build an HTML file it's gonna send back an entire React Application_

![alt text](image-1.png)

so that application is sent back to the browser

![alt text](image-2.png)

it's loaded into the browser and when new request like _mysite.com/about_ are made _oftentimes portions of that new page are able to load directly inside of the React app without any new request beign made out to the server_ that said the about page might sill need some extra information or data from server or API and so a requst could still be made out to a sever at which point it would do its job and this time instead of sending a new page back _because that view is already exists inside of React app itself_ it's likely only gonna be handling sending back somethings like _JSON data_

![alt text](image-3.png)

that JSON data gets sent back to our react app which then loads into the React app get consume by it and changes what ever view we are looking at to include the new Json data that we just loaded from the server.

on the client side the real difference that we will see there is won't be the same flicker of the entire page when we're going from one page to the next because _we're not reloading the entire document it's just **oneDocument(onePage)** but the content on that page might change_ in essence what that does is it might swap out the home page content for the about page content because _the React app was loaded on the initial render of our website so it already knew what content the aboutPage was going to contain and it may or may not have had to reah out to a server to get some additional data_

### React Router Setup & BrowserRoute

in order to set our project up to a SPA with routing usin ReactRouter we need to import few thing but the first thing we gonna import is `BrowserRouter`
what `BrowserRouter` is do under the hood is it a context provider an so in order to give our app the power to include routing in its functionality we need to _wrap_ the app with `BrowserRouter`

### Routes

as we've mentioned BrowserRouter is a context provider and its provide context to all of its children components. so BrowserRouter is the Provider we need to setup away to define the routes that we want in our application and to do it there are two component to pull in order to start setting up

- Routes : goes as the first child of BR

- Route : is just a part of our URL that specifies where on website we are "example.com/_route_"

> Routes can be nesting for example if we have "example.com/blog" we might wanna specify that we have another route as part of this URL and that leads us to "example.com/blog/_article1_" often time blog will use the title of the blos as this part of url or can using a _idNumber_ where it specifies for the database under the hood which blog ID number it should be looking for

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <h1>Hello, React Router!</h1>;
}

function About() {
  return <h1>About page goes here! 🎉</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

// until now we've to click the url to change the route but that is not how navigate around the website gonna work  so  in the next section we gonna see what is the true way to it
```

### Link

it's a bet annoying to have to go up to the Url section just to change which route we're in.
And we can see when we do that the page is actually blinking which means it's refreshing it's doing a complete full page refresh  _it's not that big of the deal when we consider about the blink but if we have any kind of state living in our app  that needs to be passed to 'about' page or well  really state at all doing that page refresh is gonna completely wipe out any state that we're maintaining_



> if we really think about it  a React app is a little bit delicate  when it comes to state becasue if that refresh happens  then all our state just completely disappears unless we're saving it in local storage or something like that it will just completely reset.

the way to solve this problem in HTML  is to have `<a>`  but the problem with `<a>` is when we click it it will do another page refresh  so we need some way to navigate between  our different routes within the ecosystem of react router Dom and the way to do it is by using `<Link>`

Link is just a `<a>` but it's intercepting the  path that the `<a>` is sending us to and making sure it doesn't that page refresh so we can maintain our states



<!-- VAnlist page skeletonUI  -->
