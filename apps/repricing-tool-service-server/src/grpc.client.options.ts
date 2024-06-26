import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["product", "competitor", "performancereport", "repricingrule", "user"],
    protoPath: [
      "src/product/product.proto",
      "src/competitor/competitor.proto",
      "src/performancereport/performancereport.proto",
      "src/repricingrule/repricingrule.proto",
      "src/user/user.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
