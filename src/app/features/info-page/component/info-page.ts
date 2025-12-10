import { Component } from '@angular/core';
import { Header } from "../../../shared/header/component/header";
import { LandingHeader } from "../../../shared/landing-header/component/landing-header";
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { LandingFooter } from "../../../shared/landing-footer/component/landing-footer";

@Component({
  selector: 'app-info-page',
 imports: [CommonModule, RouterModule, TranslocoModule, LandingHeader, LandingFooter],
  templateUrl: './info-page.html',
  styleUrl: './info-page.scss',
})
export class InfoPage {

  constructor(private router: Router, private transloco: TranslocoService){}

}
