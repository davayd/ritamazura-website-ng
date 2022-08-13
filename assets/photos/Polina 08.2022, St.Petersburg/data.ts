
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const title: string = 'Polina 08.2022, St.Petersburg';
      const transliteratedUrl: string = 'Polina-08.2022-St.Petersburg'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `1-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/2-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `2-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/3-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `3-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/4-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `4-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/5-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `5-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/6-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `6-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/7-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `7-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/8-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `8-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/9-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `9-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/10-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `10-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/11-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `11-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/12-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `12-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/13-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `13-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/14-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `14-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/15-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `15-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/16-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `16-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/17-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 360 },
            desktop: { width: 1000, height: 719 }
        },
        label: `17-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/18-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `18-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/19-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `19-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/20-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `20-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/21-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `21-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/22-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `22-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/23-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `23-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/24-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `24-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/25-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `25-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/26-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 336 },
            desktop: { width: 1000, height: 673 }
        },
        label: `26-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/27-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `27-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/28-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `28-${imageMode}.webp`
    },{
        url: `/assets/photos/Polina 08.2022, St.Petersburg/29-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `29-${imageMode}.webp`
    },
];


    return new PhotographySession(title, transliteratedUrl, photos);
  }
  