
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const title: string = 'main';
      const transliteratedUrl: string = 'main'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/main/1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 344 },
            desktop: { width: 1000, height: 689 }
        },
        label: `1-${imageMode}.webp`
    },{
        url: `/assets/photos/main/2-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `2-${imageMode}.webp`
    },{
        url: `/assets/photos/main/3-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `3-${imageMode}.webp`
    },{
        url: `/assets/photos/main/4-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `4-${imageMode}.webp`
    },{
        url: `/assets/photos/main/5-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `5-${imageMode}.webp`
    },{
        url: `/assets/photos/main/6-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 395 },
            desktop: { width: 1000, height: 791 }
        },
        label: `6-${imageMode}.webp`
    },{
        url: `/assets/photos/main/7-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1251 }
        },
        label: `7-${imageMode}.webp`
    },{
        url: `/assets/photos/main/8-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 448 },
            desktop: { width: 1000, height: 895 }
        },
        label: `8-${imageMode}.webp`
    },{
        url: `/assets/photos/main/9-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `9-${imageMode}.webp`
    },
];


    return new PhotographySession(title, transliteratedUrl, photos);
  }
  