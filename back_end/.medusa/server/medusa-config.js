"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
(0, utils_1.loadEnv)(process.env.NODE_ENV || "development", process.cwd());
module.exports = (0, utils_1.defineConfig)({
    projectConfig: {
        databaseUrl: process.env.DATABASE_URL,
        http: {
            storeCors: process.env.STORE_CORS || "http://localhost:3000",
            adminCors: process.env.ADMIN_CORS || "http://localhost:9000",
            authCors: process.env.AUTH_CORS || "http://localhost:9000",
            jwtSecret: process.env.JWT_SECRET || "supersecret_dev_only_change_in_prod",
            cookieSecret: process.env.COOKIE_SECRET || "supersecret_dev_only_change_in_prod",
        }
    },
    modules: [
        {
            resolve: "@medusajs/medusa/cache-redis",
            options: {
                redisUrl: process.env.REDIS_URL,
            },
        },
        {
            resolve: "@medusajs/medusa/workflow-engine-redis",
            options: {
                redisUrl: process.env.REDIS_URL,
            },
        },
        {
            resolve: "@medusajs/medusa/file",
            options: {
                provider: "cloudinary",
                options: {
                    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
                    api_key: process.env.CLOUDINARY_API_KEY,
                    api_secret: process.env.CLOUDINARY_API_SECRET,
                    upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET || "ml_default",
                },
            },
        },
        {
            resolve: "@medusajs/medusa/notification",
            options: {
                provider: "sendgrid",
                options: {
                    api_key: process.env.SENDGRID_API_KEY,
                    from: process.env.SENDGRID_FROM_EMAIL,
                },
            },
        },
        {
            resolve: "@medusajs/medusa/payment",
            options: {
                providers: [
                    {
                        resolve: "@medusajs/medusa/payment-stripe",
                        id: "stripe",
                        options: {
                            api_key: process.env.STRIPE_API_KEY,
                            webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
                            capture: true,
                            automatic_payment_methods: true,
                        },
                    },
                ],
            },
        },
        {
            resolve: "./src/modules/try-on",
        },
        {
            resolve: "./src/modules/measurements",
        },
    ],
    plugins: [],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkdXNhLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21lZHVzYS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBaUU7QUFFakUsSUFBQSxlQUFPLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0FBRTdELE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBQSxvQkFBWSxFQUFDO0lBQzVCLGFBQWEsRUFBRTtRQUNiLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7UUFDckMsSUFBSSxFQUFFO1lBQ0osU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLHVCQUF1QjtZQUM1RCxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksdUJBQXVCO1lBQzVELFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSx1QkFBdUI7WUFDMUQsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLHFDQUFxQztZQUMxRSxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUkscUNBQXFDO1NBQ2pGO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUDtZQUNFLE9BQU8sRUFBRSw4QkFBOEI7WUFDdkMsT0FBTyxFQUFFO2dCQUNQLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVM7YUFDaEM7U0FDRjtRQUNEO1lBQ0UsT0FBTyxFQUFFLHdDQUF3QztZQUNqRCxPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUzthQUNoQztTQUNGO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsdUJBQXVCO1lBQ2hDLE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsT0FBTyxFQUFFO29CQUNQLFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQjtvQkFDN0MsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCO29CQUN2QyxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUI7b0JBQzdDLGFBQWEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixJQUFJLFlBQVk7aUJBQ3BFO2FBQ0Y7U0FDRjtRQUNEO1lBQ0UsT0FBTyxFQUFFLCtCQUErQjtZQUN4QyxPQUFPLEVBQUU7Z0JBQ1AsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0I7b0JBQ3JDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQjtpQkFDdEM7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsMEJBQTBCO1lBQ25DLE9BQU8sRUFBRTtnQkFDUCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlDQUFpQzt3QkFDMUMsRUFBRSxFQUFFLFFBQVE7d0JBQ1osT0FBTyxFQUFFOzRCQUNQLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7NEJBQ25DLGNBQWMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQjs0QkFDakQsT0FBTyxFQUFFLElBQUk7NEJBQ2IseUJBQXlCLEVBQUUsSUFBSTt5QkFDaEM7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsc0JBQXNCO1NBQ2hDO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsNEJBQTRCO1NBQ3RDO0tBQ0Y7SUFDRCxPQUFPLEVBQUUsRUFBRTtDQUNaLENBQUMsQ0FBQSJ9