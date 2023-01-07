import { useRouter } from 'next/router'

const Posts = () => {
    const router = useRouter()
    const { postId } = router.query;
    return <h1>Post:{postId}</h1>
}
export default Posts