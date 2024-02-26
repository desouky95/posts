import { css } from "styled-components";

type CreateVariantProps = {
  prop: string;
  variants: any;
  key : string
};
export const createVariant = ({ prop, variants }: CreateVariantProps) => {
  
  return (props : any) => {

    const _prop = props[prop]
    console.log(_prop)
    if(!_prop) return {}
    const styles = variants[_prop]
    if(!styles) return {}
    return css(styles)
  }
};
