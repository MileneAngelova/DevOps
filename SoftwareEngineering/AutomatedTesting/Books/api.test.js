const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
const { describe } = require('mocha');
const expect = chai.expect;
<<<<<<< HEAD

chai.use(chaiHttp);

describe('Books', () => {
    letbookId;
=======
chai.use(chaiHttp);

describe('Books', () => {
    let bookId;
>>>>>>> add-tests
    it('should POST a book', (done) => {
        const book = {id: "1", title: "Test Book", author: "Test Author"}
        chai.request(server)
        .post('/books')
        .send(book)
        .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a('object');
            expect(res.body).to.have.property('id');
            expect(res.body).to.have.property('title');
            expect(res.body).to.have.property('author');
            book.id = res.body.id;
<<<<<<< HEAD
            done;
=======
            console.log('response: ', res.body);
            done();
>>>>>>> add-tests
        })
    })
});