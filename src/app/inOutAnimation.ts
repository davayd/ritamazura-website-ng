import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export const inOutAnimation = [
  trigger('inOutAnimation', [
    transition(':enter', [
      style({ height: 0, opacity: 0 }),
      animate(
        '.2s',
        keyframes([
          style({ height: 0, opacity: 0, offset: 0 }),
          style({ height: '*', opacity: 0.2, offset: 0.66 }),
          style({ height: '*', opacity: 1, offset: 1 })
        ])
      )
    ]),
    transition(':leave', [
      style({ height: '*', opacity: 1 }),
      animate(
        '.2s',
        keyframes([
          style({ height: '*', opacity: 1, offset: 0 }),
          style({ height: '*', opacity: 0.33, offset: 0.33 }),
          style({ height: 0, opacity: 0, offset: 1 })
        ])
      )
    ])
  ])
];
