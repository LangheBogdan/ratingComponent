const submitBtn = document.querySelector("#submit-btn");
const iconRating = document.querySelector(".icon_rating");
const afterRating = document.querySelector(".after_rating");
const selectionMade = document.querySelector(".selection-made");
const form = document.querySelector(".form");
const thankYouHeader = document.querySelector(".thank-you");
const thankYouMessage = document.querySelector(".thank-you__message");

submitBtn.addEventListener("click", () => {
  console.log(getRatingMessage());
  iconRating.classList.add("d-none"); // Added code to add class 'd-none' to the iconRating element
  afterRating.classList.remove("d-none");
  form.classList.add("d-none");
  selectionMade.classList.remove("d-none");
  selectionMade.textContent = getRatingMessage();
  thankYouHeader.classList.remove("d-none");
  thankYouMessage.classList.remove("d-none");
});

function getCheckedRatingElementValue(elements) {
  for (let element of elements) {
    if (element.checked) {
      return element.value;
    }
  }
  return null;
}

function getRatingMessage() {
  let ratingElements = document.getElementsByName("rating");
  let checkedValue = getCheckedRatingElementValue(ratingElements);
  if (checkedValue != null) {
    return `You selected ${checkedValue} out of 5`;
  }
  return "No rating selected";
}
