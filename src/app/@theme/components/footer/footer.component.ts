import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="https://kwikz.nz" target="_blank">Kwikz Team</a></b> 2019</span>
  `,
})
export class FooterComponent {
}
