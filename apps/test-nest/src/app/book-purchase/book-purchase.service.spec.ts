import { Test, TestingModule } from '@nestjs/testing';
import { BookPurchaseService } from './book-purchase.service';

describe('BookPurchaseService', () => {
  let service: BookPurchaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookPurchaseService],
    }).compile();

    service = module.get<BookPurchaseService>(BookPurchaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
