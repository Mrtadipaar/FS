/**
 * Mobile Optimization Utilities for Fynest Studio
 * Provides comprehensive mobile device detection and optimization helpers
 */

export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  isSafari: boolean;
  isChrome: boolean;
  screenWidth: number;
  screenHeight: number;
  pixelRatio: number;
  hasNotch: boolean;
  orientation: 'portrait' | 'landscape';
}

/**
 * Detect device information
 */
export function getDeviceInfo(): DeviceInfo {
  const ua = navigator.userAgent;
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(ua) || width < 768;
  const isTablet = /iPad|Android/i.test(ua) && width >= 768 && width < 1024;
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);
  const isSafari = /Safari/i.test(ua) && !/Chrome/i.test(ua);
  const isChrome = /Chrome/i.test(ua);
  
  // Detect notch (iPhone X and newer)
  const hasNotch = isIOS && (
    (width === 375 && height === 812) || // iPhone X, XS, 11 Pro
    (width === 414 && height === 896) || // iPhone XR, XS Max, 11, 11 Pro Max
    (width === 390 && height === 844) || // iPhone 12, 12 Pro, 13, 13 Pro, 14
    (width === 428 && height === 926) || // iPhone 12 Pro Max, 13 Pro Max, 14 Plus
    (width === 393 && height === 852) || // iPhone 14 Pro, 15, 15 Pro
    (width === 430 && height === 932)    // iPhone 14 Pro Max, 15 Plus, 15 Pro Max
  );
  
  return {
    isMobile: isMobile && !isTablet,
    isTablet,
    isDesktop: !isMobile && !isTablet,
    isIOS,
    isAndroid,
    isSafari,
    isChrome,
    screenWidth: width,
    screenHeight: height,
    pixelRatio: window.devicePixelRatio || 1,
    hasNotch,
    orientation: width > height ? 'landscape' : 'portrait'
  };
}

/**
 * Get responsive font size based on viewport
 */
export function getResponsiveFontSize(
  mobile: number,
  tablet: number,
  desktop: number
): string {
  const width = window.innerWidth;
  if (width < 768) return `${mobile}px`;
  if (width < 1024) return `${tablet}px`;
  return `${desktop}px`;
}

/**
 * Get safe area insets for notched devices
 */
export function getSafeAreaInsets() {
  const safeTop = getComputedStyle(document.documentElement)
    .getPropertyValue('--safe-area-inset-top') || '0px';
  const safeBottom = getComputedStyle(document.documentElement)
    .getPropertyValue('--safe-area-inset-bottom') || '0px';
  const safeLeft = getComputedStyle(document.documentElement)
    .getPropertyValue('--safe-area-inset-left') || '0px';
  const safeRight = getComputedStyle(document.documentElement)
    .getPropertyValue('--safe-area-inset-right') || '0px';
  
  return { safeTop, safeBottom, safeLeft, safeRight };
}

/**
 * Prevent iOS rubber band scrolling
 */
export function preventIOSBounce() {
  let startY = 0;
  
  document.addEventListener('touchstart', (e) => {
    startY = e.touches[0].pageY;
  }, { passive: true });
  
  document.addEventListener('touchmove', (e) => {
    const currentY = e.touches[0].pageY;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    
    // At top of page, prevent pull down
    if (scrollTop <= 0 && currentY > startY) {
      e.preventDefault();
    }
    
    // At bottom of page, prevent pull up
    if (scrollTop + clientHeight >= scrollHeight && currentY < startY) {
      e.preventDefault();
    }
  }, { passive: false });
}

/**
 * Disable pinch-to-zoom on iOS
 */
export function disablePinchZoom() {
  document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });
  
  document.addEventListener('gesturestart', (e) => {
    e.preventDefault();
  });
}

/**
 * Optimize viewport height for mobile browsers
 * Accounts for browser chrome showing/hiding
 */
export function setMobileViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
}

/**
 * Check if device supports touch
 */
export function isTouchDevice(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * Get optimal image quality based on device
 */
export function getImageQuality(deviceInfo?: DeviceInfo): number {
  const info = deviceInfo || getDeviceInfo();
  
  // Lower quality for mobile to save bandwidth
  if (info.isMobile) return 70;
  if (info.isTablet) return 80;
  
  // High quality for desktop and high DPI displays
  if (info.pixelRatio >= 2) return 85;
  return 90;
}

/**
 * Get responsive spacing
 */
export function getResponsiveSpacing(
  mobile: number,
  tablet: number,
  desktop: number
): string {
  const width = window.innerWidth;
  if (width < 768) return `${mobile}rem`;
  if (width < 1024) return `${tablet}rem`;
  return `${desktop}rem`;
}

/**
 * Optimize animations for device
 */
export function shouldReduceMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get animation duration based on device and user preference
 */
export function getAnimationDuration(baseDuration: number): number {
  if (shouldReduceMotion()) return 0.01;
  
  const deviceInfo = getDeviceInfo();
  // Slightly faster animations on mobile for better perceived performance
  if (deviceInfo.isMobile) return baseDuration * 0.85;
  
  return baseDuration;
}

/**
 * Debounce function for resize handlers
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function for scroll handlers
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Get responsive breakpoint
 */
export function getBreakpoint(): 'mobile' | 'tablet' | 'desktop' {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

/**
 * Initialize all mobile optimizations
 */
export function initMobileOptimizations() {
  const deviceInfo = getDeviceInfo();
  
  // Set viewport height CSS variable
  setMobileViewportHeight();
  
  // iOS-specific optimizations
  if (deviceInfo.isIOS) {
    preventIOSBounce();
    
    // Add iOS-specific class to body
    document.body.classList.add('is-ios');
  }
  
  // Android-specific optimizations
  if (deviceInfo.isAndroid) {
    document.body.classList.add('is-android');
  }
  
  // Mobile-specific optimizations
  if (deviceInfo.isMobile) {
    document.body.classList.add('is-mobile');
  }
  
  // Tablet-specific optimizations
  if (deviceInfo.isTablet) {
    document.body.classList.add('is-tablet');
  }
  
  // Add notch detection class
  if (deviceInfo.hasNotch) {
    document.body.classList.add('has-notch');
  }
  
  return deviceInfo;
}
