import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslocoService, TranslocoModule } from '@ngneat/transloco';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LandingHeader } from "../../../shared/landing-header/component/landing-header";
import { LandingFooter } from '../../../shared/landing-footer/component/landing-footer';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslocoModule, ReactiveFormsModule, LandingHeader, LandingFooter],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact implements OnInit {

  contactForm: FormGroup;
  isSubmitting = false;
  currentLang: 'en' | 'ar' = 'en';

  faqs = [
    { 
      question: 'contact.faq.questions.0.question',
      answer: 'contact.faq.questions.0.answer',
      open: false
    },
    { 
      question: 'contact.faq.questions.1.question',
      answer: 'contact.faq.questions.1.answer',
      open: false
    },
    { 
      question: 'contact.faq.questions.2.question',
      answer: 'contact.faq.questions.2.answer',
      open: false
    },
    { 
      question: 'contact.faq.questions.3.question',
      answer: 'contact.faq.questions.3.answer',
      open: false
    },
    { 
      question: 'contact.faq.questions.4.question',
      answer: 'contact.faq.questions.4.answer',
      open: false
    }
  ];

  constructor(
    private router: Router, 
    private transloco: TranslocoService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: [''],
      inquiryType: [''],
      message: ['', Validators.required],
      newsletter: [false]
    });
  }

  ngOnInit(): void {
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

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        this.isSubmitting = false;
        this.contactForm.reset();
        
        // Show success message (you can implement a toast notification here)
        alert(this.currentLang === 'en' ? 'Thank you for your message! We will get back to you soon.' : 'شكراً على رسالتك! سنتواصل معك قريباً.');
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  startLiveChat(): void {
    // Implement live chat functionality
    console.log('Starting live chat...');
    alert(this.currentLang === 'en' ? 'Live chat will open in a new window.' : 'سيتم فتح الدردشة الحية في نافذة جديدة.');
  }

  requestDemo(): void {
    // Navigate to demo request or open modal
    console.log('Demo requested');
    alert(this.currentLang === 'en' ? 'Demo request received! We will contact you to schedule a demonstration.' : 'تم استلام طلب العرض التجريبي! سنتواصل معك لجدولة العرض.');
  }

  scrollToForm(): void {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openMap(location: string): void {
    // Open maps based on location
    const mapsUrl = this.getMapsUrl(location);
    window.open(mapsUrl, '_blank');
  }

 private getMapsUrl(location: string): string {
  const locations: { [key: string]: string } = {
    cairo: 'https://maps.app.goo.gl/XUWtufUC3a4TEQsN7?g_st=aw',
    riyadh: 'https://maps.google.com/?q=Riyadh+Saudi+Arabia',
    dubai: 'https://maps.google.com/?q=Dubai+UAE'
  };
  return locations[location] || locations['cairo']; // <-- bracket notation
}


  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}