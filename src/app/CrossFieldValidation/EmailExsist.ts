import { AbstractControl } from "@angular/forms";
import { Observable, map } from "rxjs";
import { AsyncValidatorFn } from "@angular/forms";
import { DynamicUserService } from "../Services/dynamic-user.service";

export function emailexist(dynamicUserService: DynamicUserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<{ emailExist: { value: string } } | null> => {
    const email = control.value.trim().toLowerCase();

    return dynamicUserService.GetAllUser().pipe(
      map((users: any[]) => {
        const emailExists = users.some((user) => user.email.toLowerCase() === email);
        return emailExists ? { emailExist: { value: email } } : null;
      })
    );
  };
}
