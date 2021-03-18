import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { Dasboard1Component } from './dasboard1/dasboard1.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
   {
     path:'register',
     component:RegisterComponent
  },
  {
    path:'',
    component:HomepageComponent

  },
  {
    path:'login',
    component:LoginComponent
  },

   {
     path:'dashboard',
     component:Dasboard1Component
   },

   {
     path:'post',
     component:PostComponent
   },
{
  path:'createprofile',
  component:CreateprofileComponent
},
{
  path:'dashboard1',
  component:Dashboard1Component
},

{
  path:'education',
  component:EducationComponent
},
{
  path:'experience',
  component:ExperienceComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
