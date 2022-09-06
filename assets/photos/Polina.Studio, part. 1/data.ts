
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const title: string = 'Polina.Studio, part. 1';
      const transliteratedUrl: string = 'Polina.Studio,-part. 1'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/Polina.Studio, part. 1/1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `1-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina.Studio, part. 1/2-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `2-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina.Studio, part. 1/3-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 680 },
            desktop: { width: 1000, height: 1359 }
        },
        label: `3-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina.Studio, part. 1/4-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `4-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina.Studio, part. 1/5-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `5-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina.Studio, part. 1/6-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 687 },
            desktop: { width: 1000, height: 1374 }
        },
        label: `6-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina.Studio, part. 1/7-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 694 },
            desktop: { width: 1000, height: 1389 }
        },
        label: `7-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina.Studio, part. 1/8-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `8-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina.Studio, part. 1/9-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 692 },
            desktop: { width: 1000, height: 1385 }
        },
        label: `9-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina.Studio, part. 1/10-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 694 },
            desktop: { width: 1000, height: 1388 }
        },
        label: `10-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina.Studio, part. 1/11-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 674 },
            desktop: { width: 1000, height: 1347 }
        },
        label: `11-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina.Studio, part. 1/12-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `12-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina.Studio, part. 1/13-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 713 },
            desktop: { width: 1000, height: 1427 }
        },
        label: `13-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina.Studio, part. 1/14-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `14-${imageMode}.webp`
    },
];


    return new PhotographySession(title, transliteratedUrl, photos);
  }
  