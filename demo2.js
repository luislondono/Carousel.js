window1 = document.getElementById("window1");
setUpSlidingWindow(window1, "80vh", "100vw");

function setUpSlidingWindow(slidingWindow = null) {
  if (slidingWindow == null) {
    slidingWindow = document.getElementsByClassName("sliding-window")[0];
  }
  if (slidingWindow === undefined) {
    return;
  }
  innerTotalWidth = 0;
  for (const child of slidingWindow.children) {
    innerTotalWidth += child.getBoundingClientRect().width;
  }
  slidingWindow.parentNode.style.height = innerTotalWidth + "px";
  slidingWindow.style.bottom = 1.5 * innerTotalWidth;
  prevWindowTopScroll = window.scrollY;

  window.addEventListener("scroll", () => {
    handleSlidingWindowScroll(slidingWindow);
  });
}

function handleSlidingWindowScroll(slidingWindow) {
  // console.log(slidingWindow.getBoundingClientRect().y);
  // if (slidingWindow.prevScrollLeft == slidingWindow.scrollLeft) {
  // console.log("Not moving anymore");
  // }
  console.log(slidingWindow.prevScrollLeft);
  if (slidingWindow.getBoundingClientRect().y == 0) {
    delta = window.scrollY - prevWindowTopScroll;
    prevWindowTopScroll = window.scrollY;
    slidingWindow.scrollLeft += delta;
    slidingWindow.prevScrollLeft = slidingWindow.scrollLeft;
  }
}
