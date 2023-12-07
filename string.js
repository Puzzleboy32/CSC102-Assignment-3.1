//Select relevant DOM elements
const button = document.querySelector("#btn");
const inputText = document.querySelector("#input-text");
const result = document.querySelector("#result");
//Add event listener to the button
button.addEventListener("click", () => {
  //Get the input text value and trim any whitespaces
  const text = inputText.value.trim();
  //Check if the input is empty
  if (text.length == 0) {
    //Show an alert saying put a word
    alert("Put a word");
    return; //Exit the function if the input is empty
  }
 /// Make sure the capitalzation matter
  const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  //Checking if these can spell backward or joined or split.
  const isPalindrome = cleanText === cleanText.split("").reverse("").join("");
  //Create a message based on whether the input is a palindrome or not
  const message = isPalindrome
    ? `<span>Yes.</span>It's a palindrome!`
    : `<span>Nope.</span>Not a palindrome!`;
  //It checks if the message work or not
  result.innerHTML = message;
  result.classList.remove("error", "success");
  setTimeout(() => {
    result.classList.add(isPalindrome ? "success" : "error");
  }, 10);
});