import React from 'react'
import { Link } from 'gatsby'

import '../article/style.scss'

const Article = () => (
    <Link to="/" className="c-article">
        <img alt="" src="https://source.unsplash.com/random/800x600" />
        <h2>Kyle Hudson</h2>
        <p>Consequat duis consequat et consectetur duis cupidatat commodo aliqua nisi ipsum culpa. Amet consectetur aute aliqua in aliqua deserunt mollit velit laborum minim laborum mollit. Mollit do eiusmod reprehenderit dolor sunt excepteur anim. Fugiat nostrud sunt consectetur amet eiusmod dolor qui nisi labore est elit aute excepteur sit. Culpa cillum cillum est in.</p>
    </Link>
)

export default Article