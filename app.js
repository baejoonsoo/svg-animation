const content = document.querySelector(".content1");
const path = document.querySelector(".path2");
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

const calcDashoffset = (scrollY, element, length) => {
  const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
  const value = length - length * ratio;
  // console.log(value);
  return value < 0 ? 0 : value > length ? length : value;
};

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + window.innerHeight * 0.8;
  path.style.strokeDashoffset = calcDashoffset(scrollY, content, pathLength);
});
