import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb(){
    let users:User[]=[
      {id:1,title:'Mr',firstname:'Ajeet',lastname:'singh',dob:'2000-05-15',email:'ajeet@test.com',password:'123456',acceptTerms:true},
      {id:2,title:'Mr',firstname:'Chandan',lastname:'Rathod',dob:'1998-07-10',email:'chandan@test.com',password:'243565',acceptTerms:true},
      {id:3,title:'Miss',firstname:'Priya',lastname:'Sharma',dob:'1997-04-07',email:'priya@test.com',password:'736483',acceptTerms:true},
      {id:4,title:'Mr',firstname:'Azeem',lastname:'Khan',dob:'1999-09-01',email:'azeem@test.com',password:'876909',acceptTerms:true},
      {id:1,title:'Miss',firstname:'Prachi',lastname:'singh',dob:'1995-05-08',email:'prachi@test.com',password:'253462',acceptTerms:true},
      {id:1,title:'Mr',firstname:'Mohammed',lastname:'Rizwan',dob:'1999-10-09',email:'rizwan.j@prodapt.com',password:'654321',acceptTerms:true},
      {id:1,title:'Mr',firstname:'Arsalan',lastname:'Ansari',dob:'1998-05-10',email:'ansariarsalan@test.com',password:'364763',acceptTerms:true},
    ]


    return {users};
  }
}
