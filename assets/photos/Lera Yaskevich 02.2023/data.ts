
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const title: string = 'Lera Yaskevich 02.2023';
      const transliteratedUrl: string = 'Lera-Yaskevich 02.2023'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/Lera Yaskevich 02.2023/1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `1-${imageMode}.webp`
    },{
        url: `/assets/photos/Lera Yaskevich 02.2023/2-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `2-${imageMode}.webp`
    },{
        url: `/assets/photos/Lera Yaskevich 02.2023/3-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `3-${imageMode}.webp`
    },{
        url: `/assets/photos/Lera Yaskevich 02.2023/4-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `4-${imageMode}.webp`
    },{
        url: `/assets/photos/Lera Yaskevich 02.2023/5-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 752 },
            desktop: { width: 1000, height: 1505 }
        },
        label: `5-${imageMode}.webp`
    },{
        url: `/assets/photos/Lera Yaskevich 02.2023/6-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `6-${imageMode}.webp`
    },{
        url: `/assets/photos/Lera Yaskevich 02.2023/7-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `7-${imageMode}.webp`
    },{
        url: `/assets/photos/Lera Yaskevich 02.2023/8-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `8-${imageMode}.webp`
    },{
        url: `/assets/photos/Lera Yaskevich 02.2023/9-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `9-${imageMode}.webp`
    },{
        url: `/assets/photos/Lera Yaskevich 02.2023/10-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 634 },
            desktop: { width: 1000, height: 1268 }
        },
        label: `10-${imageMode}.webp`
    },{
        url: `/assets/photos/Lera Yaskevich 02.2023/11-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `11-${imageMode}.webp`
    },{
        url: `/assets/photos/Lera Yaskevich 02.2023/12-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 630 },
            desktop: { width: 1000, height: 1259 }
        },
        label: `12-${imageMode}.webp`
    },{
        url: `/assets/photos/Lera Yaskevich 02.2023/13-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `13-${imageMode}.webp`
    },{
        url: `/assets/photos/Lera Yaskevich 02.2023/14-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `14-${imageMode}.webp`
    },{
        url: `/assets/photos/Lera Yaskevich 02.2023/15-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `15-${imageMode}.webp`
    },{
        url: `/assets/photos/Lera Yaskevich 02.2023/16-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `16-${imageMode}.webp`
    },{
        url: `/assets/photos/Lera Yaskevich 02.2023/17-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `17-${imageMode}.webp`
    },
];


    return new PhotographySession(title, transliteratedUrl, photos);
  }
  