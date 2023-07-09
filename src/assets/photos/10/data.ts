
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const sessionId: string = '10'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/10/1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `1-${imageMode}.webp`
    },{
        url: `/assets/photos/10/2-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `2-${imageMode}.webp`
    },{
        url: `/assets/photos/10/3-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `3-${imageMode}.webp`
    },{
        url: `/assets/photos/10/4-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `4-${imageMode}.webp`
    },{
        url: `/assets/photos/10/5-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `5-${imageMode}.webp`
    },{
        url: `/assets/photos/10/6-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `6-${imageMode}.webp`
    },{
        url: `/assets/photos/10/7-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `7-${imageMode}.webp`
    },{
        url: `/assets/photos/10/8-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `8-${imageMode}.webp`
    },{
        url: `/assets/photos/10/9-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `9-${imageMode}.webp`
    },{
        url: `/assets/photos/10/10-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 659 },
            desktop: { width: 1000, height: 1319 }
        },
        label: `10-${imageMode}.webp`
    },
];


    return new PhotographySession(sessionId, photos);
  }
  