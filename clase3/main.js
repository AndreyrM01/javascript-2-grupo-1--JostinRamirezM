const increasebtn = document.getElementById('increasebutton')
const decreasebtn = document.getElementById('decreasebutton')

function counter() {
  let counter = 0
  const increase = function () {
    counter = counter + 1;
    console.log(counter);
  }

  const decrease = function () {
    counter = counter - 1;
    console.log(counter);
  }

  return {
    increase: increase,
    decrease: decrease
  }
}

const counterfunction = counter()