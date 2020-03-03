import {Grant} from "../grants/grantTypes";
import {FilterFormState} from "./filterTypes";

export class Filters {
    private readonly keys: string[];

    constructor(private filters: FilterFormState) {
        this.keys = this.getKeys();
    }

    public filter(grants: Grant[], min: number | null, max: number | null): Grant[];
    public filter(grants: Grant[], key1: string, key2: string): Grant[];

    public filter(param1: Grant[], param2: string | number | null, param3?: string | number | null) {
        if (typeof param2 === 'string') {
            return param1.filter(grant => grant[param2] === param3);
        } else {
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

    getKeys(): string[] {
        return Object.keys(this.filters).map(key => key);
    }

    pristine(): boolean {
        for (let i = 0; i < this.keys.length; i++) {
            if (this.filters[this.keys[i]].filter(item => item.checked).length > 0) {
                return false;
            }
        }
        return true;
    }

    getFilters(): FilterFormState {
        const newObj: FilterFormState = {
            amount: [],
            geographic_region: [],
            domain_areas: []
        };
        for (let values of this.keys) {
            newObj[values] = this.filters[values].filter(item => item.checked);
        }
        return newObj;
    }

    amount(grants: Grant[], currentFilters: any[]): Grant[] {
        const returnGrants: Grant[] = [];
        for (let values of currentFilters) {
            const {values: {min, max}} = values;
            this.filter(grants, min, max).forEach(eachGrant => returnGrants.push(eachGrant));
        }
        return returnGrants;
    }

    other(grants: Grant[], currentFilters: any[], key: string): Grant[] {
        const returnGrants: Grant[] = [];
        for (let values of currentFilters) {
            this.filter(grants, key, values.key).forEach(eachGrant => returnGrants.push(eachGrant));
        }
        return returnGrants;
    }

}
