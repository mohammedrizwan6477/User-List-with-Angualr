import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { User } from "./common/user.interface";
import { UserService } from "./common/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Angular 8";
  submitted: boolean = false;

  addform: FormGroup;
users:User[]=[];
  constructor(private _userService:UserService) {}
  ngOnInit() {
    this.setformstate();
    this.getUsers();
  }
  setformstate() {
    this.addform = new FormGroup({
      id: new FormControl(0),title: new FormControl("", Validators.required),
      firstname: new FormControl("",Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10),])),
      lastname: new FormControl("",Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10),])),
      email: new FormControl("",Validators.compose([Validators.required, Validators.email])),
      dob: new FormControl("",Validators.compose([Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/),])),
      password: new FormControl("",Validators.compose([Validators.required, Validators.minLength(6)])),
      confirmpassword: new FormControl("",Validators.compose([Validators.required])),acceptTerms: new FormControl(false, Validators.requiredTrue),});
  }

  get ctrl() {
    return this.addform.controls;
  }

  ragister() {
    this.submitted = true;
    if (this.addform.invalid) {
      alert("Validation failed !!");
    } else {
      alert("Validation success !!");
    }
  }
  resetForm() {
    // alert("resetForm");
    this.submitted = false;
    this.addform.reset();
  }

  getUsers(){
    this._userService.getAllUsers().subscribe((res :User[])=>{
      this.users=res;
      console.log(this.users)
    })
  }

  edit()
  {

  }
  delete()
  {

  }
}
