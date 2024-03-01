import $ from "jquery";

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.scroll-to');
for (let elm of elements) {
  observer.observe(elm)
}


let contents = document.querySelectorAll('.main_content-text')
document.getElementById('btn').addEventListener('click', event => {
  event.preventDefault();
  contents.forEach((element) => {
    if (element.classList[0] === 'hide') {
      element.classList.replace('hide', 'show')
    } else {
      element.classList.replace('show', 'hide')
    }
  })
})

const selector = $('.animation');
const mainContent = $('.main_content');

mainContent.on('mousemove', () => {

  selector.each((index, value) => {
    let speed = $(value).data('speed');
    let percent = $(value).data('percent');

    for (let i = 1; i <= percent; i++) {
      setTimeout(() => {
        $(value).css("background", `linear-gradient(90deg, #FFDD00 ${i}%, #F6F6F6 20%)`);
      }, i * speed)
    }
  })
  mainContent.off();
})
