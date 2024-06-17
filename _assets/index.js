// @ts-nocheck
'use strict'

// https://docsify.js.org/
window.$docsify = {
    name: 'NHS Technology Guidelines',
    repo: 'nhsengland/nhstechguides',
    // homepage: 'README.md',
    auto2top: true,
    logo: '/_assets/logos/logo-nhs.svg',
    themeColor: '#3F51B5',
    executeScript: true,
    notFoundPage: 'README.md', // true, // load _404.md instead of page not found
    // loadNavbar: true,
    // mergeNavbar: true,
    loadSidebar: true,
    alias: {
        '/.*/_sidebar.md': '/_sidebar.md' // use the same sidebar everywhere
    },
    // maxLevel: 4,
    subMaxLevel: 2,
    search: {
        depth: 3,
        noData: 'No results!',
        placeholder: 'Search...'
    },

    pagination: {
        crossChapter: true,
        crossChapterText: true,
    },

    plugins: [
        // Custom plugin
        function ti(hook, vm) {
            //console.log({hook,vm})

            const orgName = 'NHS England'
            const orgUrl = 'https://www.england.nhs.uk'

            const footer = [
                '<hr/>',
                '<footer>',
                '<span>',
                `Copyright &copy; ${(new Date()).getFullYear()}`, // per-page - (c) and date
                ` <a href="${orgUrl}">${orgName}</a>.`,
                '', // updated date - {docsify-updated} variable could have been used
                '</span> ',
                '',
                ' <span>Published with <a href="https://docsify.js.org/" target="_blank">docsify</a>.</span> ',
                '</footer>'
            ]

            const stages = {
                '1': '1. Proposal Stage<br>Proposals may be raised via GitHub Issues. Initial discussions will happen under the Issue or offline.',
                '2': '2. Response Stage<br>After initial proposal discussion, if accepted, it will move on to the development stage.',
                '3': '3. Development Stage<br>Development stage documents may be incomplete and in-progress. They are actively looking for feedback.',
                '4': '4. Final Approval Stage<br>Once a PR has been issued, a final check will be done and approval will be given or minor changes requested.',
                '5': '5. Live<br>Live standards are under change control. Suggested changes must go through the contribution stages again.',
            }

            // Runs against the raw markdown for each page
            hook.beforeEach(function (content) {
                // console.log({content})

                let strYr = (new Date()).getFullYear()
                let mydate = false
                let yearFrom = 2024
                let yearTo = strYr
                footer[5] = ''

                if (vm.frontmatter) { // fm only exists per page, requires plugin
                    //#region --- Add front-matter (YAML) standard metadata to each page if present ---
                    if (vm.frontmatter.description) {
                        content = `${vm.frontmatter.description}\n\n${content}`
                    }

                    if (vm.frontmatter.reviewDate) {
                        if ((new Date()) > (new Date(vm.frontmatter.reviewDate)))
                            content = `!> This standard requires a review/update.\n\n${content}`
                    }

                    if (vm.frontmatter.stage) {
                        let stage
                        try {
                            content = `?> ${stages[Number.parseInt(vm.frontmatter.stage)]}\n\n${content}`
                        } catch (e) { }
                    }

                    if (vm.frontmatter.title) {
                        content = `# ${vm.frontmatter.title}\n\n${content}`
                    }
                    //#endregion ---  ---

                    //#region --- Add page specific (c) and last updated date to each page if available from YAML front-matter ---
                    if (vm.frontmatter.created) { // uib docs/Obsidian
                        mydate = new Date(vm.frontmatter.created)
                        yearFrom = mydate.getFullYear()
                    } else if (vm.frontmatter.date) { // Hugo
                        mydate = new Date(vm.frontmatter.date)
                        yearFrom = mydate.getFullYear()
                    }

                    if (vm.frontmatter.lastUpdated) { // uib/IT Stds docs
                        mydate = new Date(vm.frontmatter.lastUpdated)
                        yearTo = mydate.getFullYear()
                    } else if (vm.frontmatter.updated) { // Obsidian
                        mydate = new Date(vm.frontmatter.updated)
                        yearTo = mydate.getFullYear()
                    } else if (vm.frontmatter.Lastmod) { // Hugo
                        mydate = new Date(vm.frontmatter.Lastmod)
                        yearTo = mydate.getFullYear()
                    }

                    if (mydate !== false) {
                        if (yearFrom === yearTo && yearFrom !== Number(strYr)) {
                            strYr = yearFrom
                        } else if (yearFrom !== yearTo) {
                            strYr = yearFrom + '-' + yearTo
                        }

                        footer[5] = ` Updated ${mydate.toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}.`
                    }
                    //#endregion ---  ---

                } // ---- End of if front-matter ---- //

                footer[3] = `Copyright &copy; ${strYr}`

                return content

            }) // ------- End of Custom Plugin ------- //

            // Runs against the rendered HTML for each page
            hook.afterEach(function (html, next) {
                next(html + footer.join(''))
            })
        },
    ],
}
