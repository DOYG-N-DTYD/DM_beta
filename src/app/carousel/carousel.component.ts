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
    this.containerWithImages = document.getElementById('container') as HTMLDivElement;
    this.carousel = document.getElementById('carousel') as HTMLDivElement;
    this.containerWithImages.setAttribute("style", "width:" + (this.containerWithImages.offsetWidth - 300) + "px"); //300

    this.imagesInCourusel = this.initFIFOforImages();
    this.appentChildsToContainerWithImages();
    this.startCarousel();
  }
 
  appentChildsToContainerWithImages(){
    for(let child of this.imagesInCourusel){
      this.containerWithImages.appendChild(child);
    }
  }
  clearContainerOfNodes(){
    for(let child of this.imagesInCourusel){
      //this.containerWithImages.appendChild(child);
      this.containerWithImages.removeChild(child); // Чистить ноды нужно когда ширина экрана меняется
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
    //"url('/assets/images/Products/balka.jpg')";
    divWithImage.style.width = 300 + 'px';
    divWithImage.style.height = 300 + 'px';
    divWithImage.style.position = 'absolute';
    divWithImage.style.left = '-300px';
    return divWithImage;
  }
  startCarousel() {
    var tempImageObg;
    var intervalForChild = setInterval(() => {
      tempImageObg = this.imagesInCourusel.shift();
      //this.containerWithImages.appendChild(tempImageObg);
      this.moveImage(tempImageObg);
      if (tempImageObg.localName == "rdoska") {
        
        clearInterval(intervalForChild);
        this.clearContainerOfNodes();
        this.imagesInCourusel = this.initFIFOforImages();
        this.appentChildsToContainerWithImages();
        this.startCarousel();
      }
      console.log("INTERVAL START CAROUSEL");
      // if (this.containerWithImages.childNodes.length == 8) {
      //   // for (var child in this.containerWithImages.childNodes) {
      //   //   console.log(1111, this.containerWithImages.childNodes[child]);
      //   //   this.containerWithImages.removeChild(this.containerWithImages.childNodes[child]);
      //   // }
      //   //rdoska
      //   clearInterval(intervalForChild);
      // }
    }, 3500)

    //this.startCarousel();
  }
  moveImage(imageInCourusel: any) {
    var intervalImageMove = setInterval(() => {
      var speed = 1;
      var offsetleft = parseInt(imageInCourusel.offsetLeft);//||0;
      var offsetright = window.innerWidth - imageInCourusel.offsetLeft - imageInCourusel.offsetWidth
      imageInCourusel.style.left = (offsetleft + speed) + 'px';
      console.log("INTERVAL IMAGE MOVE");
      if (offsetright <= (-1 * imageInCourusel.offsetWidth)) {
        clearInterval(intervalImageMove);
        //this.containerWithImages.removeChild(this.containerWithImages.childNodes[0]);//this.imageInCourusel); // ??
        this.imagesInCourusel.push(imageInCourusel);
      }
    }, 10)
  }
  // moveImage() {
  //   var intervalID = setInterval(() => {
  //     var speed = 100;
  //     var offsetleft = parseInt(this.imageInCourusel.offsetLeft);//||0;
  //     var offsetright = window.innerWidth - this.imageInCourusel.offsetLeft - this.imageInCourusel.offsetWidth

  //     this.imageInCourusel.style.left = (offsetleft + (speed)) + 'px';
  //     if (offsetright <= (-1*this.imageInCourusel.offsetWidth)) {
  //       clearInterval(intervalID);
  //       this.containerWithImages.removeChild(this.containerWithImages.childNodes[0]);//this.imageInCourusel); // ??
  //     }
  //   })

  // }
}


