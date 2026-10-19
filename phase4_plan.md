# Phase 4 Implementation Plan

## Overview
Phase 4 adds **search & filter**, **user authentication with favorites**, **performance/SEO improvements**, and **Docker deployment**.  The work is broken into independent, testable units so we can ship each increment safely.

---

## 1️⃣ Search & Filter (High Priority)
| Sub‑task | File(s) | Description | Test |
|----------|---------|-------------|------|
| Add Fuse.js dependency | `package.json` | Lightweight fuzzy‑search library. | – |
| Create `src/components/FortSearch.tsx` | New component | Input with debounce, builds Fuse index from `forts` and emits a filtered list via callback. | `src/test/FortSearch.test.tsx` |
| Update `src/pages/MapPage.tsx` (or create a wrapper) | New/modified | Holds search state, passes filtered forts to `<FortsMap />`. | – |
| Update UI to show filter chips (district/type) | `src/components/FilterChips.tsx` (new) | Allows quick toggling of district or type filters. | – |
| Adjust `src/components/FortsMap.tsx` to accept `forts` prop | Modified | Render only the provided forts instead of the global list. | – |
| Add unit tests for search logic | `src/test/FortSearch.test.tsx` | Verify Fuse returns expected matches and filter chips work. | ✅ |

---

## 2️⃣ Authentication & Favorites (Medium Priority)
| Sub‑task | File(s) | Description | Test |
|----------|---------|-------------|------|
| Install Supabase client | `package.json` | `@supabase/supabase-js` for auth & DB. | – |
| Create `src/lib/supabase.ts` | New file | Initialise Supabase client using env vars. | – |
| Add Auth context (`AuthProvider.tsx`) | New | Provides `user`, `signIn`, `signOut`. | – |
| Build `Login` page (`src/pages/Login.tsx`) | New | Simple email/password form using Supabase auth. | – |
| Extend `Fort` data with `favorites` table in Supabase (schema comment only). | – | Documented for future migration. | – |
| Add “★” toggle button component (`src/components/FavoriteButton.tsx`) | New | Calls Supabase to insert/delete favorite for current user. | – |
| Create `src/pages/MyFavorites.tsx` | New | Lists forts the user has marked. | – |
| Write integration tests using mock Supabase client. | `src/test/Auth.test.tsx` | Verify UI reacts to signed‑in/out state. | ✅ |

---

## 3️⃣ Performance & SEO (Low‑Medium Priority)
| Sub‑task | File(s) | Description |
|----------|---------|-------------|
| Lazy‑load images in `FortCarousel` & `FortsMap` markers using `loading="lazy"`. |
| Add route‑based code‑splitting (dynamic import) for heavy pages (`MapPage`, `Login`, `MyFavorites`). |
| Generate `sitemap.xml` via a small Node script (`scripts/generate-sitemap.ts`). |
| Add `<Helmet>` meta tags per fort page (title, description, OG image). |
| Update `vite.config.ts` to enable gzip/brotli compression for production. |

---

## 4️⃣ Docker Deployment (Low Priority)
| Sub‑task | File(s) | Description |
|----------|---------|-------------|
| Write `Dockerfile` that builds the app (`npm run build`) and serves with `nginx`. |
| Add `docker-compose.yml` for local dev: `frontend`, `supabase` (optional). |
| Extend CI (`.github/workflows/ci.yml`) with a job to build and push the Docker image to GitHub Packages. |

---

## 5️⃣ Optional Admin Dashboard
| Sub‑task | File(s) | Description |
|----------|---------|-------------|
| Simple protected UI (`/admin`) to create/edit forts (title, description, images, coordinates). |
| Persist via Supabase `forts` table. |
| Auto‑refresh data after edits. |

---

## Execution Order
1. **Search & Filter** – immediate UI value and fully testable.
2. **Auth & Favorites** – adds personalization.
3. **Performance/SEO** – improves load time & discoverability.
4. **Docker & CI** – stabilises deployment pipeline.
5. **Admin Dashboard** – optional, can be added later.

---

## Deliverables
- Updated source files (components, pages, utils).
- New test files under `src/test/`.
- CI workflow enhancements.
- Dockerfile & docker‑compose.
- Documentation (`README.md` section) describing new env variables.

---

**Next step:** start with Search & Filter implementation (install dependencies, create `FortSearch` component, adjust map page). Let me know if you’d like to adjust the plan before I begin.
