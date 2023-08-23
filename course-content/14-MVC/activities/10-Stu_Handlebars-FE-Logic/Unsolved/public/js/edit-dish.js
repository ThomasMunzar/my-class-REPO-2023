async function editFormHandler(event) {
  event.preventDefault();
  const dish_name = document.querySelector('#dish_name').value;
  const description = document.querySelector('#description').value;
  const guest_name = document.querySelector('#guest_name').value;
  
  // TODO: What will the value of has_nuts be if the box in the form is checked? 
  // If has nuts is checked it will return TRUE.
  // TODO: What do we call this kind of operator?
  // This is a conditional ternary operator (is it one or the other) IF check box is checked then true if not then false.
  // Ternary operators are like fancy quick if statements but are not that readable. 
  const has_nuts = document.querySelector('#has_nuts:checked') ? true : false;

// window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  // TODO: What part of our application will handle this 'put' request?
//  It will fetch information from /api/dish with the item with the specific ID that the user is trying to edit.
  const response = await fetch(`/api/dish/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      dish_name,
      description,
      guest_name,
      has_nuts,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // TODO: What happens if the response is ok?
  // if response if OK, new user information will update on /dish (page) via the specific ID of the dish.
  if (response.ok) {
    document.location.replace(`/dish/${id}`);
  } else {
    alert('Failed to edit dish');
  }
}

document.querySelector('.edit-dish-form').addEventListener('submit', editFormHandler);
