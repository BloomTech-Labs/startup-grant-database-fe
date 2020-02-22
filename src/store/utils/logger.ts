export const logger = (label: string, ...args: any[]) => {
    console.group(label);
    args.forEach(arg => console.log(arg));
    console.groupEnd();
};
