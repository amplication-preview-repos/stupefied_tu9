import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CompetitorService } from "./competitor.service";
import { CompetitorControllerBase } from "./base/competitor.controller.base";

@swagger.ApiTags("competitors")
@common.Controller("competitors")
export class CompetitorController extends CompetitorControllerBase {
  constructor(
    protected readonly service: CompetitorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
