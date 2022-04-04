const content = document.querySelector(".content1");
const path = document.querySelector(".path1");
const pathLength = path.getTotalLength();

const calcDashoffset = (scrollY, element, length) => {
  const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
  const value = length - length * ratio;

  return value < 0 ? 0 : value > length ? length : value;
};

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = calcDashoffset(
  window.offsetHeight * 0.8,
  content,
  pathLength
);

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + window.innerHeight * 0.8;
  path.style.strokeDashoffset = calcDashoffset(scrollY, content, pathLength);
});
