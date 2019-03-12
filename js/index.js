// Your code goes here
//## Task 2: Create Unique Event Listeners

//* [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
//* [ ] `mouseover`
//	* [ ] `keydown`
//	* [ ] `wheel`
//	* [ ] `drag / drop`
//	* [ ] `load`
//	* [ ] `focus`
//	* [ ] `resize`
//	* [ ] `scroll`
//	* [ ] `select`
//	* [ ] `dblclick`

//Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

//* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
//* [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`



const navBar = document.querySelector("nav");

navBar.addEventListener('click', function(event) {
    event.preventDefault();
    event.target.style.color = "green";
});

const smallBus = document.querySelector('.fun-bus');

smallBus.addEventListener('mouseover', function(event) {
    event.target.style.display = "none";
});
