import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {} from "@angular/core/src/metadata/directives";

@Component({
  selector: "app-footer-component",
  templateUrl: "./footer-component.component.html",
  styleUrls: ["./footer-component.component.css"]
})
export class FooterComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() inputTodos = [];
  @Output() clearEvent = new EventEmitter<any>();
  @Output() filterTypeEven = new EventEmitter<string>();

  filterType = "All";

  clear() {
    this.clearEvent.emit();
  }

  log() {
    console.log("log from footer");
  }

  changeFilterType(type) {
    this.filterType = type;
    this.filterTypeEven.emit(this.filterType);
  }
}
