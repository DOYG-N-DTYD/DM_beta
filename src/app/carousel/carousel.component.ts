import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent {
  public carouselImages: any;
  public imageInCourusel: any;
  public imagesInCourusel: any;
  public intervalForChild: any;
  public intervalImageMove: any;
  public pathsToImageInCourusel: string[] = [
    '/assets/images/Products/balka.jpg',
    '/assets/images/Products/brusok.jpg',
    '/assets/images/Products/drova.jpg',
    '/assets/images/Products/gorbil.jpg',
    '/assets/images/Products/nerdoska.jpg',
    '/assets/images/Products/opilki.jpg',
    '/assets/images/Products/palet.jpg',
    '/assets/images/Products/rdoska.jpg'
  ];
  public containerWithImages: any;
  public carousel: any;

  constructor() { }

  leftArrow() { return document.getElementById('carouselLeft') as HTMLElement; }
  rightArrow() { return document.getElementById('carouselRight') as HTMLElement; }
  container() { return document.getElementsByClassName('container'); }
  imageLeftClick() {
    console.log("Left click");
    console.log(this.leftArrow());
  }

  ngOnInit() {
    document.addEventListener('visibilitychange',this.actionOnFocus.bind(this));

    this.containerWithImages = document.getElementById('container') as HTMLDivElement;
    this.carousel = document.getElementById('carousel') as HTMLDivElement;
    this.containerWithImages.setAttribute("style", "width:" + (this.containerWithImages.offsetWidth - 300) + "px"); //300

    this.imagesInCourusel = this.initFIFOforImages();
    this.appentChildsToContainerWithImages();
    this.startCarousel();

    //window.addEventListener('resize',this.windowResizeEvent);
    //this.windowResizeEvent()
  }
  actionOnFocus(){
    //clear old
    // add new
    if (document.visibilityState === 'visible') {
      this.stopCarousel();
      // console.log("ACTION ON FOCUS");
      this.clearContainerOfNodes();
      // this.imagesInCourusel = this.initFIFOforImages();
      // this.appentChildsToContainerWithImages();
    }
  }
  stopCarousel(){
    clearInterval(this.intervalForChild);
    clearInterval(this.intervalImageMove);
  }
  appentChildsToContainerWithImages() {
    for (let child of this.imagesInCourusel) {
      this.containerWithImages.appendChild(child);
    }
  }
  clearContainerOfNodes() {
    for (let child of this.imagesInCourusel) {
      console.log("child removed",child);
      this.containerWithImages.removeChild(child); // Чистить ноды нужно когда ширина экрана меняется TODO
    }
  }

  initFIFOforImages() {
    var arrayOfDivsWithImages: HTMLElement[] = [];
    this.pathsToImageInCourusel.forEach(imgPath => {
      let arrayOfStrings: string[] = imgPath.split("/");  // /.../.../.../
      let imgName = arrayOfStrings[arrayOfStrings.length - 1].split(".")[0]; // balka.jpg')".split(".")[0]
      arrayOfDivsWithImages.push(this.setImageProperties(document.createElement(imgName) as HTMLElement, imgPath));
    });
    return arrayOfDivsWithImages;
  }
  setImageProperties(divWithImage: HTMLElement, imgPath: string) {
    divWithImage.style.backgroundImage = "url('" + imgPath + "')";
    divWithImage.style.width = 300 + 'px';
    divWithImage.style.height = 300 + 'px';
    divWithImage.style.position = 'absolute';
    divWithImage.style.left = '-300px';
    return divWithImage;
  }
  startCarousel() {
    var tempImageObg;
    this.intervalForChild = setInterval(() => {
      tempImageObg = this.imagesInCourusel.shift();
      this.containerWithImages.appendChild(tempImageObg);     // ADD in clear methods all shifted intervals ?
      this.moveImage(tempImageObg);                           // TODO
      if (tempImageObg.localName == "rdoska") {

        clearInterval(this.intervalForChild);
        this.clearContainerOfNodes();
        this.imagesInCourusel = this.initFIFOforImages();
        this.appentChildsToContainerWithImages();
        this.startCarousel();
      }
    }, 3500)
  }
  moveImage(imageInCourusel: any) {
    this.intervalImageMove = setInterval(() => {
      var speed = 1;
      var offsetleft = parseInt(imageInCourusel.offsetLeft);//||0;
      var offsetright = window.innerWidth - imageInCourusel.offsetLeft - imageInCourusel.offsetWidth
      imageInCourusel.style.left = (offsetleft + speed) + 'px';
      console.log(imageInCourusel.style.right);
      if (offsetright <= (-1 * imageInCourusel.offsetWidth)) {
        clearInterval(this.intervalImageMove);
        this.imagesInCourusel.push(imageInCourusel);
      }
    }, 10)
  }
}


