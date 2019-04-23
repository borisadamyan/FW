import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServersListComponent implements OnInit {
  command;
  serverSelect;
  servers = [
    {
      name: 'Server name 1',
      description: 'short description or something 1.',
      cmd: 'ssh boris.adamyan@173.244.202.138'
    },
    // {
    //     name: 'Server name 2',
    //     description: 'short description or something 2.',
    //     cmd: 'server2:174.0.0.2'
    // },
    // {
    //     name: 'Server name 3',
    //     description: 'short description or something 3.',
    //     cmd: 'server3:174.0.0.3',
    // },
    // {
    //     name: 'Server name 4',
    //     description: 'short description or something 4.',
    //     cmd: 'server4:174.0.0.4'
    // }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  runCmd() {
    console.log('Run', this.command);
  }

}