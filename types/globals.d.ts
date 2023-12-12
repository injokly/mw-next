declare const __DEV__: boolean;
declare module "@/styles/*.css" {
    const content: { [className: string]: string };
    export = content;
}