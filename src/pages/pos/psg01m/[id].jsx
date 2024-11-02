import { useRouter } from "next/router"

const VDOM = () => {
    const routes = useRouter();
    console.log('routes',routes)
    return (
        <>
            <p>{routes.query.id}</p>
        </>
    )
}

export default VDOM