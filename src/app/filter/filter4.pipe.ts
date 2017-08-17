import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter4',
    pure: false
})

export class filter4 implements PipeTransform {
    transform(items: any[], criteria: any): any {
        if (criteria === undefined) return items;

        return items.filter(item => {
            if(item.email != null){
            var email = item.email.toString();
            if (email.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())) {
                return true;
            }
            return false;
            }
        else{
            return false;
        }
        });
    }
}