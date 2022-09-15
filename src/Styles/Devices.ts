const sizes = {
  mobile: 500,
  desktop: 1400,
};

const devices = {
  mobile: `(max-width: ${sizes.mobile - 1}px)`,
  half: `(max-width: ${sizes.desktop - 1}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
};

export default devices;
