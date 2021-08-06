let taskname = "";
let taskdesc = "";

// query selector kullanıldığında geriye dönen değer o sayfada verilen class veya tag e uygun düşen elementlerden oluşan bir arraydir.
// sayfaya bu tanıma uygun başka elementler koyulduğunda bu tanımlamaların kodun bozulmasına yol açar.
// bu yüzden agile bir proje olması için bu tarz elementlere id verebiliriz.

// bir elementin bütün child elementlerini döndüren recursive mantıkla çalışan bir fonksiyon yazdım.
// anlaması şimdilik zor gelebilir. O yüzden açıklamadım, bu konuya çalışırken geri dönüp pratik için bakılabilir.
const getAllChildren = (htmlElement) => {
  if (htmlElement.children.length === 0) return [htmlElement];

  let allChildElements = [];

  for (let i = 0; i < htmlElement.children.length; i++) {
    let children = getAllChildren(htmlElement.children[i]);
    if (children) allChildElements.push(...children);
  }
  allChildElements.push(htmlElement);

  return allChildElements;
};

const button = document.body.querySelector(".button");
const buttonContents = getAllChildren(button);

const modal = document.body.querySelector(".modal");
const modalContents = getAllChildren(modal);

const cardelement = `<div class='box'><div class='card-items'><p class='card-title'>${taskname}</p><hr><p class='card-desc'>${taskdesc}</p></div></div>`;

function showDO() {
  modal.style.display = "block";
}

// butona eventListener ekledim.
button.addEventListener("click", showDO);
console.log(buttonContents);

document.addEventListener("click", function (event) {
  // targeti birden fazla kullanacağim için değişkene atadım.
  // böylelikle kodun okunabilirliği kolaylaştı.
  const target = event.target;

  // logic kısmı burada, if statement kullanırken tek satır kod yazıyorsak küme parantezi kullanmamıza gerek yok.
  if (![...buttonContents, ...modalContents].includes(target))
    modal.style.display = "none";
});
