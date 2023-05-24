# scorecard-cli <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

A CLI for OpenSSF Scorecard data.

## Example

### CLI

```console
> scorecard-cli ljharb/qs
{
  date: '2023-05-22',
  repo: {
    name: 'github.com/ljharb/qs',
    commit: '410bdd3c8ae7f5d7ae9b52648b8642b8adc5e1c0'
  },
  scorecard: {
    version: 'v4.10.5-188-g028fa93',
    commit: '028fa93e924d3facde890a113f7edf1225a87ea2'
  },
  score: 6.8,
  checks: [
    {
      name: 'Maintained',
      score: 8,
      reason: '4 commit(s) out of 30 and 6 issue activity out of 30 found in the last 90 days -- score normalized to 8',
      details: null,
      documentation: {
        short: 'Determines if the project is "actively maintained".',
        url: 'https://github.com/ossf/scorecard/blob/028fa93e924d3facde890a113f7edf1225a87ea2/docs/checks.md#maintained'
      }
    },
    {
      name: 'Code-Review',
      score: 0,
      reason: 'found 26 unreviewed human changesets (30 total)',
      details: null,
      documentation: {
        short: 'Determines if the project requires human code review before pull requests (aka merge requests) are merged.',
        url: 'https://github.com/ossf/scorecard/blob/028fa93e924d3facde890a113f7edf1225a87ea2/docs/checks.md#code-review'
      }
    },
    {
      name: 'CII-Best-Practices',
      score: 0,
      reason: 'no effort to earn an OpenSSF best practices badge detected',
      details: null,
      documentation: {
        short: 'Determines if the project has an OpenSSF (formerly CII) Best Practices Badge.',
        url: 'https://github.com/ossf/scorecard/blob/028fa93e924d3facde890a113f7edf1225a87ea2/docs/checks.md#cii-best-practices'
      }
    },
    {
      name: 'License',
      score: 10,
      reason: 'license file detected',
      details: [
        'Info: License file found in expected location: LICENSE.md:1',
        'Info: FSF or OSI recognized license: LICENSE.md:1'
      ],
      documentation: {
        short: 'Determines if the project has defined a license.',
        url: 'https://github.com/ossf/scorecard/blob/028fa93e924d3facde890a113f7edf1225a87ea2/docs/checks.md#license'
      }
    },
    {
      name: 'Branch-Protection',
      score: -1,
      reason: 'internal error: error during branchesHandler.setup: internal error: githubv4.Query: Resource not accessible by integration',
      details: null,
      documentation: {
        short: "Determines if the default and release branches are protected with GitHub's branch protection settings.",
        url: 'https://github.com/ossf/scorecard/blob/028fa93e924d3facde890a113f7edf1225a87ea2/docs/checks.md#branch-protection'
      }
    },
    {
      name: 'Signed-Releases',
      score: -1,
      reason: 'no releases found',
      details: [ 'Warn: no GitHub releases found' ],
      documentation: {
        short: 'Determines if the project cryptographically signs release artifacts.',
        url: 'https://github.com/ossf/scorecard/blob/028fa93e924d3facde890a113f7edf1225a87ea2/docs/checks.md#signed-releases'
      }
    },
    {
      name: 'Binary-Artifacts',
      score: 10,
      reason: 'no binaries found in the repo',
      details: null,
      documentation: {
        short: 'Determines if the project has generated executable (binary) artifacts in the source repository.',
        url: 'https://github.com/ossf/scorecard/blob/028fa93e924d3facde890a113f7edf1225a87ea2/docs/checks.md#binary-artifacts'
      }
    },
    {
      name: 'Pinned-Dependencies',
      score: 8,
      reason: 'dependency not pinned by hash detected -- score normalized to 8',
      details: [
        'Warn: GitHub-owned GitHubAction not pinned by hash: .github/workflows/rebase.yml:19: update your workflow using https://app.stepsecurity.io/secureworkflow/ljharb/qs/rebase.yml/main?enable=pin',
        'Warn: third-party GitHubAction not pinned by hash: .github/workflows/rebase.yml:20: update your workflow using https://app.stepsecurity.io/secureworkflow/ljharb/qs/rebase.yml/main?enable=pin',
        'Warn: third-party GitHubAction not pinned by hash: .github/workflows/require-allow-edits.yml:18: update your workflow using https://app.stepsecurity.io/secureworkflow/ljharb/qs/require-allow-edits.yml/main?enable=pin',
        'Info: Dockerfile dependencies are pinned',
        'Info: no insecure (not pinned by hash) dependency downloads found in Dockerfiles',
        'Info: no insecure (not pinned by hash) dependency downloads found in shell scripts',
        'Info: Pip installs are pinned'
      ],
      documentation: {
        short: 'Determines if the project has declared and pinned the dependencies of its build process.',
        url: 'https://github.com/ossf/scorecard/blob/028fa93e924d3facde890a113f7edf1225a87ea2/docs/checks.md#pinned-dependencies'
      }
    },
    {
      name: 'Dangerous-Workflow',
      score: 10,
      reason: 'no dangerous workflow patterns detected',
      details: null,
      documentation: {
        short: "Determines if the project's GitHub Action workflows avoid dangerous patterns.",
        url: 'https://github.com/ossf/scorecard/blob/028fa93e924d3facde890a113f7edf1225a87ea2/docs/checks.md#dangerous-workflow'
      }
    },
    {
      name: 'Packaging',
      score: -1,
      reason: 'no published package detected',
      details: [ 'Warn: no GitHub/GitLab publishing workflow detected' ],
      documentation: {
        short: 'Determines if the project is published as a package that others can easily download, install, easily update, and uninstall.',
        url: 'https://github.com/ossf/scorecard/blob/028fa93e924d3facde890a113f7edf1225a87ea2/docs/checks.md#packaging'
      }
    },
    {
      name: 'Token-Permissions',
      score: 10,
      reason: 'tokens are read-only in GitHub workflows',
      details: [
        "Info: topLevel 'contents' permission set to 'read': .github/workflows/node-aught.yml:6",
        "Info: topLevel 'contents' permission set to 'read': .github/workflows/node-pretest.yml:6",
        "Info: topLevel 'contents' permission set to 'read': .github/workflows/node-tens.yml:6",
        "Info: topLevel 'contents' permission set to 'read': .github/workflows/rebase.yml:6",
        "Warn: jobLevel 'contents' permission set to 'write': .github/workflows/rebase.yml:11: Verify which permissions are needed and consider whether you can reduce them. (High effort)",
        "Info: jobLevel 'pull-requests' permission set to 'read': .github/workflows/rebase.yml:12",
        "Info: topLevel 'contents' permission set to 'read': .github/workflows/require-allow-edits.yml:6",
        "Info: jobLevel 'pull-requests' permission set to 'read': .github/workflows/require-allow-edits.yml:11"
      ],
      documentation: {
        short: "Determines if the project's workflows follow the principle of least privilege.",
        url: 'https://github.com/ossf/scorecard/blob/028fa93e924d3facde890a113f7edf1225a87ea2/docs/checks.md#token-permissions'
      }
    },
    {
      name: 'Vulnerabilities',
      score: 10,
      reason: 'no vulnerabilities detected',
      details: null,
      documentation: {
        short: 'Determines if the project has open, known unfixed vulnerabilities.',
        url: 'https://github.com/ossf/scorecard/blob/028fa93e924d3facde890a113f7edf1225a87ea2/docs/checks.md#vulnerabilities'
      }
    },
    {
      name: 'Fuzzing',
      score: 0,
      reason: 'project is not fuzzed',
      details: null,
      documentation: {
        short: 'Determines if the project uses fuzzing.',
        url: 'https://github.com/ossf/scorecard/blob/028fa93e924d3facde890a113f7edf1225a87ea2/docs/checks.md#fuzzing'
      }
    },
    {
      name: 'Security-Policy',
      score: 9,
      reason: 'security policy file detected',
      details: [
        'Info: Found linked content in security policy: github.com/ljharb/.github/SECURITY.md',
        'Info: Found text in security policy: github.com/ljharb/.github/SECURITY.md',
        'Warn: One or no descriptive hints of disclosure, vulnerability, and/or timelines in security policy: github.com/ljharb/.github/SECURITY.md',
        'Info: security policy detected in org repo: github.com/ljharb/.github/SECURITY.md'
      ],
      documentation: {
        short: 'Determines if the project has published a security policy.',
        url: 'https://github.com/ossf/scorecard/blob/028fa93e924d3facde890a113f7edf1225a87ea2/docs/checks.md#security-policy'
      }
    },
    {
      name: 'SAST',
      score: 0,
      reason: 'SAST tool is not run on all commits -- score normalized to 0',
      details: [
        'Warn: 0 commits out of 5 are checked with a SAST tool',
        'Warn: CodeQL tool not detected'
      ],
      documentation: {
        short: 'Determines if the project uses static code analysis.',
        url: 'https://github.com/ossf/scorecard/blob/028fa93e924d3facde890a113f7edf1225a87ea2/docs/checks.md#sast'
      }
    }
  ]
}
```

[package-url]: https://npmjs.org/package/scorecard-cli
[npm-version-svg]: https://versionbadg.es/ljharb/scorecard-cli.svg
[deps-svg]: https://david-dm.org/ljharb/scorecard-cli.svg
[deps-url]: https://david-dm.org/ljharb/scorecard-cli
[dev-deps-svg]: https://david-dm.org/ljharb/scorecard-cli/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/scorecard-cli#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/scorecard-cli.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/scorecard-cli.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/scorecard-cli.svg
[downloads-url]: https://npm-stat.com/charts.html?package=scorecard-cli
[codecov-image]: https://codecov.io/gh/ljharb/scorecard-cli/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/scorecard-cli/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/scorecard-cli
[actions-url]: https://github.com/ljharb/scorecard-cli/actions