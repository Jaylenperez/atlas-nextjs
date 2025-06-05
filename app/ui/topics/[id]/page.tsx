import React from 'react'

export default async function page({ params }: { params: {id: string } }) {
        // await new Promise(resolve => setTimeout(resolve, 3000));
    return <div>Topics Page: {params.id}</div>
}