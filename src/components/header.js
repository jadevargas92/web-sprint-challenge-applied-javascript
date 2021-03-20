const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  //Creating the Elements
  let div = document.createElement('div');
  let span1 = document.createElement('span');
  let h1 = document.createElement('h1');
  let span2 = document.createElement('span');

  //Adding classes to the created elements
  div.classList.add('header');
  span1.classList.add('date');
  span2.classList.add('temp')

  //Adding text to the elements
  span1.textContent = date;
  h1.textContent = title;
  span2.textContent = temp;
  
  //Adding the propery hierachy to each element
  div.appendChild(span1);
  div.appendChild(h1);
  div.appendChild(span2);

  return div;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // Selecting the element from the DOM that is passed in through the headerAppender function
  let selectedElement = document.querySelector(selector);

  // Storing the return value of function Header (should be a div) into a variable.
  let headerElement = Header('Jade is awesome', '3/20/21', '2:00 PM');

  //Appening headerElement to the selectedElement (matching the given selector);
  selectedElement.appendChild(headerElement)

}

export { Header, headerAppender }
