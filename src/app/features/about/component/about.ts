import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslocoService, TranslocoModule } from '@ngneat/transloco';
import { LandingHeader } from '../../../shared/landing-header/component/landing-header';
import { LandingFooter } from '../../../shared/landing-footer/component/landing-footer';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslocoModule, LandingHeader, LandingFooter],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About implements OnInit {

  constructor(private router: Router, private transloco: TranslocoService) {}


  ngOnInit(): void {

  }




  scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  requestDemo(): void {
    // Implement demo request logic
    console.log('Demo requested');
  }

}