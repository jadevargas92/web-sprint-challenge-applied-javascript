import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //Creating the elements
  let cardDiv = document.createElement('div');
  let headlineDiv = document.createElement('div');
  let authorDiv = document.createElement('div');
  let imgDiv = document.createElement('div');
  let img = document.createElement('img');
  let span = document.createElement('span');

  //Adding classes where necessary
  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgDiv.classList.add('img-container');

  //Adding Text Content and src attributes where necessary
  headlineDiv.textContent = article.headline;
  img.setAttribute('src', article.authorPhoto);
  span.textContent = 'By ' + article.authorName

  //Creating the proper hierarchy
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(span);
  imgDiv.appendChild(img);

  // Adding a click event to the card div to console log the headline of the article 
  cardDiv.addEventListener('click', event => {
    console.log(article.headline)
  })
  return cardDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  
  // Selected the Element that we were passing in
  let selectedElement = document.querySelector(selector)

  // Using Axios (returned a promise) we got article data from the url given by Lambda
  // We then had to iterate over each object (could not use forEach) and grab the key (article) for each.
  // We then traversed through the data and used the key to selected the specific articles which returned an array.
  // We then could use forEach since each was an array of objects.
  // For each of those articles we used the function above to create a card Div and append that to the selected element.
  
  axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {      
      Object.keys(res.data.articles).forEach(key => {
        res.data.articles[key].forEach(element=> {
          let div = Card(element);
        selectedElement.appendChild(div)
        })
      })
    })
    .catch(err => {
      console.log(err)
    })
}

export { Card, cardAppender }
