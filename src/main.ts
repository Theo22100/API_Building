import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Create an instance of the NestJS application
  const config = new DocumentBuilder() // Create configuration for Swagger
    .setTitle('Building manager') // Set the title of Swagger documentation
    .setDescription('Builder API') // Set the API description in Swagger documentation
    .setVersion('1.0') // Set the API version in Swagger documentation
    .build(); // Finalize Swagger configuration

  app.enableCors(); // Enable CORS support for the application

  const document = SwaggerModule.createDocument(app, config); // Create a Swagger document from configuration and application
  SwaggerModule.setup('guerin', app, document); // Configure Swagger to serve documentation at /api URL

  await app.listen(3110);
}
bootstrap();
