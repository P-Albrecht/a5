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

  treeTreeViewComponent = [{name: 'aaa'}, {name: 'bbb', children: [{name: 'bbb1'}, {name: 'bbb2'}]}, {name: 'ccc'} ]

  nodeSelectEventTreeViewComponent(response: any) {
    console.log(response)
  }
}