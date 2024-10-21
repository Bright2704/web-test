// test/server.test.js
import * as chai from 'chai';
import chaiHttp from 'chai-http';
const { expect } = chai;
import app from './server.js'; // Import the Express app

chai.use(chaiHttp);

describe('Server', function () {
  it('should serve the index.html file on the root route', function (done) {
    chai.request(app)
      .get('/')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        done();
      });
  });
  
  it('should respond with status 404 for a non-existent route', function (done) {
    chai.request(app)
      .get('/non-existent-route')
      .end(function (err, res) {
        expect(res).to.have.status(404);
        done();
      });
  });
});
