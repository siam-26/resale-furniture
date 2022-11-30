import { useEffect, useState } from "react"

const useJustUser = email => {
    const [isUser, setIsUser] = useState(false);
    const [userLoading, setUserLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://furniture-server-gamma.vercel.app/users/user/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsUser(data.isUser);
                    setUserLoading(false);
                })
        }
    }, [email]);
    return [isUser, userLoading];
}
export default useJustUser;