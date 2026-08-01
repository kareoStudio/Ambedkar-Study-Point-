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

  constructor(private sanitizer: DomSanitizer) {
    // 🔥 TERA WEBSITE
    const websiteUrl = 'https://study-app-8e257.firebaseapp.com/';
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(websiteUrl);
  }
}
