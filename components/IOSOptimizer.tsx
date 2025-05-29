'use client';

import { useEffect } from 'react';
import { useIOSOptimization } from '@/utils/ios-utils';

export default function IOSOptimizer() {
  useEffect(() => {
    // Инициализируем iOS оптимизации
    useIOSOptimization();
  }, []);

  return null;
}
