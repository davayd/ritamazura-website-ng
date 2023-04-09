
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const title: string = 'Maria 03.23';
      const transliteratedUrl: string = 'Maria-03.23'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/Maria 03.23/1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 653 },
            desktop: { width: 1000, height: 1305 }
        },
        label: `1-${imageMode}.webp`
    },{
        url: `/assets/photos/Maria 03.23/2-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `2-${imageMode}.webp`
    },{
        url: `/assets/photos/Maria 03.23/3-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `3-${imageMode}.webp`
    },{
        url: `/assets/photos/Maria 03.23/4-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 663 },
            desktop: { width: 1000, height: 1326 }
        },
        label: `4-${imageMode}.webp`
    },{
        url: `/assets/photos/Maria 03.23/5-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 688 },
            desktop: { width: 1000, height: 1375 }
        },
        label: `5-${imageMode}.webp`
    },{
        url: `/assets/photos/Maria 03.23/6-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `6-${imageMode}.webp`
    },{
        url: `/assets/photos/Maria 03.23/7-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 681 },
            desktop: { width: 1000, height: 1363 }
        },
        label: `7-${imageMode}.webp`
    },{
        url: `/assets/photos/Maria 03.23/8-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `8-${imageMode}.webp`
    },{
        url: `/assets/photos/Maria 03.23/9-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `9-${imageMode}.webp`
    },{
        url: `/assets/photos/Maria 03.23/10-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `10-${imageMode}.webp`
    },{
        url: `/assets/photos/Maria 03.23/11-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `11-${imageMode}.webp`
    },{
        url: `/assets/photos/Maria 03.23/12-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 680 },
            desktop: { width: 1000, height: 1360 }
        },
        label: `12-${imageMode}.webp`
    },
];


    return new PhotographySession(title, transliteratedUrl, photos);
  }
  