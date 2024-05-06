import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  selectedTab: string = 'all'; // Default selected tab

  
  @Output() tabSelected = new EventEmitter<string>();

  selectTab(tabName: string) {
    this.selectedTab = tabName;
    this.tabSelected.emit(tabName); // Emit the selected tab name
  }
}
