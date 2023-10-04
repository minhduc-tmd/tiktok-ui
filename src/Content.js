import { useEffect, useState } from "react";


// 1. useEffect(callback)
// - Goi callback moi khi component re-render
// - Goi callback sau khi component them element vao dom
// 2. useEffect(callback, [])
// - Chi goi callback 1 lan sau khi component mounted
// 3. useEffect(callback, [dependencies])
// - Callback se dc goi lai moi khi dependency thay doi

// -------------------
// 1. callback luon dc goi sau component mounted
// 2. cleanup function luon dc goi truoc khi component unmounted
// 3. cleanup function luon dc goi truoc callback dc goi (tru la dc mounted)

// -------------------
// useEffect
// 1. Cap nhat lai state
// 2. Cap nhat DOM (mutated)
// 3. Render lai UI
// 4. Goi cleanup function neu deps thay doi
// 5. Goi useEffect callback

// useLayoutEffect
// 1. Cap nhat lai state
// 2. Cap nhat DOM (mutated)
// 3. Goi cleanup function neu deps thay doi (sync)
// 4. Goi useLayoutEffect callback (sync)
// 5. Render lai UI

function Content() {
    // const [title, setTtitle] = useState('')
    // const [posts, setTposts] = useState([])
    // const [type, setType] = useState('posts')

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then(res => res.json())
    //         .then(posts => {
    //             setTposts(posts)
    //         })
    // }, [type])



    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: 'primary',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={e => setTtitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title || post.name}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Content;