
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const sessionId: string = '14'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/14/1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `1-${imageMode}.webp`
    },{
        url: `/assets/photos/14/2-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `2-${imageMode}.webp`
    },{
        url: `/assets/photos/14/3-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `3-${imageMode}.webp`
    },{
        url: `/assets/photos/14/4-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `4-${imageMode}.webp`
    },{
        url: `/assets/photos/14/5-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 752 },
            desktop: { width: 1000, height: 1505 }
        },
        label: `5-${imageMode}.webp`
    },{
        url: `/assets/photos/14/6-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `6-${imageMode}.webp`
    },{
        url: `/assets/photos/14/7-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `7-${imageMode}.webp`
    },{
        url: `/assets/photos/14/8-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `8-${imageMode}.webp`
    },{
        url: `/assets/photos/14/9-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `9-${imageMode}.webp`
    },{
        url: `/assets/photos/14/10-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 634 },
            desktop: { width: 1000, height: 1268 }
        },
        label: `10-${imageMode}.webp`
    },{
        url: `/assets/photos/14/11-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `11-${imageMode}.webp`
    },{
        url: `/assets/photos/14/12-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 630 },
            desktop: { width: 1000, height: 1259 }
        },
        label: `12-${imageMode}.webp`
    },{
        url: `/assets/photos/14/13-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `13-${imageMode}.webp`
    },{
        url: `/assets/photos/14/14-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `14-${imageMode}.webp`
    },{
        url: `/assets/photos/14/15-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `15-${imageMode}.webp`
    },{
        url: `/assets/photos/14/16-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `16-${imageMode}.webp`
    },{
        url: `/assets/photos/14/17-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `17-${imageMode}.webp`
    },
];


    return new PhotographySession(sessionId, photos);
  }
  