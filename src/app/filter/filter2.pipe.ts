import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter2',
    pure: false
})

export class filter2 implements PipeTransform {
    transform(items: any[], criteria: any): any {
        if (criteria === undefined) return items;

        return items.filter(item => {
            if(item.name_english != null){
            var name = item.name_english.toString();
            if (name.toLocaleLowerCase().includes(criteria.toLocaleLowerCase())) {
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