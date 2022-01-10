// Write the code necessary to do the following:

// 1) Select the section with an id of container without using querySelector.
let container1 = document.getElementById("container")
// container1.style.color = "red"

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––//

// 2) Select the section with an id of container using querySelector.
let container2 = document.querySelector("#container")

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––//

// 3) Select all of the list items with a class of "second".
//The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s).
let classOfSecond = document.getElementsByClassName("second")
classOfSecond = document.querySelectorAll("li .second")

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––//

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
let listItem = document.querySelector("ol .third")

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––//

// 5) Give the section with an id of container the text "Hello!".
let text = document.createElement("p")
text.textContent = "Hello"
document.querySelector("#container").appendChild(text)

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––//

// 6) Add the class main to the div with a class of footer.
let addMainToFooter = document.querySelector(".footer").classList.add("main")

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––//

// 7) Remove the class main on the div with a class of footer.
addMainToFooter.classList.remove("main")

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––//

// 8) Create a new li element.
let newLi = document.createElement("li")

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––//

// 9) Give the li the text "four".
newLi.innerText = "four"

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––//

// 10) Append the li to the ul element.
document.querySelector("ul").appendChild("newLi")

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––//

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
let allLisInsideOlTag = document.querySelectorAll("ol li")
for (let i = 0; i < allLisInsideOlTag.length; i++) {
    allLisInsideOlTag[i].style.backgroundColor = "green"
}

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––//

// 13) Remove the div with a class of footer.
const div = document.querySelector("#footer")
div.remove()