**davidsantana06.github.io** is my resume as a landing page, displayed in Portuguese or English according to the browser language.

## 🔖 Versioning

Versions follow [SemVer](https://semver.org) and are bumped by [Release Please](https://github.com/googleapis/release-please) based on [Conventional Commits](https://www.conventionalcommits.org).

### 📝 Commits

| Release | Commit                                          | When                                                           |
| ------- | ----------------------------------------------- | -------------------------------------------------------------- |
| Major   | `<type>!:` / `BREAKING CHANGE:`                 | Full redesign, URL change, removal of a section or language    |
| Minor   | `feat:`                                         | New section, or new or updated content (experiences, projects) |
| Patch   | `fix:`, `perf:`, `revert:`                      | Corrections with no new content: copy, layout, performance     |
| —       | `refactor:`, `chore:`, `ci:`, `docs:`, `style:` | No visible change                                              |

### 🚀 Releases

1. Changes are committed directly to `main`, each with a conventional message.
2. Commits in the Major, Minor or Patch rows open or update a `release x.y.z` PR.
3. The PR is merged manually; until then, new commits join the same version.
4. The version is bumped once, by the highest-impact commit (e.g. 3 `feat` + 2 `fix`: `1.0.0` → `1.1.0`).
5. Merging creates the tag and the GitHub Release, and updates `CHANGELOG.md`.

### 💡 Example

Starting from `1.0.0`, commits accumulate in the release PR until it is merged:

| Action                                   | Result                                    |
| ---------------------------------------- | ----------------------------------------- |
| `feat: add certifications section`       | Release PR proposes `1.1.0`               |
| `fix: prevent footer overflow on mobile` | Still `1.1.0`                             |
| `ci: pin release-please action version`  | Still `1.1.0`, no changelog entry         |
| Merge `release 1.1.0`                    | `v1.1.0` created with 2 changelog entries |
| `fix: correct certification dates`       | New release PR proposes `1.1.1`           |
