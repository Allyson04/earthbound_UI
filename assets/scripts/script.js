slotFullNumber = "0"; //this number is what it meant to appear at the slots
nthsprite = "0"; //this number is which sprite is being used.


slotsPosition = document.querySelectorAll(".gauge")

function refreshNumbers() {

  slot0 = {
    id: 0,
    number: getSlotsValues(0,1),
    // sprite: this.number * 4,
    position: slotsPosition[0]
  }

  slot1 = {
    id: 1,
    number: getSlotsValues(1,2),
    // sprite: this.number * 4,
    position: slotsPosition[1]
  }

  slot2 = {
    id: 2,
    number: getSlotsValues(2,3),
    // sprite: this.number * 4,
    position: slotsPosition[2]
  }

  slots = []

  slots = [slot0,slot1,slot2]

  // console.log(slots)
}

function getSlotsValues(start,end) {
  //formatting to three numbers at once
  slotFullNumber = slotFullNumber.toString().padStart(3,"0")
  value = slotFullNumber.slice(start,end)

  // console.log(value)
  return value
}

var myInt

function start() {
  console.clear()
  slotFullNumber++
  console.log("the value of slot is: " + slotFullNumber)
  refreshNumbers();

  slots.forEach(function(element, index, array) {
    console.log(element)
    // rollUp(element, index, array)
    myInt = setInterval(function() {rollUp(element, index, array)}, 100);
    
  }) 

  
  console.log("---------------------Ended------------------")
}

  function rollUp(element, index, array) {
    console.log("nthsprite: " + nthsprite)
    // if the slot value reaches the value of the number needed, it stops the interval
    if(nthsprite == element.number *4) {
      console.log("reached the number")
      console.log(myInt)
      clearInterval(myInt);

      refreshNumbers()

      // if the slot value reaches the value of "10", it will come back to 0
    } else if(nthsprite == 39) {
      console.log("again to zero")
      nthsprite = 0;
      changeSlots(element)
      clearInterval(myInt);
      
      //in case of nothing passing, then try again
    } else {
      console.log("adding one")
      nthsprite++
      console.log(nthsprite)

      changeSlots(element)
    }
  }

  function changeSlots(currentSlot) {
    spritePosition = (nthsprite * -8) + "px "
    console.log(spritePosition)

    currentSlot.position.style.backgroundPosition =
    spritePosition + "0px";
  }

  // function rollUp() {
  //   // console.log(112-(height*16) + "AAAAAAA")

  //   document.getElementById("gauge").style.backgroundPosition =
  //     -384 - width * 8 + "px " + (113 - height * 16) + "px";
  //   console.log(-384 - width * 8 + "px " + (113 - height * 16) + "px");

  //   // clearTimeout()
  //   console.log("olha embaixo");
  //   console.log(width);
  //   console.log(height);

  //   if (width == 8 && height == 2) {
  //     clearInterval(myInt);
  //   }

  //   width < 15 ? width++ : (height++, (width = 0));
  // }