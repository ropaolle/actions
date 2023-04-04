---
Id: 1
Stuff: Markdown Yaml Preamble
---

# TODO

- [ ] CI/CD
  - [ ] Deploy to Github
  - [ ] Deploy to Cloudflare
  - [x] Build
  - [x] test, lint
- [ ] Testa att det fungerar med ett privat repo!
- [x] Add badges
- [x] Create comment with API
- [x] Add code scanning (free on public repos :ship:)

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
- EXTRAS
  - [Docker action](https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action)
  - [Mermaid examples 1](https://gist.github.com/ChristopherA/bffddfdf7b1502215e44cec9fb766dfd)
  - [Mermaid examples 2](https://github.com/JakeSteam/Mermaid)

## Sync dev with main

```sh
git checkout main
git pull
git checkout dev-test1
git merge main
```

## Deploy to CloudFlare

[Cloudflare pages](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/)

[^1]: [Branch protection rules](https://github.com/ropaolle/actions/settings/branch_protection_rules)
