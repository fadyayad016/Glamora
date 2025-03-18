import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { __values } from "tslib";

export function PasswordMatch():ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null =>{
        let password = control.get('password')
        let confirmedpassword= control.get('confirmedpassword')
        if(!password || !confirmedpassword ||!password?.value ||!confirmedpassword.value){
            return null

        }
        let valErr= {"unmatchedpass":{'password':password.value,'confirmedpassword':confirmedpassword.value}}
        return (password.value === confirmedpassword.value)?null:valErr  
        
        
    }


}