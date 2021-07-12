let buttonArray = ["one", "two", "three", "four", "five", "six", "seven"];
buttonArray.forEach((item, i) => {
  document.getElementById(item).onclick = function() {
    var btn = document.getElementById(item);
    var para = document.getElementById(item + "-text");
    console.log(para, "  ", item)
    para.style.display = 'block';
    btn.style.display = 'none';
  }

  document.getElementById(item + "-less").onclick = function() {
    var btn = document.getElementById(item);
    var para = document.getElementById(item + "-text");
    console.log(para, "  ", item)
    para.style.display = 'none';
    btn.style.display = 'block';
  }
});

const io = new IntersectionObserver((entries) =>
  entries.forEach((entry) => {
    // set image source only when it is in the viewport
    if (entry.isIntersecting) {
      const image = entry.target;
      // setting image source from the dataset
      image.src = image.dataset.src;

      // when image is loaded, we do not need to observe it any more
      io.unobserve(image);
    }
  })
);

document.querySelectorAll("img").forEach((element) => {
  io.observe(element)
});
