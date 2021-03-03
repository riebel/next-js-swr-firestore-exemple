// index.js

import { useCollection } from '@nandorojo/swr-firestore'

function HomePage() {
    const { data, loading } = useCollection("users")

    if (!data || loading) return null

    console.log('render', data)

    return <div>{JSON.stringify(data)}</div>
}

export default HomePage
