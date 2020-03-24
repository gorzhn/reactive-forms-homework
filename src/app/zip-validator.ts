import { AbstractControl } from "@angular/forms";
import {Cities} from './data/city-data'
export function ZipValidator(control:AbstractControl):{[key:string]:any} | null{

   for (var zip in Cities){
       console.log(zip)
        if(zip === control.value){
        
                        return null;
        }
   }
    return {"zipCode":{value:control.value}}

}