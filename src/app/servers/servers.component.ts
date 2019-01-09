import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  allowMsg="Yes";
  inputValue="Apps Server";
  
  constructor() {
  setTimeout(()=>{this.allowNewServer=true;},2000)
  
  }

  ngOnInit() {
  }
  onServerCreation(){
  
     this.allowMsg="Hi";
  }
  getServerName(evt:any){
  console.log(evt);
  this.inputValue=evt.target.value;
     
      
  }

}
