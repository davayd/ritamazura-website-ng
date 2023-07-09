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
    public sessionId: string,
    public photos: PhotoItem[]
  ) {}
}

export class RetouchSession {
  constructor(
    public sessionId: string,
    public beforeAterterPhotos: [PhotoItem, PhotoItem][]
  ) {}
}

export type ImageMode = 'mobile' | 'desktop';
