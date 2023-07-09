
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const sessionId: string = '11'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/11/1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `1-${imageMode}.webp`
    },{
        url: `/assets/photos/11/2-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `2-${imageMode}.webp`
    },{
        url: `/assets/photos/11/3-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `3-${imageMode}.webp`
    },{
        url: `/assets/photos/11/4-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `4-${imageMode}.webp`
    },{
        url: `/assets/photos/11/5-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 673 },
            desktop: { width: 1000, height: 1346 }
        },
        label: `5-${imageMode}.webp`
    },{
        url: `/assets/photos/11/6-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 697 },
            desktop: { width: 1000, height: 1395 }
        },
        label: `6-${imageMode}.webp`
    },{
        url: `/assets/photos/11/7-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 687 },
            desktop: { width: 1000, height: 1374 }
        },
        label: `7-${imageMode}.webp`
    },{
        url: `/assets/photos/11/8-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 601 },
            desktop: { width: 1000, height: 1202 }
        },
        label: `8-${imageMode}.webp`
    },{
        url: `/assets/photos/11/9-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `9-${imageMode}.webp`
    },{
        url: `/assets/photos/11/10-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `10-${imageMode}.webp`
    },
];


    return new PhotographySession(sessionId, photos);
  }
  