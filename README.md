# Actions

GitHub actions demo repo.

## Production

[![CI Prod (test, lint & build)](https://github.com/ropaolle/actions/actions/workflows/ci-prod.yml/badge.svg?branch=main)](https://github.com/ropaolle/actions/actions/workflows/ci-prod.yml)
[![CD Prod (deploy to CloudFlare)](https://github.com/ropaolle/actions/actions/workflows/cd-prod.yml/badge.svg?branch=main)](https://github.com/ropaolle/actions/actions/workflows/cd-prod.yml)

## Staging

[![CI/CD Staging (test, lint, build & deploy)](https://github.com/ropaolle/actions/actions/workflows/ci-cd-staging.yml/badge.svg?branch=staging)](https://github.com/ropaolle/actions/actions/workflows/ci-cd-staging.yml)

## Flow to create a new feature

Locally

1. Checkout branch `staging`
2. Create a new feature branch `feat/my-new-feat`
3. Add the new feature and push to remote

On GitHub

4. Open a pull request against the `staging` branch

   - To complete the pull request the checks test, lint, build and deploy have to pass.
   - The new code is deployed to [https://ropaolle.github.io/actions/](https://ropaolle.github.io/actions/).
   - If the code works onthe staging server we can now continue and open a pull request agaist main.

5. Open a pull request against the `main` branch

   - To complete the pull request the checks test, lint and build have to pass.
   - If the pull request succeds we are now able to manually deploy to production.

6. Deploy to production by running the action `CD Prod (deploy to CloudFlare)` against `main`.
   - The production code is deployed to [https://github.com/cloudflare/pages-action](https://github.com/cloudflare/pages-action).

```mermaid
gitGraph:
    commit id: "origin"
    branch staging
    checkout staging
    commit id: "1. check out staging"
    branch feat/my-new-func
    checkout feat/my-new-func
    commit id: "3. push new feature"
    checkout main
    commit
    commit
    commit id: "5. pull request"
    checkout staging
    commit id: "4. pull request"
    checkout feat/my-new-func
    merge staging
    checkout staging
    merge main
    checkout staging
    commit
    checkout feat/my-new-fun
    checkout main
    commit
```
