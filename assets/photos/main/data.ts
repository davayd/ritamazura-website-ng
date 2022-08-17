import {
  PhotographySession,
  RetouchSession,
  PhotoItem,
  ImageMode,
} from 'models/session';

export function generateSession(imageMode: ImageMode) {
  const title: string = 'main';
  const transliteratedUrl: string = 'main';
  const photos: PhotoItem[] = [
    {
      url: `/assets/photos/main/1-${imageMode}.webp`,
      sizes: {
        mobile: { width: 500, height: 344 },
        desktop: { width: 1000, height: 689 },
      },
      label: `1-${imageMode}.webp`,
      sessionRoute: '/photography/Olya-08.22-St.Petersburg',
    },
    {
      url: `/assets/photos/main/2-${imageMode}.webp`,
      sizes: {
        mobile: { width: 500, height: 625 },
        desktop: { width: 1000, height: 1250 },
      },
      label: `2-${imageMode}.webp`,
      sessionRoute: '/photography/Polina-2 08.2022-St.Petersburg',
    },
    {
      url: `/assets/photos/main/3-${imageMode}.webp`,
      sizes: {
        mobile: { width: 500, height: 625 },
        desktop: { width: 1000, height: 1250 },
      },
      label: `3-${imageMode}.webp`,
      sessionRoute: '/photography/Ayna-08.2022-St.Petersburg',
    },
    {
      url: `/assets/photos/main/4-${imageMode}.webp`,
      sizes: {
        mobile: { width: 500, height: 625 },
        desktop: { width: 1000, height: 1250 },
      },
      label: `4-${imageMode}.webp`,
      sessionRoute: '/photography/Polina-1 08.2022-St.Petersburg',
    },
  ];

  return new PhotographySession(title, transliteratedUrl, photos);
}
