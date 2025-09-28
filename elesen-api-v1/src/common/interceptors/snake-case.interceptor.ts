// import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// function toSnakeCase(str: string): string {
//   return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
// }

// class SnakeCaseNamingStrategy {
//   toPlain(data: any): any {
//     if (data && typeof data === 'object' && !Array.isArray(data)) {
//       const result = {};
//       for (const key in data) {
//         if (data.hasOwnProperty(key)) {
//           result[toSnakeCase(key)] = this.toPlain(data[key]);
//         }
//       }
//       return result;
//     } else if (Array.isArray(data)) {
//       return data.map(item => this.toPlain(item));
//     }
//     return data;
//   }
// }

// @Injectable()
// export class SnakeCaseInterceptor implements NestInterceptor {
//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
//     return next.handle().pipe(
//       map(data => {
//         const strategy = new SnakeCaseNamingStrategy();
//         return strategy.toPlain(data);
//       }),
//     );
//   }
// }