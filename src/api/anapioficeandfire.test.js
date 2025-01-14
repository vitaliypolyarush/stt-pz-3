const { getListOfRestEndPoint, getBooks } = require('./anapioficeandfire');
const mockData = require('../__mocksData__/api.json');

jest.mock('rest', () => {
  const mockRequest = jest.fn((url) => {
    if (url.includes('/books')) {
      return Promise.resolve({ entity: mockData.books });
    }
    if (url.includes('/houses')) {
      return Promise.resolve({ entity: mockData.houses });
    }
    throw new Error(`Unhandled request: ${url}`);
  });
  return () => mockRequest;
});

describe('API Tests for An API of Ice and Fire', () => {
  it('should fetch a list of books', async () => {
    const response = await getBooks();
    expect(response.entity).toEqual(mockData.books);
  });

  it('should fetch a list of houses', async () => {
    const response = await getListOfRestEndPoint();
    expect(response.entity).toBeDefined();
    expect(response.entity).toEqual(expect.arrayContaining(mockData.houses));
  });
});