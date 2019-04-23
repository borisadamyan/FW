import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  serverSelect = false;
  @Input() server;
  command_string = '';

  constructor() {
  }

  ngOnInit() {
  }

  addServer(event, server) {
    this.serverSelect = true;
    this.command_string += server.cmd;
    console.log('Added Server: ', this.command_string);
  }

  removeServer(event, server) {
    this.serverSelect = false;
    this.command_string = this.command_string.replace(server.cmd, '');
    console.log('Server Removed: ', this.command_string);
  }

}
