import { Component } from '@angular/core';

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

  leftArrow() {return document.getElementById('carouselLeft') as HTMLElement;}
  rightArrow() {return document.getElementById('carouselRight') as HTMLElement;}
  container() {return document.getElementsByClassName('container');}
  imageLeftClick() {
    console.log("Left click");
    console.log(this.leftArrow());
  }

  ngOnInit(){
    let imageWidth: number = 300;

    this.containerWithImages = document.getElementById('container') as HTMLDivElement;
    this.carousel = document.getElementById('carousel') as HTMLDivElement;

    this.imagesInCourusel = this.initFIFOforImages();
    
    var intervalID = setInterval(() => {
      let tempImageObg = this.imagesInCourusel.shift(); //this.imageInCourusel
      this.containerWithImages.appendChild(tempImageObg);//this.imageInCourusel);
      this.containerWithImages.setAttribute("style", "width:" + (this.containerWithImages.offsetWidth - imageWidth) + "px"); //containerWithImagesWidth - imageWidth first time
      this.moveImage(tempImageObg);
    },3500)
  }

  
  initFIFOforImages() {
    var arrayOfDivsWithImages: HTMLElement[] = [];
    this.pathsToImageInCourusel.forEach(imgPath => {
      let arrayOfStrings: string[] = imgPath.split("/");  // /.../.../.../
      let imgName = arrayOfStrings[arrayOfStrings.length - 1].split(".")[0]; // balka.jpg')".split(".")[0]
      arrayOfDivsWithImages.push(this.setImageProperties(document.createElement(imgName) as HTMLElement, imgPath));
      console.log(imgPath);
    });
    return arrayOfDivsWithImages;
  }
  setImageProperties(divWithImage: HTMLElement, imgPath:string) {
    divWithImage.style.backgroundImage = "url('" + imgPath + "')";
    //"url('/assets/images/Products/balka.jpg')";
    divWithImage.style.width = 300 + 'px';
    divWithImage.style.height = 300 + 'px';
    divWithImage.style.position = 'absolute';
    divWithImage.style.left = '-300px';  // change to dynamic width of image
    //divWithImage.style.transitionTimingFunction = 'linear';
    //divWithImage.style.transitionDuration = '0.5s';//'5s';
    //divWithImage.style.transition = 'all 0.5s';
    return divWithImage;
  }
  moveImage(imageInCourusel: any) {
    var intervalID = setInterval(() => {
      var speed = 1;
      var offsetleft = parseInt(imageInCourusel.offsetLeft);//||0;
      var offsetright = window.innerWidth - imageInCourusel.offsetLeft - imageInCourusel.offsetWidth
      imageInCourusel.style.left = (offsetleft + speed) + 'px';
      if (offsetright <= (-1 * imageInCourusel.offsetWidth)) {
        clearInterval(intervalID);
        this.containerWithImages.removeChild(this.containerWithImages.childNodes[0]);//this.imageInCourusel); // ??
      }
    },10)

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


