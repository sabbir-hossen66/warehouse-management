import { useEffect, useState } from "react";

const useCategoryDetail = categoryId => {
    const [category, setCategory] = useState({});


    useEffect(() => {
        const url = `https://stormy-oasis-11527.herokuapp.com/category/${categoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [categoryId]);
    return [category]
}

export default useCategoryDetail