import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-readcourse',
  templateUrl: './readcourse.component.html',
  styleUrls: ['./readcourse.component.sass']
})
export class ReadcourseComponent implements OnInit {

  constructor(private service :ApiserviceService) { }

  readData2:any;


  ngOnInit(): void {
    this.getAllData2();

  }


  getAllData2(){
    this.service.getAllData2().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData2=res.data;
    });
  }


  //getdeleteid
  
  deleteID2(id: any) {
    console.log(id,'deleteid==>');
    Swal.fire({
      title: 'Do you want to delete this course?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'delete',
      
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Quiz Deleted!', '', 'success')
        this.service.deleteData2(id).subscribe((res=>{
          console.log(res,"deleteres==>");
          this.getAllData2();

      
          
        }));
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }

    });
    


    
  }

  

}
