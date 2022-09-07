export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

export const getPages = (totalPages) => {
    let pages = []
    for (let i = 0; i < totalPages; i++) {
        pages.push(i + 1)
    }

    return pages;
}