export interface coupon {
  couponId: number,
  couponName: string,
  minOrderPrice: number,
  discountPrice: number,
  discountType: string,
  expiredDay: number,
  couponStatus: string
}