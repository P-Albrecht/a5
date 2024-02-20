import { Component } from '@angular/core';

@Component({
  selector: 'app-enviroment',
  templateUrl: './enviroment.component.html',
  styleUrls: ['./enviroment.component.css']
})
export class EnviromentComponent {

  constructor() {}

  onClickMe() {
     console.log('...........')
  }

  treeTreeViewComponent = [{name: 'aaa'}, {name: 'bbb', children: [{name: 'bbb1'}, {name: 'bbb2'}]}, {name: 'ccc'}, {name: 'ddd', children: [{name: 'ddd1'}, {name: 'ddd2'}, {name: 'ddd3'}]} ]

  nodeSelectEventTreeViewComponent(response: any) {
    console.log(response)
  }
}