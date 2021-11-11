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

import { DisassociateFileSystemInput, DisassociateFileSystemOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateFileSystemCommand,
  serializeAws_json1_1DisassociateFileSystemCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface DisassociateFileSystemCommandInput extends DisassociateFileSystemInput {}
export interface DisassociateFileSystemCommandOutput extends DisassociateFileSystemOutput, __MetadataBearer {}

/**
 * <p>Disassociates an Amazon FSx file system from the specified gateway. After the
 *          disassociation process finishes, the gateway can no longer access the Amazon FSx
 *          file system. This operation is only supported in the FSx File Gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DisassociateFileSystemCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DisassociateFileSystemCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DisassociateFileSystemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateFileSystemCommandInput} for command's `input` shape.
 * @see {@link DisassociateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class DisassociateFileSystemCommand extends $Command<
  DisassociateFileSystemCommandInput,
  DisassociateFileSystemCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateFileSystemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateFileSystemCommandInput, DisassociateFileSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DisassociateFileSystemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateFileSystemInput.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateFileSystemOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateFileSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateFileSystemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateFileSystemCommandOutput> {
    return deserializeAws_json1_1DisassociateFileSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}