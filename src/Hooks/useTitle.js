import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}- HMAS-Furniture`;
    }, [title])
}

export default useTitle;