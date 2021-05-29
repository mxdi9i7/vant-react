<!--
 * @Author: zhaohui
 * @Date: 2021-05-13 18:18:19
 * @LastEditTime: 2021-05-29 13:47:58
 * @LastEditors: zhaohui
 * @Description: 
 * @FilePath: /vant-react/CONTRIBUTION.md
-->
# Contributing to Vant React

The following is a set of guidelines for contributing to Vant. Please spend several minutes in reading these guidelines before you create an issue or pull request.

Anyway, these are just guidelines, not rules, use your best judgment and feel free to propose changes to this document in a pull request.

## Opening an Issue

If you think you have found a bug, or have a new feature idea, please start by making sure it hasn't already been reported or fixed. You can search through existing issues and PRs to see if someone has reported one similar to yours.

Next, create a new issue that briefly explains the problem, and provides a bit of background as to the circumstances that triggered it, and steps to reproduce it.

## Submitting a Pull Request

It's welcomed to pull request, And there are some tips about that:

- Before working on a large change, it is best to open an issue first to discuss it with the maintainers.

- When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big one.

- When adding new features or modifying existing, please attempt to include tests to confirm the new behavior.

- Rebase before creating a PR to keep commit history clear.

- Create a brunch name as the standard “contributer firstname/component name or feature name.

- Add your branch name as PR title.

- Add some descriptions and refer relative issues for your PR.

## Coding suggestion

It's the suggestions for your coding

- To define a prop as `string | ReactNode` if possible, developers usually need to support putting a DOM element in the place where the string is placed.

## Getting started

```
 git clone https://github.com/mxdi9i7/vant-react.git

 cd vant-react

 npm install

 npm run storybook
    # open http://localhost:9009
```
