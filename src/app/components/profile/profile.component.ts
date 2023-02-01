import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { users } from 'src/app/data/users';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  constructor(){
    this.id = parseInt(localStorage.getItem("profileKey"))
    this.user = users.find(user => user.id === this.id)
    console.log(this.user)
    if(this.user.gender == 'M') {
      this.imgSrc = 'https://cliply.co/wp-content/uploads/2020/09/442008572_ARTIST_AVATAR_3D_400.png'
    }
    if(this.user.gender == 'F') {
      this.imgSrc = 'https://static.vecteezy.com/system/resources/previews/006/898/691/original/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg'
    }
  }
  id: number
  user:User
  imgSrc:string
}






