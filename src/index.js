console.log(data)

// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog

// Step 1: Download the template and open it with VS Code ✅
// Step 2: Explore the HTML and the data ✅
// Step 3: Read the instructions carefully ✅
// Step 4: Query the elements that we will need to use from the page ✅
// Step 5: Create a function for every action we will need to perform (i.e. addDogListItem, displayDog) ✅
// Step 6: Start writing one function at a time, testing along the way to make sure things work the way we expect them to ✅
// Step 7: Call the functions when we need to (i.e. call addDogListItem for each dog available whent he app starts, call displayDog when we click a dog list item, etc)

// STATE
// RENDERING

// I need this element to add <li>s to it, one for each dog
let dogList = document.querySelector('.dogs-list')

// I need this element to display the selected dog
let dogSection = document.querySelector('.main__dog-section')

function addDogListItem(dog) {
  let dogLi = document.createElement('li')
  dogLi.className = 'dogs-list__button'
  dogLi.textContent = dog.name

  dogLi.addEventListener('click', function () {
    displayDog(dog)
  })

  dogList.append(dogLi)
}

function addDogListItems() {
  for (let dog of data) {
    addDogListItem(dog)
  }
}

function displayDog(dog) {
  // clear all the contents of the section
  dogSection.textContent = ''

  let nameEl = document.createElement('h2')
  nameEl.textContent = dog.name

  let imageEl = document.createElement('img')
  imageEl.src = dog.image
  imageEl.alt = ''

  let descEl = document.createElement('div')
  descEl.className = 'main__dog-section__desc'

  let bioTitleEl = document.createElement('h3')
  bioTitleEl.textContent = 'Bio'

  let bioContentEl = document.createElement('p')
  bioContentEl.textContent = dog.bio

  let isNaughtyP = document.createElement('p')
  let isNaughtyEm = document.createElement('em')
  isNaughtyEm.textContent = 'Is naughty?'
  isNaughtyP.append(isNaughtyEm, dog.isGoodDog ? ' No' : ' Yes')

  let goodDogButton = document.createElement('button')
  goodDogButton.className = 'main__dog-section__btn'
  goodDogButton.textContent = dog.isGoodDog ? 'Good dog!' : 'Bad dog!'
  goodDogButton.addEventListener('click', function () {
    // update state
    dog.isGoodDog = !dog.isGoodDog
    // render
    displayDog(dog)
  })

  descEl.append(bioTitleEl, bioContentEl)
  dogSection.append(nameEl, imageEl, descEl, isNaughtyP, goodDogButton)
}

// function displayForm() {
//   dogSection.textContent = ''
//   // <h2>Add a new Dog</h2>
//   // <form class="form">

//   //   <label for="name">Dog's name</label>
//   //   <input type="text" id="name" name="name">

//   //   <label for="image">Dog's picture</label>
//   //   <input type="url" id="image" name="image">

//   //   <label for="bio">Dog's bio</label>
//   //   <textarea rows="5" id="bio" name="bio"></textarea>

//   //   <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
//   // </form>

//   const dog = {
//     name: 'My New Dog',
//     bio: `I'm a new dog, I promise I'll behave!`,
//     isGoodDog: true,
//     image:
//       'https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   }
//   data.push(dog)
//   addDogListItem(dog)
// }

addDogListItems()
