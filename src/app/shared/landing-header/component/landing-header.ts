import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-landing-header',
  imports: [CommonModule, RouterModule, TranslocoModule],
  templateUrl: './landing-header.html',
  styleUrl: './landing-header.scss',
})
export class LandingHeader implements OnInit{
  currentLang: 'en' | 'ar' = 'en';

   constructor(private router: Router, private transloco: TranslocoService){}

  ngOnInit(): void {
    
  }

   toggleLanguage(): void {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.transloco.setActiveLang(this.currentLang);

    localStorage.setItem('preferredLang', this.currentLang);
    this.applyLanguageDirection();
  }

  private applyLanguageDirection(): void {
    document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.currentLang;
    
    document.body.classList.remove('rtl', 'ltr');
    document.body.classList.add(this.currentLang === 'ar' ? 'rtl' : 'ltr');
  }
}
