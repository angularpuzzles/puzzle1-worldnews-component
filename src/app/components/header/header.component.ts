import { Component } from '@angular/core';
import { ImgUrl } from '../../shared/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  imagePath = `${ImgUrl}/GlobeLogo.png`;

}
