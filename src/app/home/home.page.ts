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
  isOnline: boolean = navigator.onLine;
  websiteUrl: string = 'https://study-app-8e257.firebaseapp.com/';

  constructor(private sanitizer: DomSanitizer) {
    this.loadUrl();
    
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.loadUrl();
    });
    
    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  }

  loadUrl() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.websiteUrl);
  }

  retry() {
    this.isOnline = navigator.onLine;
    if (this.isOnline) {
      this.loadUrl();
    }
  }
}
