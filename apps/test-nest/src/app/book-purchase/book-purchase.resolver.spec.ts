import { Test, TestingModule } from '@nestjs/testing';
import { BookPurchaseResolver } from './book-purchase.resolver';

describe('BookPurchaseResolver', () => {
  let resolver: BookPurchaseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookPurchaseResolver],
    }).compile();

    resolver = module.get<BookPurchaseResolver>(BookPurchaseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
