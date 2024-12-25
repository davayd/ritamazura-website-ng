import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { inOutAnimation } from './inOutAnimation';
import { TranslocoService } from '@ngneat/transloco';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [inOutAnimation],
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgClass, NgIf],
})
export class AppComponent implements OnDestroy {
  isMenuOpened = false;
  isHandset = false;
  isLanguageMenuOpened = false;

  translocoService = inject(TranslocoService);

  availableLangs = ['ru', 'en'];
  currentLang = this.translocoService.getActiveLang();

  private destroy$ = new Subject<void>();

  constructor(private _breakpointObserver: BreakpointObserver) {
    this._breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.isMenuOpened = false;
        this.isHandset = result.matches;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
    document.body.classList.toggle('header--menu-open');
  }

  closeMenu() {
    this.isMenuOpened = false;
    document.body.classList.remove('header--menu-open');
  }

  setLanguage(lang: string) {
    this.currentLang = lang;
    this.translocoService.setActiveLang(lang);
    this.isLanguageMenuOpened = false;
  }
}
