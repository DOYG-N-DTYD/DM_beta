import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent {
  //let carouselImages: Array<any> = [];
  public err: any;
  public container:any;
  constructor() { }

  leftArrow() {
    return document.getElementById('carouselLeft') as HTMLElement;
  }
  rightArrow() {
    return document.getElementById('carouselRight') as HTMLElement;
  }
  carouselImages() {
    return document.getElementsByTagName('img');
  }
  carouselContainer() {
    return document.getElementsByClassName('container');
  }
  imageLeftClick() {
    console.log("Left click");
    console.log(this.leftArrow());
  }
  imageRightClick() {
    let imageWidth: number = 300;
    let imageHeight: number = 300;
    let marginLeft: number = 10;
    //console.log(document.getElementsByClassName('container')[0].childNodes);
    let imagesList: NodeListOf<ChildNode> = document.getElementsByClassName('container')[0].childNodes;
    // List.forEach(values, function(value, key)){});
    imagesList.forEach(function (currentValue, currentIndex, listObj) {
      //console.log(`${currentValue}, ${currentIndex}`);
      // console.log(currentValue); //300px
      // currentValue
    });

    this.container = document.getElementById('container') as HTMLDivElement;
    let containerWidth: any = this.container.offsetWidth;
    //container.style.width.slice(0,container.style.width.length-2);

    this.err = document.createElement('divError') as HTMLElement;
    //err.style.backgroundImage = "url('/assets/images/Products/balka.jpg')";
    this.err.style.width = imageWidth + 'px';
    this.err.style.height = imageHeight + 'px';
    this.err.style.marginLeft = marginLeft + 'px';
    this.err.style.backgroundColor = 'red';
    this.container.parentElement?.insertBefore(this.err, this.container);
    this.container.setAttribute("style", "width:" + (this.container.offsetWidth - imageWidth) + "px"); //containerWidth - imageWidth
    // container.setAttribute("style", "transition: tranform 2s");
    this.err.addEventListener('mouseover', this.moveImages);
  }

  moveImages = (event: MouseEvent) => {
    var speed = 1,
      direction = 1,
      boxLeftPos = this.err.offsetLeft;
      this.err.style.marginLeft = boxLeftPos + speed + 'px'
      this.container.setAttribute("style", "width:" + (this.container.offsetWidth - speed - 50) + "px"); //containerWidth - imageWidth
  }
}
