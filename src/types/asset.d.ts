declare module "*.mp3" {
  const value: any;
  export default value;
}

declare global {
  interface WindowEventMap {
    keypress: KeyboardEvent<HTMLButtonElement>
  }
}