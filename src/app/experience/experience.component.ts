import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  model={

    job:'',
    company:'',
    location:'',
    description:'',

}
getValues(f:NgForm){

  // this.router.navigateByUrl('/dashboard1');

 }
 godash(){
   this.router.navigateByUrl('/dashboard1');
 }
}
