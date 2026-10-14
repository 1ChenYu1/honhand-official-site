'use client'

import { ProductDetailPage } from './product-detail-page'
import { getProductDetail } from '@/lib/product-details'

export function HMIProductPage() {
  return <ProductDetailPage detail={getProductDetail('hmi')!} />
}
