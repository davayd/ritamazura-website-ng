
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const title: string = 'other';
      const transliteratedUrl: string = 'other'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/other/me-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 400 },
            desktop: { width: 1000, height: 800 }
        },
        label: `me-${imageMode}.webp`
    },
];


    return new PhotographySession(title, transliteratedUrl, photos);
  }
  