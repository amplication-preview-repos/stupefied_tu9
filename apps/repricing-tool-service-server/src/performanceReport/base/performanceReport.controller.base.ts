/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PerformanceReportService } from "../performanceReport.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PerformanceReportCreateInput } from "./PerformanceReportCreateInput";
import { PerformanceReport } from "./PerformanceReport";
import { PerformanceReportFindManyArgs } from "./PerformanceReportFindManyArgs";
import { PerformanceReportWhereUniqueInput } from "./PerformanceReportWhereUniqueInput";
import { PerformanceReportUpdateInput } from "./PerformanceReportUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PerformanceReportControllerBase {
  constructor(
    protected readonly service: PerformanceReportService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PerformanceReport })
  @nestAccessControl.UseRoles({
    resource: "PerformanceReport",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPerformanceReport(
    @common.Body() data: PerformanceReportCreateInput
  ): Promise<PerformanceReport> {
    return await this.service.createPerformanceReport({
      data: {
        ...data,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,
      },
      select: {
        competitorAnalysis: true,
        createdAt: true,
        id: true,
        pricingHistory: true,

        product: {
          select: {
            id: true,
          },
        },

        sales: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PerformanceReport] })
  @ApiNestedQuery(PerformanceReportFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PerformanceReport",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async performanceReports(
    @common.Req() request: Request
  ): Promise<PerformanceReport[]> {
    const args = plainToClass(PerformanceReportFindManyArgs, request.query);
    return this.service.performanceReports({
      ...args,
      select: {
        competitorAnalysis: true,
        createdAt: true,
        id: true,
        pricingHistory: true,

        product: {
          select: {
            id: true,
          },
        },

        sales: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PerformanceReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PerformanceReport",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async performanceReport(
    @common.Param() params: PerformanceReportWhereUniqueInput
  ): Promise<PerformanceReport | null> {
    const result = await this.service.performanceReport({
      where: params,
      select: {
        competitorAnalysis: true,
        createdAt: true,
        id: true,
        pricingHistory: true,

        product: {
          select: {
            id: true,
          },
        },

        sales: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PerformanceReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PerformanceReport",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePerformanceReport(
    @common.Param() params: PerformanceReportWhereUniqueInput,
    @common.Body() data: PerformanceReportUpdateInput
  ): Promise<PerformanceReport | null> {
    try {
      return await this.service.updatePerformanceReport({
        where: params,
        data: {
          ...data,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,
        },
        select: {
          competitorAnalysis: true,
          createdAt: true,
          id: true,
          pricingHistory: true,

          product: {
            select: {
              id: true,
            },
          },

          sales: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PerformanceReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PerformanceReport",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePerformanceReport(
    @common.Param() params: PerformanceReportWhereUniqueInput
  ): Promise<PerformanceReport | null> {
    try {
      return await this.service.deletePerformanceReport({
        where: params,
        select: {
          competitorAnalysis: true,
          createdAt: true,
          id: true,
          pricingHistory: true,

          product: {
            select: {
              id: true,
            },
          },

          sales: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
