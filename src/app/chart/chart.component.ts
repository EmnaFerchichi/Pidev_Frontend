import { Component, OnInit } from '@angular/core';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js'
import { ApiserviceService } from 'src/app/apiservice.service';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnInit {

  constructor(private service :ApiserviceService) { }

  ngOnInit(): void {
    this.createChart();
    this.getAllData2();

  }
  readData2:any;

  getAllData2(){
    this.service.getAllData2().subscribe((res)=>{
      console.log(res,"res==>");
      this.readData2=res.data;
    });
  }
  createChart(): void {
    Chart.register(...registerables);
    const data = {
      labels: ['2021','2022','2023','2024','2025'],
      datasets: [{
        label: 'Coursedataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [this.readData2, 30,10,60,40],
        len: this.getAllData2.length,

      }]
};
const options = {
  scales: {
    y: {
      beginAtZero: true,
      display: false
    }
  }
}

const config: ChartConfiguration = {
  type: 'line',
  data: data,
  options: options
}
const chartItem: ChartItem = document.getElementById('my-chart') as ChartItem;
new Chart(chartItem, config)


  }

}
