
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const sessionId: string = '8'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/8/1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `1-${imageMode}.webp`
    },{
        url: `/assets/photos/8/2-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `2-${imageMode}.webp`
    },{
        url: `/assets/photos/8/3-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 680 },
            desktop: { width: 1000, height: 1359 }
        },
        label: `3-${imageMode}.webp`
    },{
        url: `/assets/photos/8/4-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `4-${imageMode}.webp`
    },{
        url: `/assets/photos/8/5-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `5-${imageMode}.webp`
    },{
        url: `/assets/photos/8/6-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 687 },
            desktop: { width: 1000, height: 1374 }
        },
        label: `6-${imageMode}.webp`
    },{
        url: `/assets/photos/8/7-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 694 },
            desktop: { width: 1000, height: 1389 }
        },
        label: `7-${imageMode}.webp`
    },{
        url: `/assets/photos/8/8-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `8-${imageMode}.webp`
    },{
        url: `/assets/photos/8/9-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 692 },
            desktop: { width: 1000, height: 1385 }
        },
        label: `9-${imageMode}.webp`
    },{
        url: `/assets/photos/8/10-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 694 },
            desktop: { width: 1000, height: 1388 }
        },
        label: `10-${imageMode}.webp`
    },{
        url: `/assets/photos/8/11-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 674 },
            desktop: { width: 1000, height: 1347 }
        },
        label: `11-${imageMode}.webp`
    },{
        url: `/assets/photos/8/12-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `12-${imageMode}.webp`
    },{
        url: `/assets/photos/8/13-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 713 },
            desktop: { width: 1000, height: 1427 }
        },
        label: `13-${imageMode}.webp`
    },{
        url: `/assets/photos/8/14-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `14-${imageMode}.webp`
    },
];


    return new PhotographySession(sessionId, photos);
  }
  