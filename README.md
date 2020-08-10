****TIM: Time is Money****<br>
*A user guide and architecture overview.*


*Objective*<br>
This web app is a matching platform that is a learning exercise for me in the areas of HTML, JavaScript, CSS, React, JSX, Express, Cors, MongoDB, NPM, Git, REST APIs, and more. The functional version will match people who are interested in contracting out their time, and support transactions as well.

*Architecture*<br>
The codebase is divided between frontend and backend components. The backend is called `server` and uses the Express framework to create a REST API to interact with a HTTP server. I then execute instructions based on the URL called. From the frontend, called `client`, I use the React library and JSX JavaScript syntax extension to create the DOM and CSSOM for my-app. Within the frontend, I can make server calls by referencing the appropriate URL.

*Idea*<br>
Make a website that connects people, allowing them to sell their time to each other. This could be used for situations where someone needs someone else's expertise, but does not have the ability to reach them in their usual network. The website would contain semi-anonymized details about time providers and act as the middle man for payments. There is also a smart contract blockchain use case lingering here, but it needs more thought in regard to commercialization. Maybe a maker fee written in the code, and the website still acts as the matchmaker.

*To Do*<br>
I need to verify that I can write to MongoDB from my static site at the moment. May have to pass input through URLs, which is not ideal, but okay. The better way would be to not use gh-pages in that I would have live web hosting instead of static I think. I also need to finish designing each of the pages. A problem I am facing is with the hamburger menu when the page is compressed, in that it does not work in opening the whole menu. Need to see if the function is being called at all first. Trying to understand microgrid codebase but its complicated."
