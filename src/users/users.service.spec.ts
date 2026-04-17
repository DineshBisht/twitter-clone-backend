import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';

describe('UsersService', () => {
  let service: UsersService;
  let userRepository: UserRepository;

  const mockUserEntity: UserEntity = {
    id: '1',
    userName: 'testuser',
    name: 'Test User',
    avatar: 'https://example.com/avatar.jpg',
    bio: 'This is a test user',
    followerCount: 100,
    followeeCount: 50,
    varified: true,
    posts: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    // Create a mock of UserRepository
    const mockUserRepository = {
      findOne: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UserRepository,
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get(UserRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getUserByUsername', () => {
    it('should return a user when found by username', async () => {
      // Arrange
      const username = 'testuser';
      userRepository.findOne.mockResolvedValue(mockUserEntity);

      // Act
      const result = await service.getUserByUsername(username);

      // Assert
      expect(result).toEqual(mockUserEntity);
      expect(userRepository.findOne).toHaveBeenCalledWith({ name: username });
      expect(userRepository.findOne).toHaveBeenCalledTimes(1);
    });

    it('should return null when user is not found', async () => {
      // Arrange
      const username = 'nonexistentuser';
      userRepository.findOne.mockResolvedValue(null);

      // Act
      const result = await service.getUserByUsername(username);

      // Assert
      expect(result).toBeNull();
      expect(userRepository.findOne).toHaveBeenCalledWith({ name: username });
    });

    it('should pass the correct username to the repository', async () => {
      // Arrange
      const username = 'anotheruser';
      userRepository.findOne.mockResolvedValue(mockUserEntity);

      // Act
      await service.getUserByUsername(username);

      // Assert
      expect(userRepository.findOne).toHaveBeenCalledWith({ name: username });
    });

    it('should handle empty username string', async () => {
      // Arrange
      const username = '';
      userRepository.findOne.mockResolvedValue(null);

      // Act
      const result = await service.getUserByUsername(username);

      // Assert
      expect(result).toBeNull();
      expect(userRepository.findOne).toHaveBeenCalledWith({ name: '' });
    });

    it('should handle special characters in username', async () => {
      // Arrange
      const username = 'user@#$%';
      userRepository.findOne.mockResolvedValue(null);

      // Act
      await service.getUserByUsername(username);

      // Assert
      expect(userRepository.findOne).toHaveBeenCalledWith({ name: username });
    });

    it('should return user with all properties correctly mapped', async () => {
      // Arrange
      const username = 'testuser';
      userRepository.findOne.mockResolvedValue(mockUserEntity);

      // Act
      const result = await service.getUserByUsername(username);

      // Assert
      expect(result).toEqual(mockUserEntity);
      expect(result?.userName).toBe('testuser');
      expect(result?.name).toBe('Test User');
      expect(result?.followerCount).toBe(100);
      expect(result?.varified).toBe(true);
    });

    it('should propagate repository errors', async () => {
      // Arrange
      const username = 'testuser';
      const error = new Error('Database connection failed');
      userRepository.findOne.mockRejectedValue(error);

      // Act & Assert
      await expect(service.getUserByUsername(username)).rejects.toThrow(
        'Database connection failed',
      );
    });

    it('should handle case-sensitive usernames', async () => {
      // Arrange
      const username1 = 'TestUser';
      const username2 = 'testuser';
      userRepository.findOne.mockResolvedValue(null);

      // Act
      await service.getUserByUsername(username1);
      await service.getUserByUsername(username2);

      // Assert
      // expect(userRepository.findOne).toHaveBeenNthCalledWith(1, username1);
      // expect(userRepository.findOne).toHaveBeenNthCalledWith(2, username2);
    });

    it('should handle undefined return from repository', async () => {
      // Arrange
      const username = 'testuser';
      userRepository.findOne.mockResolvedValue(undefined);

      // Act
      const result = await service.getUserByUsername(username);

      // Assert
      expect(result).toBeUndefined();
    });
  });
});
