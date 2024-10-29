import {Injectable} from "@nestjs/common";
import {Book, CreateBookRequestDto, UpdateBookRequestDto} from "../interfaces/book.interface";

@Injectable()
export class BooksService {
	private readonly books: Book[] = [
		{
			title: 'string',
			description: 'string',
			authors: 'string',
			favorite: 'string',
			fileCover: 'string',
			fileName: 'string',
			fileBook: 'string',
			_id : '0',
		}
	];

	createBook(book: CreateBookRequestDto): string {
		this.books.push({...book, _id: this.books.length.toString()});
		return (this.books.length - 1).toString();
	}

	getBook(id: string): Book {
		return this.books.find((book) => book._id === id);
	}

	getBooks(): Book[] {
		return this.books;
	}

	updateBook(id: string, book: UpdateBookRequestDto) {
		const bookIndex = this.books.findIndex((book) => book._id === id);
		this.books[bookIndex] = {
			...this.books[bookIndex],
			...book
		};
	}

	deleteBook(id: string) {
		const bookIndex = this.books.findIndex((book) => book._id === id);
		delete this.books[bookIndex];
	}
}