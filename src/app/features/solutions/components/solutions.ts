import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { LandingHeader } from '../../../shared/landing-header/component/landing-header';
import { LandingFooter } from "../../../shared/landing-footer/component/landing-footer";

@Component({
  selector: 'app-solutions',
  imports: [CommonModule, RouterModule, TranslocoModule, LandingHeader, LandingFooter],
  templateUrl: './solutions.html',
  styleUrl: './solutions.scss',
})
export class Solutions {

  constructor(private router: Router, private transloco: TranslocoService) {}

}
