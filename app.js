const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");

const path1 = document.querySelector(".path1");
const path2 = document.querySelector(".path2");
const path3 = document.querySelector(".path3");

const pathLength1 = path1.getTotalLength();
const pathLength2 = path2.getTotalLength();
const pathLength3 = path3.getTotalLength();

const calcDashoffset = (scrollY, element, length) => {
  const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
  const value = length - length * ratio;

  return value < 0 ? 0 : value > length ? length : value;
};

path1.style.strokeDasharray = pathLength1;
path1.style.strokeDashoffset = calcDashoffset(
  window.offsetHeight * 0.8,
  content1,
  pathLength1
);

path2.style.strokeDasharray = pathLength2;
path2.style.strokeDashoffset = pathLength2;

path3.style.strokeDasharray = pathLength3;
path3.style.strokeDashoffset = pathLength3;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + window.innerHeight * 0.8;
  path1.style.strokeDashoffset = calcDashoffset(scrollY, content1, pathLength1);
  path2.style.strokeDashoffset = calcDashoffset(scrollY, content2, pathLength2);
  path3.style.strokeDashoffset = calcDashoffset(scrollY, content3, pathLength3);
});
