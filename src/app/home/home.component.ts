import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  export class HomeComponent implements OnInit {
  topics = [{id:0, titulo:'', user_id:0},{id:1, title:'redes', user_id:2}, {id:2, title:'programacion', user_id:2}
  ,{id:3, title:'programacion web', user_id:2}];

  newTopic = {id:0, title:'', user_id:0};
  pages = [{url:'', label:'', active:false}]

  constructor(private rest: ApiRestService,
    private msg: ToastrService) { }

  ngOnInit(): void {
    this.readTopics();
  }

  readTopics(url:string = ''){
    this.rest.getTopics(url).subscribe(
      Response => {
        this.topics = Response.data;
        this.pages = Response.links;
        
      }, error=> {
        this.msg.error('Se ha producido un error. Intente de nuevo', error.status)
      }
    );
  }

  createTopic(){
    this.rest.postTopics(this.newTopic).subscribe(
      Response => {
        this.readTopics();
        this.msg.success('Se ha creado un nuevo topico con exito :)')
      }, error => {
        this.msg.error('Se ha producido un error. Intente de nuevo', error.status)
      }
    );
  }

}
