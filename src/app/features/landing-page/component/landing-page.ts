import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslocoService, TranslocoModule } from '@ngneat/transloco';
import { LandingHeader } from '../../../shared/landing-header/component/landing-header';
import { LandingFooter } from "../../../shared/landing-footer/component/landing-footer";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslocoModule, LandingHeader],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage implements OnInit, OnDestroy {

  constructor(private router: Router, private transloco: TranslocoService) {}

  carouselSlides = [
    {
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'landing.carousel.0.title',
      description: 'landing.carousel.0.description'
    },
    {
      image: '2.jpg',
      title: 'landing.carousel.1.title',
      description: 'landing.carousel.1.description'
    },
    {
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'landing.carousel.2.title',
      description: 'landing.carousel.2.description'
    },
    {
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'landing.carousel.3.title',
      description: 'landing.carousel.3.description'
    }
  ];

  currentSlide = 0;
  currentLang: 'en' | 'ar' = 'en';
  private autoSlideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();

    const savedLang = localStorage.getItem('preferredLang') as 'en' | 'ar';
    if (savedLang) {
      this.currentLang = savedLang;
      this.transloco.setActiveLang(savedLang);
      this.applyLanguageDirection();
    } else {
      this.currentLang = 'en';
      this.transloco.setActiveLang('en');
      this.applyLanguageDirection();
    }
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

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.carouselSlides.length;
    this.resetAutoSlide();
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? 
      this.carouselSlides.length - 1 : this.currentSlide - 1;
    this.resetAutoSlide();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.resetAutoSlide();
  }

  private resetAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    this.startAutoSlide();
  }

  navigateToLoginPage(): void {
    this.router.navigate(['/login']);
  }

  navigateToInfo(): void {
    this.router.navigate(['/about']);
  }

   scrollToContact(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  
}