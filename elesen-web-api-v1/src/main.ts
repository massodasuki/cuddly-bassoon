import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
// import { SnakeCaseInterceptor } from './common/interceptors/snake-case.interceptor';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   app.useGlobalPipes(new ValidationPipe({ whitelist: false, transform: true }));
  //  app.useGlobalInterceptors(new SnakeCaseInterceptor());
   // app.useGlobalFilters(new AllExceptionsFilter());
  
  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('eLesen API')
    .setDescription('API documentation for Jabatan Perikanan vessel system')
    .setVersion('1.0')
    .addBearerAuth() // enable JWT token usage
    .addTag("Device")
    .addTag("Login")
    .addTag("DigitalID")
    .addTag("Vessels")
    .addTag("Search")
    .addTag("Borang LPI")
    .addTag("Appointment")
    .addTag("Borang Permohonan")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Docs at http://localhost:3000/api



  await app.listen(process.env.PORT || 3000, process.env.HOST || '0.0.0.0');
}
bootstrap();
