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

## Pull
**Remember to `pull` before you start working**, that way everything that's up on Github will end up in your computer, and we don't run into merge conflicts.

```
$ git pull
```

## Branching
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


### Naming Branches
Not a huge deal for now, but it would be nice to label branches appropriately.

For example, if you're fixing issue #138, name your branch like so:
```
$ git checkout -b fix_issue_138
```

Or adding a feature
```
$ git checkout -b add_larger_header
```

## Push
Don't push to `master`. Ellaborate on this later...
