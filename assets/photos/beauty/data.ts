
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const title: string = 'beauty';
      const transliteratedUrl: string = 'beauty'
      const photos: [PhotoItem, PhotoItem][] = [[{
        url: `/assets/photos/beauty/10 Евгения Рязанова-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 667 },
            desktop: { width: 1000, height: 1333 }
        },
        label: `10 Евгения Рязанова-${imageMode}.webp`
    },{
        url: `/assets/photos/beauty/10.1 Евгения Рязанова-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 667 },
            desktop: { width: 1000, height: 1333 }
        },
        label: `10.1 Евгения Рязанова-${imageMode}.webp`
    },],[{
        url: `/assets/photos/beauty/11 Tawny Horton-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 601 },
            desktop: { width: 1000, height: 1202 }
        },
        label: `11 Tawny Horton-${imageMode}.webp`
    },{
        url: `/assets/photos/beauty/11.1 Tawny Horton-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 601 },
            desktop: { width: 1000, height: 1202 }
        },
        label: `11.1 Tawny Horton-${imageMode}.webp`
    },],[{
        url: `/assets/photos/beauty/12 Domo Jenkins-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `12 Domo Jenkins-${imageMode}.webp`
    },{
        url: `/assets/photos/beauty/12.1 Domo Jenkins-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `12.1 Domo Jenkins-${imageMode}.webp`
    },],[{
        url: `/assets/photos/beauty/17 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 695 },
            desktop: { width: 1000, height: 1390 }
        },
        label: `17 Aleksander Kroft-${imageMode}.webp`
    },{
        url: `/assets/photos/beauty/17.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 695 },
            desktop: { width: 1000, height: 1390 }
        },
        label: `17.1 Aleksander Kroft-${imageMode}.webp`
    },],[{
        url: `/assets/photos/beauty/18 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 749 },
            desktop: { width: 1000, height: 1499 }
        },
        label: `18 Aleksander Kroft-${imageMode}.webp`
    },{
        url: `/assets/photos/beauty/18.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 749 },
            desktop: { width: 1000, height: 1499 }
        },
        label: `18.1 Aleksander Kroft-${imageMode}.webp`
    },],[{
        url: `/assets/photos/beauty/21 Julia David-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `21 Julia David-${imageMode}.webp`
    },{
        url: `/assets/photos/beauty/21.1 Julia David-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `21.1 Julia David-${imageMode}.webp`
    },],[{
        url: `/assets/photos/beauty/31 Polina Solovyeva-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 740 },
            desktop: { width: 1000, height: 1479 }
        },
        label: `31 Polina Solovyeva-${imageMode}.webp`
    },{
        url: `/assets/photos/beauty/31.1 Polina Solovyeva-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 740 },
            desktop: { width: 1000, height: 1479 }
        },
        label: `31.1 Polina Solovyeva-${imageMode}.webp`
    },],[{
        url: `/assets/photos/beauty/32 Polina Solovyeva-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `32 Polina Solovyeva-${imageMode}.webp`
    },{
        url: `/assets/photos/beauty/32.1 Polina Solovyeva-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `32.1 Polina Solovyeva-${imageMode}.webp`
    },],[{
        url: `/assets/photos/beauty/33 Jenifer Klupfe-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `33 Jenifer Klupfe-${imageMode}.webp`
    },{
        url: `/assets/photos/beauty/33.1 Jenifer Klupfel-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `33.1 Jenifer Klupfel-${imageMode}.webp`
    },],[{
        url: `/assets/photos/beauty/34 Jenifer Klupfe-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 718 },
            desktop: { width: 1000, height: 1435 }
        },
        label: `34 Jenifer Klupfe-${imageMode}.webp`
    },{
        url: `/assets/photos/beauty/34.1 Jenifer Klupfe-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 718 },
            desktop: { width: 1000, height: 1435 }
        },
        label: `34.1 Jenifer Klupfe-${imageMode}.webp`
    },],[{
        url: `/assets/photos/beauty/9 rina_zima_ph-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 643 },
            desktop: { width: 1000, height: 1286 }
        },
        label: `9 rina_zima_ph-${imageMode}.webp`
    },{
        url: `/assets/photos/beauty/9.1 irina_zima_ph-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 643 },
            desktop: { width: 1000, height: 1286 }
        },
        label: `9.1 irina_zima_ph-${imageMode}.webp`
    },],
];


    return new RetouchSession(title, transliteratedUrl, photos);
  }
