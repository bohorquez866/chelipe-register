window.onload = function () {
  let $inputWrapper = document.querySelector(".form-content");

  const data = [
    {
      Id: 1,
      Name: "Mishi Kobe Niku",
      Category: "Meat/Poultry",
      Price: 97.0,
      salesPrice: 107.25,
      existence: 6,
    },
    {
      Id: 2,
      Name: "soap",
      Category: "Hygene",
      Price: 2.5,
      salesPrice: 3,
      existence: 5,
    },
    {
      Id: 3,
      Name: "juice",
      Category: "Drinks",
      Price: 1.2,
      salesPrice: 2.2,
      existence: 10,
    },
    {
      Id: 4,
      Name: "keptchup",
      Category: "Creams",
      Price: 2,
      salesPrice: 5.1,
      existence: 9,
    },
  ];

  const selectOps = data.map((item) => ({
    name: `${item.Category.toUpperCase()} - ${item.Name}`,
    id: item.Id,
  }));

  //* creates HTML elements

  selectOps.map((el) => console.log(el));

  data.forEach((item, i) => {
    $inputWrapper.innerHTML += `

  <div class="form-item form-item-${i + 1}">
   <select>
   <option disabled selected>Selecciona un producto</option>
   ${selectOps.map(
     (el, i) => `<option value="${el.name}"> ${el.name}</option>`
   )}
   </select>

    <input type="number" placeholder="quantity"/>
    <input type="number" placeholder="price" />
    <input type="number" placeholder="sales price"/>
  </div>
  `;
  });

  //? selects elements and update input values

  const getValues = () => {
    let $select = document.querySelectorAll(`.form-item`);

    $select.forEach((el) => {
      let $select = el.querySelector("select");
      let $inputs = el.querySelectorAll("input");

      $select.addEventListener("input", (e) => {
        let obj = data.filter((item) =>
          e.target[$select.selectedIndex].text.includes(
            item.Category && item.Name
          )
        );

        if (obj) {
          console.log(obj);
          $inputs[0].value = obj[0].existence;
          $inputs[1].value = obj[0].Price;
          $inputs[2].value = obj[0].salesPrice;
        }
      });
    });
  };

  getValues();
};
