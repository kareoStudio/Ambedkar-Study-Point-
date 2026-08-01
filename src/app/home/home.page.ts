import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  safeUrl: SafeResourceUrl;
  isOnline: boolean = true;
  websiteUrl: string = 'https://study-app-8e257.firebaseapp.com/';

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.websiteUrl);
    this.checkNetwork();
    
    // Network status listener
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.websiteUrl);
    });
    
    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  }

  checkNetwork() {
    this.isOnline = navigator.onLine;
  }

  retryConnection() {
    this.checkNetwork();
    if (this.isOnline) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.websiteUrl);
    }
  }
}
