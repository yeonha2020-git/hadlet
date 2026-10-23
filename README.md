# hadlet

Next.js, Supabase, Vercel 기반의 단일 개인 메모 보드입니다. 섹션·컬럼·카테고리 없이 메모 카드만 자유롭게 쌓입니다.

## 로컬 실행

1. Supabase SQL Editor에서 `schema.sql`을 실행합니다.
2. `.env.local.example`을 `.env.local`로 복사하고 값을 채웁니다.
3. 관리자 비밀번호 해시는 아래처럼 생성합니다.

```bash
node -e "require('bcryptjs').hash(process.argv[1], 12).then(console.log)" "원하는-관리자-비밀번호"
```

4. `ADMIN_SESSION_SECRET`에는 길고 무작위인 문자열을 넣습니다.
5. 개발 서버를 실행합니다.

```bash
npm run dev
```

## Vercel 배포

GitHub 저장소를 Vercel에 연결한 뒤 Project Settings → Environment Variables에 `.env.local.example`의 여섯 값을 등록하고 배포합니다. `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_PASSWORD_HASH`, `ADMIN_SESSION_SECRET`, `CRON_SECRET`에는 절대 `NEXT_PUBLIC_` 접두사를 붙이지 마세요.

## Supabase 일시 정지 방지

Supabase 무료 플랜은 7일 동안 활동이 없으면 프로젝트를 일시 정지합니다. `vercel.json`의 Cron이 매일 03:00(KST)에 `/api/keepalive`를 호출하고, 이 API가 `memos` 테이블을 실제로 조회해 활동을 남깁니다.

- `CRON_SECRET`에는 길고 무작위인 문자열을 넣습니다. Vercel이 Cron 호출에 `Authorization: Bearer <CRON_SECRET>` 헤더를 자동으로 붙이고, API는 이 값이 맞을 때만 동작합니다.
- 배포 후 Vercel 대시보드 → Settings → Cron Jobs에서 등록 여부와 실행 기록을 확인할 수 있습니다.
- 직접 확인하려면 `curl -H "Authorization: Bearer <CRON_SECRET>" https://<도메인>/api/keepalive`를 실행합니다.

## 보안 구조

- 브라우저는 공개 URL/anon key로 메모 목록만 조회하며, `password_hash` 컬럼은 읽을 수 없습니다.
- 메모 생성은 서버 API가 4자리 비밀번호를 bcrypt로 해시한 뒤 service role로 저장합니다.
- 일반 삭제는 서버에서 해시를 비교한 뒤 service role로 수행합니다.
- 관리자 인증과 삭제는 HttpOnly 세션 쿠키를 검증하는 서버 API에서만 수행합니다.
- `schema.sql`은 명시적 `GRANT`와 RLS 정책을 함께 적용합니다.
