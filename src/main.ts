import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Crée une instance de l'application NestJS
  const config = new DocumentBuilder() // Crée une configuration pour Swagger
    .setTitle('Building manager') // Définit le titre de la documentation Swagger
    .setDescription('Builder API') // Définit la description de l'API dans la documentation Swagger
    .setVersion('1.0') // Définit la version de l'API dans la documentation Swagger
    .addTag('building') // Ajoute un tag "building" à la documentation Swagger
    .build(); // Finalise la configuration Swagger

  app.enableCors(); // Active la prise en charge des requêtes CORS pour l'application

  const document = SwaggerModule.createDocument(app, config); // Crée un document Swagger à partir de la configuration et de l'application
  SwaggerModule.setup('api', app, document); // Configure Swagger pour servir la documentation à l'URL /api

  await app.listen(3000);
}
bootstrap();
