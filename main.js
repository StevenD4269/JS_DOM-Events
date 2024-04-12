console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

// Create a new variable and set equal to where it needs to find the element so "document then node1 id"

const newNode1 = document.getElementById("node1");
// use textContent to add text, NEEDS an = sign
newNode1.textContent =
  'I used the getElementById("node1") method to access this';
// console.log to check
console.log(newNode1);
// -----------------------------------------------------
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
// getElementsByClassName pulls a COLLECTION of items, not a single one.
// Can do a `for` loop or select the specific index
// Option 1
const newNode2 = document.getElementsByClassName("node2");
if (newNode2.length > 0) {
  for (let i = 0; i < newNode2.length; i++) {
    // i < newNode2.length sets the condition for the loop to continue iterating as long as i is less than the length of the newNode2 collection.
    newNode2[i].textContent =
      'I used the getElementByClassName("node2") method to access this';
  }
  console.log(newNode2);
} else {
  ("invalid entry");
}
// Option 2
// If you console.log it then it shows at index 0
// const newNode2 = document''
// newNode2[0].textcontent = "string";

// An example to make this make sense in my head
// 'document.getElementsByClassName("node2"), is like using a barcode reader to find all the boxes with a specific label, called "node2". The reader gives us a list of all these boxes.

// Now, we want to change the message written on each of these boxes. To do that, we go through each box one by one. So, when we say newNode2[i], it's like pointing to one of these boxes at a time.

// Next, we use our marker pen to write a new message on each box. This is what textContent does. It's like the space on the box where we write things.

// Finally, after we've written on all the boxes, we might want to check what we've done. So, we gather all the boxes together again and take a look at them. This is like console.log(newNode2), where we're checking all the boxes to see if the messages have been changed correctly.

// ------------------------------------------

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const newTags = document.getElementsByTagName("h3");
for (let i = 0; i < newTags.length; i++) {
  newTags[i].textContent =
    "I used the getElementByTagName(h3) method to access all of these";
}

// here I create a new variable and set it equal to a specific area i want it to find and target
// I create a for loop to run through the collection
// Again, [i] is me saying at this specific point where I targeted h3, i=0 so add this text and repeat loop as i increases until it reaches the length

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

// create a paragraph element
const paragraph = document.createElement("p");

// Set the text of the content
paragraph.textContent =
  "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
// Select the parent node
// In index.html there is an id = parent
// getElementById will let me find the very first element under that id
const parent = document.getElementById("parent");

// Append the paragraph to the parent node
parent.appendChild(paragraph);

// Create an anchor element
const anchor = document.createElement("a");

// Set the text content of the anchor
anchor.textContent = "I am a <a> tag";

// Insert the anchor before the paragraph
// insertBefore(newNode, referenceNodeitWillGoBehind)
parent.insertBefore(anchor, paragraph);

// Add a link href to the <a>
anchor.href = "https://MyHeadHurts.com";

// ----------------------------------------------

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

// create the existing paragraph(parent element) with a variable; exercise-container3 is the ID in index.html
const existingParagraph = document.querySelector("#exercise-container3");

// Create a new paragraph that will create the element paragraph
const childToPara = document.createElement("p");

// Make your new variable read `new child node`
childToPara.textContent = "New Child Node";
// Select the child
const ex3Child = document.querySelector("#N1");

// Now replace the old element N1 with the new paragraph
// 2. use replaceChild("element to add, element to replace")
existingParagraph.replaceChild(childToPara, ex3Child);

// TODO: Remove the "New Child Node"
// I need to reference the new variable and remove it
childToPara.remove();

// -----------------------------------------------------------------------------------------------------------------------

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element

//  look at index.html to see the location of the parent container: called container in index.html
const parentOfList = document.getElementById("container");

// Create new ul
const newUl = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
for (let i = 0; i < list.length; i++) {
  // create an element
  const tempLi = document.createElement("li");
  // modify an element: We want to reference this array one thing at a time starting at i
  tempLi.textContent = list[i];
  // append the element: put it on the page
  newUl.append(tempLi);
}
// TODO: Append the unordered list to the `div#container` under exercise 4
// Append: insert this within the body of the element
parentOfList.append(newUl);

// -----------------------------------------------------------------------------------------------------------------------------------

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
const show() {
  // creates new div Here that is a modal
  // insert alert message into the div / push
  // Click a button to trigger an event
  // The event is show()
  // close the modal
}
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
