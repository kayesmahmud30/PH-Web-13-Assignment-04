// function removeNoJob() {
//   document.getElementById("no-job-display").classList.add("hidden");
// }

// // removeNoJob();

// // function updateDisplay() {
// // //   totalDisplay.innerHTML = allJobContainer.childElementCount;
// //   interviewDisplay.innerHTML = interviewJobContainer.length;
// //   rejectedDisplay.innerHTML = rejectedJobContainer.length;
// // }




//----------From session---------------------



// const totalDisplay = document.getElementById("total-display");
// const interviewDisplay = document.getElementById("interview-display");
// const rejectedDisplay = document.getElementById("rejected-display");

// //----------------------------------------------------------------

// const allJobContainer = document.getElementById("all-job-container");
// const interviewJobContainer = [];
// const rejectedJobContainer = [];

// totalDisplay.innerHTML = allJobContainer.childElementCount;

// // updateDisplay();

// // console.log(...allJobContainer.querySelectorAll('*'));

// //All | Interview | Rejected Button....
// const showAllBtn = document.getElementById("show-all-btn");
// const showInterviewBtn = document.getElementById("show-interview-btn");
// const showRejectedBtn = document.getElementById("show-rejected-btn");

// showAllBtn.addEventListener("click", function () {});

// showInterviewBtn.addEventListener("click", function () {});

// showRejectedBtn.addEventListener("click", function () {});

// //--------------------------------------------------------------
// allJobContainer.addEventListener("click", function (event) {
//   if (event.target.id === "interview-btn") {
//     const currentElements = event.target.parentNode.parentNode;
//     interviewJobContainer.push(currentElements);
//     // currentElements.remove();
//     // updateDisplay();
//     interviewDisplay.innerHTML = interviewJobContainer.length;

//     console.log(interviewJobContainer);
//   }

//   if (event.target.id === "rejected-btn") {
//     if (rejectedJobContainer.length < 0) {
//     }
//     const currentElements = event.target.parentNode.parentNode;
//     rejectedJobContainer.push(currentElements);
//     // currentElements.remove();
//     // updateDisplay();
//     rejectedDisplay.innerHTML = rejectedJobContainer.length;

//     console.log(rejectedJobContainer);
//   }

//   if (event.target.classList.contains("fa-trash-can")) {
//     console.log(allJobContainer.children.length);
//     totalDisplay.innerHTML = allJobContainer.children.length - 1;
//     event.target.parentNode.parentNode.remove();
//   }
// });
// //-----------------------------------------------------------------

// console.log(rejectedJobContainer);

//----------From session---------------------
