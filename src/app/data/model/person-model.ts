export class Person {
    firstName:string = '';
    lastName:string='';
    zip:string='';
    
    id:string='';
    movies:any[]=[];

    clear(){
        this.firstName = '';
        this.lastName = '';
        this.zip ='';
        this.id = '';
        this.movies = [];
        }
}


