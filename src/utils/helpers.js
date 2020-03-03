import moment from "moment";

export const formatNumber = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export function textDisplay(str, grant) {

    switch (str) {
        case 'amount':
            return grant[str] ? `$${formatNumber(grant[str])}` : `See website for details`;
        case 'most_recent_application_due_date':
            return grant[str] ? `${moment(grant[str]).fromNow()}` : `See website for details`;
        case 'early_stage_funding':
            return grant[str] ? `Yes` : `No`;
        case '':
        default:
            if (grant[str]) {
                return `${grant[str]}`
            }
            return;
    }
}
