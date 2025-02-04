import { Controller, Get } from '@nestjs/common';
import {
  ApiTags,
  ApiResponse,
  ApiBearerAuth,
  //ApiSecurity,
  //ApiCookieAuth,
  ApiUnauthorizedResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Root')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Root path' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiOperation({
    summary: 'Root path',
    description: 'Root path',
  })
  getRoot(): string {
    return this.appService.getRoot();
  }

  @Get('hello')
  @ApiResponse({ status: 200, description: 'Hello ~' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiOperation({
    summary: 'Hello path',
    description: 'Return Hello literal',
  })
  @ApiBearerAuth('access-token')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('goodbye')
  @ApiResponse({ status: 200, description: 'Goodbye ~' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBearerAuth('refresh-token')
  //@ApiCookieAuth('refreshToken')
  @ApiOperation({
    summary: 'Goodbye path',
    description: 'Return Goodbye literal',
  })
  getGoodbye(): string {
    return this.appService.getGoodbye();
  }
}
