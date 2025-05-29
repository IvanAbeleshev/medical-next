'use client';

import { useEffect } from 'react';
import { initializeIOSOptimization } from '@/utils/ios-utils';

export default function IOSOptimizer() {
  useEffect(() => {
    // Инициализируем iOS оптимизации
    initializeIOSOptimization();
  }, []);

  return null;
}
