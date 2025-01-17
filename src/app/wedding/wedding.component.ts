import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss']
})
export class WeddingComponent {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  isReadmore = true;
  isLearnbuy = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.slides[0] = {
      src: '../assets/img/komputer 2.png',
    };
    this.slides[1] = {
      src: '../assets/img/komputer 2.png',    };
    this.slides[2] = {
      src: '../assets/img/komputer 2.png',    };
  }

  showText() {
    this.isReadmore = !this.isReadmore;
  }

  learnBuy() {
    this.router.navigateByUrl('/booking');
  }
}
