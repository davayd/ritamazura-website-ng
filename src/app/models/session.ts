export interface PhotoItem {
  url: string;
  width: number;
  height: number;
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
