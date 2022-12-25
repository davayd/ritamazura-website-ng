export interface PhotoItem {
  url: string;
  sizes: {
    mobile: {
      width: number;
      height: number;
    };
    desktop: {
      width: number;
      height: number;
    };
  };
  label?: string;
}

export class PhotographySession {
  constructor(
    public title: string,
    public transliteratedUrl: string,
    public photos: PhotoItem[]
  ) {}
}

export class RetouchSession {
  constructor(
    public title: string,
    public transliteratedUrl: string,
    public beforeAterterPhotos: [PhotoItem, PhotoItem][]
  ) {}
}

export type ImageMode = 'mobile' | 'desktop';

export class MainSession {
  constructor(
    public title: string,
    public transliteratedUrl: string,
    public photos: Record<string, PhotoItem>
  ) {}
}
