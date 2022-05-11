import { compileDeclareDirectiveFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.sass']
})
export class ReadComponent implements OnInit {

  constructor(private service :ApiserviceService) { }
  tite="pagination";
  POSTS:any;
  page:number=1;
  count :number=0;
  tableSize:number=3;
  tableSizes:any =[5,10,15,20];


readData:any;
searchText:any;
  ngOnInit(): void {
    this.getAllData();
    for (let i = 1; i <= 11; i++) {
      this.readData.push({
        id_qcm: i,
        
      
      });
    }
  }

  //getdeleteid
  
    deleteID(id_qcm: any) {
      console.log(id_qcm,'deleteid==>');
      Swal.fire({
        title: 'Do you want to delete this quiz?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'delete',
        
        denyButtonText: `Don't delete`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Quiz Deleted!', '', 'success')
          this.service.deleteData(id_qcm).subscribe((res=>{
            console.log(res,"deleteres==>");
            this.getAllData();
        
            
          }));
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }

      });
      


      
    }

    getAllData(){
      this.service.getAllData().subscribe((res)=>{
        console.log(res,"res==>");
        this.readData=res.data;
      });
    }

    onTableDataChange(event:any){
      this.page=event;
      this.getAllData();
    }
    onTableSizeChange(event:any):void{
     this.tableSize=event.target.value;
     this.page=1;
     this.getAllData()
   
   
   }
   elements: any = [];


}
