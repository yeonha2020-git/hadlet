import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "hadlet_admin";
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 8;
const SESSION_VALUE = "hadlet-admin-v1";

function signingSecret() {
  const secret =
    process.env.ADMIN_SESSION_SECRET ?? process.env.ADMIN_PASSWORD_HASH;
  if (!secret) throw new Error("관리자 세션 환경 변수가 설정되지 않았습니다.");
  return secret;
}

function signature(expiresAt: number) {
  return createHmac("sha256", signingSecret())
    .update(`${SESSION_VALUE}.${expiresAt}`)
    .digest("hex");
}

// 토큰에 만료 시각을 서명해 넣어, 쿠키가 유출되더라도 서버에서 만료를 강제합니다.
export function createAdminSessionToken() {
  const expiresAt = Math.floor(Date.now() / 1000) + ADMIN_SESSION_MAX_AGE;
  return `${expiresAt}.${signature(expiresAt)}`;
}

export async function isAdminRequest() {
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!token) return false;

  const [rawExpiresAt, sig] = token.split(".");
  const expiresAt = Number(rawExpiresAt);
  if (!sig || !Number.isInteger(expiresAt)) return false;
  if (expiresAt < Math.floor(Date.now() / 1000)) return false;

  try {
    const left = Buffer.from(sig);
    const right = Buffer.from(signature(expiresAt));
    return left.length === right.length && timingSafeEqual(left, right);
  } catch {
    return false;
  }
}
