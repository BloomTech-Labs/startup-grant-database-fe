import {DemoFormData, FocusFormData, InfoFieldData} from "../../suggestion/formUtils/formValues";

const approvedValue = {
    label: "Approved",
    name: "is_reviewed",
    select: true,
    data: [
        {
            value: true,
            label: "Approved"
        },
        {
            value: false,
            label: "Pending"
        }
    ]
};

const editFormValues = [
    {...approvedValue},
    ...InfoFieldData,
    ...DemoFormData,
    ...FocusFormData
];

export default editFormValues;
