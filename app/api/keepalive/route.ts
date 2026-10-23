import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

// Supabase 무료 플랜은 7일간 활동이 없으면 프로젝트를 일시 정지합니다.
// Vercel Cron(vercel.json)이 매일 이 경로를 호출해 실제 DB 조회를 발생시킵니다.
// Vercel은 CRON_SECRET 환경 변수가 있으면 "Authorization: Bearer <값>" 헤더를 붙여 호출합니다.
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "CRON_SECRET 환경 변수가 설정되지 않았습니다." },
      { status: 500 },
    );
  }
  if (request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "인증이 필요합니다." }, { status: 401 });
  }

  try {
    const { error } = await getSupabaseAdmin()
      .from("memos")
      .select("id")
      .limit(1);
    if (error) throw error;

    return NextResponse.json({ ok: true, pingedAt: new Date().toISOString() });
  } catch (error) {
    console.error("GET /api/keepalive", error);
    return NextResponse.json(
      { error: "Supabase에 연결하지 못했습니다." },
      { status: 500 },
    );
  }
}
