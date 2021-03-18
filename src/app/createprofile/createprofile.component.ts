import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css']
})
export class CreateprofileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  model={

    company:'',
     profession:'',
     website:'',
    skills:'',

  }
  getValues(f:NgForm){

    this.router.navigateByUrl('/dashboard1');

}
getvalues1(){

  this.router.navigateByUrl('/dashboard');
}

}
