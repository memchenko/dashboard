import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() onClick;

  open = false;

  onToggle(): void {
    this.open = !this.open;

    this.onClick(this.open);
  }
}
