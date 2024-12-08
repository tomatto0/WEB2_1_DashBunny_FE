import { NextResponse} from "next/server";

export const coupons= [{
  ownerCouponId: 321,
  couponName: '비오는날 쿠폰',
  minOrderPrice: 12000,
  discountPrice: 5,
  discountType: '%',
  expiredDay: 7,
  couponStatus: 'ACTIVE'
},{
  ownerCouponId: 221,
  couponName: '기본할인',
  minOrderPrice: 15000,
  discountPrice: 2000,
  discountType: '원',
  expiredDay: 21,
  couponStatus: 'EARLY_TERMINATED'
},{
  ownerCouponId: 3,
  couponName: '오픈 이벤트',
  minOrderPrice: 10000,
  discountPrice: 10,
  discountType: '%',
  expiredDay: 21,
  couponStatus: 'EXPIRED'
},]

export async function GET() {
    return NextResponse.json(coupons);

}
