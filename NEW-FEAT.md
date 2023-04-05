# Mermaid

%%{init: { 'logLevel': 'debug', 'theme': 'neutral' } }%%
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
    commit id: "pull request 2"
    checkout staging
    commit id: "pull request 1"
    checkout feat/my-new-func
    merge staging tag:"fix errors"
    checkout staging
    merge main tag:"fix errors"
    checkout staging
    commit id: "asd"
    checkout feat/my-new-func
    
    checkout main
    commit
```

## Flow to create a new feature

Locally
Checkout branch staging
Create a new feature branch
Add the new feature and push to remote

On GitHub
