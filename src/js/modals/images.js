const images = () => {
  const popupImg = document.createElement('div'),
    elemImg = document.createElement('img'),
    blockImg = document.querySelector('.works');

  popupImg.classList.add('popup');
  blockImg.appendChild(popupImg);
  popupImg.style.display = "none";
  popupImg.style.justifyContent = "center";
  popupImg.style.alignItems = "center";
  popupImg.appendChild(elemImg);

  elemImg.style.width = "50%";

  blockImg.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (target && target.classList.contains('preview')) {
      popupImg.style.display = "flex";
      let path = target.parentNode.getAttribute("href");
      elemImg.setAttribute('src', path);

      //mouse scroll is false
      document.onmousewheel = document.onwheel = function() {
        return false;
      };
      document.addEventListener("MozMousePixelScroll", function() {
        return false
      }, false);
      document.onkeydown = function(e) {
        if (e.keyCode >= 33 && e.keyCode <= 40) return false;
      }
    }

    if (target && target.matches('div.popup')) {
      popupImg.style.display = "none";
    }
  })


}

export default images;
