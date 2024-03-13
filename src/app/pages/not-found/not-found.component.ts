import { Component } from '@angular/core';
import { ImgUrl } from '../../shared/constants';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

  imagePath = `${ImgUrl}/404.png`;

}
