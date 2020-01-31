export interface GlideOptions {
  type?: 'slider' | 'carousel';
  startAt?: number;
  perView?: number;
  focusAt?: number | 'center';
  gap?: number;
  autoplay?: number | false;
  hoverpause?: boolean;
  keyboard?: boolean;
  bound?: boolean;
  swypeThreshold?: number | false;
  dragThreshold?: number | false;
  perTouch?: number | false;
  touchRatio?: number;
  touchAngle?: number;
  animationDuration?: number;
  rewind?: boolean;
  rewindDuration?: number;
  animationTimingFunc?: string;
  direction?: 'ltr' | 'rtl';
  peek?: number | object;
  breakpoints?: object;
  classes?: object;
  throttle?: number;
}
