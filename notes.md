- [React Router](#react-router)
    - [Multiple Page Application \& Single Page Application](#multiple-page-application--single-page-application)
    - [React Router Setup \& BrowserRoute](#react-router-setup--browserroute)
    - [Routes](#routes)
    - [Link](#link)
    - [useParam](#useparam)
    - [Nested Routes](#nested-routes)
      - [Outlet](#outlet)
        - [Relative Paths](#relative-paths)
        - [IndexRoutes](#indexroutes)
      - [To nest or no to nest](#to-nest-or-no-to-nest)
      - [NavLink](#navlink)
        - [end](#end)
    - [Extra](#extra)
    - [Quizes](#quizes)

# React Router

`npm install react-router-dom`
is a library used to enabling _Client Side Routing_

- [MPA & SPA]

### Multiple Page Application & Single Page Application

to understand what is _Client Side Routing_ we need to take a look of MPA&&SPA history

_What is the difference between these two ?_
**MPA**
in a more traditional web site we have **MPA** *the client is the browser* and *the server which is just a computer that usually lives outside or some where else*
so when we go to the browser and navigate a website let's say _mysite.com_ a simplified version of what happen is a request is made to the server thats associate with the domain of _mysite.com_ and is request the HTML page that needed to display the webPage and at that point the server will do some processing it will grab the HTML page and it will also might evaluating some CSS or JS it could potentially be reaching out to a DATABASE or making API calls to other servers in the end with ultimate goal of putting together a completed _home page_ to send back to the browser in form of HTML file, that HTML file is send back as a response from the sever to our browser and our browser then load that page for us to view
![MultiplePageApplication](./src/images/image.png)

so then when we are look to at _home page_ we can go and click on _about page_ the url for this may will be _mysite.com/about_ which would then perform another request to the server the server again will would go to the same process as before, then deliver the page to the browser and the browser then will replace the _old home page_ with _new about page_

<!-- TODO adding gif about MPA  -->

<!-- from the browser infront of us it might look something more like the entirety of that page is discarded and replaced with entirety of the new page like a flicker and that tell tale flicker is a good way to know tha tyou are currenlty looking on at a MPA -->
The browser display in front of us might appear as a complete replacement of the current page with the new one, like a flicker.  That telltale flicker is a good indicator that you are viewing a Multi-Page Application (MPA).


**SPA**
how SPA differ
SPA : doesn't mean that we'll have one single page but it's mean that our browser is only loading a single web document on time and then our app will make incremental updates to that existing document throught different methods like _internal react state changes or fetch request API_ it all start in very similar fashion in our browser we navigate to _mysite.com_ that makes a request to the server the server will then process a few thing _but this time_ \*_istead of its job being to process and build an HTML file it's gonna send back an entire React Application_

![SinglePageApp](./src/images/image-1.png)

so that application is sent back to the browser

![alt text](./src/images/image-2.png)

it's loaded into the browser and when new request like _mysite.com/about_ are made _oftentimes portions of that new page are able to load directly inside of the React app without any new request beign made out to the server_ that said the about page might still need some extra information or data from server or API and so a requst could still be made out to a sever, at which point it would do its job and this time instead of sending a new page back _because that view is already exists inside of React app itself_ it's likely only gonna be handling sending back somethings like _JSON data_

![alt text](./src/images/image-3.png)

that JSON data gets sent back to our react app which then loads into the React app get consume by it and changes what ever view we are looking at to include the new Json data that we just loaded from the server.

on the client side the real difference that we will see there is won't be the same flicker of the entire page when we're going from one page to the next because _we're not reloading the entire document it's just **oneDocument(onePage)** but the content on that page might change_ in essence what that does is it might swap out the home page content for the about page content because _the React app was loaded on the initial render of our website so it already knew what content the aboutPage was going to contain and it may or may not have had to reach out to a server to get some additional data_

### React Router Setup & BrowserRoute

in order to set our project up to a SPA with routing usin ReactRouter we need to import few thing but the first thing we gonna import is `BrowserRouter`
what `BrowserRouter` is do under the hood is it a ``context provider`` an so in order to give our app the power to include routing in its functionality we need to _wrap_ the app with `BrowserRouter`

### Routes

as we've mentioned `BrowserRouter` is a `context provider` and its provide context to all of its children components. so BrowserRouter is the Provider we need to setup away to define the routes that we want in our application, to do it there are two component to pull in order to start setting up

- `Routes` : goes as the first child of `BrowserRouter`

- `Route` : is just a part of our URL that specifies where on website we are "example.com/_route_"

> Routes can be nesting for example if we have "example.com/blog" we might wanna specify that we have another route as part of this URL and that leads us to "example.com/blog/_article1_" often time blog will use the title of the blog as this part of url or can using a _idNumber_ where it specifies for the database under the hood which blog ID number it should be looking for

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
And we can see when we do that the page is actually blinking which means it's refreshing it's doing a complete full page refresh _While the visual flicker itself isn't a major issue, the page refresh *does* cause a significant problem.  If our application relies on maintaining state (data) that needs to be carried over to the "About" page (or any other page), that full page refresh will completely erase that state._
<!-- 
 _it's not that big of the deal when we consider about the blink but if we have any kind of state living in our app that needs to be passed to 'about' page or well really state at all doing that page refresh is gonna completely wipe out any state that we're maintaining_ -->

> if we really think about it a React app is a little bit delicate when it comes to state becasue if that refresh happens then all our state just completely disappears unless we're saving it in local storage or something like that it will just completely reset.

the way to solve this problem in HTML is to have `<a>` but the problem with `<a>` is when we click it it will do another page refresh so we need some way to navigate between our different routes within the ecosystem of react router Dom and the way to do it is by using `<Link>`

Link is just a `<a>` but it's intercepting the path that the `<a>` is sending us to, and making sure it doesn't do that page refresh so we can maintain our states

<!-- VAnlist page skeletonUI  -->

### useParam

1. What is a route/url parameter?
   A portion of our route path that is a placeholder for what will eventually
   be the actual segment in the URL of the page.

React router provide a tool called `useParams` which allow us to grab any of the parameter that we have in our URL

**useParams :** will **look at any sections of the path that have `:` before it** and **will add that as the `key` in the `{key:value}` pair** in the **object** that we gets from useParams

> There is no thing stoping us from having multiple params inside of our URL

**we use ':' just to say this is gonna be  parameter , which is tell react router that's not gonna be the literal text ":id" instead of that is gonna be some thing here in its place**
```jsx
<Route path="/vans/:id/:type" element={<VanDetail />} />

```

> useParams return an **object** be aware of that

**TODO**
[] we can add params as a dependency to useEffect  in detailed van page if we supposed to go from there to another van page (if we do any recommendations)

### Nested Routes

when we talk about nested routes we also talking about some share user interface so parts of your page need to remain on the page when you transition from one route to child route
![alt text](./src/images/image-4.png)

a way to think of it is share UI pieces on the site even if we navigate to annother route

![alt text](./src/images/image-5.png)

> The primary reason that suggested to consider nested routes is when we have part of our page that we wanna keep but also we wanna display some more stuff to

#### Outlet
The idea of the `outlet` route is that it doesn't have a path of its own purse but instead, its purpose **is to lay out our page**

```jsx



function layout() {
  return (
    <>

    <NavBar/>
      <Outlet/>
    <Footer/>
    
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Layout>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Layout>
      </Routes>
    </BrowserRouter>
  );
}
```

💀then we would have access to our Route components inside of our layout through `{children}` prop and this isn't the right way to do it because reactRouter is not be able to render the route elements correctly if we do that.💀

so when we have our Layout as an element that we passing to Router definition this is Special tool that React router provide to us, so we can render the layout, but then also tell it exactly where to redner which ever router that correctly matching  the url(path) that passing down and this tool is `Outlet`

> The way React Router is working is it is matching multiple routes and deciding that multiple things can go on the page at one time

**display one Route as default** it can be doing like this

```jsx

          <Route path="/host" element={<HostLayout />}>
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>


          // OR
  //  nested routes 
   <Route element={<HostLayout />}>
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
    </Route>



```

> as result Outlet : is place holder for nested routes to come and take it's place in layoutRoute Component when path is match
> The `Outlet` component is similar to the concept of `children` in React's compound components, serving as a placeholder where child route elements will render.


##### Relative Paths

The way that ReactRouter is works under the hood, is when it is looking at a child route like `/host/income` and etc.. inside that context of the `root(" is the base URL of your application.")` it knows that this route is a child of `/`. 
Until now we included `/` at the beginning of every one of our paths *but the truth that is we don't need to do that all the time*, *and in fact it's gonna end up making or lives a lot easier to not have to have an absolute path like this every time*,because this Url  give us the complete view of the path from the very home page at `/` all the way to the end.

The Idea behind this is that the `/` really should mean and should be _dedicated_ for the very initial _Home Page_ if we start our path with `/` then react router gonna treat it like an absolute path and as we seen we can use that.

**but if we do not use `/` at the beginning then it treats it like a relative route. What is it relative to ?? well it's relative to its parent route**

```jsx
<Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />} />
    <Route path="vans/:id" element={<VanDetail />} />

    <Route path="host" element={<HostLayout />}>
      <Route path="" element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="reviews" element={<Reviews />} />
    </Route>
  </Route>
</Routes>
```

##### IndexRoutes

<!-- conundrum -->

It's pretty common that when we're creating a nested route scenario like we have above _to put some sort of layout element_ at the parent of that nested Route Series that we're creating .
This layout element, is of course as we've learned the one where *all of the shared UI gonna be exposed* and then every thing else*that matches more nested inside*of it will just go into the `<Outlet>` of the parent layout component.

because this is pretty common setup in react router there's a way for us to say okay this is the layout element and this layout should exist on every route start with `something` but _when we go there we also have component that we want to render in the `<Outlet/>` of this_ `somethingLayout` component, and not at some further nested url like `something/nest` and the way we can do that is by using `IndexRoutes`

> The main take away : if we have an element that we want to display in the `<Outlet/>` of the layout component but we want to be at the same route as what the layoutComponent is defined at, then we simply replace our path with prop call **index**

> when path start with `/` is an absolute path so adding `/` mean that the component we're render would only display at the top level `/` path it's like would be the home page so `/` not gonna work for us because **that's  indicator to ReactRouter that it's an absolute path**

***as a summary:*** what index is saying i want you to put this element(indexElement) inside the `<Outlet/>` of the parent route when it matches.
so when the path is just `/` then first render the layout and then inside the <Outlet/> stick in the home element.

```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />} />
    <Route path="vans/:id" element={<VanDetail />} />

    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="reviews" element={<Reviews />} />
    </Route>
  </Route>
</Routes>
```

#### To nest or no to nest

**When the pages have the same parent path but doesn't share the same UI between, there is not necessarily reason for us to nest a route for just `:id` portion**



#### [NavLink](https://reactrouter.com/en/main/components/nav-link)
[ ] render props 

Navigating around doesn't give us any visual feedback as where are us, other than the path on the url bar and the actual content of the page *Really common practice is have the navigation bar highlight the item that represent the page we currently on*.
fortunately ReactRoute make this fairly easy and it uses somethign call `RenderProps`



Navlink basically is the same as Link except the style prop and className prop **can both take function as its value**

> navLink allows us to pass a function and the reason this is beneficial is : because React Router **will pass this function an object(argument) and that object will have a proeprty called isActive**

```jsx

// we can use it this way 
        <NavLink 
          to="/about"
          className={(obj) => { obj.isActive == true ? "hello":""}}
        >

        </NavLink>


        // or we can destructure the object 
      <NavLink 
          to="/about"
          className={({isActive}) => { isActive ? "hello":""}}
        >

        </NavLink>


 ```


using NavLink we're able to add some thing to our app that help quite a bit with the user experience in understanding exactly visually where they are without having to look up to navigationBar

> *A*n important thing to understand about ReactRouter under the hood it is not just matching a single Route **it is matching multiple routes when ever we have nested routes**

what above note means when we have url like this "/host/reviews" under the hood ReactRouter is matching 3 route here `1 /` `2 /host` `3 /host/review`

##### [end](https://reactrouter.com/en/main/components/nav-link#end)

<!-- basically what `end` does it is tell React Router to **end** the matching here so if more nested routes matches, it won't also match this link on the selected route -->

The `end` prop in React Router ensures an exact match.  If set, the route will only match if the URL exactly matches the path.  Without end, a route could match even if the URL has additional path segments

Example Analogy

Imagine we have two routes: `/users` and `/users/profile`.  Without the `end` prop on the `/users` route, both URLs would match `/users`.  Setting end to true on the `/users` route makes it match only `/users`, preventing it from also matching `/users/profile`.  This ensures that only the most specific route is considered active.



> *L*ittle Funny note when we provide a prop name and not set it equal to some thing it considers it a `boolean` `  <NavLink to="/host"   'end={true} or just end' style={({ isActive }) => isActive ? activeStyles : null} >`


























### Extra

extra

mirage.js : it's a way to make mock server that will intercept any API requests we make and it's gonna return the data from our mock server instead of having to worry about reaching out to the real word

When we are fetching some thing on the same domain of what our site is running on we just need to provide the relative Path

on fake server
name.space ="api" // mean all the request gonna start with /api and

React router is actually now a part of The Remix package which is fullstack framework for the web uses React Right now on the front end but a masure part of remix is the way it handle routes

beautiful trick to have the footer and the header in the place

```jsx
export default function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```


stopPropagation(). This prevents the event to fire on parent elements. ;

### Quizes

1. What is the primary reason to use a nested route?
   Whenever we have some shared UI between routes in our app.

2. What is a "Layout Route"?
   It's the parent route of some nested routes that contains just
   the portion of the UI that will be shared. It will use an Outlet
   component.

3. What does the <Outlet /> component do? When do you use it?
   We use it anytime we have a parent Route that's wrapping children routes. It renders the matching child route's
   `element` prop given in its route definition

4. What is an "Index Route"?
   It's the "default route" we want to render when the path
   of the parent route matches. It gives us a chance to render
   an element inside the parent's <Outlet /> at the same path
   as the parent route.


5. What is a route/url parameter?
A portion of our route path that is a placeholder for what will eventually
be the actual segment in the URL of the page.













TODO 'S

[] Optimization when doing fetch requests in every single page (caching some where) if our cache don't have it then send a request 