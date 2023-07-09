
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const sessionId: string = '6'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/6/1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `1-${imageMode}.webp`
    },{
        url: `/assets/photos/6/2-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 344 },
            desktop: { width: 1000, height: 689 }
        },
        label: `2-${imageMode}.webp`
    },{
        url: `/assets/photos/6/3-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `3-${imageMode}.webp`
    },{
        url: `/assets/photos/6/4-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `4-${imageMode}.webp`
    },{
        url: `/assets/photos/6/8-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `8-${imageMode}.webp`
    },{
        url: `/assets/photos/6/9-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 395 },
            desktop: { width: 1000, height: 791 }
        },
        label: `9-${imageMode}.webp`
    },{
        url: `/assets/photos/6/10-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1251 }
        },
        label: `10-${imageMode}.webp`
    },{
        url: `/assets/photos/6/11-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 448 },
            desktop: { width: 1000, height: 895 }
        },
        label: `11-${imageMode}.webp`
    },{
        url: `/assets/photos/6/12-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `12-${imageMode}.webp`
    },{
        url: `/assets/photos/6/13-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `13-${imageMode}.webp`
    },{
        url: `/assets/photos/6/14-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `14-${imageMode}.webp`
    },{
        url: `/assets/photos/6/15-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 312 },
            desktop: { width: 1000, height: 624 }
        },
        label: `15-${imageMode}.webp`
    },{
        url: `/assets/photos/6/16-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 653 },
            desktop: { width: 1000, height: 1305 }
        },
        label: `16-${imageMode}.webp`
    },{
        url: `/assets/photos/6/17-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 500 },
            desktop: { width: 1000, height: 1000 }
        },
        label: `17-${imageMode}.webp`
    },
];


    return new PhotographySession(sessionId, photos);
  }
  