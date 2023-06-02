import React from 'react'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <section id='explore'>
        <div className="container">
            <div className="row row__column">
                <h2>
                    Explore More <span className='purple'>Books</span>
                </h2>
                <a href='/books'>
                    <button className='btn'>Explore books</button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Explore