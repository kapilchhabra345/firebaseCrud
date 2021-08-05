

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
    
    
  public kkk=['kapil', 'chhabra', 'palwal'];
  editMode:boolean=false;
  editUserId;

   @ViewChild('userForm') userForm:NgForm;
    url="https://kapilproducts-d0bc6-default-rtdb.firebaseio.com/user.json";
    users=[
      // {name:'Anup kumsr',technology:'Angular'},
      // {name:'kapil Chhabra',technology:'angular'}
    ];

  constructor(private http:HttpClient, private router:Router) { }

  onAddUser(userData:User)
  {
    if(this.editMode){
  //console.log('https://kapilproducts-d0bc6-default-rtdb.firebaseio.com/user/'+this.editUserId+'.json');
  this.http.put('https://kapilproducts-d0bc6-default-rtdb.firebaseio.com/user/'+this.editUserId+'.json',userData).subscribe(
    (res)=>{
      //console.log(res);
       this.fetchUser();
      
    }
  )
    }else {
      console.log(userData);
      this.users.push(userData);
     
      this.http.post<User>(this.url,userData).subscribe(
        (res)=>{
          console.log(res);
          
        }
      )
      if(this.users.length>3){
        // alert("more then 3");
        this.router.navigate(['products']);
       }
    

    }


  

  }

  fetchUser(){
    this.http.get<User>(this.url)
    .pipe(map(resData=>{
      // console.log(resData);
      const userArray=[];
      for(const key in resData){
        //console.log(key);
        //console.log(resData[key]);
       // console.log({...resData[key]});
       // console.log(resData.hasOwnProperty(key));
        if(resData.hasOwnProperty(key)){
          userArray.push({userId:key,...resData[key]})
        } 
      }
        return userArray
    }))
    .subscribe(users=>{
      //console.log(users);
      this.users=users;
      
    })

  }

  onEditUser(userId,index){
    this.editUserId=userId;
   //console.log(userId);
  // console.log(index);
  //console.log(this.users[index].name);
  // console.log(this.users[index]);
  this.editMode=true;
  this.userForm.setValue({
    name:this.users[index].name,
    technology:this.users[index].technology
  });

  // this.http.update();
   

   

  }



  onDeleteUser(userId){
    if(confirm('do you want to delete this user?')){
      //console.log(userId);
    //  console.log('https://kapilproducts-d0bc6-default-rtdb.firebaseio.com/user/'+userId+'.json');
      
     this.http.delete('https://kapilproducts-d0bc6-default-rtdb.firebaseio.com/user/'+userId+'.json')
     .subscribe(()=>{
       this.fetchUser()
     }

     );
    }

  }
 


  ngOnInit(): void {
  //  console.log(...this.kkk);
  this.fetchUser();
   
  }

}
