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

import { DeleteResourceShareRequest, DeleteResourceShareResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteResourceShareCommand,
  serializeAws_restJson1DeleteResourceShareCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

export interface DeleteResourceShareCommandInput extends DeleteResourceShareRequest {}
export interface DeleteResourceShareCommandOutput extends DeleteResourceShareResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, DeleteResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, DeleteResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new DeleteResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourceShareCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 */
export class DeleteResourceShareCommand extends $Command<
  DeleteResourceShareCommandInput,
  DeleteResourceShareCommandOutput,
  RAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteResourceShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteResourceShareCommandInput, DeleteResourceShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "DeleteResourceShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteResourceShareRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteResourceShareResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteResourceShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteResourceShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteResourceShareCommandOutput> {
    return deserializeAws_restJson1DeleteResourceShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}