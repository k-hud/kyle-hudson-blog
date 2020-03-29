import React from 'react'
import { Link } from 'gatsby'

import '../article/style.scss'

const Article = () => (
    <Link to="/" className="c-article">
        <img alt="" src="https://source.unsplash.com/random/800x600" />
        <h2>Kyle Hudson</h2>
    </Link>
)

export default Article