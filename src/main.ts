import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './core/filter/http-exception/http-exception.filter'
import { TransformInterceptor } from './core/interceptor/transform/transform.interceptor'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api') // 设置全局路由前缀
	app.useGlobalInterceptors(new TransformInterceptor()) // 注册全局成功的过滤器
	app.useGlobalFilters(new HttpExceptionFilter()) // 注册全局错误的过滤器
	await app.listen(3000)
}
bootstrap()
