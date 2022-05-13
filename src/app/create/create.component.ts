import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }
  errormsg:any;
    Swal: any;
    getparamid:any;

  ngOnInit(): void {
    this.getparamid=this.router.snapshot.paramMap.get('id_qcm');
    this.service.getSingleData(this.getparamid).subscribe((res)=>{
      console.log(res,"res===>");
      this.userForm.patchValue({
        description:res.data[0].description,
        nbr_question:res.data[0].nbr_question,
        points:res.data[0].points,
        title:res.data[0].title,
        mark:res.data[0].mark,


      })


    });
  
  }


  userForm= new FormGroup({
    'description': new FormControl('',Validators.required),
    'nbr_question': new FormControl('',Validators.required),
    'points': new FormControl('',Validators.required),
    'title': new FormControl('',Validators.required),
    'mark': new FormControl('',Validators.required),


  });

  userSubmit(){

    if(this.userForm.valid){
      this.service.createData(this.userForm.value).subscribe((res)=>{
        this.userForm.reset();
      })
      Swal.fire(
        'Well Done!',
        'Quiz is well created!',
        'success'
      )

    }else{

      Swal.fire({
        title: 'Empty fiels!',
        text: 'Fill them up to create ',
        icon: 'error',
        confirmButtonText: 'Okay'
        
      })
      
      this.errormsg='All fields are required!';
    

    }
  }

  userUpdate(){
    console.log(this.userForm.value,'updatedform');
    if (this.userForm.valid)
    {
      this.service.updateData(this.userForm.value,this.getparamid).subscribe((res)=>{
      });
    }else 
    {
      this.errormsg='all field is required';
    }


  }

 

}
