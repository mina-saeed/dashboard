import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter3',
    pure: false
})

export class filter3 implements PipeTransform {
    transform(items: any[], criteria: any): any {
        if (criteria === undefined) return items;

        return items.filter(item => {
            if(item.name.name_english != null){
            var name = item.name.name_english.toString();
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