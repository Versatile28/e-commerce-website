import '@testing-library/jest-dom';


jest.mock('axios', () => ({
   default: {
     get: jest.fn(() => Promise.resolve({ data: {} })),
     post: jest.fn(() => Promise.resolve({ data: {} })),
     put: jest.fn(() => Promise.resolve({ data: {} })),
     delete: jest.fn(() => Promise.resolve({ data: {} }))
   }
 }));