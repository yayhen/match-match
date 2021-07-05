class Filter {
  static redFilter() {
    let container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.zIndex = '1';
    container.style.background = 'rgba(254, 0, 0, .3)';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.top = '0px';
    container.style.left = '0px';
    return container;
  }

  static greenFilter() {
    let container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.zIndex = '1';
    container.style.background = 'rgba(0, 254, 0, .3)';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.top = '0px';
    container.style.left = '0px';
    return container;
  }

  static grayFilter() {
    let container = document.createElement('div');
    container.className = 'fog'
    container.style.position = 'absolute';
    container.style.zIndex = '2';
    container.style.background = 'rgba(0, 0, 0, .3)';
    container.style.width = '100%';
    container.style.height = '150%';
    container.style.top = '0px';
    container.style.left = '0px';
    return container;
  }
}

export default Filter