import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  model={

    school:'',
    degree:'',
    study:'',
    description:'',




  }
  getValues(f:NgForm){

   // this.router.navigateByUrl('/dashboard1');

  }
  godash(){
    this.router.navigateByUrl('/dashboard1');
  }
}
