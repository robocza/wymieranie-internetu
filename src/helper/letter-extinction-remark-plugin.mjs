import {visitParents} from 'unist-util-visit-parents';

export function letterExtinctionRemarkPlugin() {
    return function (tree, file) {
        if(file.data.astro.frontmatter.letterExtinction === true) {
            visitParents(tree, 'text', (node, ancestors) => {
                if(ancestors.map(ancestor => ancestor.type).toString() === 'root,paragraph') {
                    let newNode =  {
                        type: 'html',
                        value: node.value.replaceAll(
                            /(\s)([a-ząćęłńóśźż]+)(o)([a-ząćęłńóśźż]+[\w.])/gu,
                            "$1<span class='text-nowrap'>$2<span class='relative' data-text-extinction><span data-text-extinction-victim>$3</span><span class='select-none absolute text-transparent bg-extinct-light dark:bg-extinct-dark left-0 -top-0.5 bg-no-repeat bg-contain bg-center px-0.5 -mx-0.5 opacity-0' data-text-extinction-zombie>$3</span>$4</span></span>"
                        )
                    }

                    Object.assign(node, newNode)
                }
            });
        }
    }
}
