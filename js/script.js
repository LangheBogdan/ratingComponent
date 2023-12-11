const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", () => {
  console.log(getRatingMessage());
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
