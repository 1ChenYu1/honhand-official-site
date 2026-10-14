'use client'

import { ProductDetailPage } from './product-detail-page'
import { getProductDetail } from '@/lib/product-details'

export function HRProductPage() {
  return <ProductDetailPage detail={getProductDetail('hr')!} />
}
