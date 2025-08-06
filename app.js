const wrapper = document.querySelector(".sliderWrapper");
// Selects the element with class "sliderWrapper" and stores it in a variable called wrapper
// This is the long container that holds all the slide items

const menuItems = document.querySelectorAll(".menuItem");
// Selects ALL elements with class "menuItem" (like Air Force, Jordan, etc.) and stores them in a list called menuItems
// These are the clickable menu items at the bottom of the navbar

menuItems.forEach((item, index) => {
  // For each menu item (item) in the menuItems list, do something when it's clicked
  // index is the position in the list: 0 for first item, 1 for second, etc.

  item.addEventListener("click", () => {
    // Adds a "click" event to the current item
    // When this item is clicked, the code inside the function runs

    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    // This moves the slider to the left based on which menu item was clicked
    // index * -100vw means:
    // - First click (index 0): translateX(0vw) → no move
    // - Second click (index 1): translateX(-100vw) → move left 1 slide
    // - Third click (index 2): translateX(-200vw) → move left 2 slides, and so on
    // vw = 1% of the screen width, so 100vw = full screen width
  });
});
