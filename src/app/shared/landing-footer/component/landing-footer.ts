import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-landing-footer',
   imports: [CommonModule, RouterModule, TranslocoModule],
  templateUrl: './landing-footer.html',
  styleUrl: './landing-footer.scss',
})
export class LandingFooter {

}
