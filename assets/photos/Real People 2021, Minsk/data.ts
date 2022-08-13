
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const title: string = 'Real People 2021, Minsk';
      const transliteratedUrl: string = 'Real-People 2021-Minsk'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/Real People 2021, Minsk/1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 612 },
            desktop: { width: 1000, height: 1225 }
        },
        label: `1-${imageMode}.webp`
    },{
        url: `/assets/photos/Real People 2021, Minsk/2-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 333 },
            desktop: { width: 1000, height: 667 }
        },
        label: `2-${imageMode}.webp`
    },{
        url: `/assets/photos/Real People 2021, Minsk/3-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `3-${imageMode}.webp`
    },{
        url: `/assets/photos/Real People 2021, Minsk/4-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `4-${imageMode}.webp`
    },{
        url: `/assets/photos/Real People 2021, Minsk/5-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `5-${imageMode}.webp`
    },{
        url: `/assets/photos/Real People 2021, Minsk/6-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 686 },
            desktop: { width: 1000, height: 1372 }
        },
        label: `6-${imageMode}.webp`
    },{
        url: `/assets/photos/Real People 2021, Minsk/7-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `7-${imageMode}.webp`
    },
];


    return new PhotographySession(title, transliteratedUrl, photos);
  }
  