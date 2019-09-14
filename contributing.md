# Contributing
Here's a basic guide to contributing, so we're all on the same page. We can expand this as we bump into issues.

## Starting
To start, clone this repository to your local machine.
```
With https:
$ git clone https://github.com/jtanadi/cork.git

or with SSH:
$ git clone git@github.com:jtanadi/cork.git
```

## Workflow
For the time being, we're using the [Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). As we move forward, we might switch things around, but the basic ideas to retain are:
- The project has 2 primary branches: `master` and `dev`
    - The `master` branch stores the official release history (ie. the "public-facing" history)
    - The `dev` branch stores the development history (ie. the primary internal history)
- Pushing code straight to both `master` and `dev` is disallowed, including for admins
    - This means that in order to merge your code to either one of these, it has to be reviewed through a PR (pull request)
- `dev` is set to be the default branch on Github
- If you are developing a new feature or fixing a bug, etc., start a new branch (more below)
    - When that feature is complete or the bug is fixed, submit a PR to merge it into the `dev` branch
- When we've reached a good stopping point, the code in the `dev` branch will be merged to `master`

The general workflow will look something like this:
![gitflow diagram](https://wac-cdn.atlassian.com/dam/jcr:b5259cce-6245-49f2-b89b-9871f9ee3fa4/03%20%282%29.svg?cdnVersion=565)

## Issues
If you have a question, are stuck with something, or ran into a bug, post about it in the [Issues page](https://github.com/jtanadi/cork/issues).

Of course the slack channel is open for questions, comments, etc., but for anything that needs to be persistent, posting an issue would be good. Hopefully in the end we'll also have a library of Q&A's for future projects.

## `git` stuff

### Pull
**Remember to `pull` before you start working**, that way everything that's up on Github will end up in your computer, and we don't run into merge conflicts.

```
$ git pull
```

### Branching
When working on a new feature or bug, start a new branch:
```
$ git checkout -b branch_name
```

`git checkout` will allow you to switch to another branch (it also lets you "reset" an uncommited file). The `-b` flag lets you create a new branch, and then switch to that branch.

To list branches:
```
$ git branch
```

To switch to an already-made branch, use:
```
$ git checkout branch_name
```

#### Naming Branches
Not a huge deal for now, but it would be nice to label branches appropriately.

For example, if you're fixing issue #138, name your branch like so:
```
$ git checkout -b fix_issue_138
```

Or adding a feature
```
$ git checkout -b add_larger_header
```

### Push
Pushing straight to the `master` or `dev` branch is not allowed. When you're working on a feature, you will have to create a new local branch and `push` to a remote branch.

When you create a new branch, the first time you `push`, you also have to `--set-upstream` (or use the `-u` flag):
```
$ git push -u origin branch_name
```

### Combined Example
So let's say you are adding a new feature. The basic steps are:
- Switch to the `dev` branch (`dev` should be the default branch)
- Create a new branch (since you switched to `dev`, the new branch will be based off of `dev`)
- Write some code
- Commit that code
- Push that code to a remote branch
- When you're done, open a PR to have that feature merged to `dev`

```
$ git branch develop
$ git checkout -b add_rounded_buttons

... code code code ...

$ git add RoundedButton.jsx
$ git commit -m "[feature] Add rounded buttons for posting"
$ git push -u origin add_rounded_buttons  // first push only
```
