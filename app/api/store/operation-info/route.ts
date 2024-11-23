import { NextResponse, NextRequest } from "next/server";

export const orderinfo= {
  "isTakeout": "포장 여부 (On/Off)",
  "takeoutDiscount": "포장 할인 금액",
  "minOrderAmount": "최소 주문 금액",
  "deliveryTip": "기본 배달 팁"
}

export async function GET() {
    return NextResponse.json(orderinfo);

}
