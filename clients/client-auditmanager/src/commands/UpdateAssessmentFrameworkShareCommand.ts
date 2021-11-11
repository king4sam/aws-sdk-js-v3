import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { UpdateAssessmentFrameworkShareRequest, UpdateAssessmentFrameworkShareResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAssessmentFrameworkShareCommand,
  serializeAws_restJson1UpdateAssessmentFrameworkShareCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateAssessmentFrameworkShareCommandInput extends UpdateAssessmentFrameworkShareRequest {}
export interface UpdateAssessmentFrameworkShareCommandOutput
  extends UpdateAssessmentFrameworkShareResponse,
    __MetadataBearer {}

/**
 * <p> Updates a share request for a custom framework in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateAssessmentFrameworkShareCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateAssessmentFrameworkShareCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const command = new UpdateAssessmentFrameworkShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssessmentFrameworkShareCommandInput} for command's `input` shape.
 * @see {@link UpdateAssessmentFrameworkShareCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 */
export class UpdateAssessmentFrameworkShareCommand extends $Command<
  UpdateAssessmentFrameworkShareCommandInput,
  UpdateAssessmentFrameworkShareCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAssessmentFrameworkShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAssessmentFrameworkShareCommandInput, UpdateAssessmentFrameworkShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "UpdateAssessmentFrameworkShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAssessmentFrameworkShareRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssessmentFrameworkShareResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateAssessmentFrameworkShareCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAssessmentFrameworkShareCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAssessmentFrameworkShareCommandOutput> {
    return deserializeAws_restJson1UpdateAssessmentFrameworkShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}