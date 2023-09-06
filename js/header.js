const url = window.location.href

const headerLinks = document.querySelectorAll('.header__link')

if (!url.includes('store')) {
    for (let i = 0; i < headerLinks.length; i++) {
        const hrefWithoutIndex = headerLinks[i].href.replace('index.html', '')
        headerLinks[i].href = hrefWithoutIndex
    }
} else {
    for (let i = 0; i < headerLinks.length; i++) {
        const hashCharPosition = headerLinks[i].href.indexOf('#')
        const startOfPageHref = url.lastIndexOf('/') + 1
        const hrefWithIndex = headerLinks[i].href.slice(0, startOfPageHref) + 'index.html' + headerLinks[i].href.slice(hashCharPosition)
        headerLinks[i].href = hrefWithIndex
    }
}