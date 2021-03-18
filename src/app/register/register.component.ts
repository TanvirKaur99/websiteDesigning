import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  model={
    username:'',
    useremail:'',
    userpassword:'',
    confirmpassword:'',


  }
  getValues(f:NgForm){
    this.router.navigateByUrl('/dashboard');
     localStorage.setItem('user',f.value.username);//to print the entered name on your page


}

}
