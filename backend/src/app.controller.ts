import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  ApiTags,
  ApiResponse,
  ApiBearerAuth,
  //ApiSecurity,
  //ApiCookieAuth,
  ApiUnauthorizedResponse,
  ApiOperation,
  ApiCookieAuth,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

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
  @ApiBearerAuth('access-token')
  getRoot(): string {
    return this.appService.getRoot();
  }

  /**
   * AuthGuard('access-token')
   * @ApiBearerAuth('access-token')
   */
  @Get('hello')
  @ApiResponse({ status: 200, description: 'Hello ~' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Hello path',
    description: 'Return Hello literal',
  })
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * AuthGuard('access-token')
   * @ApiBearerAuth('refresh-token')
   */
  @Get('goodbye')
  @ApiResponse({ status: 200, description: 'Goodbye ~' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiCookieAuth('refresh-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: 'Goodbye path',
    description: 'Return Goodbye literal',
  })
  getGoodbye(): string {
    return this.appService.getGoodbye();
  }
}
