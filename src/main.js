class TWBar {
  
  constructor(element, barColor) {
    this.color = barColor;
    this.bar = this.createBarElement();
    this.element = element;
    this.initOnLoad();
  }

  initOnLoad() {
    window.addEventListener('load', () => {
      document.body.append(this.bar);
      document.addEventListener('scroll', this.updateBarWidth);
    });
  }

  createBarElement() {
    let bar = document.createElement('div');
    
    bar.style.width = '0';
    bar.style.height = '5px';
    bar.style.backgroundColor = this.color;
    bar.style.position = 'fixed';
    bar.style.zIndex = 9999;
    bar.style.top = 0;
    bar.style.left = 0;
    bar.style.transition = '0.2s';

    return bar;
  }

  updateBarWidth = () => {
    const postHeight = this.element.offsetHeight - (document.body.offsetHeight - this.element.offsetHeight);
    const pageHeight = window.pageYOffset;
    const updatedWidth = (pageHeight * 100) / postHeight;
    this.bar.style.width = updatedWidth + "%";
  }
}
