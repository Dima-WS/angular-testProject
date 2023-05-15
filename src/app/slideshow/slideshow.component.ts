import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  title = 'angular-testProject';
  images = ["image1.jpg", "image2.jpg", "image3.jpg"];
  headlines = ["Bring engineering to the next level", "Building the future with the latest technologies", "Pioneering the next generation of innovation"];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }
  
  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10)
    }, 8000)
  }
}
