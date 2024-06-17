# Contributing to our standards

If you would like to suggest a correction or contribute to these guidelines, please raise an [GitHub Issue](https://github.com/nhsengland/nhstechguides/issues) in the first instance so that it can be discussed.

> [!NOTE]
> Contributions are welcome from **anyone**. You don't have to be part of the NHS or the UK Government to have great ideas and useful contributions. But please remember that this is specifically for the NHS, the UK's National Health Service and contributions must be relavent to that context. Contributions from suppliers are also most welcome.

Ideas for new content, or restructuring to make the site easier to use can be raised in the [GitHub Discussions section](https://github.com/nhsengland/nhstechguides/discussions). 

Contributions will be accepted via [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) (PR). Direct contributors should create a "topic branch" in this repository, make changes there and then submit a PR to get the changes approved and accepted into the `main` branch which will always be the "current" published version.

Non-direct contributors should create a fork of this repository, make changes and submit a PR.

Minor changes will be reviewed by the NHS England Technology & Digital Assurance team (TaDA) of this repository and may be approved directly. Major changes to standards will be triaged initially by TaDA with approval at the *NHS Technology Forum*. Detailed reviews and further discussions may be allocated to subject matter experts as required.

## Contribution process

Except for [small corrections](#small-corrections), proposals for new guidelines or changes to existing standards will follow this process:

1. Proposal Stage

   Proposals can be submitted as [Issues on GitHub](https://github.com/nhsengland/nhstechguides/issues). Please use the appropriate template and fill in all sections.

2. Response Stage

   Once an Issue has been raised, the proposal will be reviewed by the owners of the repository (NHSE TaDA) and raised with the NHS Technology Forum and other relavent teams as needed.
   
   The proposal will be reviewed, any questions and responses will be added to comments in the Issue.
   
   If the proposal is not accepted, the issue will be closed. Otherwise the label on the issue will be change to #3 and the appropriate people will be notified to start work on the change.

3. Development Stage

   The assigned author(s) will either create a new topic branch of this repository (if they have direct change rights) or will create a fork.
   
   Text and images will be added in the branch or fork.
   
   Once the fork is ready for final review, the lead author will submit a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) (PR) against the `main` branch.

4. Final Approval Stage

   When the PR is received, it will be reviewed by TaDA and any final discussion will take place.
   
   If necessary, this version will be reviewed by the NHS Technology Forum and other stakeholders.
   
   If changes are required, the PR will be rejected and the authors will make further changes and submit a new PR. Small corrections however may be accepted on the existing PR.
   
   Once the reviewers are happy, the PR will be accepted and the changes will be live. The master branch of this repository will always be the live, approved version of the standards.

5. Live

   Live standards are under change control. Suggested changes to live standards will go back through these stages.

### Small corrections

The main process is not needed for small corrections to standards. Small changes may include typos, layout issues correction to links or contacts.

In this case, PR's will be accepted directly. Alternatively, if the person raising the issue does not have the tools or knowledge to make a change themselves, they can raise an Issue using the blank template.

In these cases, the corrections will be reviewed by the repository owners or suitable SME's and accepted or rejected directly.

## Formatting, structure, and layout

All standards will use [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/) throughout. Other document formats may be allowed via exception but may not be considered a long-term solution for authoring these guidelines. However, some additional document format files may be accepted as example or template files. PDF files will generally not be accepted unless there is no alternative and certainly not as a master file format.

In addition to GFM, there are a few extensions provided by the [Docsify tool](https://docsify.js.org/#/helpers) used to turn the files into a web site. The current extensions in use can be seen by reviewing the `index.html` file.

Diagrams should be developed in a suitable tool (e.g. Visio or PowerPoint) and exported as SVG files (.svg) wherever possible. These should then be uploaded and linked to in the markdown document. The master file, in this case, may be retained in the original tool's native format and uploaded for future development.

Other images should be uploaded in JPeg (.jpg or .jpeg or .jfif) format and suitably referenced in the document(s).

Other markdown extensions _may_ be approved in the future dependent on them being compatible with output formats required. The [Commonmark](https://commonmark.org/) standard will be used as the gold-standard for extended markdown in that case.

You should use logical header levels to ensure a good structure to your document. Only use heading level 1 once in a document and don't use it at all if using the `title` metadata field which automatically creates a level 1 heading.

Page metadata is required.

### Callouts

> [!NOTE]
> This is an example `NOTE` callout

Several callout styles are available to this site, only the ones used by GitHub Flavoured Markdown are supported:

```markdown
> [!NOTE]  
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.
```


### Folder Structures

TBC

### Page metadata

Document metadata must be included in each markdown file. Metadata, must be at the start of the file and must use [YAML](https://yaml.org/) formatting. This is in keeping with website generators such as [Hugo](https://gohugo.io/content-management/front-matter/) or [Jekyll](https://jekyllrb.com/docs/front-matter/) which may be used to generate documentation websites.

Note that, when using `title`, you do not need to provide a title in the text of your document, it is added automatically. The description will also be shown.

The following metadata will be automatically shown on the pages:

- `title` - Document title. Will be used as the initial line of the document marked as a heading1 level.
- `description` - A single paragraph describing the document. Will be added as text to the top of the output document.
- `created` - Date (and optionally time) that the document was originally created. Should not be changed.
- `updated` - Date (and optionally time) that the document was last amended.
- `stage` - The approval stage of the document. 1-5 is allowed. Normally, only stages 3-5 would be used as 1 & 2 would be before a document is created. You only need the number but can add other text after it, it will be ignored.
- `reviewDate` - Date (and optionally time) after which the document requires review/revision. A warning will be displayed on the page if this date has passed.

A version number is not needed since any updates should have a comment against them when they are committed to the repository. Changes can be undone using the commit mechanism in Git.

Other optional metadata that may be used in the future:

- `tags` - help with auto-structuring of information as well as searching.
- `author` - helps know who the original author of the page was and helps with future updates.

The `stage` entry must be one of the following:

1. `1. Proposal Stage`<br>Proposals may be raised via GitHub Issues. Initial discussions will happen under the Issue or offline.
2. `2. Response Stage`<br>After initial proposal discussion, if accepted, it will move on to the development stage.
3. `3. Development Stage`<br>Development stage documents may be incomplete and in-progress. They are actively looking for feedback.
4. `4. Final Approval Stage`<br>Once a PR has been issued, a final check will be done and approval will be given or minor changes requested.
5. `5. Live`<br>Live standards are under change control. Suggested changes must go through the contribution stages again.

#### Example

Note that the `---` lines are required and deliniate the metadata. Metadata will be shown as a table in GitHub.

```
---
title: Standard for open source development
description: >
  This is an extended description or summary of the document.
  It can occupy multiple lines thanks to the use of ">" above.
created: 2020-06-10 14:42:49
updated: 2021-06-10 14:43:03
stage: 3. Development
reviewDate: 2021-01-01
tags:
- tag1
- tag2
author: Main Author Name
---
```

## Tooling

Devices being used to make amendments will need [Git](https://git-scm.com/) installed.

It is strongly recommended to use either [Microsoft Visual Studio Code (VSCode)](https://code.visualstudio.com/Docs/languages/markdown) or [Typora](https://typora.io/) for authoring documentation in this repository. Both should be configured to format as GitHub Flavored Markdown.

VS Code has a number of [extensions that support management of GitHub repositories](https://code.visualstudio.com/docs/editor/github) and more that [help Markdown authors](https://marketplace.visualstudio.com/search?term=markdown&target=VSCode&category=All%20categories&sortBy=Relevance). Typora provides a visual editor (WYSIWYG) making edits much easier for non-coders.

### Docsify

[Docsify](https://docsify.js.org/#/) is used to present the contents of the repository as a web site. It uses a single `index.html` file to dynamically convert Markdown content to HTML, provides search and other features.

The following features and plugins are used (loaded from the public [JSdelivr](https://www.jsdelivr.com) CDN):

- [Search](https://docsify.js.org/#/plugins?id=full-text-search) - full text local search.
- [Themable plugin](https://jhildenbiddle.github.io/docsify-themeable/#/) with Simple Theme - easy theming. Coupled with some customisations to start to bring the display to NHS standards.
- Front-matter plugin (internal) - Allows for YAML based front-matter variables.
- [Pagination plugin](https://docsify.js.org/#/plugins?id=pagination) - Previous/Next page navigation at the foot of each page.
- [Flexible Alerts](https://github.com/fzankl/docsify-plugin-flexible-alerts/) - Provides the GFM style callouts.
- Custom plugin from TotallyInformation - Display document metadata on each page.

If you are doing local editing, you may wish to install the Docsify CLI tool, you can then see changes locally by running `docsify serve` or simply `npm start` from within the root folder.

### Git

You will need Git installed to enable you to work with the repository. GitHub Desktop can be useful for managing the process of cloning branches or forks to your local machine for editing and submission of changes.

VSCode can use Git directly. There are also optional extensions for working with GitHub directly.

### Typora

Typora is a visual editor for Markdown (WYSIWYG). It is particularly helpful when working with tables.

Typora supports more markdown extensions than GitHub does and so some features should be turned off in Preferences if necessary. It also has a GitHub theme which may be useful to be able to see the impact of changes.

Typora also has a useful Table of Contents feature that should be used at least with longer documents. (VSCode also has extensions that will manage TOCs).

For pasting images from the clipboard, you can set Typora to automatically copy the image as a file to the current folder.

### VSCode

VSCode is a powerful open source text editor and integrated development environment from Microsoft. It is free to use for commercial and personal use. Unlike Typora, editing Markdown happens in text only but there is a live, synchronised preview view that opens in a side window of the editor.

VScode has a number of useful extensions that can help when authoring, including:

* [Markdown All-In-One](https://github.com/yzhang-gh/vscode-markdown)
* [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
* [Markdown Shortcuts](https://marketplace.visualstudio.com/items?itemName=mdickin.markdown-shortcuts)
* [Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image) - will copy a pasted image to the same folder as the open file & add a link to the document.

There are also several powerful GitHub and Git extensions that may be useful for some people.

