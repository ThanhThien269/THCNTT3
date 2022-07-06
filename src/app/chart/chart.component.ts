import { Component, OnInit } from '@angular/core';
import { Database, onValue, ref, set } from "@angular/fire/database";
import { doc, onSnapshot } from "firebase/firestore";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public ListItem:Array<any>=[];
  public time:Array<any>=[];
  public lineChartLabels=this.time;
  public lineChartData:any[]=[
    {data:"",label:'Gas'}
  ];


  constructor(public db:Database,) {  const starCountRef = ref(this.db, 'FirebaseIOT/' );
  // const unsub = onSnapshot(doc(,"Gas","time"), (doc)=>{
  //   console.log(doc.data());
  // })
  onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
if(this.ListItem.length <10 && this.time.length <10){
  this.ListItem.push(data.gas)
  console.log(this.ListItem)
  this.time.push(data.time)
  console.log(this.time)
}else
{
  this.ListItem.shift();
  this.time.shift();
  
}
 this.lineChartData = [
  {data:this.ListItem,label:'Gas'}
];

}); }

  ngOnInit(): void {
  }

  
//   setData(){
// let d= new Date();

// const starCountRef = ref(this.db, 'FirebaseIOT/' );
// onValue(starCountRef, (snapshot) => {
// const data = snapshot.val();

// set(ref(this.db, 'Date/' ), {
// hour: d.getHours().toString() + ":" + d.getMinutes().toString()+ ":" +d.getSeconds(),
// gas:data.gas
// })
// .then(() => {


// })
// .catch((error) => {
//   // The write failed...
// });
// });

//   }
}

