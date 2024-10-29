import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {BooksService} from "./books.service";
import {Book, CreateBookRequestDto, UpdateBookRequestDto} from "../interfaces/book.interface";

@Controller('books')
export class BooksController {
	constructor(private readonly booksService: BooksService) {
	}

	@Post('/create')
	create(
		@Body() book: CreateBookRequestDto,
	):string {
		return this.booksService.createBook(book)
	}

	@Get(':id')
	getBook(
		@Param('id') id: string
	):Book {
		return this.booksService.getBook(id);
	}

	@Get()
	getBooks(): Book[] {
		return this.booksService.getBooks();
	}

	@Put(':id')
	updateBook(
		@Param('id') id: string,
		@Body() book: UpdateBookRequestDto,
	) {
		this.booksService.updateBook(id, book);
	}

	@Delete(':id')
	deleteBook(
		@Param('id') id: string,
	){
		this.booksService.deleteBook(id);
	}
}