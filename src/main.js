const post = document.querySelector('.post-wrap');

let bar = document.createElement('div');
let oldPageHeight = undefined;

bar.style.width = '0';
bar.style.height = '5px';
bar.style.backgroundColor = "#7159c1";
bar.style.position = 'fixed';
bar.style.zIndex = 9999;
bar.style.top = 0;
bar.style.left = 0;
bar.style.transition = '0.2s';

window.addEventListener('load', () => {
  document.body.append(bar);
  document.addEventListener('scroll', updateBarWidth);
});

function updateBarWidth() {
  const postHeight = post.offsetHeight - (document.body.offsetHeight - post.offsetHeight);
  const pageHeight = window.pageYOffset;

  const updatedWidth = (pageHeight * 100) / postHeight;
  bar.style.width = updatedWidth + "%";
}