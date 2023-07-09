import { ImageMode, PhotographySession, PhotoItem } from 'models/session';

import { generateSession as genS1 } from 'assets/1/data';
import { generateSession as genS2 } from 'assets/2/data';
import { generateSession as genS3 } from 'assets/3/data';
import { generateSession as genS4 } from 'assets/4/data';
import { generateSession as genS5 } from 'assets/8/data';
import { generateSession as genS6 } from 'assets/9/data';
import { generateSession as genS7 } from 'assets/10/data';
import { generateSession as genS8 } from 'assets/11/data';
import { generateSession as genS9 } from 'assets/12/data';
import { generateSession as genS10 } from 'assets/13/data';
import { generateSession as genS11 } from 'assets/14/data';
import { generateSession as genS12 } from 'assets/15/data';
import { generateSession as genS13 } from 'assets/16/data';
import { generateSession as genS14 } from 'assets/17/data';

export function generatePhotographySessions(
  imageMode: ImageMode
): PhotographySession[] {
  const s1 = genS1(imageMode);
  const s2 = genS2(imageMode);
  const s3 = genS3(imageMode);
  const s4 = genS4(imageMode);
  const s5 = genS5(imageMode);
  const s6 = genS6(imageMode);
  const s7 = genS7(imageMode);
  const s8 = genS8(imageMode);
  const s9 = genS9(imageMode);
  const s10 = genS10(imageMode);
  const s11 = genS11(imageMode);
  const s12 = genS12(imageMode);
  const s13 = genS13(imageMode);
  const s14 = genS14(imageMode);

  return [s14, s13, s12, s11, s10, s9, s8, s7, s6, s5, s4, s3, s2, s1]; // Change it!
}

const order = [17, 16, 15, 14, 13, 4, 11, 10, 9, 8, 12, 3, 2, 1]; // Change it!

export function orderedSession(
  session: PhotographySession
): PhotographySession {
  const hMap: Record<string, PhotoItem> = {};

  session.photos.forEach((i) => {
    const [id] = i.label?.split('-') ?? [];
    const key = Number(id);
    hMap[key] = i;
  });

  const orderedPhotos = order
    .filter((keyId) => Boolean(hMap[keyId]))
    .map((keyId) => hMap[keyId]);

  session.photos = orderedPhotos;

  return session;
}
