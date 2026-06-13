// Shared framer-motion variants. Extracted to prevent new object references
// on every render (avoids unnecessary motion re-mounts and improves perf).

export const FADE_UP_HIDDEN = { opacity: 0, y: 30 };
export const FADE_UP_SHOW = { opacity: 1, y: 0 };

export const FADE_UP_SM_HIDDEN = { opacity: 0, y: 10 };
export const FADE_UP_LG_HIDDEN = { opacity: 0, y: 24 };

export const FADE_HIDDEN = { opacity: 0 };
export const FADE_SHOW = { opacity: 1 };

export const SCALE_X_HIDDEN = { scaleX: 0 };
export const SCALE_X_SHOW = { scaleX: 1 };

// Easing curves
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

// Viewport options
export const VIEWPORT_ONCE_20 = { once: true, amount: 0.2 };
export const VIEWPORT_ONCE_15 = { once: true, amount: 0.15 };
export const VIEWPORT_ONCE_10 = { once: true, amount: 0.1 };
export const VIEWPORT_ONCE_30 = { once: true, amount: 0.3 };

// Common transitions
export const TRANSITION_SMOOTH_07 = { duration: 0.7, ease: EASE_OUT_EXPO };
export const TRANSITION_SMOOTH_06 = { duration: 0.6, ease: EASE_OUT_EXPO };
export const TRANSITION_SMOOTH_055 = { duration: 0.55, ease: EASE_OUT_EXPO };
