
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const sessionId: string = '9'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/9/1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `1-${imageMode}.webp`
    },{
        url: `/assets/photos/9/2-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `2-${imageMode}.webp`
    },{
        url: `/assets/photos/9/3-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 711 },
            desktop: { width: 1000, height: 1421 }
        },
        label: `3-${imageMode}.webp`
    },{
        url: `/assets/photos/9/4-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `4-${imageMode}.webp`
    },{
        url: `/assets/photos/9/5-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 743 },
            desktop: { width: 1000, height: 1487 }
        },
        label: `5-${imageMode}.webp`
    },{
        url: `/assets/photos/9/6-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 695 },
            desktop: { width: 1000, height: 1390 }
        },
        label: `6-${imageMode}.webp`
    },{
        url: `/assets/photos/9/7-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 685 },
            desktop: { width: 1000, height: 1371 }
        },
        label: `7-${imageMode}.webp`
    },{
        url: `/assets/photos/9/8-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 695 },
            desktop: { width: 1000, height: 1391 }
        },
        label: `8-${imageMode}.webp`
    },{
        url: `/assets/photos/9/9-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 648 },
            desktop: { width: 1000, height: 1295 }
        },
        label: `9-${imageMode}.webp`
    },{
        url: `/assets/photos/9/10-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `10-${imageMode}.webp`
    },{
        url: `/assets/photos/9/11-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `11-${imageMode}.webp`
    },{
        url: `/assets/photos/9/12-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `12-${imageMode}.webp`
    },
];


    return new PhotographySession(sessionId, photos);
  }
  