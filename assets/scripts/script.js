function start() {
    myInt = [];

    width = 0;
    height = 0;
    console.log("started new");
    myInt = setInterval(rollUp, 100);
    console.log("ended new");
    console.log(width < 15);
    // width=0
    // rollUp(2)
  }

  function rollUp() {
    // console.log(112-(height*16) + "AAAAAAA")

    document.getElementById("gauge").style.backgroundPosition =
      -384 - width * 8 + "px " + (113 - height * 16) + "px";
    console.log(-384 - width * 8 + "px " + (113 - height * 16) + "px");

    // clearTimeout()
    console.log("olha embaixo");
    console.log(width);
    console.log(height);

    if (width == 8 && height == 2) {
      clearInterval(myInt);
    }

    width < 15 ? width++ : (height++, (width = 0));
  }