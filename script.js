const mainContainerEl = document.getElementById("main-container");

const allStdListMainCon = document.getElementById("all-Std-list-main-con");
allStdListMainCon.classList.add("all-Std-list-main-con");

const allStdListCon = document.getElementById("all-std-list-con");
allStdListCon.classList.add("all-std-list-con");

const hideStdListConBtn = document.getElementById("hide-std-list-con-Btn");
hideStdListConBtn.classList.add("hide-std-list-con-Btn");

const hideStdListBtn = document.getElementById("hide-std-list-Btn");
hideStdListBtn.classList.add("hide-std-list-Btn");

const formEl = document.getElementById("form");
const genderEl = document.getElementById("genderSelect");
const submitBtnEl = document.getElementById("submitBtn");
const allStdListBtnEl = document.getElementById("allStdListBtn");

const stdDetails = {};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  stdDetails.name = e.target["name"].value;
  stdDetails.fatherName = e.target["fatherName"].value;
  stdDetails.motherName = e.target["motherName"].value;
  stdDetails.mobileNumber = e.target["mobileNumber"].value;
  stdDetails.email = e.target["email"].value;
  stdDetails.address = e.target["address"].value;

  console.log(stdDetails);
  registerStd(stdDetails);
});

genderEl.addEventListener("change", (e) => {
  stdDetails.gender = e.target.value;
  console.log(stdDetails);
});

const registerStd = async (stdDetails) => {
  try {
    const res = await fetch("http://localhost:3000/students", {
      method: "post",
      body: JSON.stringify(stdDetails),
    });

    const data = await res.json();
    console.log(data);
  } catch {
    console.log(err);
  }
};

const getStdList = async () => {
  try {
    const res = await fetch("http://localhost:3000/students", {
      method: "get",
    });

    const stdList = await res.json();
    console.log(stdList[1]);

    for (let i of stdList) {
      const stdCard = document.createElement("div");
      stdCard.classList.add("std-card");
      allStdListCon.appendChild(stdCard);

      const stdImgEl = document.createElement("img");
      stdImgEl.src = "./assets/images.jpeg";
      stdCard.appendChild(stdImgEl);

      const stdDetailSec = document.createElement("div");
      stdDetailSec.classList.add("std-detail-sec");
      stdCard.appendChild(stdDetailSec);

      const idPrg = document.createElement("p");
      idPrg.innerText = `I D : ${i.id}`;
      stdDetailSec.appendChild(idPrg);

      const stdNamePrg = document.createElement("p");
      stdNamePrg.innerText = `Student Name : ${i.name}`;
      stdDetailSec.appendChild(stdNamePrg);

      const stdFatherNamePrg = document.createElement("p");
      stdFatherNamePrg.innerText = `Father Name : ${i.fatherName}`;
      stdDetailSec.appendChild(stdFatherNamePrg);

      const stdMotherNamePrg = document.createElement("p");
      stdMotherNamePrg.innerText = `Mother Name : ${i.motherName}`;
      stdDetailSec.appendChild(stdMotherNamePrg);

      const genderPrg = document.createElement("p");
      genderPrg.innerText = `Gender : ${i.gender}`;
      stdDetailSec.appendChild(genderPrg);

      const mobileNumberPrg = document.createElement("p");
      mobileNumberPrg.innerText = `Mobile Number : ${i.mobileNumber}`;
      stdDetailSec.appendChild(mobileNumberPrg);

      const emailPrg = document.createElement("p");
      emailPrg.innerText = `Email / Gmail : ${i.email}`;
      stdDetailSec.appendChild(emailPrg);

      const addressPrg = document.createElement("p");
      addressPrg.innerText = `Address : ${i.address}`;
      stdDetailSec.appendChild(addressPrg);
    }
  } catch {
    console.log(err);
  }
};

allStdListBtnEl.addEventListener("click", () => {
  mainContainerEl.style.display = "none";
  allStdListMainCon.style.display = "grid";

  // allStdListBtnEl.disabled = true;
});

hideStdListBtn.addEventListener("click", () => {
  mainContainerEl.style.display = "flex";
  allStdListMainCon.style.display = "none";
});

getStdList();
