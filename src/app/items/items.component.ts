import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() public value ="1";
  @Output() public nameChanged = new EventEmitter();

  onClicked() {
    this.nameChanged.emit(this.value);

  }

  constructor() { }

  ngOnInit() {
  }

}
