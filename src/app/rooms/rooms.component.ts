import { Component, OnInit } from '@angular/core';
import { Rooms } from './rooms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  rooms: Rooms = {
    totalRooms: 100,
    availableRooms: 50,
    occupiedRooms: 50
  };

}
