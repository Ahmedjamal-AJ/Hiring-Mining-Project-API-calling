/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function DatePosted() {
    document.getElementById("DatePostedDropdown").classList.toggle("show");
  }
function JobType() {
    document.getElementById("JobTypeDropdown").classList.toggle("show");
  }
function Seniority() {
    document.getElementById("SeniorityDropdown").classList.toggle("show");
  }
function Remote() {
    document.getElementById("RemoteDropdown").classList.toggle("show");
  }    
function SalaryRange() {
    document.getElementById("SalaryRangeDropdown").classList.toggle("show");
  }    
function Experience() {
    document.getElementById("ExperienceDropdown").classList.toggle("show");
  }    

 
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show', 'Resetbtn');
      }
    }
  }
}



let row = document.querySelector('.myRow')

// display Jobs
function displayJobs(data){

  row.innerHTML = ''
  console.log(data);
  data.forEach(jobData => {

    row.innerHTML += `
    <div class="jobdiv">
        <div onclick="displayModel()" id="${jobData._id}">

          <div id="boxdiv">
            <div class="d-flex justify-content-between align-item-center w-100">
            <h6 id="companyName">${jobData.companyName || "Not Mentioned"}</h6>
            <img src="./Assets/HiringmineLogo.jfif" width="50rem" id="companyLogo">
          </div>

            <h5 id="Designation">${jobData.designation || "Not Mentioned"}</h5>
            <h5 id="Experience">${jobData.experience || "Not Mentioned"}</h5>
            <h5 id="Salary">${jobData.salary || "No Salary Mentioned"}</h5>
            <p id="des">${jobData.desc.slice(0 , 0)}</p>

          <div class="d-flex justify-content-between align-item-center">
            <button id="btn" class="d-flex justify-content-center align-item-center">Onsite</button>

              <div class="d-flex justify-content-center align-item-center">
                <h6 id="City" text-uppercase>${jobData.city} ,</h6>
                <h6 id="Country" text-uppercase>${jobData.country}</h6>
              </div>
          </div>

          <div class="w-100 d-flex justify-content-end align-item-center">
            <p id="Views">Views ${jobData.views}</p>
          </div>
        </div>
      </div> `

  });
}


let searchBtn = document.querySelector(".searchBtn")
let inputValue = document.querySelector(".inputValue")
// let search = () => inputValue.value

// now API

async function apiFunction() {
  let res = await fetch(`https://maroon-shorts.cyclic.cloud/api/jobAds/all?limit=10&pageNo=1&keyWord=${inputValue.value}&category=`)
  .then((res) => res.json())
  .then((data) => {
    displayJobs(data.data)
    // return data.data
  })
  .catch((err) => console.log(err));

  console.log(res);
  return res
}
