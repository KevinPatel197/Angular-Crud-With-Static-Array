import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Crud With Static Array';
  
  public crud : any;
  public users : any=[];
  public editUser : any;

  constructor(private fb:FormBuilder){
    this.crud=this.fb.group({
      id:[],
      name:[],
      age:[],
      city:[]
    })
  };


  public add(){
    let tempUser = this.crud.getRawValue();
    this.users.push(tempUser);
    // console.log(tempUser);
    this.crud.reset();
  };

  public remove(index:number) {
    this.users.splice(index,1);
  };

  public edit(user:any){
    this.editUser=user;
    this.crud.setValue({
      id: user.id,
      name: user.name,
      age: user.age,
      city: user.city
    })
  };

  public save(){
    if (this.editUser){
      this.users.map((val:any, key:number) => {
        if(this.editUser.id === val.id){
          this.users[key] = this.crud.getRawValue();
        }  
      })
      this.crud.reset();
      this.editUser = null;
    }
  };

  
}


