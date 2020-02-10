import {Grant} from "../grants/grantTypes";
import {FilterFormState} from "./filterTypes";

export class Filters {
    private keys: string[];
    constructor(private filters: FilterFormState) {
        this.keys = this.getKeys();
    }
    public filter(grants: Grant[], min: number | null, max: number | null): Grant[];
    public filter(grants: Grant[], key1: string, key2: string): Grant[];

    public filter(param1: Grant[], param2: string | number | null, param3?: string | number | null) {
        if (typeof param2 === 'string') {
            return param1.filter(grant => grant[param2] === param3);
        }
         else {
            if (!param2 && param3) {
                return param1.filter(grant => grant.amount < param3);
            } else if (!param3 && param2) {
                return param1.filter(grant => grant.amount > param2);
            } else if (param2 && param3) {
                return param1.filter(grant => grant.amount >= param2 && grant.amount <= param3);
            } else {
                return param1;
            }
        }
    }

    public getKeys(): string[] {
        return Object.keys(this.filters).map(key => key);
    }

    public pristine(): boolean {
        for (let i = 0; i < this.keys.length; i++) {
            if (this.filters[this.keys[i]].filter(item => item.checked).length > 0) {
                return false;
            }
        }
        return true;
    }

    public getFilters(): FilterFormState {
        const newObj: FilterFormState = {
            amount: [],
            geographic_region: [],
            domain_areas: []
        }
        for (let values of this.keys) {
            newObj[values] = this.filters[values].filter(item => item.checked);
        }
        return newObj;
    }


}
