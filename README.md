# 스펙나침반 — IT 기기 비교 웹

Next.js App Router + TypeScript + Tailwind CSS v4. 정적 빌드(`output: export`)로 별도 DB/API 없이 동작합니다.

## 시작

```bash
npm install
cp .env.example .env.local
npm run dev
```

## 배포

1. GitHub에 업로드한 뒤 Vercel에서 Import Project.
2. `NEXT_PUBLIC_SITE_URL`을 실제 배포 도메인으로, `NEXT_PUBLIC_CONTACT_EMAIL`을 실제 이메일로 설정.
3. `npm run build`로 정적 출력 검증. Vercel은 Next.js를 자동 인식합니다.
4. 정책 페이지 초안을 실제 사업자 정보, 개인정보 및 광고 처리 방식에 맞게 수정.
5. `lib/devices.ts`의 **데모 데이터를 제조사 공식 사양으로 교체하고 출처/검증일을 추가**.
6. 광고 승인 후 `public/ads.txt` 및 `components/AdSlot.tsx`를 실제 AdSense 광고 단위로 교체. 승인 전에는 광고를 호출하지 않습니다.

## 주의

이 프로젝트는 동작하는 MVP/템플릿이며 실제 판매 제품 데이터가 아닙니다. 데모 데이터와 초안 정책을 그대로 공개해 애드센스 승인을 신청하지 마세요. 광고 승인 여부는 보장되지 않습니다.
