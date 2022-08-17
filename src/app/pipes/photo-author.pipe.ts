import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photoAuthor',
})
export class PhotoAuthorPipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (!value) {
      return '';
    }

    const regExp = new RegExp(
      '^[0-9]{1,2}(?:(?:.[0-9]{1,2})?)\\s([а-яА-Яa-zA-Z\\s_?]*)(?:-(?:desktop|mobile).webp)$',
      'i'
    );
    const executed = regExp.exec(value);
    if (executed) {
      return executed[1];
    }
    return value;
  }
}
