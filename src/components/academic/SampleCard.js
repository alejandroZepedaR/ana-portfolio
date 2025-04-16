import React from 'react'

export const SampleCard = (props) => {
  return (
    <article className='card w-full md:max-w-1/3 bg-base-200 shadow-sm'>
        <div className='card-body'>
        <h2 className='card-title'>{props.title}</h2>
        <p>{props.description}</p>
            <div>
                <a className='btn btn-secondary' href={props.link} target='_blank'>
                    View
                </a>
            </div>
        </div>
    </article>
  )
}
