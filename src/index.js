import "./styles.css";
var dob = document.getElementById("dob");
var luckyno = document.querySelector("#luckyNo");
var btncheck = document.querySelector("#btn-check");
var output = document.querySelector("#output");
const clickHandler = () => {
  console.log("btn clicked");
  console.log(dob.value, luckyno.value);
  const newdob = dob.value.replace(/-/g, "");
  console.log(newdob);
  sumOfBirthdate(newdob);
};
const sumOfBirthdate = (newdob) => {
  var sum = 0;
  for (var i = 0; i < newdob.length; i++) {
    sum = sum + Number(newdob[i]);
    console.log(sum);
  }
  checkLucky(sum);
};

const checkLucky = (sum) => {
  if (sum % luckyno.value === 0) {
    console.log("luckkyy");
    output.innerHTML = "luckkyy";
  } else {
    output.innerHTML = "nottt  luckkyy";
    console.log("nottt  luckkyy");
  }
};
btncheck.addEventListener("click", clickHandler);
