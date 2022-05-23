import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_BOOKS } from '../graphql/Queries'

const GetBooks = () => {
    const [Books, setBooks] = useState(null)
    const { error, loading, data } = useQuery(LOAD_BOOKS)
    useEffect(() => {
        data ? setBooks(data) : <></>
        // console.log(data)
    }, [data])

    return (
        <div className="">
            <div>รายชื่อหนังสือการ์ตูน</div>
            {Books?.getAllBooks.map((book, i) => {
                // console.log(book,i)
                return <p key={i}>{book.Title}</p>
            }
            )}
        </div>
    )
}

export default GetBooks