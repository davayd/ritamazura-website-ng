import { Pipe, PipeTransform } from '@angular/core';
import { SITE_MAP } from 'assets/sitemap';

@Pipe({ name: 'routeToSession', standalone: true })
export class RouteToSessionPipe implements PipeTransform {
  SITE_MAP = SITE_MAP;

  transform(label?: string): string {
    if (!label) {
      return '/not-found';
    }

    const targetDir = SITE_MAP[label.charAt(0)];

    return `/photography/${targetDir.routePath}`;
  }
}
