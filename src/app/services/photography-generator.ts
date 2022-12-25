import { ImageMode, PhotographySession } from 'models/session';

import { generateSession as genS1 } from 'assets/Ayna 08.2022, St.Petersburg/data';
import { generateSession as genS2 } from 'assets/Olya 08.22, St.Petersburg/data';
import { generateSession as genS3 } from 'assets/Polina 1 08.2022, St.Petersburg/data';
import { generateSession as genS4 } from 'assets/Polina 2 08.2022, St.Petersburg/data';
import { generateSession as genS5 } from 'assets/Polina.Studio, part. 1/data';
import { generateSession as genS6 } from 'assets/Polina.Studio, part. 2/data';
import { generateSession as genS7 } from 'assets/Anastasia 12.2022. Model test/data';
import { generateSession as genS8 } from 'assets/Miron 12.2022. Model test/data';
import { generateSession as genS9 } from 'assets/Polina 10.2022. Model test/data';

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

  return [s9, s8, s7, s6, s5, s4, s3, s2, s1];
}
