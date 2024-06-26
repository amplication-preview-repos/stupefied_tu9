import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompetitorService } from "./competitor.service";
import { CompetitorGrpcControllerBase } from "./base/competitor.grpc.controller.base";

@swagger.ApiTags("competitors")
@common.Controller("competitors")
export class CompetitorGrpcController extends CompetitorGrpcControllerBase {
  constructor(protected readonly service: CompetitorService) {
    super(service);
  }
}
