# Actions

GitHub actions demo repo.

[![CI/CD Staging](https://github.com/ropaolle/actions/actions/workflows/ci-cd-staging.yml/badge.svg?branch=staging)](https://github.com/ropaolle/actions/actions/workflows/ci-cd-staging.yml)
[![CI Prod](https://github.com/ropaolle/actions/actions/workflows/ci-prod.yml/badge.svg)](https://github.com/ropaolle/actions/actions/workflows/ci-prod.yml)
[![CD Prod](https://github.com/ropaolle/actions/actions/workflows/cd-prod.yml/badge.svg)](https://github.com/ropaolle/actions/actions/workflows/cd-prod.yml)


## Flow to create a new feature

Locally

1. Checkout branch `staging`
2. Create a new feature branch `feat/my-new-feat`
3. Add the new feature and push to remote

On GitHub

4. Open a pull request against the `staging` branch

   - To complete the pull request the checks test, lint, build and deploy have to pass.
   - The new code is deployed to [https://staging.github-actions.pages.dev/](https://staging.github-actions.pages.dev/).
   - If the code works onthe staging server we can now continue and open a pull request agaist main.

5. Open a pull request against the `main` branch

   - To complete the pull request the checks test, lint and build have to pass.
   - If the pull request succeds we are now able to manually deploy to production.

6. Deploy to production by running the action `CD Prod (deploy to CloudFlare)` against `main`.
   - The production code is deployed to [https://github-actions.pages.dev/](https://github-actions.pages.dev/).

### Mermaid gitGraph

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
    checkout feat/my-new-func
    checkout main
    commit
```
