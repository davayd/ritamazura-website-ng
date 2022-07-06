import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  isMenuOpened = false;
  isHandset = false;
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
}
