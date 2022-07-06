export interface PhotoItem {
  url: string;
  width: number;
  height: number;
  label?: string;
}

export class PhotographySession {
  public previousSession?: PhotographySession;
  public nextSession?: PhotographySession;

  constructor(
    public title: string,
    public transliteratedUrl: string,
    public photos: PhotoItem[]
  ) {}

  linkPrevious(s: PhotographySession) {
    this.previousSession = s;
  }

  linkNext(s: PhotographySession) {
    this.nextSession = s;
  }
}

export class RetouchSession {
  public previousSession?: RetouchSession;
  public nextSession?: RetouchSession;

  constructor(
    public title: string,
    public transliteratedUrl: string,
    public beforeAterterPhotos: [PhotoItem, PhotoItem][]
  ) {}

  linkPrevious(s: RetouchSession) {
    this.previousSession = s;
  }

  linkNext(s: RetouchSession) {
    this.nextSession = s;
  }
}
