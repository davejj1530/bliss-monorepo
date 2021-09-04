export const blissStyleProps = {
  pt: "padding-top",
  pb: "padding-bottom",
  pl: "padding-left",
  pr: "padding-right",
  mt: "margin-top",
  mb: "margin-bottom",
  ml: "margin-left",
  mr: "margin-right",
  py: ["padding-top", "padding-bottom"],
  px: ["padding-left", "padding-right"],
  my: ["margin-top", "margin-bottom"],
  mx: ["margin-left", "margin-right"],
  p: "padding",
  m: "margin",
  bg: "background-color",
};

export type BlissStylePropTypes = {
  pt?: string | number;
  pb?: string | number;
  pl?: string | number;
  pr?: string | number;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  py?: string | number;
  px?: string | number;
  my?: string | number;
  mx?: string | number;
  p?: string | number;
  m?: string | number;
  bg?: string;
};
