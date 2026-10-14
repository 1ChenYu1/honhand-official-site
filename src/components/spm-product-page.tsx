'use client'

import { ProductDetailPage } from './product-detail-page'
import { getProductDetail } from '@/lib/product-details'

export function SPMProductPage() {
  return <ProductDetailPage detail={getProductDetail('spm')!} />
}
