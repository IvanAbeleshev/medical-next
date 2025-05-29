'use client';

/**
 * Utility functions for iOS optimization
 */

// Проверка на iOS устройство
export const isIOS = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
         (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

// Проверка на Safari браузер
export const isSafari = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

// Оптимизация для iOS устройств
export const optimizeForIOS = () => {
  if (!isIOS()) return;

  // Отключаем zoom при двойном тапе
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (event) => {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, { passive: false });

  // Предотвращаем резиновый эффект скролла
  document.body.addEventListener('touchstart', (event) => {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }, { passive: false });

  document.body.addEventListener('touchmove', (event) => {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }, { passive: false });
};

// Блокировка скролла для iOS
export const lockScroll = (): (() => void) => {
  if (typeof window === 'undefined') return () => {};

  const scrollY = window.scrollY;
  const body = document.body;
  
  if (isIOS()) {
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'hidden';
  }

  // Возвращаем функцию для разблокировки
  return () => {
    if (isIOS()) {
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      body.style.overflow = '';
      window.scrollTo(0, scrollY);
    } else {
      body.style.overflow = '';
    }
  };
};

// Класс для управления анимациями на iOS
export class IOSAnimationManager {
  private activeAnimations: Set<HTMLElement> = new Set();

  public startAnimation(element: HTMLElement, animationClass: string): void {
    if (this.activeAnimations.has(element)) return;

    this.activeAnimations.add(element);
    element.classList.add(animationClass);

    // Автоматическое удаление через 500ms
    setTimeout(() => {
      this.endAnimation(element, animationClass);
    }, 500);
  }

  public endAnimation(element: HTMLElement, animationClass: string): void {
    element.classList.remove(animationClass);
    this.activeAnimations.delete(element);
  }

  public isAnimating(element: HTMLElement): boolean {
    return this.activeAnimations.has(element);
  }

  public clearAll(): void {
    this.activeAnimations.forEach(element => {
      element.className = element.className.replace(/animate-\S+/g, '').trim();
    });
    this.activeAnimations.clear();
  }
}

// Дебаунс функция для скролла
export const createScrollDebouncer = (callback: () => void, delay = 16): (() => void) => {
  let timeoutId: NodeJS.Timeout | null = null;
  let isThrottled = false;

  return () => {
    if (isThrottled) return;

    isThrottled = true;
    requestAnimationFrame(() => {
      callback();
      isThrottled = false;
    });
  };
};

// Функция для оптимизации рендера на iOS
export const initializeIOSOptimization = () => {
  if (typeof window === 'undefined') return;

  // Добавляем CSS классы для iOS
  if (isIOS()) {
    document.documentElement.classList.add('is-ios');
    
    if (isSafari()) {
      document.documentElement.classList.add('is-safari');
    }
  }

  // Инициализируем оптимизации
  optimizeForIOS();
};

export default {
  isIOS,
  isSafari,
  optimizeForIOS,
  lockScroll,
  IOSAnimationManager,
  createScrollDebouncer,
  initializeIOSOptimization
};
