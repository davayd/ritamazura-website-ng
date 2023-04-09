import { ImageMode, PhotographySession, PhotoItem } from 'models/session';

import { generateSession as genS1 } from 'assets/Ayna 08.2022, St.Petersburg/data';
import { generateSession as genS2 } from 'assets/Olya 08.22, St.Petersburg/data';
import { generateSession as genS3 } from 'assets/Polina 1 08.2022, St.Petersburg/data';
import { generateSession as genS4 } from 'assets/Polina 2 08.2022, St.Petersburg/data';
import { generateSession as genS5 } from 'assets/Polina.Studio, part. 1/data';
import { generateSession as genS6 } from 'assets/Polina.Studio, part. 2/data';
import { generateSession as genS7 } from 'assets/Anastasia 12.2022. Model test/data';
import { generateSession as genS8 } from 'assets/Miron 12.2022. Model test/data';
import { generateSession as genS9 } from 'assets/Polina 10.2022. Model test/data';
import { generateSession as genS10 } from 'assets/Kate 02.2023/data';
import { generateSession as genS11 } from 'assets/Lera Yaskevich 02.2023/data';
import { generateSession as genS12 } from 'assets/Liza 03.2023/data';
import { generateSession as genS13 } from 'assets/Maria 03.23/data';
import { generateSession as genS14 } from 'assets/Irka 03.23/data';

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

const order = [14, 13, 12, 11, 10, 9, 8, 7, 1, 2, 3, 4, 5, 6]; // Change it!

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
