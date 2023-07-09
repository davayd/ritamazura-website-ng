
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const sessionId: string = '16'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/16/1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1249 }
        },
        label: `1-${imageMode}.webp`
    },{
        url: `/assets/photos/16/2-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `2-${imageMode}.webp`
    },{
        url: `/assets/photos/16/3-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `3-${imageMode}.webp`
    },{
        url: `/assets/photos/16/4-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 653 },
            desktop: { width: 1000, height: 1306 }
        },
        label: `4-${imageMode}.webp`
    },{
        url: `/assets/photos/16/5-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 691 },
            desktop: { width: 1000, height: 1381 }
        },
        label: `5-${imageMode}.webp`
    },{
        url: `/assets/photos/16/6-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 676 },
            desktop: { width: 1000, height: 1352 }
        },
        label: `6-${imageMode}.webp`
    },{
        url: `/assets/photos/16/7-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `7-${imageMode}.webp`
    },{
        url: `/assets/photos/16/8-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `8-${imageMode}.webp`
    },{
        url: `/assets/photos/16/9-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 649 },
            desktop: { width: 1000, height: 1299 }
        },
        label: `9-${imageMode}.webp`
    },{
        url: `/assets/photos/16/10-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `10-${imageMode}.webp`
    },{
        url: `/assets/photos/16/11-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `11-${imageMode}.webp`
    },{
        url: `/assets/photos/16/12-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `12-${imageMode}.webp`
    },{
        url: `/assets/photos/16/13-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `13-${imageMode}.webp`
    },{
        url: `/assets/photos/16/14-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `14-${imageMode}.webp`
    },{
        url: `/assets/photos/16/15-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `15-${imageMode}.webp`
    },{
        url: `/assets/photos/16/17-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 664 },
            desktop: { width: 1000, height: 1329 }
        },
        label: `17-${imageMode}.webp`
    },{
        url: `/assets/photos/16/18-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `18-${imageMode}.webp`
    },{
        url: `/assets/photos/16/19-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 728 },
            desktop: { width: 1000, height: 1456 }
        },
        label: `19-${imageMode}.webp`
    },
];


    return new PhotographySession(sessionId, photos);
  }
  