import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {

    const sortedItems = useMemo(() => {

        if (sort) {

            if(sort === 'id'){
                return [...posts].sort((a, b) => a[sort] - b[sort]);
            }
            else{
                return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
            }
            
        }
        else {
            return posts;
        }

    }, [sort, posts])

    return sortedItems;

}

export const usePosts = (posts, sort, search) => {

    const sortedItems = useSortedPosts(posts, sort);
    const sortedAndSearchItems = useMemo(() => {
        return sortedItems.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, sortedItems])

    return sortedAndSearchItems;

}