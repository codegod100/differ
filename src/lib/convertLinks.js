export function convertLinks(body) {
    return body.replace(/\[\[(.*?)\]\]/g, (match, link) => {
        console.log(link)
        return `[[[${link}](${encodeURIComponent(link)})]]`
    })
}