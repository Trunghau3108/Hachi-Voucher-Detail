import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drawer-product-detail',
  templateUrl: './drawer-product-detail.component.html',
  styleUrls: ['./drawer-product-detail.component.scss']
})
export class DrawerProductDetailComponent {
  @Input() items!: any[];
  @Input() mode!: string;
  @Input() position!: string;
  @Input() expanded!: boolean;
  
  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();
}
