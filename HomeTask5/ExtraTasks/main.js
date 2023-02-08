// ======================= Task 1 ======================== //

// const li = document.querySelector("li");

// const oneLi = (item) => {
//     console.log(item.textContent);
// }

// oneLi(li);

// ======================= Task 2 ======================== //

// const li = document.querySelectorAll("li");

// li.forEach(function (elem) {console.log(elem.textContent);});

// ======================= Task 3 ======================== //

// const li = document.querySelectorAll(".list-item");
// const liMas = Array.from(li).map((link) => link.textContent);

// console.log(liMas);

// ======================= Task 4 ======================== //

// const li = document.querySelectorAll(".list-item");
// const liMas = Array.from(li).map((link) => link.getAttribute("class"));

// console.log(liMas);

// ======================= Task 5 ======================== //

// const li = document.querySelectorAll(".list-item");
// const liMas = Array.from(li).map((link) => link.getAttribute("data-test-id"));

// console.log(liMas);

// ======================= Task 6 ======================== //

// const li = document.querySelectorAll(".list-item");
// const dataMas = Array.from(li).map((link) => link.getAttribute("data-test-id"));
// const classMas = Array.from(li).map((link) => link.getAttribute("class"));
// const liMas = Array.from(li).map((link) => link.textContent);

// for (let i = 0; i < li.length; i++) {
//     if (classMas[i] != `list-item ${liMas[i]}`) 
//     {
//         console.log(dataMas[i]);
//     }
// }

// ======================= Task 7 ======================== //

// const li = document.querySelectorAll(".list-item");
// const liMas = Array.from(li).map((link) => link.textContent);

// liMas.forEach((currentValue, index) => {
//     console.log(currentValue.textContent = `${index + 1} ${currentValue}`);
// });

// ======================= Task 8 ======================== //

// You were hacked

// const label = document.querySelector("#secret-login");
// label.setAttribute("id", "you-were-hacked");