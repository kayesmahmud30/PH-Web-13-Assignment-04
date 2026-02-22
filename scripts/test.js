const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectCount = document.getElementById("rejected-count");
const filterSection = document.getElementById("filter-section");
const noSubject = document.getElementById("no-job-display");
// removeHidden(noSubject)
// noSubject.classList.remove('hidden')
console.log(noSubject);
const allCards = document.getElementById("all-job-container");
// totalCount.innerText = allCards.children.length;

const bntAllJob = document.getElementById("show-all-btn");
const btnInterviewJob = document.getElementById("show-interview-btn");
const btnRejectedJob = document.getElementById("show-rejected-btn");

// toggle styles
function toggleBtn(id) {
  bntAllJob.style.backgroundColor = 'blue'
  bntAllJob.style.color = '#fff'
//   btnRejectedJob.style.background

  const addNewClass = document.getElementById(id);
  addNewClass.classList.remove("btn-soft");
  addNewClass.classList.add("btn-primary");
  if (id === "btn-interview") {
    allCards.classList.add("hidden");
    console.log(id);
  } else if (id === "btn-all") {
    noSubject.classList.add("hidden");
    allCards.classList.remove("hidden");
  } else {
    allCards.classList.add("hidden");
    noSubject.classList.remove("hidden");
  }
}

// remove hidden
function removeHidden(id) {
  id.classList.remove("hidden");
}

btnInterviewJob.addEventListener("click", function () {
  removeHidden(noSubject);
});
