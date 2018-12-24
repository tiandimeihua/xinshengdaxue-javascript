# Git Commit Message Conventions Git 注释信息规范

feat(feature) 新工能，新特性；
fix(bug fix) 修复 Bug;
docs(documentation) 信息文本;
style (formating, missing semi cokons, ...) 修复格式;
refactor 重构架构;
test(adding missing tests) 测试;
chore(maintain) 维护;

example;

feat($browser): onUrlChange event (popstate/hashchange/polling);
fix($compile): couple of unit tests for IE9;
style($location): add couple of missing semi colons;
docs(guide): updated fixed docs from Google Docs;
feat($compile): simplify isolate scope bindings;

---

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages.

The following is the list of supported scopes:

- **animations**
- **common**
- **compiler**
- **compiler-cli**
- **core**
- **elements**
- **forms**
- **http**
- **language-service**
- **platform-browser**
- **platform-browser-dynamic**
- **platform-server**
- **platform-webworker**
- **platform-webworker-dynamic**
- **router**
- **service-worker**
- **upgrade**
