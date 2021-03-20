import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  //Create the elements
  let outerDiv = document.createElement('div');

  // Looping over the topics array
  // For Each Element in the array, we create a div
  // Add a class to the div, and the topic element as text content to the created div
  // then append the div in the function below to the outer div
  topics.forEach(element => {
    let div = document.createElement('div');
    div.classList.add('tab');
    div.textContent = element;
    outerDiv.appendChild(div);
  });
  
  // Adding lass to the outer div
  outerDiv.classList.add('topics')

  return outerDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  
  // Finding the element that is passsed in as an argument to tabsAppender and storing that value into selectedElement
  let selectedElement = document.querySelector(selector);

  axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(response => {
      let div = Tabs(response.data.topics);
      selectedElement.appendChild(div);
    })
    .catch(err => {
      console.log(err);
    })
}

export { Tabs, tabsAppender }
