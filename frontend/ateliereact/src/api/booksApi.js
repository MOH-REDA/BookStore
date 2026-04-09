import http from "./axiosClient";

export async function getBooks(){
    const {data}= await http.get('/books')
    return data
}

export async function getBookById(id){
    const {data}= await http.get(`/books/${id}`)
    return data
}

export async function deleteBook(id){
    const {data}= await http.delete(`/books/${id}`)
    return data
}

export async function addBook(book) {
    const {data}= await http.post('/books', book)
    return data
}

export async function updateBook(id, book) {
    const {data}= await http.put(`/books/${id}`, book)
    return data
}