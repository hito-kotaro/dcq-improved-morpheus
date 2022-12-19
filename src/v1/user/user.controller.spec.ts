import { Test, TestingModule } from '@nestjs/testing';
import { Users } from 'src/entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  const mockUserService = {
    register: jest.fn((id) => {
      console.log(id);
      return {
        id,
        first_name: null,
        last_name: null,
        point: 0,
        image: null,
        visit: false,
        created_at: new Date(),
        updated_at: new Date(),
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // registerされたユーザがリターンされること
  it('should create a user', async () => {
    const user = { id: 'auth0|auth0noIDdesu' };

    const createdUser: Users = {
      id: user.id,
      first_name: null,
      last_name: null,
      point: 0,
      image: null,
      visit: false,
      created_at: expect.any(Date),
      updated_at: expect.any(Date),
    };
    expect(await controller.signUp(user)).toEqual(createdUser);
    expect(mockUserService.register).toHaveBeenCalledWith(user.id);
  });
});
