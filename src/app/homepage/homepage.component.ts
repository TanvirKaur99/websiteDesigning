import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  getvalue(){
    this.router.navigateByUrl('/register');

  }
  getvalue1(){
    this.router.navigateByUrl('/login');
  }




}
