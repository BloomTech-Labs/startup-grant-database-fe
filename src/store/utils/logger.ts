export const logger = (label: string, display: any) => {
    console.group(label);
    console.log(display);
    console.groupEnd();
}
