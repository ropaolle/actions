---
Id: 1
Stuff: Markdown Yaml Preamble
---

# TODO

- [ ] ?
- [ ] Testa att det fungerar med ett privat repo!

## Commit flow

Staging

- Checkout the staging branch and create a new local feat/my-new-feature branch.
- Make your changes and push to remote.
- Create a pull request against staging.

Main (production)

- ?

## Setup

- Require a pull request before merging [^1].

## LINKS

- YOUTUBE
  - [GitHub Actions YouTub Course](https://www.youtube.com/playlist?list=PLArH6NjfKsUhvGHrpag7SuPumMzQRhUKY)
    - [Doc](https://github.com/Link-/ci-cd-intro)
    - [CPython project example](https://github.com/python/cpython/tree/main/.github/workflows)
- GITHUB
  - [GitHub Actions documentation](https://docs.github.com/en/actions)
  - [Reusing workflows](https://docs.github.com/en/actions/using-workflows/reusing-workflows)
  - [Continuous deployment using Docker](https://levelup.gitconnected.com/automated-deployment-using-docker-github-actions-and-webhooks-54018fc12e32)
  - [Creat a pull request on push](https://github.com/marketplace/actions/github-action-for-creating-pull-requests)
  - [Mermaid examples 1](https://gist.github.com/ChristopherA/bffddfdf7b1502215e44cec9fb766dfd)
  - [Mermaid examples 2](https://github.com/JakeSteam/Mermaid)
  - [GitGraph](https://mermaid.js.org/syntax/gitgraph.html)
- EXTRAS
  - [Docker action](https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action)
  - [Chrome Secure Browsing blocks pages.dev](chrome://settings/security?q=enhanced)

## Sync dev with main

```sh
git checkout main
git pull
git checkout dev-test1
git merge main
```

## Deploy to CloudFlare

- [My page](https://github-actions.pages.dev/)
- [Cloudflare pages](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/)
- [GitHub Action](https://github.com/cloudflare/pages-action)

[^1]: [Branch protection rules](https://github.com/ropaolle/actions/settings/branch_protection_rules)
