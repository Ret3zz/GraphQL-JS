import BookModel from "./models/Book.model.js"

const resolvers = {
    Query: {
        hello: () => {
            return 'Hello KuyQL'
        },
        getAllBooks: async () => {
            const books = await BookModel.find()
            return books
        },
        getBook: async (_parent, { Title }, _context, _info) => {
            return await BookModel.findOne({ Title: Title })
        }


    },

    Mutation: {
        createBook: async (parent, args, context, info) => {
            const { Title, Count } = args.books
            //  console.log(Title, Count)
            const book = new BookModel({ Title, Count })
            await book.save()
            return book
        },
        deleteBook: async (parent, args, context, info) => {
            const { ID } = args.ID
            await BookModel.findByIdAndDelete(ID)
            return "WOW YOU FUCK UP"
        }
    }
}

export default resolvers