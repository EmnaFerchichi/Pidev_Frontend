import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { useAnimation } from '@angular/animations';




@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.sass']
})
export class CreatecourseComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute ) { }
  getparamid2:any;

  
  

  


  

  ngOnInit(): void {
    this.getparamid2=this.router.snapshot.paramMap.get('id');
    this.service.getSingleData2(this.getparamid2).subscribe((res)=>{
      console.log(res,"res===>");
      this.courseForm.patchValue({
        name:res.data[0].name,
        date_d:res.data[0].date_d,
        date_s:res.data[0].date_s,
        description:res.data[0].description,
        price:res.data[0].price,
        image:res.data[0].image,


      })


    });

    
  }

  courseForm= new FormGroup({
    'name': new FormControl('',Validators.required),
    'date_d': new FormControl('',Validators.required),
    'date_s': new FormControl('',Validators.required),
    'description': new FormControl('',Validators.required),
    'price': new FormControl('',Validators.required),
    'image': new FormControl('',Validators.required),

  });

  courseSubmit(){
    if(this.courseForm.valid){
      this.service.createData2(this.courseForm.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.courseForm.reset();
      })
      Swal.fire(
        'Well Done!',
        'Course is well created!',
        'success'
      )

    }else{

      Swal.fire({
        title: 'Empty fiels!',
        text: 'Fill them up to create ',
        icon: 'error',
        confirmButtonText: 'Okay'
        
      })
      
    

    }

  }

  courseUpdate(){
    console.log(this.courseForm.value,'updatedform');
    



  }

}
