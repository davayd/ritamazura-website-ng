import { PhotographySession, PhotoItem } from 'models/session';

const order = [9, 8, 7, 1, 2, 3, 4, 5, 6];

export function orderedSession(
  session: PhotographySession
): PhotographySession {
  const hMap: Record<string, PhotoItem> = {};

  session.photos.forEach((i) => {
    const key = Number(i.label!.charAt(0));
    hMap[key] = i;
  });

  const orderedPhotos = order
    .filter((keyId) => Boolean(hMap[keyId]))
    .map((keyId) => hMap[keyId]);

  session.photos = orderedPhotos;

  return session;
}
