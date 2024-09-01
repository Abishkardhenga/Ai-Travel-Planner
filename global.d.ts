/// <reference types="nativewind/types" />


declare module '*.webp' {
    const value: IntrinsicClassAttributes<ImageBackground> & Readonly<ImageBackgroundProps>
    export default value;
  }
  


  declare module "*.png" {
    const value: string;
    export default value;
  }
  