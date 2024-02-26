// const breakpointsValues = ["40em", "52em", "64em", "80em"];
const breakpointsValues = ["0", "52em", "64em", "80em"];

type Breakpoints = Array<string> & { [Name in VariantSize]?: string };
let _breakpoints: Breakpoints = breakpointsValues;
_breakpoints.sm = breakpointsValues[0];
_breakpoints.md = breakpointsValues[1];
_breakpoints.lg = breakpointsValues[2];

export const breakpoints = _breakpoints