import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(4444);
  console.log("application running on ", await  app.getUrl())
}
bootstrap();
//COM