import { AbstractControl } from "@angular/forms";

export function ZipValidator(control:AbstractControl):{[key:string]:any} | null{
const zipCodes = {1000:"Skopje", 1200:"Tetovo", 1230:"Gostivar"};

   for (var zip in zipCodes){
        if(zip === control.value){
            return null;
        }
   }
    return {"zipCode":{value:control.value}}

}