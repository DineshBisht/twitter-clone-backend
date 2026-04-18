import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PasswordRepository } from './password.repository';

describe('AuthService', () => {
  let service: AuthService;
  let passwordRepository: PasswordRepository;

  beforeEach(async () => {
    const mockPasswordRepository = {
      create: jest.fn(),
    } as unknown as PasswordRepository;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PasswordRepository, useValue: mockPasswordRepository },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    passwordRepository = module.get<PasswordRepository>(PasswordRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('repository should be defined', () => {
    expect(passwordRepository).toBeDefined();
  });
});
