// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");
const rowElements = document.querySelectorAll(".row");
function getCellElements(currentRowElement) {
  return currentRowElement.querySelectorAll(".cell");
}

replaceAllButton.addEventListener("click", function () {
  let findValue = findInput.value;
  let replaceValue = replaceInput.value;

  for (let i = 0; i < rowElements.length; i++) {
    let cells = getCellElements(rowElements[i]);

    for (let j = 0; j < cells.length; j++) {
      // console.log(cells[j].innerHTML);

      if (cells[j].innerHTML.includes(findValue)) {
        cells[j].innerHTML = cells[j].innerHTML.replace(
          findValue,
          replaceValue
        );
        console.log(cells[j].innerHTML.replace(findValue, replaceValue));
      }
    }
  }
});
