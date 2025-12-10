import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignInAlt, faSignOutAlt, faTachometerAlt, faUsers, faCalendarCheck, faUserInjured ,faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  role: string = 'guest' ;

   faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faTachometerAlt = faTachometerAlt;
  faUsers = faUsers;
  faCalendarCheck = faCalendarCheck;
  faUserInjured = faUserInjured;
  faUserPlus  = faUserPlus ;

  
  isMobileView = false;
  isMenuOpen = false;
  isProfileMenuOpen = false;

  currentLang = 'en';

  userName = 'User';
  profilePic = 'https://ui-avatars.com/api/?name=User&background=24CC81&color=fff&rounded=true';

  constructor() {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobileView = window.innerWidth < 992;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  closeAllMenus() {
    this.isMenuOpen = false;
    this.isProfileMenuOpen = false;
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
  }

  logout() {
    console.log('Logged out');
  }
}
