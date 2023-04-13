// Get references to the input and output elements
const input = document.getElementById('inputStory');
const output = document.getElementById('outStory');

// Add an event listener to the input box
input.addEventListener('inputStory', () => {
  // Copy the input box's value to the output box
  output.value = input.value;
});