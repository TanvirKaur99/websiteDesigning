import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dasboard1',
  templateUrl: './dasboard1.component.html',
  styleUrls: ['./dasboard1.component.css']
})
export class Dasboard1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  username=localStorage.getItem('user');
  createprofile(){
    this.router.navigateByUrl('/createprofile');
  }

}
