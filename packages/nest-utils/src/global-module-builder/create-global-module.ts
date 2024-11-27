import type { DynamicModule, Provider } from '@nestjs/common';
import { ConfigurableModuleBuilder, Module } from '@nestjs/common';
import { uid } from 'uid';

const DEFAULT_FACTORY_CLASS_METHOD_KEY = 'create';

export function createGlobalModule<
    TModuleOptions,
    TProviderClass,
    TFactoryClassMethodKey extends string = typeof DEFAULT_FACTORY_CLASS_METHOD_KEY,
>(
    providerClass: new (options: TModuleOptions) => TProviderClass,
    factoryClassMethodKey?: TFactoryClassMethodKey,
) {
    const optionsInjectionToken = uid(21);
    const providerInjectionToken = uid(21);

    const {
        ConfigurableModuleClass,
        OPTIONS_TYPE: _OPTIONS_TYPE,
        ASYNC_OPTIONS_TYPE: _ASYNC_OPTIONS_TYPE,
    } = new ConfigurableModuleBuilder<TModuleOptions, 'forRoot'>({
        optionsInjectionToken,
    })
        .setClassMethodName('forRoot')
        .setFactoryMethodName(factoryClassMethodKey ?? DEFAULT_FACTORY_CLASS_METHOD_KEY)
        .setExtras({}, (definition) => {
            const provider: Provider = {
                provide: providerInjectionToken,
                inject: [optionsInjectionToken],
                useFactory: (options: TModuleOptions) => new providerClass(options),
            };

            return {
                ...definition,
                global: true,
                providers: [...(definition.providers ?? []), provider],
                exports: [...(definition.exports ?? []), provider],
            };
        })
        .build();

    @Module({})
    class CoreModule extends ConfigurableModuleClass {}

    @Module({})
    class GlobalModule {
        public static forRoot(options: typeof _OPTIONS_TYPE): DynamicModule {
            const providers: Provider[] = [
                {
                    provide: providerClass,
                    useExisting: providerInjectionToken,
                },
            ];

            return {
                module: GlobalModule,
                imports: [CoreModule.forRoot(options)],
                providers,
                exports: providers,
            };
        }

        public static forRootAsync(options: typeof _ASYNC_OPTIONS_TYPE): DynamicModule {
            const providers: Provider[] = [
                {
                    provide: providerClass,
                    useExisting: providerInjectionToken,
                },
            ];

            return {
                module: GlobalModule,
                imports: [CoreModule.forRootAsync(options)],
                providers,
                exports: providers,
            };
        }

        public static forFeature(): DynamicModule {
            const providers: Provider[] = [
                {
                    provide: providerClass,
                    useExisting: providerInjectionToken,
                },
            ];

            return {
                module: GlobalModule,
                providers,
                exports: providers,
            };
        }
    }

    return { GlobalModule };
}
