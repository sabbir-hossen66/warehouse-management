import { useEffect, useState } from "react";

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://stormy-oasis-11527.herokuapp.com/category')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);
    return [categories, setCategories]
}

export default useCategories